function pickRandomAIName() {
    return AI_NAMES[Math.floor(Math.random() * AI_NAMES.length)];
}

function pickRandomAvatar() {
    return AI_AVATARS[Math.floor(Math.random() * AI_AVATARS.length)];
}

function pickPlayerForAI(fameRange) {
    const [minFame, maxFame] = fameRange || [3, 5];
    const eligible = PLAYERS_DB.filter(p => {
        const fame = PLAYER_FAME[p.name] !== undefined ? PLAYER_FAME[p.name] : 3;
        return fame >= minFame && fame <= maxFame;
    });
    if (eligible.length === 0) return PLAYERS_DB[Math.floor(Math.random() * PLAYERS_DB.length)];
    return eligible[Math.floor(Math.random() * eligible.length)];
}

function createAIOpponent(difficulty) {
    let fameRange;
    if (difficulty === 'easy') fameRange = [4, 5];
    else if (difficulty === 'medium') fameRange = [3, 4];
    else fameRange = [2, 3];

    return {
        username: pickRandomAIName(),
        avatar: pickRandomAvatar(),
        difficulty: difficulty,
        fameRange: fameRange,
        correctAnswerChance: difficulty === 'easy' ? 0.4 : (difficulty === 'medium' ? 0.65 : 0.85),
        answerSpeedMs: difficulty === 'easy' ? 8000 : (difficulty === 'medium' ? 5000 : 3000)
    };
}

function openOnline() {
    showToast('اللعب الأونلاين هيتفعل قريباً!');
}

function openOffline() {
    showScreen('offline-screen');
}

function openDivisions() {
    createScreen('divisions-screen', buildDivisionsHTML());
    showScreen('divisions-screen');
}

function buildDivisionsHTML() {
    const user = GAME_STATE.currentUser;
    let html = '<div class="page-header"><button class="btn-back" onclick="backToMenu()">← رجوع</button><h2>🏆 الديفجنات</h2></div><div class="offline-container" style="padding-bottom:30px">';

    DIVISIONS.forEach(d => {
        const isCurrent = user.division === d.id;
        const isLocked = d.id > user.division;
        const progress = isCurrent ? (user.divisionProgress || 0) : (isLocked ? 0 : d.requiredMatches);
        const pct = Math.round((progress / d.requiredMatches) * 100);

        let icon, statusText;
        if (isLocked) { icon = '🔒'; statusText = 'مقفول'; }
        else if (isCurrent) { icon = '⚡'; statusText = 'التقدم: ' + progress + '/' + d.requiredMatches; }
        else { icon = '✅'; statusText = 'مكتمل'; }

        let diffLabel = '';
        if (d.aiDifficulty === 'easy') diffLabel = '🟢 سهل';
        else if (d.aiDifficulty === 'medium') diffLabel = '🟡 متوسط';
        else if (d.aiDifficulty === 'hard') diffLabel = '🔴 صعب';
        else if (d.aiDifficulty === 'easy-medium') diffLabel = '🟢🟡 سهل-متوسط';
        else if (d.aiDifficulty === 'medium-hard') diffLabel = '🟡🔴 متوسط-صعب';

        let buttonsHTML = '';
        if (!isLocked) {
            buttonsHTML = '<div style="display:flex;gap:8px;margin-top:10px">' +
                '<button class="btn-primary" onclick="event.stopPropagation();startDivisionMatch(' + d.id + ', \'quiz\')" style="flex:1;padding:10px;font-size:13px;margin:0">❓ أسئلة كروية</button>' +
                '<button class="btn-primary" onclick="event.stopPropagation();startDivisionMatch(' + d.id + ', \'formation\')" style="flex:1;padding:10px;font-size:13px;margin:0;background:linear-gradient(135deg,#333,#111);border-color:#666">⚽ تشكيلة</button>' +
                '</div>';
        }

        html += '<div class="difficulty-btn" style="flex-direction:column;align-items:stretch;opacity:' + (isLocked ? 0.55 : 1) + ';border-color:' + (isCurrent ? '#ff1a1a' : (isLocked ? '#444' : 'rgba(0,200,83,0.5)')) + ';cursor:' + (isLocked ? 'not-allowed' : 'default') + '">' +
            '<div style="display:flex;align-items:center;gap:12px">' +
                '<span class="diff-icon">' + icon + '</span>' +
                '<div style="flex:1">' +
                    '<span class="diff-title">ديفجن ' + d.id + ': ' + d.name + '</span>' +
                    '<span class="diff-desc">' + statusText + ' - ' + d.requiredMatches + ' مباريات</span>' +
                    '<span class="diff-desc" style="color:#ffd700;margin-top:2px">' + diffLabel + '</span>' +
                '</div>' +
            '</div>' +
            (isCurrent ? '<div style="background:#222;height:8px;border-radius:10px;overflow:hidden;margin-top:10px"><div style="background:linear-gradient(90deg,#cc0000,#ff3333);height:100%;width:' + pct + '%;transition:width 0.5s"></div></div>' : '') +
            buttonsHTML +
            '</div>';
    });

    html += '</div>';
    return html;
}

function startDivisionMatch(divisionId, type) {
    const user = GAME_STATE.currentUser;
    const div = DIVISIONS.find(d => d.id === divisionId);
    if (!div) return;
    if (div.id > user.division) { showToast('🔒 الديفجن ده مقفول'); return; }

    let difficulty = 'easy';
    if (div.aiDifficulty === 'medium' || div.aiDifficulty === 'medium-hard') difficulty = 'medium';
    else if (div.aiDifficulty === 'hard') difficulty = 'hard';
    else if (div.aiDifficulty === 'easy-medium') difficulty = Math.random() < 0.5 ? 'easy' : 'medium';

    GAME_STATE.currentDivision = div;

    if (type === 'formation') {
        startFormationGame(difficulty);
    } else {
        startOfflineGame(difficulty);
    }
}

function openStats() {
    const user = GAME_STATE.currentUser;
    const winRate = user.matchesPlayed > 0 ? Math.round((user.matchesWon / user.matchesPlayed) * 100) : 0;
    const div = DIVISIONS.find(d => d.id === user.division) || DIVISIONS[0];
    let historyHTML = '';
    if (user.matchHistory && user.matchHistory.length > 0) {
        const recent = user.matchHistory.slice(-10).reverse();
        recent.forEach(m => {
            const result = m.won ? '✅ فوز' : '❌ خسارة';
            historyHTML += '<div class="stat-box" style="text-align:right;padding:12px">' +
                '<span style="font-size:13px;color:#fff">' + result + ' - ' + m.playerScore + ' : ' + m.aiScore + '</span>' +
                '<span style="font-size:11px;color:#888;display:block">ضد ' + m.opponent + '</span>' +
                '</div>';
        });
    } else {
        historyHTML = '<p style="color:#888;text-align:center;padding:20px">لسه ملعبتش أي مباريات</p>';
    }

    createScreen('stats-screen', '<div class="page-header"><button class="btn-back" onclick="backToMenu()">← رجوع</button><h2>📊 إحصائياتي</h2></div>' +
        '<div class="offline-container" style="padding-bottom:30px">' +
            '<div class="menu-stats" style="grid-template-columns:repeat(2,1fr)">' +
                '<div class="stat-box"><span class="stat-icon">🏆</span><span class="stat-value">' + div.name + '</span><span class="stat-label">الديفجن</span></div>' +
                '<div class="stat-box"><span class="stat-icon">⚽</span><span class="stat-value">' + user.matchesPlayed + '</span><span class="stat-label">مباريات</span></div>' +
                '<div class="stat-box"><span class="stat-icon">✅</span><span class="stat-value">' + user.matchesWon + '</span><span class="stat-label">انتصارات</span></div>' +
                '<div class="stat-box"><span class="stat-icon">❌</span><span class="stat-value">' + user.matchesLost + '</span><span class="stat-label">خسائر</span></div>' +
                '<div class="stat-box"><span class="stat-icon">📈</span><span class="stat-value">' + winRate + '%</span><span class="stat-label">نسبة الفوز</span></div>' +
                '<div class="stat-box"><span class="stat-icon">🥅</span><span class="stat-value">' + user.totalGoals + '</span><span class="stat-label">إجمالي الأهداف</span></div>' +
            '</div>' +
            '<h3 style="margin-top:20px;font-size:16px;color:#fff;text-align:center">📜 آخر المباريات</h3>' +
            '<div class="menu-stats" style="grid-template-columns:1fr">' + historyHTML + '</div>' +
        '</div>');
    showScreen('stats-screen');
}

function openFriends() {
    const user = GAME_STATE.currentUser;
    let friendsHTML = '';
    if (user.friends && user.friends.length > 0) {
        user.friends.forEach(f => {
            friendsHTML += '<div class="difficulty-btn" style="flex-direction:column;align-items:stretch;padding:12px;cursor:default">' +
                '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">' +
                    '<span style="font-size:24px">👤</span>' +
                    '<span style="color:#fff;font-size:15px;font-weight:700;flex:1">' + f + '</span>' +
                '</div>' +
                '<div style="display:flex;gap:6px">' +
                    '<button class="btn-primary" onclick="playWithFriend(\'' + f + '\', \'quiz\')" style="flex:1;padding:8px;font-size:12px;margin:0">❓ أسئلة</button>' +
                    '<button class="btn-primary" onclick="playWithFriend(\'' + f + '\', \'formation\')" style="flex:1;padding:8px;font-size:12px;margin:0;background:linear-gradient(135deg,#333,#111);border-color:#666">⚽ تشكيلة</button>' +
                '</div>' +
                '</div>';
        });
    } else {
        friendsHTML = '<p style="color:#888;text-align:center;padding:20px">لسه مضفتش أصدقاء</p>';
    }

    createScreen('friends-screen', '<div class="page-header"><button class="btn-back" onclick="backToMenu()">← رجوع</button><h2>👥 الأصدقاء</h2></div>' +
        '<div class="offline-container" style="padding-bottom:30px">' +
            '<div class="input-group"><label>🔍 ابحث عن صديق</label><input type="text" id="friend-search" placeholder="اكتب اسم المستخدم..."></div>' +
            '<button class="btn-primary" onclick="searchFriend()">🔎 بحث</button>' +
            '<div id="search-result" style="margin-top:15px"></div>' +
            '<h3 style="margin-top:20px;font-size:16px;color:#fff;text-align:center">قائمة أصدقائي</h3>' +
            '<div style="display:flex;flex-direction:column;gap:10px">' + friendsHTML + '</div>' +
        '</div>');
    showScreen('friends-screen');
}

function searchFriend() {
    const input = document.getElementById('friend-search');
    const result = document.getElementById('search-result');
    if (!input || !result) return;
    const username = input.value.trim();
    if (!username) { result.innerHTML = '<p style="color:#ff1744;text-align:center">اكتب اسم المستخدم</p>'; return; }
    const users = getAllUsers();
    if (!users[username]) { result.innerHTML = '<p style="color:#ff1744;text-align:center">❌ مش موجود</p>'; return; }
    if (username === GAME_STATE.currentUser.username) { result.innerHTML = '<p style="color:#ffab00;text-align:center">ده انت 😅</p>'; return; }
    result.innerHTML = '<div class="stat-box" style="text-align:center;padding:15px">' +
        '<span style="color:#fff;font-size:16px">👤 ' + username + '</span>' +
        '<button class="btn-primary" style="margin-top:10px;font-size:14px;padding:10px" onclick="addFriend(\'' + username + '\')">➕ إضافة</button>' +
        '</div>';
}

function addFriend(username) {
    const user = GAME_STATE.currentUser;
    if (!user.friends) user.friends = [];
    if (user.friends.includes(username)) { showToast('موجود بالفعل'); return; }
    user.friends.push(username);
    saveUserData(user.username, user);
    showToast('تمت الإضافة');
    openFriends();
}

function playWithFriend(friendUsername, type) {
    const users = getAllUsers();
    if (!users[friendUsername]) { showToast('الصديق مش موجود'); return; }
    showToast('جاري تحديك لـ ' + friendUsername + '...');

    const friendData = users[friendUsername];
    const friendDivision = DIVISIONS.find(d => d.id === friendData.division) || DIVISIONS[0];

    GAME_STATE.currentOpponent = {
        username: friendUsername,
        avatar: '👤',
        difficulty: 'medium',
        fameRange: friendDivision.fameRange || [3, 4],
        correctAnswerChance: 0.65,
        answerSpeedMs: 5000,
        isFriend: true
    };
    GAME_STATE.gameMode = 'friend';

    if (type === 'formation') {
        startFormationGameWithOpponent('medium');
    } else {
        startQuizWithOpponent('medium');
    }
}

function startQuizWithOpponent(difficulty) {
    showLoading('جاري تجهيز المباراة...');
    GAME_STATE.gameType = 'quiz';
    GAME_STATE.currentMatch = {
        playerScore: 0,
        aiScore: 0,
        currentRound: 1,
        difficulty: difficulty
    };
    setTimeout(() => { hideLoading(); showMatchIntro(); }, 800);
}

function startFormationGameWithOpponent(difficulty) {
    showLoading('جاري تجهيز المزاد...');
    GAME_STATE.gameType = 'formation';
    GAME_STATE.currentMatch = {
        playerTeam: [],
        aiTeam: [],
        playerBudget: GAME_CONFIG.auction.budget,
        aiBudget: GAME_CONFIG.auction.budget,
        currentPositionIndex: 0,
        difficulty: difficulty
    };
    setTimeout(() => { hideLoading(); startFormationAuction(); }, 800);
}

function openSettings() {
    const user = GAME_STATE.currentUser;
    createScreen('settings-screen', '<div class="page-header"><button class="btn-back" onclick="backToMenu()">← رجوع</button><h2>⚙️ الإعدادات</h2></div>' +
        '<div class="offline-container">' +
            '<div class="stat-box" style="padding:15px;display:flex;justify-content:space-between;align-items:center">' +
                '<span style="color:#fff">🔊 الصوت</span>' +
                '<input type="checkbox" id="settings-sound" ' + (user.settings.sound ? 'checked' : '') + ' onchange="toggleSetting(\'sound\', this.checked)">' +
            '</div>' +
            '<div class="stat-box" style="padding:15px;display:flex;justify-content:space-between;align-items:center">' +
                '<span style="color:#fff">🔔 الإشعارات</span>' +
                '<input type="checkbox" id="settings-notifications" ' + (user.settings.notifications ? 'checked' : '') + ' onchange="toggleSetting(\'notifications\', this.checked)">' +
            '</div>' +
            '<button class="btn-primary" style="background:linear-gradient(135deg,#8b0000,#cc0000);margin-top:30px" onclick="resetAccount()">🗑️ حذف الحساب</button>' +
        '</div>');
    showScreen('settings-screen');
}

function toggleSetting(key, value) {
    const user = GAME_STATE.currentUser;
    user.settings[key] = value;
    saveUserData(user.username, user);
}

function resetAccount() {
    if (!confirm('متأكد؟ هتفقد كل تقدمك!')) return;
    if (!confirm('تأكيد نهائي؟')) return;
    const username = GAME_STATE.currentUser.username;
    const users = getAllUsers();
    delete users[username];
    saveAllUsers(users);
    clearCurrentUser();
    GAME_STATE.currentUser = null;
    showToast('تم حذف الحساب');
    setTimeout(() => showScreen('register-screen'), 500);
}

function openTutorial() {
    createScreen('tutorial-screen', '<div class="page-header"><button class="btn-back" onclick="backToMenu()">← رجوع</button><h2>📖 شرح اللعبة</h2></div>' +
        '<div class="offline-container" style="padding-bottom:40px">' +
            '<div class="stat-box" style="text-align:right;padding:15px"><h3 style="color:#ff3333;margin-bottom:8px">🎮 إيه هي DESHA & MARO؟</h3><p style="color:#ccc;font-size:13px;line-height:1.7">لعبة كروية عربية بتعتمد على معلوماتك عن كرة القدم، وفيها وضعين أساسيين: <b>أسئلة كروية</b> و <b>كوّن تشكيلتك</b>.</p></div>' +
            '<div class="stat-box" style="text-align:right;padding:15px"><h3 style="color:#ff3333;margin-bottom:8px">❓ وضع الأسئلة الكروية</h3><p style="color:#ccc;font-size:13px;line-height:1.8"><b style="color:#ffd700">الجولة 1 - بيانات لاعب:</b><br>هتشوف جنسية + مركز + بطولة/دوري، خمن اللاعب في 15 ثانية.<br><br><b style="color:#ffd700">الجولة 2 - سؤال عشوائي:</b><br>مين فاز ببطولة معينة في سنة معينة؟ 5 فرص.<br><br><b style="color:#ffd700">الجولة 3 - مزاد لاعبين:</b><br>اكتب أكبر عدد من اللاعبين اللي حققوا إنجاز معين في 30 ثانية.<br><br><b style="color:#ffd700">الجولة 4 - من هو لاعبي؟:</b><br>اسأل أسئلة نعم/لا وخمن اللاعب.</p></div>' +
            '<div class="stat-box" style="text-align:right;padding:15px"><h3 style="color:#ff3333;margin-bottom:8px">⚽ وضع كوّن تشكيلتك</h3><p style="color:#ccc;font-size:13px;line-height:1.8">100 مليون دولار - فريق من 5 لاعبين.<br>زايد مع الخصم على لاعبين. كل لاعب يبدأ بـ <b>1 مليون</b>.<br>المراكز: <b>حارس، مدافع، 2 وسط، مهاجم</b>.<br>بعد المزاد: محاكاة 60 ثانية.</p></div>' +
            '<div class="stat-box" style="text-align:right;padding:15px"><h3 style="color:#ff3333;margin-bottom:8px">🏆 الديفجنات السبعة</h3><p style="color:#ccc;font-size:13px;line-height:1.8">1. هاوي (10) - سهل<br>2. نصف محترف (10) - سهل<br>3. محترف (10) - سهل/متوسط<br>4. متميز (15) - متوسط<br>5. عالمي (15) - متوسط<br>6. مثقف (20) - متوسط/صعب<br>7. مختم اللعبة (25) - صعب 🔥</p></div>' +
            '<button class="btn-primary" onclick="backToMenu()" style="margin-top:20px">🎮 يلا نلعب!</button>' +
        '</div>');
    showScreen('tutorial-screen');
}

