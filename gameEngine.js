// ================= 1. تهيئة Supabase =================
// ضع مفاتيح مشروعك الخاصة هنا من Supabase Settings -> API
const SUPABASE_URL = "YOUR_SUPABASE_URL_HERE"; 
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY_HERE"; 

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let isLoginMode = false; // الوضع الافتراضي هو إنشاء حساب جديد (Signup)

// ================= 2. معالجة إنشاء الحساب والتسجيل =================
async function handleSignup(e) {
    e.preventDefault();
    hideMessage();

    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const usernameInput = document.getElementById('auth-username');
    const username = usernameInput ? usernameInput.value.trim().toLowerCase() : '';

    const submitBtn = document.getElementById('auth-submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerText = "جاري المعالجة...";

    try {
        if (!isLoginMode) {
            // --- وضع إنشاء الحساب ---
            if (!username || username.includes(" ")) {
                showMessage("اسم المستخدم مطلوب ويجب ألا يحتوي على مسافات", "error");
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> إنشاء الحساب وتأكيد';
                return;
            }

            // 1. الفحص أولاً هل Username مأخوذ مسبقاً أم لا
            const { data: existingUser } = await supabase
                .from('profiles')
                .select('username')
                .eq('username', username)
                .maybeSingle();

            if (existingUser) {
                showMessage("اسم المستخدم هذا مأخوذ بالفعل، اختر اسماً آخر", "error");
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> إنشاء الحساب وتأكيد';
                return;
            }

            // 2. تسجيل الحساب في Supabase Auth
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });

            if (error) {
                showMessage(error.message, "error");
            } else if (data.user) {
                // 3. إضافة بيانات البروفايل بالـ Username الفريد
                await supabase.from('profiles').insert([
                    { id: data.user.id, username: username, email: email, division: 1 }
                ]);
                showMessage("تم إنشاء الحساب بنجاح!", "success");
                setTimeout(() => checkUserSession(), 1000);
            }
        } else {
            // --- وضع تسجيل الدخول ---
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                showMessage("بيانات الدخول غير صحيحة", "error");
            } else {
                checkUserSession();
            }
        }
    } catch (err) {
        showMessage("حدث خطأ أثناء الاتصال بالخادم", "error");
    } finally {
        submitBtn.disabled = false;
        if (!isLoginMode) {
            submitBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> إنشاء الحساب وتأكيد';
        } else {
            submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول';
        }
    }
}

// ================= 3. التبديل بين الدخول وإنشاء حساب =================
function toggleMode(mode) {
    isLoginMode = (mode === 'login');
    const usernameInput = document.getElementById('auth-username');
    const usernameGroup = usernameInput.closest('.input-group');
    const submitBtn = document.getElementById('auth-submit-btn');
    const title = document.getElementById('auth-title');
    const footerLink = document.getElementById('footer-link');
    hideMessage();

    if (isLoginMode) {
        usernameGroup.style.display = 'none';
        usernameInput.required = false;
        title.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول';
        submitBtn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> تسجيل الدخول';
        footerLink.innerHTML = '<p>ليس لديك حساب؟ <a href="#" onclick="toggleMode(\'signup\')">إنشاء حساب جديد</a></p>';
    } else {
        usernameGroup.style.display = 'flex';
        usernameInput.required = true;
        title.innerHTML = '<i class="fa-solid fa-user-plus"></i> إنشاء حساب جديد';
        submitBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> إنشاء الحساب وتأكيد';
        footerLink.innerHTML = '<p>لديك حساب بالفعل؟ <a href="#" onclick="toggleMode(\'login\')">تسجيل الدخول</a></p>';
    }
}

// ================= 4. التحقق من الجلسة ومتابعة الدخول =================
async function checkUserSession() {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
        const user = session.user;
        
        // جلب الـ username من جدول profiles
        const { data: profile } = await supabase
            .from('profiles')
            .select('username')
            .eq('id', user.id)
            .maybeSingle();

        document.getElementById('user-display-username').innerText = profile ? `@${profile.username}` : user.email;
        document.getElementById('user-display-email').innerText = user.email;

        showScreen('main-screen');
    } else {
        showScreen('auth-screen');
    }
}

// ================= 5. تسجيل الخروج =================
async function logout() {
    await supabase.auth.signOut();
    toggleMode('signup');
    showScreen('auth-screen');
}

// أدوات مساعدة للواجهة
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

// تشغيل الفحص التلقائي عند التحميل
window.onload = checkUserSession;
