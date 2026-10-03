function startOfflineGame(difficulty) {
    showLoading('جاري تحضير المباراة...');
    GAME_STATE.currentOpponent = createAIOpponent(difficulty);
    GAME_STATE.gameMode = 'offline';
    GAME_STATE.gameType = 'quiz';
    GAME_STATE.currentMatch = {
        playerScore: 0,
        aiScore: 0,
        currentRound: 1,
        difficulty: difficulty
    };
    setTimeout(() => { hideLoading(); showMatchIntro(); }, 1000);
}

function showMatchIntro() {
    const opp = GAME_STATE.currentOpponent;
    const me = GAME_STATE.currentUser;
    createScreen('game-area-screen', '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;gap:20px;padding:20px">' +
        '<h2 style="color:#fff;font-size:22px;text-align:center;text-shadow:0 0 15px #cc0000">⚽ المباراة على وشك تبدأ!</h2>' +
        '<div style="display:flex;align-items:center;gap:30px;margin:20px 0">' +
            '<div style="text-align:center"><div style="font-size:60px">👤</div><p style="color:#ff3333;font-weight:700;margin-top:8px">' + me.username + '</p></div>' +
            '<div style="font-size:30px;color:#ffd700;font-weight:900">VS</div>' +
            '<div style="text-align:center"><div style="font-size:60px">' + opp.avatar + '</div><p style="color:#fff;font-weight:700;margin-top:8px">' + opp.username + '</p></div>' +
        '</div>' +
        '<p style="color:#ccc;font-size:14px;text-align:center">المستوى: ' + (opp.difficulty === 'easy' ? '🟢 سهل' : opp.difficulty === 'medium' ? '🟡 متوسط' : '🔴 صعب') + '</p>' +
        '<button class="btn-primary" onclick="startQuizMatch()" style="max-width:300px">🎮 ابدأ المباراة</button>' +
        '<button class="btn-back" onclick="backToMenu()" style="margin-top:10px">← انسحاب</button>' +
        '</div>');
    showScreen('game-area-screen');
}

function startQuizMatch() {
    GAME_STATE.currentMatch.currentRound = 1;
    renderQuizHeader();
    renderRound1();
}

function renderQuizHeader() {
    const m = GAME_STATE.currentMatch;
    const me = GAME_STATE.currentUser;
    const opp = GAME_STATE.currentOpponent;
    let header = document.getElementById('quiz-header');
    if (!header) {
        header = document.createElement('div');
        header.id = 'quiz-header';
        header.style.cssText = 'position:fixed;top:0;left:0;width:100%;background:rgba(0,0,0,0.9);border-bottom:2px solid #cc0000;padding:10px;z-index:100;display:flex;justify-content:space-between;align-items:center';
        document.body.appendChild(header);
    }
    header.innerHTML = '<div style="text-align:center;flex:1"><div style="color:#ff3333;font-size:12px">' + me.username + '</div><div style="color:#fff;font-size:20px;font-weight:900">' + m.playerScore + '</div></div>' +
        '<div style="text-align:center;flex:1"><div style="color:#ffd700;font-size:11px">الجولة ' + m.currentRound + '</div><div style="color:#888;font-size:10px">ضد ' + opp.username + '</div></div>' +
        '<div style="text-align:center;flex:1"><div style="color:#888;font-size:12px">' + opp.username + '</div><div style="color:#fff;font-size:20px;font-weight:900">' + m.aiScore + '</div></div>';
}

function updateHeader() { renderQuizHeader(); }

function renderRound1() {
    const m = GAME_STATE.currentMatch;
    m.currentRound = 1;
    updateHeader();

    const opp = GAME_STATE.currentOpponent;
    const player = pickPlayerForAI(opp.fameRange);

    GAME_STATE.roundData.round1 = {
        player: player,
        playerAnswered: false,
        aiAnswered: false,
        finished: false
    };

    createScreen('game-area-screen', '<div style="padding-top:90px;min-height:100vh;display:flex;flex-direction:column;align-items:center;gap:15px;padding-left:15px;padding-right:15px">' +
        '<div style="background:linear-gradient(135deg,#1a0000,#000);border:2px solid #cc0000;border-radius:20px;padding:20px;width:100%;max-width:500px;text-align:center">' +
            '<p style="color:#ffd700;font-size:13px;margin-bottom:15px">🔍 جولة بيانات لاعب</p>' +
            '<div style="background:rgba(0,0,0,0.6);border-radius:12px;padding:15px;margin:15px 0">' +
                '<p style="color:#fff;font-size:15px;margin:8px 0"><b style="color:#ff3333">الجنسية:</b> ' + player.nationality + '</p>' +
                '<p style="color:#fff;font-size:15px;margin:8px 0"><b style="color:#ff3333">المركز:</b> ' + player.position + '</p>' +
                '<p style="color:#fff;font-size:15px;margin:8px 0"><b style="color:#ff3333">البطولة/الدوري:</b> ' + player.category + '</p>' +
            '</div>' +
            '<div id="round1-timer" style="color:#ff3333;font-size:24px;font-weight:900;margin:10px 0">⏱️ 15</div>' +
            '<input type="text" id="round1-answer" placeholder="اكتب اسم اللاعب..." style="width:100%;padding:14px;background:rgba(0,0,0,0.6);border:2px solid #cc0000;border-radius:12px;color:#fff;font-size:15px;font-family:Cairo;text-align:center;outline:none">' +
            '<button class="btn-primary" onclick="submitRound1()" style="margin-top:12px">✅ تأكيد</button>' +
            '<p id="round1-feedback" style="margin-top:10px;font-size:14px;min-height:20px"></p>' +
        '</div>' +
        '<button class="btn-back" onclick="confirmQuit()" style="margin-bottom:20px">← انسحاب</button>' +
        '</div>');
    showScreen('game-area-screen');

    let time = 15;
    GAME_STATE.timerInterval = setInterval(() => {
        time--;
        const el = document.getElementById('round1-timer');
        if (el) el.textContent = '⏱️ ' + time;
        if (time <= 0) { clearInterval(GAME_STATE.timerInterval); endRound1(); }
    }, 1000);

    const aiDelay = opp.answerSpeedMs + Math.random() * 4000;
    GAME_STATE.aiAnswerTimeout = setTimeout(() => {
        if (GAME_STATE.roundData.round1.finished) return;
        if (Math.random() < opp.correctAnswerChance) {
            GAME_STATE.roundData.round1.aiAnswered = true;
            const fb = document.getElementById('round1-feedback');
            if (fb) fb.innerHTML = '<span style="color:#ff3333">🤖 ' + opp.username + ' جاوب صح!</span>';
            setTimeout(endRound1, 800);
        }
    }, aiDelay);

    setTimeout(() => {
        const inp = document.getElementById('round1-answer');
        if (inp) {
            inp.focus();
            inp.addEventListener('keypress', e => { if (e.key === 'Enter') submitRound1(); });
        }
    }, 100);
}

function submitRound1() {
    const r1 = GAME_STATE.roundData.round1;
    if (!r1 || r1.finished || r1.playerAnswered) return;
    const input = document.getElementById('round1-answer');
    if (!input) return;
    const answer = input.value.trim();
    if (!answer) return;

    const correct = normalizeName(answer) === normalizeName(r1.player.name);
    if (correct) {
        r1.playerAnswered = true;
        const fb = document.getElementById('round1-feedback');
        if (fb) fb.innerHTML = '<span style="color:#00c853">✅ صح! ' + r1.player.name + '</span>';
        if (GAME_STATE.timerInterval) clearInterval(GAME_STATE.timerInterval);
        if (GAME_STATE.aiAnswerTimeout) clearTimeout(GAME_STATE.aiAnswerTimeout);
        setTimeout(endRound1, 800);
    } else {
        const fb = document.getElementById('round1-feedback');
        if (fb) fb.innerHTML = '<span style="color:#ff1744">❌ غلط، جرب تاني</span>';
        input.value = '';
    }
}

function endRound1() {
    const r1 = GAME_STATE.roundData.round1;
    if (!r1 || r1.finished) return;
    r1.finished = true;
    if (GAME_STATE.timerInterval) clearInterval(GAME_STATE.timerInterval);
    if (GAME_STATE.aiAnswerTimeout) clearTimeout(GAME_STATE.aiAnswerTimeout);

    if (r1.playerAnswered && !r1.aiAnswered) GAME_STATE.currentMatch.playerScore += 3;
    else if (r1.aiAnswered && !r1.playerAnswered) GAME_STATE.currentMatch.aiScore += 3;
    else if (r1.playerAnswered && r1.aiAnswered) GAME_STATE.currentMatch.aiScore += 3;

    updateHeader();
    setTimeout(() => {
        showToast('اللاعب كان: ' + r1.player.name);
        setTimeout(renderRound2, 1500);
    }, 500);
}

function renderRound2() {
    const m = GAME_STATE.currentMatch;
    m.currentRound = 2;
    updateHeader();

    const tournament = QUIZ_TOURNAMENTS[Math.floor(Math.random() * QUIZ_TOURNAMENTS.length)];
    const yearsWithData = TOURNAMENT_WINNERS[tournament] ? Object.keys(TOURNAMENT_WINNERS[tournament]) : [];
    let year, correctAnswer;
    if (yearsWithData.length > 0) {
        year = yearsWithData[Math.floor(Math.random() * yearsWithData.length)];
        correctAnswer = TOURNAMENT_WINNERS[tournament][year];
    } else {
        year = QUIZ_YEARS[Math.floor(Math.random() * QUIZ_YEARS.length)];
        correctAnswer = 'غير معروف';
    }

    GAME_STATE.roundData.round2 = {
        tournament: tournament,
        year: year,
        correctAnswer: correctAnswer,
        chance: 1,
        playerAnswered: false,
        aiAnswered: false,
        finished: false
    };
    renderRound2UI();
}

function renderRound2UI() {
    const r2 = GAME_STATE.roundData.round2;
    const points = [5, 3, 2, 1, 1][r2.chance - 1] || 1;
    createScreen('game-area-screen', '<div style="padding-top:90px;min-height:100vh;display:flex;flex-direction:column;align-items:center;gap:15px;padding-left:15px;padding-right:15px">' +
        '<div style="background:linear-gradient(135deg,#1a0000,#000);border:2px solid #cc0000;border-radius:20px;padding:20px;width:100%;max-width:500px;text-align:center">' +
            '<p style="color:#ffd700;font-size:13px;margin-bottom:10px">🎯 جولة السؤال العشوائي</p>' +
            '<div style="background:rgba(0,0,0,0.6);border-radius:12px;padding:15px;margin:15px 0">' +
                '<p style="color:#fff;font-size:16px;margin:8px 0">مين فاز بـ <b style="color:#ff3333">' + r2.tournament + '</b></p>' +
                '<p style="color:#fff;font-size:16px;margin:8px 0">في سنة <b style="color:#ff3333">' + r2.year + '</b>؟</p>' +
            '</div>' +
            '<p style="color:#ffd700;font-size:14px">الفرصة ' + r2.chance + ' من 5 - النقاط: ' + points + ' ⚽</p>' +
            '<div id="round2-timer" style="color:#ff3333;font-size:24px;font-weight:900;margin:10px 0">⏱️ 20</div>' +
            '<input type="text" id="round2-answer" placeholder="اكتب اسم الفائز..." style="width:100%;padding:14px;background:rgba(0,0,0,0.6);border:2px solid #cc0000;border-radius:12px;color:#fff;font-size:15px;font-family:Cairo;text-align:center;outline:none">' +
            '<button class="btn-primary" onclick="submitRound2()" style="margin-top:12px">✅ تأكيد</button>' +
            '<p id="round2-feedback" style="margin-top:10px;font-size:14px;min-height:20px"></p>' +
        '</div>' +
        '<button class="btn-back" onclick="confirmQuit()" style="margin-bottom:20px">← انسحاب</button>' +
        '</div>');
    showScreen('game-area-screen');

    let time = 20;
    GAME_STATE.timerInterval = setInterval(() => {
        time--;
        const el = document.getElementById('round2-timer');
        if (el) el.textContent = '⏱️ ' + time;
        if (time <= 0) { clearInterval(GAME_STATE.timerInterval); nextRound2Chance(); }
    }, 1000);

    const opp = GAME_STATE.currentOpponent;
    const aiDelay = opp.answerSpeedMs + Math.random() * 3000;
    GAME_STATE.aiAnswerTimeout = setTimeout(() => {
        if (GAME_STATE.roundData.round2.finished) return;
        if (Math.random() < opp.correctAnswerChance - 0.1) {
            GAME_STATE.roundData.round2.aiAnswered = true;
            const fb = document.getElementById('round2-feedback');
            if (fb) fb.innerHTML = '<span style="color:#ff3333">🤖 ' + opp.username + ' جاوب!</span>';
            setTimeout(() => endRound2(false), 800);
        }
    }, aiDelay);

    setTimeout(() => {
        const inp = document.getElementById('round2-answer');
        if (inp) {
            inp.focus();
            inp.addEventListener('keypress', e => { if (e.key === 'Enter') submitRound2(); });
        }
    }, 100);
}

function submitRound2() {
    const r2 = GAME_STATE.roundData.round2;
    if (!r2 || r2.finished || r2.playerAnswered) return;
    const input = document.getElementById('round2-answer');
    if (!input) return;
    const answer = input.value.trim();
    if (!answer) return;

    const correct = normalizeName(answer) === normalizeName(r2.correctAnswer);
    if (correct) {
        r2.playerAnswered = true;
        const fb = document.getElementById('round2-feedback');
        if (fb) fb.innerHTML = '<span style="color:#00c853">✅ صح! ' + r2.correctAnswer + '</span>';
        if (GAME_STATE.timerInterval) clearInterval(GAME_STATE.timerInterval);
        if (GAME_STATE.aiAnswerTimeout) clearTimeout(GAME_STATE.aiAnswerTimeout);
        setTimeout(() => endRound2(true), 800);
    } else {
        const fb = document.getElementById('round2-feedback');
        if (fb) fb.innerHTML = '<span style="color:#ff1744">❌ غلط، جرب تاني</span>';
        input.value = '';
    }
}

function nextRound2Chance() {
    const r2 = GAME_STATE.roundData.round2;
    if (!r2 || r2.finished) return;
    if (r2.chance >= 5) { endRound2(false); return; }
    r2.chance++;
    showToast('⏭️ الفرصة ' + r2.chance);
    renderRound2UI();
}

function endRound2(playerCorrect) {
    const r2 = GAME_STATE.roundData.round2;
    if (!r2 || r2.finished) return;
    r2.finished = true;
    if (GAME_STATE.timerInterval) clearInterval(GAME_STATE.timerInterval);
    if (GAME_STATE.aiAnswerTimeout) clearTimeout(GAME_STATE.aiAnswerTimeout);

    const points = [5, 3, 2, 1, 1][r2.chance - 1] || 1;
    if (playerCorrect) GAME_STATE.currentMatch.playerScore += points;
    else if (r2.aiAnswered) GAME_STATE.currentMatch.aiScore += points;

    updateHeader();
    setTimeout(() => {
        showToast('الإجابة: ' + r2.correctAnswer);
        setTimeout(renderRound3, 1500);
    }, 500);
}

function getPlayersMatchingQuestion(question) {
    if (!question) return [];
    let target = question.replace('لعب في ', '').replace('لعب بـ ', '').replace('فاز بـ ', '').replace('فاز في ', '').trim();
    const targetNorm = normalizeName(target);

    return PLAYERS_DB.filter(p => {
        const catNorm = normalizeName(p.category);
        if (catNorm === targetNorm) return true;
        if (catNorm.includes(targetNorm) || targetNorm.includes(catNorm)) return true;
        return false;
    });
}

function checkPlayerAnswer(answer) {
    if (!answer) return null;
    const answerNorm = normalizeName(answer);
    for (const p of PLAYERS_DB) {
        if (normalizeName(p.name) === answerNorm) return p;
        const pNameNorm = normalizeName(p.name).replace(/\s+/g, '');
        const aNameNorm = answerNorm.replace(/\s+/g, '');
        if (pNameNorm === aNameNorm) return p;
    }
    return null;
}

function renderRound3() {
    const m = GAME_STATE.currentMatch;
    m.currentRound = 3;
    updateHeader();

    const question = AUCTION_QUESTIONS[Math.floor(Math.random() * AUCTION_QUESTIONS.length)];
    GAME_STATE.roundData.round3 = {
        question: question,
        playerAnswers: [],
        playerValid: [],
        playerInvalid: [],
        aiAnswers: [],
        aiValid: [],
        finished: false
    };

    createScreen('game-area-screen', '<div style="padding-top:90px;min-height:100vh;display:flex;flex-direction:column;align-items:center;gap:12px;padding-left:15px;padding-right:15px;padding-bottom:30px">' +
        '<div style="background:linear-gradient(135deg,#1a0000,#000);border:2px solid #cc0000;border-radius:20px;padding:18px;width:100%;max-width:500px;text-align:center">' +
            '<p style="color:#ffd700;font-size:13px;margin-bottom:8px">💥 جولة مزاد اللاعبين</p>' +
            '<div style="background:rgba(0,0,0,0.6);border-radius:12px;padding:12px;margin:10px 0">' +
                '<p style="color:#fff;font-size:14px;margin-bottom:6px">اكتب أكبر عدد من اللاعبين اللي</p>' +
                '<p style="color:#ff3333;font-size:16px;font-weight:900">' + question + '</p>' +
            '</div>' +
            '<p style="color:#ccc;font-size:11px">افصل بين كل اسم واسم بفاصلة ( , )</p>' +
            '<div style="display:flex;gap:8px;margin:12px 0;justify-content:center">' +
                '<div style="background:rgba(0,200,83,0.15);border:1px solid #00c853;border-radius:10px;padding:8px 14px"><div style="color:#00c853;font-size:10px">✅ صح</div><div id="r3-valid-count" style="color:#fff;font-size:18px;font-weight:900">0</div></div>' +
                '<div style="background:rgba(255,23,68,0.15);border:1px solid #ff1744;border-radius:10px;padding:8px 14px"><div style="color:#ff1744;font-size:10px">❌ غلط</div><div id="r3-invalid-count" style="color:#fff;font-size:18px;font-weight:900">0</div></div>' +
                '<div style="background:rgba(255,215,0,0.15);border:1px solid #ffd700;border-radius:10px;padding:8px 14px"><div style="color:#ffd700;font-size:10px">⏱️ الوقت</div><div id="round3-timer" style="color:#fff;font-size:18px;font-weight:900">30</div></div>' +
            '</div>' +
            '<textarea id="round3-answers" placeholder="مثال: محمد صلاح, رونالدو, ميسي" style="width:100%;min-height:110px;padding:12px;background:rgba(0,0,0,0.6);border:2px solid #cc0000;border-radius:12px;color:#fff;font-size:14px;font-family:Cairo;outline:none;resize:vertical"></textarea>' +
            '<div id="r3-live-list" style="margin-top:10px;max-height:150px;overflow-y:auto;text-align:right;background:rgba(0,0,0,0.4);border-radius:10px;padding:8px;font-size:12px;display:none"></div>' +
            '<button class="btn-primary" onclick="submitRound3()" style="margin-top:12px">✅ خلصت</button>' +
        '</div>' +
        '<button class="btn-back" onclick="confirmQuit()" style="margin-bottom:20px">← انسحاب</button>' +
        '</div>');
    showScreen('game-area-screen');

    const textarea = document.getElementById('round3-answers');
    if (textarea) {
        textarea.addEventListener('input', updateRound3LiveCounter);
        setTimeout(() => textarea.focus(), 100);
    }

    let time = 30;
    GAME_STATE.timerInterval = setInterval(() => {
        time--;
        const el = document.getElementById('round3-timer');
        if (el) el.textContent = time;
        if (time <= 0) { clearInterval(GAME_STATE.timerInterval); submitRound3(); }
    }, 1000);

    const opp = GAME_STATE.currentOpponent;
    const allMatching = getPlayersMatchingQuestion(question);
    const numAI = opp.difficulty === 'easy' ? 4 : (opp.difficulty === 'medium' ? 6 : 9);
    const shuffled = [...allMatching].sort(() => Math.random() - 0.5);
    GAME_STATE.roundData.round3.aiAnswers = shuffled.slice(0, Math.min(numAI, shuffled.length));
    GAME_STATE.roundData.round3.aiValid = GAME_STATE.roundData.round3.aiAnswers.map(p => p.name);
}

function updateRound3LiveCounter() {
    const textarea = document.getElementById('round3-answers');
    if (!textarea) return;
    const text = textarea.value;
    const parts = text.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const r3 = GAME_STATE.roundData.round3;
    if (!r3) return;

    const validPlayers = getPlayersMatchingQuestion(r3.question);
    const validNames = validPlayers.map(p => normalizeName(p.name));
    let validCount = 0, invalidCount = 0;
    const seen = new Set();
    const results = [];

    parts.forEach(part => {
        const norm = normalizeName(part);
        if (!norm || seen.has(norm)) return;
        seen.add(norm);
        if (validNames.includes(norm)) {
            validCount++;
            results.push({ name: part, valid: true });
        } else {
            const matched = checkPlayerAnswer(part);
            if (matched && validNames.includes(normalizeName(matched.name))) {
                validCount++;
                results.push({ name: part, valid: true });
            } else {
                invalidCount++;
                results.push({ name: part, valid: false });
            }
        }
    });

    const vEl = document.getElementById('r3-valid-count');
    const iEl = document.getElementById('r3-invalid-count');
    if (vEl) vEl.textContent = validCount;
    if (iEl) iEl.textContent = invalidCount;

    const listEl = document.getElementById('r3-live-list');
    if (listEl) {
        if (results.length === 0) listEl.style.display = 'none';
        else {
            listEl.style.display = 'block';
            listEl.innerHTML = results.map(r => '<div style="padding:4px 8px;margin:2px 0;border-radius:6px;background:' + (r.valid ? 'rgba(0,200,83,0.15)' : 'rgba(255,23,68,0.15)') + ';color:' + (r.valid ? '#00c853' : '#ff1744') + '">' + (r.valid ? '✅' : '❌') + ' ' + r.name + '</div>').join('');
        }
    }
}

function submitRound3() {
    const r3 = GAME_STATE.roundData.round3;
    if (!r3 || r3.finished) return;
    if (GAME_STATE.timerInterval) clearInterval(GAME_STATE.timerInterval);
    r3.finished = true;

    const textarea = document.getElementById('round3-answers');
    const text = textarea ? textarea.value : '';
    const parts = text.split(',').map(s => s.trim()).filter(s => s.length > 0);

    const validPlayers = getPlayersMatchingQuestion(r3.question);
    const validNames = validPlayers.map(p => normalizeName(p.name));
    const seen = new Set();
    r3.playerValid = [];
    r3.playerInvalid = [];

    parts.forEach(part => {
        const norm = normalizeName(part);
        if (!norm || seen.has(norm)) return;
        seen.add(norm);
        let isValid = validNames.includes(norm);
        if (!isValid) {
            const matched = checkPlayerAnswer(part);
            if (matched && validNames.includes(normalizeName(matched.name))) isValid = true;
        }
        if (isValid) r3.playerValid.push(part);
        else r3.playerInvalid.push(part);
    });

    const playerCount = r3.playerValid.length;
    const aiCount = r3.aiValid.length;
    let resultText = '', resultColor = '';

    if (playerCount > aiCount) {
        GAME_STATE.currentMatch.playerScore += 3;
        resultText = '🎉 فزت بالجولة! (' + playerCount + ' - ' + aiCount + ')';
        resultColor = '#00c853';
    } else if (aiCount > playerCount) {
        GAME_STATE.currentMatch.aiScore += 3;
        resultText = '😢 خسرت الجولة (' + playerCount + ' - ' + aiCount + ')';
        resultColor = '#ff1744';
    } else {
        showToast('🤝 تعادل (' + playerCount + ' - ' + aiCount + ')! هنجرب سؤال تاني');
        setTimeout(() => renderRound3(), 1500);
        return;
    }

    updateHeader();
    const resultBox = document.createElement('div');
    resultBox.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.95);border:3px solid ' + resultColor + ';border-radius:20px;padding:25px;z-index:200;text-align:center;min-width:280px;box-shadow:0 0 40px ' + resultColor;
    resultBox.innerHTML = '<div style="font-size:40px;margin-bottom:10px">' + (playerCount > aiCount ? '🎉' : '😢') + '</div>' +
        '<div style="color:' + resultColor + ';font-size:20px;font-weight:900;margin-bottom:15px">' + resultText + '</div>' +
        '<div style="color:#ffd700;font-size:12px;margin-bottom:5px">إجاباتك الصح:</div>' +
        '<div style="color:#00c853;font-size:13px;margin-bottom:10px">' + (r3.playerValid.length > 0 ? r3.playerValid.join(' • ') : 'مفيش') + '</div>' +
        '<div style="color:#ffd700;font-size:12px;margin-bottom:5px">إجابات ' + GAME_STATE.currentOpponent.username + ':</div>' +
        '<div style="color:#ff3333;font-size:13px">' + r3.aiValid.slice(0, 6).join(' • ') + (r3.aiValid.length > 6 ? '...' : '') + '</div>';
    document.body.appendChild(resultBox);
    setTimeout(() => { resultBox.remove(); renderRound4(); }, 3500);
}

function renderRound4() {
    const m = GAME_STATE.currentMatch;
    m.currentRound = 4;
    updateHeader();

    const opp = GAME_STATE.currentOpponent;
    const player = pickPlayerForAI(opp.fameRange);
    GAME_STATE.roundData.round4 = {
        player: player,
        questionsAsked: [],
        maxQuestions: 20,
        finished: false,
        guessed: false
    };

    createScreen('game-area-screen', '<div style="padding-top:90px;min-height:100vh;display:flex;flex-direction:column;align-items:center;gap:12px;padding-left:15px;padding-right:15px;padding-bottom:30px">' +
        '<div style="background:linear-gradient(135deg,#1a0000,#000);border:2px solid #cc0000;border-radius:20px;padding:18px;width:100%;max-width:500px;text-align:center">' +
            '<p style="color:#ffd700;font-size:13px;margin-bottom:10px">🎭 جولة "من هو لاعبي؟"</p>' +
            '<p style="color:#fff;font-size:14px">الخصم اختار لاعب، اسأل أسئلة نعم/لا وخمنه!</p>' +
            '<div id="round4-questions" style="margin-top:15px;max-height:200px;overflow-y:auto;text-align:right;background:rgba(0,0,0,0.5);border-radius:10px;padding:10px;font-size:12px;color:#ccc"></div>' +
        '</div>' +
        '<div style="width:100%;max-width:500px">' +
            '<input type="text" id="round4-question" placeholder="اكتب سؤالك أو خمن الاسم" style="width:100%;padding:14px;background:rgba(0,0,0,0.6);border:2px solid #cc0000;border-radius:12px;color:#fff;font-size:14px;font-family:Cairo;outline:none;text-align:center">' +
            '<div style="display:flex;gap:8px;margin-top:10px">' +
                '<button class="btn-primary" onclick="askRound4Question()" style="flex:1">❓ اسأل</button>' +
                '<button class="btn-primary" onclick="guessRound4()" style="flex:1;background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;border-color:#ffd700">🎯 خمن</button>' +
            '</div>' +
            '<p id="round4-feedback" style="margin-top:12px;font-size:14px;text-align:center;min-height:20px;color:#fff"></p>' +
        '</div>' +
        '<button class="btn-back" onclick="confirmQuit()" style="margin-top:10px">← انسحاب</button>' +
        '</div>');
    showScreen('game-area-screen');
    setTimeout(() => { const inp = document.getElementById('round4-question'); if (inp) inp.focus(); }, 100);
}

function askRound4Question() {
    const r4 = GAME_STATE.roundData.round4;
    if (!r4 || r4.finished) return;
    const input = document.getElementById('round4-question');
    const q = input.value.trim();
    if (!q) return;
    if (r4.questionsAsked.length >= r4.maxQuestions) { showToast('خلصت أسئلتك!'); return; }

    const answer = answerRound4Question(q, r4.player);
    r4.questionsAsked.push({ q: q, a: answer });

    const log = document.getElementById('round4-questions');
    if (log) {
        log.innerHTML = r4.questionsAsked.map(item => '<div style="margin:6px 0;border-bottom:1px solid rgba(204,0,0,0.2);padding-bottom:5px"><span style="color:#ffd700">❓ ' + item.q + '</span><br><span style="color:' + (item.a === 'نعم' ? '#00c853' : '#ff1744') + '">➜ ' + item.a + '</span></div>').reverse().join('');
    }
    input.value = '';
}

function answerRound4Question(question, player) {
    const q = question.toLowerCase();
    const nat = player.nationality, pos = player.position, cat = player.category;

    if (q.includes('مصري') || q.includes('مصر')) return nat === 'مصر' ? 'نعم' : 'لا';
    if (q.includes('سعودي') || q.includes('السعودية')) return nat === 'السعودية' ? 'نعم' : 'لا';
    if (q.includes('مغربي') || q.includes('المغرب')) return nat === 'المغرب' ? 'نعم' : 'لا';
    if (q.includes('برازيلي') || q.includes('البرازيل')) return nat === 'البرازيل' ? 'نعم' : 'لا';
    if (q.includes('أرجنتيني') || q.includes('الأرجنتين')) return nat === 'الأرجنتين' ? 'نعم' : 'لا';
    if (q.includes('فرنسي') || q.includes('فرنسا')) return nat === 'فرنسا' ? 'نعم' : 'لا';
    if (q.includes('برتغالي') || q.includes('البرتغال')) return nat === 'البرتغال' ? 'نعم' : 'لا';
    if (q.includes('ألماني') || q.includes('ألمانيا')) return nat === 'ألمانيا' ? 'نعم' : 'لا';
    if (q.includes('إسباني') || q.includes('إسبانيا')) return nat === 'إسبانيا' ? 'نعم' : 'لا';
    if (q.includes('إيطالي') || q.includes('إيطاليا')) return nat === 'إيطاليا' ? 'نعم' : 'لا';

    if (q.includes('مهاجم') || q.includes('هجوم')) return pos === 'مهاجم' ? 'نعم' : 'لا';
    if (q.includes('وسط') || q.includes('ميدان')) return pos === 'وسط' ? 'نعم' : 'لا';
    if (q.includes('مدافع') || q.includes('دفاع')) return pos === 'مدافع' ? 'نعم' : 'لا';
    if (q.includes('حارس') || q.includes('حراسة')) return pos === 'حارس مرمى' ? 'نعم' : 'لا';

    if (q.includes('أبطال أوروبا')) return cat === 'دوري أبطال أوروبا' ? 'نعم' : 'لا';
    if (q.includes('كأس العالم')) return cat === 'كأس العالم' ? 'نعم' : 'لا';
    if (q.includes('أفريقيا')) return cat === 'كأس الأمم الأفريقية' ? 'نعم' : 'لا';
    if (q.includes('يورو')) return cat === 'اليورو الأوروبي' ? 'نعم' : 'لا';

    if (q.includes('مشهور') || q.includes('معروف')) {
        const fame = PLAYER_FAME[player.name] || 3;
        return fame >= 4 ? 'نعم' : 'لا';
    }
    return 'لا أعرف';
}

function guessRound4() {
    const r4 = GAME_STATE.roundData.round4;
    if (!r4 || r4.finished) return;
    const input = document.getElementById('round4-question');
    const guess = input.value.trim();
    if (!guess) { showToast('اكتب تخمينك'); return; }

    if (normalizeName(guess) === normalizeName(r4.player.name)) {
        r4.guessed = true;
        r4.finished = true;
        const opp = GAME_STATE.currentOpponent;
        let points = 3;
        if (opp.difficulty === 'medium') points = 4;
        else if (opp.difficulty === 'hard') points = 5;
        if (r4.questionsAsked.length <= 3) points += 2;
        else if (r4.questionsAsked.length <= 6) points += 1;

        GAME_STATE.currentMatch.playerScore += points;
        updateHeader();
        const fb = document.getElementById('round4-feedback');
        if (fb) fb.innerHTML = '<span style="color:#00c853">🎉 صح! ' + r4.player.name + ' (+' + points + ')</span>';
        setTimeout(endQuizMatch, 1500);
    } else {
        const fb = document.getElementById('round4-feedback');
        if (fb) fb.innerHTML = '<span style="color:#ff1744">❌ غلط، جرب تاني</span>';
        input.value = '';
    }
}

function confirmQuit() {
    if (!confirm('متأكد إنك عايز تنسحب؟')) return;
    if (GAME_STATE.timerInterval) clearInterval(GAME_STATE.timerInterval);
    if (GAME_STATE.aiAnswerTimeout) clearTimeout(GAME_STATE.aiAnswerTimeout);
    const m = GAME_STATE.currentMatch;
    if (m && GAME_STATE.gameType !== 'formation') {
        const user = GAME_STATE.currentUser;
        user.matchesPlayed++;
        user.matchesLost++;
        user.matchHistory = user.matchHistory || [];
        user.matchHistory.push({
            opponent: GAME_STATE.currentOpponent.username,
            playerScore: m.playerScore,
            aiScore: m.aiScore + 5,
            won: false,
            timestamp: Date.now()
        });
        saveUserData(user.username, user);
    }
    const header = document.getElementById('quiz-header');
    if (header) header.remove();
    removeScreen('game-area-screen');
    showToast('انسحبت من المباراة');
    setTimeout(backToMenu, 500);
}

function normalizeName(name) {
    if (!name) return '';
    return name.toString().trim().toLowerCase().replace(/[أإآا]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/\s+/g, ' ').replace(/[^\u0600-\u06FFa-z0-9 ]/g, '');
}

function endQuizMatch() {
    const m = GAME_STATE.currentMatch;
    const header = document.getElementById('quiz-header');
    if (header) header.remove();

    if (m.playerScore === m.aiScore) {
        showToast('🤝 تعادل! ضربات جزاء');
        setTimeout(() => {
            if (Math.random() > 0.5) { m.playerScore++; showToast('🎉 فزت بضربات الجزاء!'); }
            else { m.aiScore++; showToast('😢 خسرت بضربات الجزاء'); }
            setTimeout(finalizeMatch, 1500);
        }, 1000);
        return;
    }
    finalizeMatch();
}

function finalizeMatch() {
    const m = GAME_STATE.currentMatch;
    const user = GAME_STATE.currentUser;
    const won = m.playerScore > m.aiScore;

    user.matchesPlayed++;
    user.totalGoals += m.playerScore;
    if (won) { user.matchesWon++; user.divisionProgress = (user.divisionProgress || 0) + 1; }
    else user.matchesLost++;
    user.matchHistory = user.matchHistory || [];
    user.matchHistory.push({
        opponent: GAME_STATE.currentOpponent.username,
        playerScore: m.playerScore,
        aiScore: m.aiScore,
        won: won,
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
    showMatchResult(won, promoted);
}

function showMatchResult(won, promoted) {
    const m = GAME_STATE.currentMatch;
    const opp = GAME_STATE.currentOpponent;
    const me = GAME_STATE.currentUser;

    createScreen('game-area-screen', '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:15px;padding:20px;text-align:center">' +
        '<div style="font-size:70px">' + (won ? '🏆' : '😢') + '</div>' +
        '<h2 style="color:' + (won ? '#00c853' : '#ff1744') + ';font-size:26px">' + (won ? 'فوز!' : 'خسارة') + '</h2>' +
        '<p style="color:#fff;font-size:22px;font-weight:900">' + m.playerScore + ' - ' + m.aiScore + '</p>' +
        '<p style="color:#ccc;font-size:14px">ضد ' + opp.username + '</p>' +
        (promoted ? '<div style="background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;padding:12px 20px;border-radius:12px;font-weight:900;margin-top:10px">🎉 ترقية للديفجن ' + me.division + '!</div>' : '') +
        '<button class="btn-primary" onclick="rematch()" style="max-width:280px;margin-top:20px">🔄 العب تاني</button>' +
        '<button class="btn-back" onclick="backToMenu()">← القائمة الرئيسية</button>' +
        '</div>');
    showScreen('game-area-screen');
}

function rematch() {
    const difficulty = GAME_STATE.currentMatch.difficulty;
    removeScreen('game-area-screen');
    startOfflineGame(difficulty);
}

