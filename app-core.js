const GAME_STATE = {
    currentUser: null,
    currentOpponent: null,
    currentMatch: null,
    currentDivision: null,
    gameMode: null,
    gameType: null,
    roundData: {},
    timerInterval: null,
    timeLeft: 0,
    aiAnswerTimeout: null
};

const AI_AVATARS = [
    "👤", "🧑", "👨", "🧔", "👦", "🧑‍🦱", "👨‍🦰", "🧑‍🦰",
    "👨‍🦱", "🧑‍🦳", "👩", "👧", "🧑‍🎓", "👨‍💼", "🧑‍💻", "👨‍🚀"
];

function getAllUsers() {
    try {
        const users = localStorage.getItem('dm_users');
        return users ? JSON.parse(users) : {};
    } catch (e) { return {}; }
}

function saveAllUsers(users) {
    localStorage.setItem('dm_users', JSON.stringify(users));
}

function getCurrentUsername() {
    return localStorage.getItem('dm_current_user');
}

function setCurrentUser(username) {
    localStorage.setItem('dm_current_user', username);
}

function clearCurrentUser() {
    localStorage.removeItem('dm_current_user');
}

function getUserData(username) {
    const users = getAllUsers();
    return users[username] || null;
}

function saveUserData(username, data) {
    const users = getAllUsers();
    users[username] = data;
    saveAllUsers(users);
    if (GAME_STATE.currentUser && GAME_STATE.currentUser.username === username) {
        GAME_STATE.currentUser = data;
    }
}

function createNewUser(username, password) {
    const users = getAllUsers();
    if (users[username]) {
        return { success: false, error: 'اسم المستخدم موجود بالفعل، اختار اسم تاني' };
    }
    users[username] = {
        username: username,
        password: password,
        createdAt: Date.now(),
        division: 1,
        matchesPlayed: 0,
        matchesWon: 0,
        matchesLost: 0,
        divisionProgress: 0,
        totalGoals: 0,
        friends: [],
        matchHistory: [],
        settings: { sound: true, notifications: true }
    };
    saveAllUsers(users);
    return { success: true };
}

function verifyLogin(username, password) {
    const users = getAllUsers();
    if (!users[username]) {
        return { success: false, error: 'اسم المستخدم غير موجود' };
    }
    if (users[username].password !== password) {
        return { success: false, error: 'كلمة المرور غلط' };
    }
    return { success: true };
}

function createScreen(id, html) {
    let screen = document.getElementById(id);
    if (!screen) {
        screen = document.createElement('div');
        screen.id = id;
        screen.className = 'screen';
        document.body.appendChild(screen);
    }
    screen.innerHTML = html;
    return screen;
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
}

function removeScreen(id) {
    const s = document.getElementById(id);
    if (s) s.remove();
}

function showLoading(text) {
    const overlay = document.getElementById('loading-overlay');
    const txt = document.getElementById('loading-text');
    if (txt) txt.textContent = text || 'جاري التحميل...';
    if (overlay) overlay.classList.remove('hidden');
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.classList.add('hidden');
}

function showToast(message, duration) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration || 2500);
}

function showError(elId, message) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 4000);
}

function showSuccess(elId, message) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value;
            if (!username || !password) {
                showError('login-error', 'اكتب اسم المستخدم وكلمة المرور');
                return;
            }
            showLoading('جاري تسجيل الدخول...');
            setTimeout(() => {
                const result = verifyLogin(username, password);
                hideLoading();
                if (!result.success) {
                    showError('login-error', result.error);
                    return;
                }
                setCurrentUser(username);
                GAME_STATE.currentUser = getUserData(username);
                showToast('أهلاً بيك يا ' + username);
                setTimeout(() => {
                    updateMainMenuUI();
                    document.getElementById('login-form').reset();
                    showScreen('main-menu-screen');
                }, 500);
            }, 700);
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('reg-username').value.trim();
            const password = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-password-confirm').value;

            if (username.length < 3 || username.length > 20) {
                showError('register-error', 'اسم المستخدم لازم 3-20 حرف');
                return;
            }
            if (!/^[a-zA-Z0-9_\u0600-\u06FF]+$/.test(username)) {
                showError('register-error', 'اسم المستخدم لازم حروف وأرقام بس');
                return;
            }
            if (password.length < 6) {
                showError('register-error', 'كلمة المرور 6 أحرف على الأقل');
                return;
            }
            if (password !== confirm) {
                showError('register-error', 'كلمتا المرور مش متطابقتين');
                return;
            }
            showLoading('جاري إنشاء الحساب...');
            setTimeout(() => {
                const result = createNewUser(username, password);
                hideLoading();
                if (!result.success) {
                    showError('register-error', result.error);
                    return;
                }
                showSuccess('register-success', 'تم إنشاء الحساب! جاري تسجيل الدخول...');
                setTimeout(() => {
                    setCurrentUser(username);
                    GAME_STATE.currentUser = getUserData(username);
                    document.getElementById('register-form').reset();
                    updateMainMenuUI();
                    showScreen('main-menu-screen');
                }, 1200);
            }, 700);
        });
    }
});

function logout() {
    if (!confirm('متأكد إنك عايز تسجل خروج؟')) return;
    clearCurrentUser();
    GAME_STATE.currentUser = null;
    showToast('تم تسجيل الخروج');
    setTimeout(() => {
        showScreen('login-screen');
        const lf = document.getElementById('login-form');
        if (lf) lf.reset();
    }, 500);
}

function updateMainMenuUI() {
    if (!GAME_STATE.currentUser) return;
    const user = GAME_STATE.currentUser;
    const usernameEl = document.getElementById('current-username');
    if (usernameEl) usernameEl.textContent = user.username;
    const divEl = document.getElementById('menu-division');
    if (divEl) {
        const div = DIVISIONS.find(d => d.id === user.division) || DIVISIONS[0];
        divEl.textContent = div.name;
    }
    const matchesEl = document.getElementById('menu-matches');
    if (matchesEl) matchesEl.textContent = user.matchesPlayed || 0;
    const winsEl = document.getElementById('menu-wins');
    if (winsEl) winsEl.textContent = user.matchesWon || 0;
}

function goAfterSplash() {
    try {
        const savedUser = getCurrentUsername();
        if (savedUser) {
            const userData = getUserData(savedUser);
            if (userData) {
                GAME_STATE.currentUser = userData;
                updateMainMenuUI();
                showScreen('main-menu-screen');
                return;
            }
        }
        showScreen('login-screen');
    } catch (err) {
        console.error('Splash error:', err);
        showScreen('login-screen');
    }
}

if (document.readyState === 'complete') {
    setTimeout(goAfterSplash, 2600);
} else {
    window.addEventListener('load', function () {
        setTimeout(goAfterSplash, 2600);
    });
}

setTimeout(function () {
    const splash = document.getElementById('splash-screen');
    if (splash && splash.classList.contains('active')) {
        goAfterSplash();
    }
}, 5000);

function backToMenu() {
    if (GAME_STATE.timerInterval) {
        clearInterval(GAME_STATE.timerInterval);
        GAME_STATE.timerInterval = null;
    }
    if (GAME_STATE.aiAnswerTimeout) {
        clearTimeout(GAME_STATE.aiAnswerTimeout);
        GAME_STATE.aiAnswerTimeout = null;
    }
    const header = document.getElementById('quiz-header');
    if (header) header.remove();
    GAME_STATE.currentMatch = null;
    GAME_STATE.currentOpponent = null;
    GAME_STATE.currentDivision = null;
    GAME_STATE.gameMode = null;
    GAME_STATE.gameType = null;
    GAME_STATE.roundData = {};
    removeScreen('game-area-screen');
    updateMainMenuUI();
    showScreen('main-menu-screen');
}

