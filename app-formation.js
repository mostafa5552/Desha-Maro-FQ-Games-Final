let selectedOfflineType = 'quiz';

function selectOfflineType(type) {
    selectedOfflineType = type;
    const quizBtn = document.getElementById('type-quiz-btn');
    const formBtn = document.getElementById('type-form-btn');
    if (quizBtn && formBtn) {
        if (type === 'quiz') {
            quizBtn.style.background = 'linear-gradient(135deg,#cc0000,#8b0000)';
            quizBtn.style.borderColor = '#ff1a1a';
            formBtn.style.background = 'linear-gradient(135deg,#333,#111)';
            formBtn.style.borderColor = '#555';
        } else {
            formBtn.style.background = 'linear-gradient(135deg,#cc0000,#8b0000)';
            formBtn.style.borderColor = '#ff1a1a';
            quizBtn.style.background = 'linear-gradient(135deg,#333,#111)';
            quizBtn.style.borderColor = '#555';
        }
    }
    showToast(type === 'quiz' ? 'اخترت: أسئلة كروية' : 'اخترت: كوّن تشكيلتك');
}

function startWithSelectedType(difficulty) {
    if (selectedOfflineType === 'formation') {
        startFormationGame(difficulty);
    } else {
        startOfflineGame(difficulty);
    }
}

function startFormationGame(difficulty) {
    showLoading('جاري تحضير المزاد...');
    GAME_STATE.currentOpponent = createAIOpponent(difficulty);
    GAME_STATE.gameMode = 'offline';
    GAME_STATE.gameType = 'formation';
    GAME_STATE.currentMatch = {
        playerTeam: [],
        aiTeam: [],
        playerBudget: GAME_CONFIG.auction.budget,
        aiBudget: GAME_CONFIG.auction.budget,
        currentPositionIndex: 0,
        difficulty: difficulty
    };
    setTimeout(() => { hideLoading(); startFormationAuction(); }, 1000);
}

function startFormationAuction() {
    GAME_STATE.currentMatch.currentPositionIndex = 0;
    nextFormationPosition();
}

function calculateAIMaxBid() {
    const m = GAME_STATE.currentMatch;
    const opp = GAME_STATE.currentOpponent;
    const remainingPositions = FORMATION_POSITIONS.length - m.currentPositionIndex;

    if (remainingPositions <= 1) return Math.floor(m.aiBudget * 0.9);

    const reservePerPosition = 8 + (opp.difficulty === 'hard' ? 5 : opp.difficulty === 'medium' ? 3 : 1);
    const maxAvailable = m.aiBudget - (reservePerPosition * (remainingPositions - 1));

    let aggressiveness;
    if (opp.difficulty === 'easy') aggressiveness = 0.7;
    else if (opp.difficulty === 'medium') aggressiveness = 0.85;
    else aggressiveness = 1.0;

    return Math.floor(Math.max(0, maxAvailable) * aggressiveness);
}

function nextFormationPosition() {
    const m = GAME_STATE.currentMatch;
    if (m.currentPositionIndex >= FORMATION_POSITIONS.length) {
        startFormationSimulation();
        return;
    }
    const pos = FORMATION_POSITIONS[m.currentPositionIndex];
    const opp = GAME_STATE.currentOpponent;

    const playersInPosition = PLAYERS_DB.filter(p => {
        const fame = PLAYER_FAME[p.name] || 3;
        if (fame < opp.fameRange[0] || fame > opp.fameRange[1]) return false;
        if (pos.id === 'gk') return p.position === 'حارس مرمى';
        if (pos.id === 'def') return p.position === 'مدافع';
        if (pos.id === 'att') return p.position === 'مهاجم';
        if (pos.id === 'mid1' || pos.id === 'mid2') return p.position === 'وسط';
        return true;
    });

    const pickFrom = playersInPosition.length > 0 ? playersInPosition : PLAYERS_DB;
    const player = pickFrom[Math.floor(Math.random() * pickFrom.length)];

    GAME_STATE.roundData.formation = {
        position: pos,
        player: player,
        basePrice: 1,
        currentBid: 1,
        currentBidder: 'none',
        finished: false
    };
    renderFormationAuctionUI();
}

function renderFormationAuctionUI() {
    const m = GAME_STATE.currentMatch;
    const f = GAME_STATE.roundData.formation;
    const pos = f.position;
    const opp = GAME_STATE.currentOpponent;

    createScreen('game-area-screen', '<div style="padding:15px;min-height:100vh;display:flex;flex-direction:column;gap:12px;max-width:520px;margin:0 auto;padding-top:20px">' +
        '<div style="display:flex;justify-content:space-between;background:rgba(0,0,0,0.85);border:2px solid #cc0000;border-radius:12px;padding:10px">' +
            '<div style="text-align:center;flex:1"><div style="color:#ff3333;font-size:10px">💰 ميزانيتك</div><div style="color:#fff;font-size:15px;font-weight:900">' + m.playerBudget + 'M</div></div>' +
            '<div style="text-align:center;flex:1;border-right:1px solid rgba(204,0,0,0.3);border-left:1px solid rgba(204,0,0,0.3)"><div style="color:#ffd700;font-size:10px">🎯 المركز</div><div style="color:#fff;font-size:14px;font-weight:900">' + (m.currentPositionIndex + 1) + '/' + FORMATION_POSITIONS.length + '</div></div>' +
            '<div style="text-align:center;flex:1"><div style="color:#888;font-size:10px">💰 ' + opp.username + '</div><div style="color:#fff;font-size:15px;font-weight:900">' + m.aiBudget + 'M</div></div>' +
        '</div>' +
        '<div style="background:linear-gradient(135deg,#1a0000,#000);border:2px solid #cc0000;border-radius:18px;padding:15px;text-align:center">' +
            '<p style="color:#fff;font-size:16px;font-weight:900;margin-bottom:12px">' + pos.icon + ' ' + pos.name + '</p>' +
            '<div style="background:rgba(0,0,0,0.6);border-radius:12px;padding:12px;margin-bottom:12px">' +
                '<p style="color:#ffd700;font-size:11px;margin-bottom:4px">اللاعب المعروض:</p>' +
                '<p style="color:#fff;font-size:19px;font-weight:900">' + f.player.name + '</p>' +
                '<p style="color:#ccc;font-size:12px;margin-top:4px">' + f.player.nationality + ' • ' + f.player.position + '</p>' +
                '<p style="color:#888;font-size:10px;margin-top:2px">' + f.player.category + '</p>' +
            '</div>' +
            '<div style="background:rgba(204,0,0,0.2);border-radius:12px;padding:10px;margin-bottom:10px">' +
                '<p style="color:#ccc;font-size:11px">💰 السعر الحالي:</p>' +
                '<p style="color:#ffd700;font-size:24px;font-weight:900">' + f.currentBid + 'M</p>' +
                (f.currentBidder !== 'none' ? '<p style="color:' + (f.currentBidder === 'player' ? '#00c853' : '#ff1744') + ';font-size:12px;margin-top:3px">آخر مزايد: ' + (f.currentBidder === 'player' ? '✅ انت' : '🤖 ' + opp.username) + '</p>' : '<p style="color:#888;font-size:11px">مفيش مزايدات لسه</p>') +
            '</div>' +
            '<div style="display:flex;gap:6px;margin-bottom:8px">' +
                '<button class="btn-primary" onclick="bidFormation(1)" style="flex:1;padding:10px;font-size:13px">+1M</button>' +
                '<button class="btn-primary" onclick="bidFormation(5)" style="flex:1;padding:10px;font-size:13px">+5M</button>' +
                '<button class="btn-primary" onclick="bidFormation(10)" style="flex:1;padding:10px;font-size:13px">+10M</button>' +
            '</div>' +
            '<button class="btn-primary" onclick="takeFormationPlayer()" style="background:linear-gradient(135deg,#00c853,#008000);padding:12px;font-size:14px;margin-bottom:6px">✅ خده خلاص (' + f.currentBid + 'M)</button>' +
            '<button class="btn-back" onclick="passFormationPlayer()" style="width:100%;font-size:13px;padding:10px">⏭️ اسحب من اللاعب</button>' +
        '</div>' +
        '<div style="background:rgba(0,0,0,0.7);border:1px solid #cc0000;border-radius:10px;padding:10px;font-size:11px;color:#ccc"><b style="color:#ff3333">⚽ فريقك (' + m.playerTeam.length + '):</b> ' + (m.playerTeam.length > 0 ? m.playerTeam.map(p => p.name).join(' • ') : 'فاضي') + '</div>' +
        '<div style="background:rgba(0,0,0,0.7);border:1px solid #666;border-radius:10px;padding:10px;font-size:11px;color:#ccc"><b style="color:#888">🤖 فريق الخصم (' + m.aiTeam.length + '):</b> ' + (m.aiTeam.length > 0 ? m.aiTeam.map(p => p.name).join(' • ') : 'فاضي') + '</div>' +
        '<button class="btn-back" onclick="confirmQuit()" style="margin-top:6px;margin-bottom:20px">← انسحاب</button>' +
        '</div>');
    showScreen('game-area-screen');
}

function bidFormation(amount) {
    const f = GAME_STATE.roundData.formation;
    if (!f || f.finished) return;
    const m = GAME_STATE.currentMatch;
    const newBid = f.currentBid + amount;
    if (newBid > m.playerBudget) { showToast('الميزانية مش كفاية'); return; }
    f.currentBid = newBid;
    f.currentBidder = 'player';
    renderFormationAuctionUI();

    setTimeout(() => {
        if (!f.finished && f.currentBidder === 'player') aiBidFormation();
    }, 1500 + Math.random() * 1500);
}

function aiBidFormation() {
    const f = GAME_STATE.roundData.formation;
    if (!f || f.finished || f.currentBidder === 'ai') return;
    const opp = GAME_STATE.currentOpponent;
    const maxBid = calculateAIMaxBid();

    if (f.currentBid >= maxBid) return;

    let bidChance = opp.difficulty === 'easy' ? 0.5 : (opp.difficulty === 'medium' ? 0.7 : 0.85);
    if (f.currentBid <= 2) bidChance = 0.95;

    if (Math.random() > bidChance) {
        if (f.currentBid < maxBid && Math.random() < 0.4) {
            setTimeout(() => aiBidFormation(), 1500 + Math.random() * 2000);
        }
        return;
    }

    let increment;
    const playerFame = PLAYER_FAME[f.player.name] || 3;
    if (playerFame >= 5) increment = 5 + Math.floor(Math.random() * 3);
    else if (playerFame >= 4) increment = 3 + Math.floor(Math.random() * 3);
    else if (playerFame >= 3) increment = 2 + Math.floor(Math.random() * 2);
    else increment = 1 + Math.floor(Math.random() * 2);
    if (opp.difficulty === 'hard') increment += 2;

    let newBid = f.currentBid + increment;
    if (newBid > maxBid) {
        newBid = Math.floor(maxBid);
        if (newBid <= f.currentBid) return;
    }
    f.currentBid = newBid;
    f.currentBidder = 'ai';
    renderFormationAuctionUI();

    if (Math.random() < 0.5) setTimeout(() => aiBidFormation(), 2000 + Math.random() * 2000);
}

function takeFormationPlayer() {
    const f = GAME_STATE.roundData.formation;
    const m = GAME_STATE.currentMatch;
    if (!f || f.finished) return;

    if (f.currentBidder === 'ai') { showToast('الخصم زايد! زايد انت كمان'); return; }
    if (f.currentBidder === 'none') { f.currentBid = 1; f.currentBidder = 'player'; }
    if (f.currentBid > m.playerBudget) { showToast('الميزانية مش كفاية'); return; }

    f.finished = true;
    m.playerBudget -= f.currentBid;
    m.playerTeam.push({ ...f.player, price: f.currentBid, position: f.position.id });
    showToast('ضفت ' + f.player.name + ' بـ ' + f.currentBid + 'M');
    setTimeout(() => { m.currentPositionIndex++; nextFormationPosition(); }, 1000);
}

function passFormationPlayer() {
    const f = GAME_STATE.roundData.formation;
    const m = GAME_STATE.currentMatch;
    if (!f || f.finished) return;
    f.finished = true;

    if (f.currentBidder === 'none') f.currentBid = 1;
    if (m.aiBudget >= f.currentBid && m.aiTeam.length < FORMATION_POSITIONS.length) {
        m.aiBudget -= f.currentBid;
        m.aiTeam.push({ ...f.player, price: f.currentBid, position: f.position.id });
        showToast('🤖 ' + GAME_STATE.currentOpponent.username + ' خد ' + f.player.name + ' بـ ' + f.currentBid + 'M');
    }
    setTimeout(() => { m.currentPositionIndex++; nextFormationPosition(); }, 1000);
}

function startFormationSimulation() {
    const m = GAME_STATE.currentMatch;
    const playerPower = calculateTeamPower(m.playerTeam);
    const aiPower = calculateTeamPower(m.aiTeam);

    createScreen('game-area-screen', '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:20px;padding:20px;text-align:center">' +
        '<h2 style="color:#ff3333;font-size:22px;text-shadow:0 0 15px #cc0000">⚽ المحاكاة جارية!</h2>' +
        '<div style="display:flex;gap:40px;margin:20px 0">' +
            '<div><div style="font-size:50px">👤</div><p style="color:#ff3333;font-size:18px;font-weight:900">' + playerPower + '</p><p style="color:#888;font-size:11px">قوتك</p></div>' +
            '<div style="font-size:30px;color:#ffd700;font-weight:900;align-self:center">VS</div>' +
            '<div><div style="font-size:50px">🤖</div><p style="color:#fff;font-size:18px;font-weight:900">' + aiPower + '</p><p style="color:#888;font-size:11px">' + GAME_STATE.currentOpponent.username + '</p></div>' +
        '</div>' +
        '<div style="width:100%;max-width:400px;background:#222;height:12px;border-radius:10px;overflow:hidden"><div id="sim-bar" style="background:linear-gradient(90deg,#cc0000,#ff3333);height:100%;width:0%;transition:width 0.5s"></div></div>' +
        '<p id="sim-text" style="color:#ccc;font-size:14px">جاري المحاكاة... 60 ثانية</p>' +
        '</div>');
    showScreen('game-area-screen');

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        const bar = document.getElementById('sim-bar');
        const txt = document.getElementById('sim-text');
        if (bar) bar.style.width = progress + '%';
        if (txt) txt.textContent = 'جاري المحاكاة... ' + Math.round(60 - (progress * 0.6)) + ' ثانية';
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                let winner;
                if (playerPower > aiPower) winner = 'player';
                else if (aiPower > playerPower) winner = 'ai';
                else winner = Math.random() > 0.5 ? 'player' : 'ai';
                finishFormationMatch(winner, playerPower, aiPower);
            }, 500);
        }
    }, 500);
}

function calculateTeamPower(team) {
    let power = 0;
    team.forEach(p => {
        const fame = PLAYER_FAME[p.name] || 3;
        power += fame * 10 + p.price * 0.5;
    });
    if (team.length === 5) power += 20;
    return Math.round(power);
}

function finishFormationMatch(winner, playerPower, aiPower) {
    const user = GAME_STATE.currentUser;
    const won = winner === 'player';

    user.matchesPlayed++;
    if (won) { user.matchesWon++; user.divisionProgress = (user.divisionProgress || 0) + 1; user.totalGoals += playerPower; }
    else { user.matchesLost++; user.totalGoals += aiPower; }
    user.matchHistory = user.matchHistory || [];
    user.matchHistory.push({
        opponent: GAME_STATE.currentOpponent.username,
        playerScore: playerPower,
        aiScore: aiPower,
        won: won,
        type: 'formation',
        timestamp: Date.now()
    });
    if (user.matchHistory.length > 50) user.matchHistory = user.matchHistory.slice(-50);

    const currentDiv = DIVISIONS.find(d => d.id === user.division) || DIVISIONS[0];
    let promoted = false;
    if (user.divisionProgress >= currentDiv.requiredMatches && user.division < 7) {
        user.division++;
        user.divisionProgress = 0;
        promoted = true;
    }
    saveUserData(user.username, user);

    createScreen('game-area-screen', '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:15px;padding:20px;text-align:center">' +
        '<div style="font-size:70px">' + (won ? '🏆' : '😢') + '</div>' +
        '<h2 style="color:' + (won ? '#00c853' : '#ff1744') + ';font-size:26px">' + (won ? 'فزت بالمحاكاة!' : 'خسرت') + '</h2>' +
        '<p style="color:#fff;font-size:22px;font-weight:900">' + playerPower + ' - ' + aiPower + '</p>' +
        '<p style="color:#ccc;font-size:14px">ضد ' + GAME_STATE.currentOpponent.username + '</p>' +
        (promoted ? '<div style="background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;padding:12px 20px;border-radius:12px;font-weight:900;margin-top:10px">🎉 ترقية للديفجن ' + user.division + '!</div>' : '') +
        '<button class="btn-primary" onclick="rematchFormation()" style="max-width:280px;margin-top:20px">🔄 العب تاني</button>' +
        '<button class="btn-back" onclick="backToMenu()">← القائمة الرئيسية</button>' +
        '</div>');
    showScreen('game-area-screen');
}

function rematchFormation() {
    const difficulty = GAME_STATE.currentMatch.difficulty;
    removeScreen('game-area-screen');
    startFormationGame(difficulty);
}

