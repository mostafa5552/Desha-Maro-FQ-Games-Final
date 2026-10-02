// ================= 1. تهيئة Supabase =================
const SUPABASE_URL = "https://pommuyfezoysilysbkxl.supabase.co"; // استبدل بـ URL مشروعك
const SUPABASE_ANON_KEY = "sb_publishable_IqV5n-T2iYHp8EmMZPMZhA_xyS2YW_X"; // استبدل بـ Anon Key الخاص بك

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentMode = 'login'; // 'login' أو 'signup'

// ================= 2. إدارة التبويبات (Tabs) =================
function switchTab(mode) {
    currentMode = mode;
    const usernameGroup = document.getElementById('username-group');
    const submitBtn = document.getElementById('auth-submit-btn');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    hideMessage();

    if (mode === 'signup') {
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        usernameGroup.style.display = 'flex';
        document.getElementById('auth-username').required = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> إنشاء حساب';
    } else {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        usernameGroup.style.display = 'none';
        document.getElementById('auth-username').required = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> دخول';
    }
}

// ================= 3. معالجة التسجيل والدخول =================
async function handleAuthSubmit(e) {
    e.preventDefault();
    hideMessage();

    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const username = document.getElementById('auth-username').value.trim().toLowerCase();

    if (currentMode === 'signup') {
        // التحقق من أن Username لا يحتوي على مسافات
        if (username.includes(" ")) {
            showMessage("اسم المستخدم يجب ألا يحتوي على مسافات", "error");
            return;
        }

        // 1. التأكد من أن Username فريد وغير مكرر في جدول profiles
        const { data: existingUser, error: checkError } = await supabase
            .from('profiles')
            .select('username')
            .eq('username', username)
            .maybeSingle();

        if (existingUser) {
            showMessage("اسم المستخدم هذا مأخوذ بالفعل، اختر اسماً آخر", "error");
            return;
        }

        // 2. إنشاء الحساب في Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: { username: username } // حفظ الـ username في الميتا داتا
            }
        });

        if (error) {
            showMessage(error.message, "error");
        } else {
            // 3. إضافة البيانات لجدول profiles
            if (data.user) {
                await supabase.from('profiles').insert([
                    { id: data.user.id, username: username, email: email, division: 1 }
                ]);
            }
            showMessage("تم إنشاء الحساب بنجاح! جاري التوجيه...", "success");
            setTimeout(() => checkUserSession(), 1500);
        }

    } else {
        // تسجيل الدخول
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            showMessage("بيانات الدخول غير صحيحة", "error");
        } else {
            checkUserSession();
        }
    }
}

// ================= 4. تسجيل الدخول عبر Google =================
async function loginWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    });
    if (error) showMessage(error.message, "error");
}

// ================= 5. التحقق من الجلسة (Session) =================
async function checkUserSession() {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
        const user = session.user;
        
        // جلب اسم المستخدم من جدول profiles
        const { data: profile } = await supabase
            .from('profiles')
            .select('username')
            .eq('id', user.id)
            .single();

        document.getElementById('user-display-username').innerText = profile ? `@${profile.username}` : user.email;
        document.getElementById('user-display-email').innerText = user.email;

        // الانتقال للشاشة الرئيسية
        showScreen('main-screen');
    } else {
        showScreen('auth-screen');
    }
}

// ================= 6. تسجيل الخروج =================
async function logout() {
    await supabase.auth.signOut();
    showScreen('auth-screen');
}

// أدوات مساعدة UI
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showMessage(msg, type) {
    const box = document.getElementById('auth-message');
    box.className = `message-box ${type}`;
    box.innerText = msg;
}

function hideMessage() {
    const box = document.getElementById('auth-message');
    box.className = 'message-box';
    box.innerText = '';
}

// تشغيل الفحص عند فتح الصفحة
window.onload = checkUserSession;
