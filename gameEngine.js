// ================= 1. تهيئة Supabase بالـ Publishable Key =================
const SUPABASE_URL = "https://pommuyfezoysilysbkxl.supabase.co"; 
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_QVq3yBYg06qBoo7NtENPmQ_JickOTKK"; 

let supabase = null;

try {
    if (window.supabase) {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    }
} catch (e) {
    console.error("خطأ في التهيئة:", e);
}

let isLoginMode = false;

// ================= 2. معالجة التسجيل والدخول =================
async function handleAuthSubmit(e) {
    e.preventDefault();
    hideMessage();

    if (!supabase) {
        showMessage("خطأ: لم يتم الاتصال بمكتبة Supabase", "error");
        return;
    }

    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const usernameInput = document.getElementById('auth-username');
    const username = usernameInput ? usernameInput.value.trim().toLowerCase() : '';

    const submitBtn = document.getElementById('auth-submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerText = "جاري الاتصال بالخادم...";

    try {
        if (!isLoginMode) {
            // --- وضع إنشاء حساب جديد ---
            if (!username || username.includes(" ")) {
                showMessage("اسم المستخدم مطلوب ويجب ألا يحتوي على مسافات", "error");
                resetSubmitButton();
                return;
            }

            // إنشاء الحساب وإرسال اسم المستخدم في metadata (الـ Trigger في SQL سيتكفل بالباقي)
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: { username: username }
                }
            });

            if (error) {
                showMessage("خطأ في التسجيل: " + error.message, "error");
            } else if (data.user) {
                showMessage("تم إنشاء الحساب بنجاح!", "success");
                setTimeout(() => checkUserSession(), 1000);
            }
        } else {
            // --- وضع تسجيل الدخول ---
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                showMessage("بيانات الدخول غير صحيحة أو البريد غير مسجل", "error");
            } else if (data.session) {
                showMessage("تم تسجيل الدخول بنجاح!", "success");
                setTimeout(() => checkUserSession(), 800);
            }
        }
    } catch (err) {
        showMessage("حدث خطأ غير متوقع: " + (err.message || err), "error");
    } finally {
        resetSubmitButton();
    }
}

function resetSubmitButton() {
    const submitBtn = document.getElementById('auth-submit-btn');
    if (!submitBtn) return;
    submitBtn.disabled = false;
    submitBtn.innerHTML = isLoginMode 
        ? '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول' 
        : '<i class="fa-solid fa-check-circle"></i> إنشاء الحساب وتأكيد';
}

function toggleMode(mode) {
    isLoginMode = (mode === 'login');
    const usernameGroup = document.getElementById('username-group');
    const usernameInput = document.getElementById('auth-username');
    const submitBtn = document.getElementById('auth-submit-btn');
    const title = document.getElementById('auth-title');
    const footerLink = document.getElementById('footer-link');
    hideMessage();

    if (isLoginMode) {
        if (usernameGroup) usernameGroup.style.display = 'none';
        if (usernameInput) usernameInput.required = false;
        if (title) title.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول';
        if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول';
        if (footerLink) footerLink.innerHTML = '<p>ليس لديك حساب؟ <a href="javascript:void(0)" onclick="toggleMode(\'signup\')">إنشاء حساب جديد</a></p>';
    } else {
        if (usernameGroup) usernameGroup.style.display = 'flex';
        if (usernameInput) usernameInput.required = true;
        if (title) title.innerHTML = '<i class="fa-solid fa-user-plus"></i> إنشاء حساب جديد';
        if (submitBtn) submitBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> إنشاء الحساب وتأكيد';
        if (footerLink) footerLink.innerHTML = '<p>لديك حساب بالفعل؟ <a href="javascript:void(0)" onclick="toggleMode(\'login\')">تسجيل الدخول</a></p>';
    }
}

async function checkUserSession() {
    if (!supabase) return;

    try {
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
            const user = session.user;
            const metaUsername = user.user_metadata?.username;

            document.getElementById('user-display-username').innerText = metaUsername ? `@${metaUsername}` : user.email;
            document.getElementById('user-display-email').innerText = user.email;

            showScreen('main-screen');
        } else {
            showScreen('auth-screen');
        }
    } catch (e) {
        console.error("خطأ فحص الجلسة:", e);
    }
}

async function logout() {
    if (supabase) await supabase.auth.signOut();
    toggleMode('signup');
    showScreen('auth-screen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId)?.classList.add('active');
}

function showMessage(msg, type) {
    const box = document.getElementById('auth-message');
    if (box) {
        box.className = `message-box ${type}`;
        box.innerText = msg;
    }
}

function hideMessage() {
    const box = document.getElementById('auth-message');
    if (box) {
        box.className = 'message-box';
        box.innerText = '';
    }
}

window.onload = checkUserSession;
