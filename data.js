/* ============================================================
   DESHA & MARO GAMES - data.js
   الجزء 1 من 3: اللاعبين (الدوريات الأوروبية الكبرى)
   ============================================================ */

const PLAYERS_DB = [

    /* ============ دوري أبطال أوروبا ============ */
    { name: "كريستيانو رونالدو", nationality: "البرتغال", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "ليونيل ميسي", nationality: "الأرجنتين", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "زين الدين زيدان", nationality: "فرنسا", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "رونالدينيو", nationality: "البرازيل", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "رونالدو نازاريو", nationality: "البرازيل", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "لوكا مودريتش", nationality: "كرواتيا", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "أندريس إنييستا", nationality: "إسبانيا", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "تشافي هيرنانديز", nationality: "إسبانيا", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "كريم بنزيما", nationality: "فرنسا", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "روبرت ليفاندوفسكي", nationality: "بولندا", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "كيليان إمبابي", nationality: "فرنسا", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "إرلينغ هالاند", nationality: "النرويج", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "جود بيلينغهام", nationality: "إنجلترا", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "فينيسيوس جونيور", nationality: "البرازيل", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "كيفين دي بروين", nationality: "بلجيكا", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "مانويل نوير", nationality: "ألمانيا", position: "حارس مرمى", category: "دوري أبطال أوروبا" },
    { name: "إيكر كاسياس", nationality: "إسبانيا", position: "حارس مرمى", category: "دوري أبطال أوروبا" },
    { name: "جانلويجي بوفون", nationality: "إيطاليا", position: "حارس مرمى", category: "دوري أبطال أوروبا" },
    { name: "تييري هنري", nationality: "فرنسا", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "كاكا", nationality: "البرازيل", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "توني كروس", nationality: "ألمانيا", position: "وسط", category: "دوري أبطال أوروبا" },
    { name: "توماس مولر", nationality: "ألمانيا", position: "مهاجم", category: "دوري أبطال أوروبا" },
    { name: "سيرخيو راموس", nationality: "إسبانيا", position: "مدافع", category: "دوري أبطال أوروبا" },
    { name: "باولو مالديني", nationality: "إيطاليا", position: "مدافع", category: "دوري أبطال أوروبا" },
    { name: "فيرجيل فان دايك", nationality: "هولندا", position: "مدافع", category: "دوري أبطال أوروبا" },

    /* ============ الدوري الإنجليزي ============ */
    { name: "محمد صلاح", nationality: "مصر", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "واين روني", nationality: "إنجلترا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "ستيفن جيرارد", nationality: "إنجلترا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "فرانك لامبارد", nationality: "إنجلترا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "باتريك فييرا", nationality: "فرنسا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "ديفيد بيكهام", nationality: "إنجلترا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "سيرخيو أجويرو", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "هاري كين", nationality: "إنجلترا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "رياض محرز", nationality: "الجزائر", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "ساديو ماني", nationality: "السنغال", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "ديدييه دروغبا", nationality: "ساحل العاج", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "يايا توريه", nationality: "ساحل العاج", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "فنسنت كومباني", nationality: "بلجيكا", position: "مدافع", category: "الدوري الإنجليزي" },
    { name: "ريو فرديناند", nationality: "إنجلترا", position: "مدافع", category: "الدوري الإنجليزي" },
    { name: "جون تيري", nationality: "إنجلترا", position: "مدافع", category: "الدوري الإنجليزي" },
    { name: "بيتر تشيك", nationality: "التشيك", position: "حارس مرمى", category: "الدوري الإنجليزي" },
    { name: "ديفيد دي خيا", nationality: "إسبانيا", position: "حارس مرمى", category: "الدوري الإنجليزي" },
    { name: "أليسون بيكر", nationality: "البرازيل", position: "حارس مرمى", category: "الدوري الإنجليزي" },
    { name: "إيدرسون", nationality: "البرازيل", position: "حارس مرمى", category: "الدوري الإنجليزي" },
    { name: "نغولو كانتي", nationality: "فرنسا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "بول بوغبا", nationality: "فرنسا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "بول سكولز", nationality: "إنجلترا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "سيسك فابريغاس", nationality: "إسبانيا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "ديفيد سيلفا", nationality: "إسبانيا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "رود فان نيستلروي", nationality: "هولندا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "روبين فان بيرسي", nationality: "هولندا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "ألان شيرر", nationality: "إنجلترا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "راداميل فالكاو", nationality: "كولومبيا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "ألكسيس سانشيز", nationality: "تشيلي", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "ماركوس راشفورد", nationality: "إنجلترا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "رحيم ستيرلينغ", nationality: "إنجلترا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "بوكايو ساكا", nationality: "إنجلترا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "ويليام ساليبا", nationality: "فرنسا", position: "مدافع", category: "الدوري الإنجليزي" },
    { name: "كريستيان روميرو", nationality: "الأرجنتين", position: "مدافع", category: "الدوري الإنجليزي" },
    { name: "إنزو فرنانديز", nationality: "الأرجنتين", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "داروين نونيز", nationality: "الأوروغواي", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "مويسيس كايسيدو", nationality: "إكوادور", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "ديكلان رايس", nationality: "إنجلترا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "فيل فودين", nationality: "إنجلترا", position: "وسط", category: "الدوري الإنجليزي" },
    { name: "كول بالمر", nationality: "إنجلترا", position: "مهاجم", category: "الدوري الإنجليزي" },
    { name: "سون هيونغ مين", nationality: "كوريا الجنوبية", position: "مهاجم", category: "الدوري الإنجليزي" },

    /* ============ الدوري الإسباني ============ */
    { name: "دييغو ميليتو", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "ريفالدو", nationality: "البرازيل", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "راؤول غونزاليس", nationality: "إسبانيا", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "فرناندو توريس", nationality: "إسبانيا", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "دافيد فيا", nationality: "إسبانيا", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "دييغو فورلان", nationality: "الأوروغواي", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "لويس سواريز", nationality: "الأوروغواي", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "أنطوان غريزمان", nationality: "فرنسا", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "نيمار دا سيلفا", nationality: "البرازيل", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "داني ألفيش", nationality: "البرازيل", position: "مدافع", category: "الدوري الإسباني" },
    { name: "مارسيلو", nationality: "البرازيل", position: "مدافع", category: "الدوري الإسباني" },
    { name: "جيرارد بيكيه", nationality: "إسبانيا", position: "مدافع", category: "الدوري الإسباني" },
    { name: "كارليس بويول", nationality: "إسبانيا", position: "مدافع", category: "الدوري الإسباني" },
    { name: "سيرخيو بوسكيتس", nationality: "إسبانيا", position: "وسط", category: "الدوري الإسباني" },
    { name: "تشابي ألونسو", nationality: "إسبانيا", position: "وسط", category: "الدوري الإسباني" },
    { name: "كاسيميرو", nationality: "البرازيل", position: "وسط", category: "الدوري الإسباني" },
    { name: "إيفان راكيتيتش", nationality: "كرواتيا", position: "وسط", category: "الدوري الإسباني" },
    { name: "فيديريكو فالفيردي", nationality: "الأوروغواي", position: "وسط", category: "الدوري الإسباني" },
    { name: "بيدري", nationality: "إسبانيا", position: "وسط", category: "الدوري الإسباني" },
    { name: "غافي", nationality: "إسبانيا", position: "وسط", category: "الدوري الإسباني" },
    { name: "لامين يامال", nationality: "إسبانيا", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "رودريغو", nationality: "البرازيل", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "خوليان ألفاريز", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري الإسباني" },
    { name: "أوريلين تشواميني", nationality: "فرنسا", position: "وسط", category: "الدوري الإسباني" },
    { name: "إدواردو كامافينغا", nationality: "فرنسا", position: "وسط", category: "الدوري الإسباني" },
    { name: "تيبو كورتوا", nationality: "بلجيكا", position: "حارس مرمى", category: "الدوري الإسباني" },
    { name: "يان أوبلاك", nationality: "سلوفينيا", position: "حارس مرمى", category: "الدوري الإسباني" },
    { name: "مارك أندريه تير شتيغن", nationality: "ألمانيا", position: "حارس مرمى", category: "الدوري الإسباني" },

    /* ============ الدوري الإيطالي ============ */
    { name: "فرانسيسكو توتي", nationality: "إيطاليا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "أليساندرو دل بييرو", nationality: "إيطاليا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "فيليبو إنزاغي", nationality: "إيطاليا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "كريستيان فييري", nationality: "إيطاليا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "أنطونيو دي ناتالي", nationality: "إيطاليا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "أندريا بيرلو", nationality: "إيطاليا", position: "وسط", category: "الدوري الإيطالي" },
    { name: "جينارو غاتوزو", nationality: "إيطاليا", position: "وسط", category: "الدوري الإيطالي" },
    { name: "دانييلي دي روسي", nationality: "إيطاليا", position: "وسط", category: "الدوري الإيطالي" },
    { name: "أليساندرو نيستا", nationality: "إيطاليا", position: "مدافع", category: "الدوري الإيطالي" },
    { name: "فابيو كانافارو", nationality: "إيطاليا", position: "مدافع", category: "الدوري الإيطالي" },
    { name: "جورجيو كيليني", nationality: "إيطاليا", position: "مدافع", category: "الدوري الإيطالي" },
    { name: "ليوناردو بونوتشي", nationality: "إيطاليا", position: "مدافع", category: "الدوري الإيطالي" },
    { name: "غونزالو هيغواين", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "باولو ديبالا", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "لاوتارو مارتينيز", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "زلاتان إبراهيموفيتش", nationality: "السويد", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "فيكتور أوسيمين", nationality: "نيجيريا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "خفيتشا كفاراتسخيليا", nationality: "جورجيا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "أندريه شيفتشينكو", nationality: "أوكرانيا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "خافيير زانيتي", nationality: "الأرجنتين", position: "مدافع", category: "الدوري الإيطالي" },
    { name: "أدريانو", nationality: "البرازيل", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "مايكون", nationality: "البرازيل", position: "وسط", category: "الدوري الإيطالي" },
    { name: "أوليفييه جيرو", nationality: "فرنسا", position: "مهاجم", category: "الدوري الإيطالي" },
    { name: "تيو هيرنانديز", nationality: "فرنسا", position: "مدافع", category: "الدوري الإيطالي" },
    { name: "نيكولو باريلا", nationality: "إيطاليا", position: "وسط", category: "الدوري الإيطالي" },
    { name: "ماركو فيراتي", nationality: "إيطاليا", position: "وسط", category: "الدوري الإيطالي" },    /* ============ الدوري الألماني ============ */
    { name: "ميروسلاف كلوزه", nationality: "ألمانيا", position: "مهاجم", category: "الدوري الألماني" },
    { name: "ماريو غوميز", nationality: "ألمانيا", position: "مهاجم", category: "الدوري الألماني" },
    { name: "لوكاس بودولسكي", nationality: "ألمانيا", position: "مهاجم", category: "الدوري الألماني" },
    { name: "باستيان شفاينشتايغر", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "ميشائيل بالاك", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "مسعود أوزيل", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "ماركو رويس", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "فيليب لام", nationality: "ألمانيا", position: "مدافع", category: "الدوري الألماني" },
    { name: "ماتس هوملز", nationality: "ألمانيا", position: "مدافع", category: "الدوري الألماني" },
    { name: "جيروم بواتينغ", nationality: "ألمانيا", position: "مدافع", category: "الدوري الألماني" },
    { name: "فرانك ريبيري", nationality: "فرنسا", position: "مهاجم", category: "الدوري الألماني" },
    { name: "آريين روبن", nationality: "هولندا", position: "مهاجم", category: "الدوري الألماني" },
    { name: "بيير إيميريك أوباميانغ", nationality: "الغابون", position: "مهاجم", category: "الدوري الألماني" },
    { name: "جمال موسيالا", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "فلوريان فيرتز", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "إلكاي غوندوغان", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "سيرج غنابري", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "ليروي ساني", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "يوزوا كيميش", nationality: "ألمانيا", position: "وسط", category: "الدوري الألماني" },
    { name: "أنطونيو روديغر", nationality: "ألمانيا", position: "مدافع", category: "الدوري الألماني" },
    { name: "ماريو غوتزه", nationality: "ألمانيا", position: "مهاجم", category: "الدوري الألماني" },
    { name: "كريستوفر نكونكو", nationality: "فرنسا", position: "مهاجم", category: "الدوري الألماني" },

    /* ============ الدوري الفرنسي ============ */
    { name: "وسام بن يدر", nationality: "فرنسا", position: "مهاجم", category: "الدوري الفرنسي" },
    { name: "أنخل دي ماريا", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري الفرنسي" },
    { name: "إدينسون كافاني", nationality: "الأوروغواي", position: "مهاجم", category: "الدوري الفرنسي" },
    { name: "راداميل فالكاو", nationality: "كولومبيا", position: "مهاجم", category: "الدوري الفرنسي" },
    { name: "تياغو سيلفا", nationality: "البرازيل", position: "مدافع", category: "الدوري الفرنسي" },
    { name: "ماركينيوس", nationality: "البرازيل", position: "مدافع", category: "الدوري الفرنسي" },
    { name: "جانلويجي دوناروما", nationality: "إيطاليا", position: "حارس مرمى", category: "الدوري الفرنسي" },
    { name: "أشرف حكيمي", nationality: "المغرب", position: "مدافع", category: "الدوري الفرنسي" },
    { name: "لوكاس باكيتا", nationality: "البرازيل", position: "وسط", category: "الدوري الفرنسي" },
    { name: "حاتم بن عرفة", nationality: "فرنسا", position: "وسط", category: "الدوري الفرنسي" },
    { name: "ألكسندر لاكازيت", nationality: "فرنسا", position: "مهاجم", category: "الدوري الفرنسي" },
    { name: "ديميتري باييت", nationality: "فرنسا", position: "وسط", category: "الدوري الفرنسي" },
    { name: "عثمان ديمبيلي", nationality: "فرنسا", position: "مهاجم", category: "الدوري الفرنسي" },
    { name: "برادلي باركولا", nationality: "فرنسا", position: "مهاجم", category: "الدوري الفرنسي" },

    /* ============ الدوري البرتغالي ============ */
    { name: "برونو فرنانديز", nationality: "البرتغال", position: "وسط", category: "الدوري البرتغالي" },
    { name: "جواو فيليكس", nationality: "البرتغال", position: "مهاجم", category: "الدوري البرتغالي" },
    { name: "برناردو سيلفا", nationality: "البرتغال", position: "مهاجم", category: "الدوري البرتغالي" },
    { name: "بيبي", nationality: "البرتغال", position: "مدافع", category: "الدوري البرتغالي" },
    { name: "ريكاردو كواريسما", nationality: "البرتغال", position: "مهاجم", category: "الدوري البرتغالي" },
    { name: "هالك", nationality: "البرازيل", position: "مهاجم", category: "الدوري البرتغالي" },
    { name: "جاكسون مارتينيز", nationality: "كولومبيا", position: "مهاجم", category: "الدوري البرتغالي" },
    { name: "نيكولاس غايتان", nationality: "الأرجنتين", position: "وسط", category: "الدوري البرتغالي" },
    { name: "بابلو آيمار", nationality: "الأرجنتين", position: "وسط", category: "الدوري البرتغالي" },
    { name: "روبن نيفيز", nationality: "البرتغال", position: "وسط", category: "الدوري البرتغالي" },
    { name: "فيكتور غيوكيرس", nationality: "السويد", position: "مهاجم", category: "الدوري البرتغالي" },
    { name: "خافيير سافيولا", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري البرتغالي" },

    /* ============ الدوري التركي ============ */
    { name: "أليكس دي سوزا", nationality: "البرازيل", position: "وسط", category: "الدوري التركي" },
    { name: "ديدييه دروغبا", nationality: "ساحل العاج", position: "مهاجم", category: "الدوري التركي" },
    { name: "ويسلي سنايدر", nationality: "هولندا", position: "وسط", category: "الدوري التركي" },
    { name: "سامويل إيتو", nationality: "الكاميرون", position: "مهاجم", category: "الدوري التركي" },
    { name: "ماورو إيكاردي", nationality: "الأرجنتين", position: "مهاجم", category: "الدوري التركي" },
    { name: "إيمانويل أمونيكي", nationality: "نيجيريا", position: "مهاجم", category: "الدوري التركي" },
    { name: "أردا توران", nationality: "تركيا", position: "وسط", category: "الدوري التركي" },
    { name: "بوراك يلماز", nationality: "تركيا", position: "مهاجم", category: "الدوري التركي" },
    { name: "سينك توسون", nationality: "تركيا", position: "مهاجم", category: "الدوري التركي" },
    { name: "مسعود أوزيل", nationality: "ألمانيا", position: "وسط", category: "الدوري التركي" },
    { name: "إيدين دجيكو", nationality: "البوسنة والهرسك", position: "مهاجم", category: "الدوري التركي" },
    { name: "أردا غولر", nationality: "تركيا", position: "وسط", category: "الدوري التركي" },
    { name: "رستم رتشبر", nationality: "تركيا", position: "حارس مرمى", category: "الدوري التركي" },

    /* ============ الدوري المصري ============ */
    { name: "محمد أبوتريكة", nationality: "مصر", position: "مهاجم", category: "الدوري المصري" },
    { name: "عماد متعب", nationality: "مصر", position: "مهاجم", category: "الدوري المصري" },
    { name: "عمرو زكي", nationality: "مصر", position: "مهاجم", category: "الدوري المصري" },
    { name: "حسام حسن", nationality: "مصر", position: "مهاجم", category: "الدوري المصري" },
    { name: "أحمد حسام ميدو", nationality: "مصر", position: "مهاجم", category: "الدوري المصري" },
    { name: "محمد بركات", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "حازم إمام", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "حسني عبد ربه", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "أحمد حسن", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "عصام الحضري", nationality: "مصر", position: "حارس مرمى", category: "الدوري المصري" },
    { name: "محمد الشناوي", nationality: "مصر", position: "حارس مرمى", category: "الدوري المصري" },
    { name: "إكرامي الشحات", nationality: "مصر", position: "حارس مرمى", category: "الدوري المصري" },
    { name: "وائل جمعة", nationality: "مصر", position: "مدافع", category: "الدوري المصري" },
    { name: "إبراهيم سعيد", nationality: "مصر", position: "مدافع", category: "الدوري المصري" },
    { name: "أحمد فتحي", nationality: "مصر", position: "مدافع", category: "الدوري المصري" },
    { name: "سيد معوض", nationality: "مصر", position: "مدافع", category: "الدوري المصري" },
    { name: "عبد الله السعيد", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "رمضان صبحي", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "مصطفى محمد", nationality: "مصر", position: "مهاجم", category: "الدوري المصري" },
    { name: "إمام عاشور", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "أحمد سيد زيزو", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "محمود شيكابالا", nationality: "مصر", position: "مهاجم", category: "الدوري المصري" },
    { name: "وليد سليمان", nationality: "مصر", position: "وسط", category: "الدوري المصري" },
    { name: "علي معلول", nationality: "تونس", position: "مدافع", category: "الدوري المصري" },
    { name: "أوجينيو جونيور أجايي", nationality: "نيجيريا", position: "مهاجم", category: "الدوري المصري" },
    { name: "أمادو فلافيو", nationality: "أنغولا", position: "مهاجم", category: "الدوري المصري" },
    { name: "جيلبرتو", nationality: "أنغولا", position: "مهاجم", category: "الدوري المصري" },
    { name: "أشرف بن شرقي", nationality: "المغرب", position: "مهاجم", category: "الدوري المصري" },
    { name: "محمد عبد المنعم", nationality: "مصر", position: "مدافع", category: "الدوري المصري" },

    /* ============ الدوري السعودي ============ */
    { name: "سامي الجابر", nationality: "السعودية", position: "مهاجم", category: "الدوري السعودي" },
    { name: "ياسر القحطاني", nationality: "السعودية", position: "مهاجم", category: "الدوري السعودي" },
    { name: "ماجد عبدالله", nationality: "السعودية", position: "مهاجم", category: "الدوري السعودي" },
    { name: "محمد الشلهوب", nationality: "السعودية", position: "وسط", category: "الدوري السعودي" },
    { name: "سعود كريري", nationality: "السعودية", position: "وسط", category: "الدوري السعودي" },
    { name: "فهد المولد", nationality: "السعودية", position: "وسط", category: "الدوري السعودي" },
    { name: "سالم الدوسري", nationality: "السعودية", position: "وسط", category: "الدوري السعودي" },
    { name: "فراس البريكان", nationality: "السعودية", position: "مهاجم", category: "الدوري السعودي" },
    { name: "محمد الدعيع", nationality: "السعودية", position: "حارس مرمى", category: "الدوري السعودي" },
    { name: "أسامة هوساوي", nationality: "السعودية", position: "مدافع", category: "الدوري السعودي" },
    { name: "عبد الرزاق حمد الله", nationality: "المغرب", position: "مهاجم", category: "الدوري السعودي" },
    { name: "عمر السومة", nationality: "سوريا", position: "مهاجم", category: "الدوري السعودي" },
    { name: "مالكوم", nationality: "البرازيل", position: "مهاجم", category: "الدوري السعودي" },
    { name: "فابينيو", nationality: "البرازيل", position: "وسط", category: "الدوري السعودي" },
    { name: "كريم بنزيما", nationality: "فرنسا", position: "مهاجم", category: "الدوري السعودي" },
    { name: "كريستيانو رونالدو", nationality: "البرتغال", position: "مهاجم", category: "الدوري السعودي" },
    { name: "رياض محرز", nationality: "الجزائر", position: "مهاجم", category: "الدوري السعودي" },
    { name: "ساديو ماني", nationality: "السنغال", position: "مهاجم", category: "الدوري السعودي" },
    { name: "روبن نيفيز", nationality: "البرتغال", position: "وسط", category: "الدوري السعودي" },
    { name: "نجولو كانتي", nationality: "فرنسا", position: "وسط", category: "الدوري السعودي" },

    /* ============ كأس العالم ============ */
    { name: "ليونيل ميسي", nationality: "الأرجنتين", position: "مهاجم", category: "كأس العالم" },
    { name: "كيليان إمبابي", nationality: "فرنسا", position: "مهاجم", category: "كأس العالم" },
    { name: "ميروسلاف كلوزه", nationality: "ألمانيا", position: "مهاجم", category: "كأس العالم" },
    { name: "رونالدو نازاريو", nationality: "البرازيل", position: "مهاجم", category: "كأس العالم" },
    { name: "جانلويجي بوفون", nationality: "إيطاليا", position: "حارس مرمى", category: "كأس العالم" },
    { name: "إيكر كاسياس", nationality: "إسبانيا", position: "حارس مرمى", category: "كأس العالم" },
    { name: "لوكا مودريتش", nationality: "كرواتيا", position: "وسط", category: "كأس العالم" },
    { name: "أندريس إنييستا", nationality: "إسبانيا", position: "وسط", category: "كأس العالم" },
    { name: "فابيو كانافارو", nationality: "إيطاليا", position: "مدافع", category: "كأس العالم" },
    { name: "فيليب لام", nationality: "ألمانيا", position: "مدافع", category: "كأس العالم" },
    { name: "باستيان شفاينشتايغر", nationality: "ألمانيا", position: "وسط", category: "كأس العالم" },
    { name: "ماريو غوتزه", nationality: "ألمانيا", position: "مهاجم", category: "كأس العالم" },
    { name: "توني كروس", nationality: "ألمانيا", position: "وسط", category: "كأس العالم" },
    { name: "توماس مولر", nationality: "ألمانيا", position: "مهاجم", category: "كأس العالم" },
    { name: "زين الدين زيدان", nationality: "فرنسا", position: "وسط", category: "كأس العالم" },
    { name: "أنطوان غريزمان", nationality: "فرنسا", position: "مهاجم", category: "كأس العالم" },
    { name: "تييري هنري", nationality: "فرنسا", position: "مهاجم", category: "كأس العالم" },
    { name: "بنجامين بافار", nationality: "فرنسا", position: "مدافع", category: "كأس العالم" },
    { name: "هوغو لوريس", nationality: "فرنسا", position: "حارس مرمى", category: "كأس العالم" },
    { name: "إيميليانو مارتينيز", nationality: "الأرجنتين", position: "حارس مرمى", category: "كأس العالم" },
    { name: "أنخل دي ماريا", nationality: "الأرجنتين", position: "وسط", category: "كأس العالم" },
    { name: "خوليان ألفاريز", nationality: "الأرجنتين", position: "مهاجم", category: "كأس العالم" },
    { name: "رودريغو دي بول", nationality: "الأرجنتين", position: "وسط", category: "كأس العالم" },
    { name: "إيفان بيريشيتش", nationality: "كرواتيا", position: "مهاجم", category: "كأس العالم" },
    { name: "دومينيك ليفاكوفيتش", nationality: "كرواتيا", position: "حارس مرمى", category: "كأس العالم" },
    { name: "سفيان أمرابط", nationality: "المغرب", position: "وسط", category: "كأس العالم" },
    { name: "ياسين بونو", nationality: "المغرب", position: "حارس مرمى", category: "كأس العالم" },
    { name: "يوسف النصيري", nationality: "المغرب", position: "مهاجم", category: "كأس العالم" },
    { name: "أشرف حكيمي", nationality: "المغرب", position: "مدافع", category: "كأس العالم" },
    { name: "عز الدين أوناحي", nationality: "المغرب", position: "وسط", category: "كأس العالم" },
    { name: "رومان سايس", nationality: "المغرب", position: "مدافع", category: "كأس العالم" },
    { name: "نيمار دا سيلفا", nationality: "البرازيل", position: "مهاجم", category: "كأس العالم" },
    { name: "ريفالدو", nationality: "البرازيل", position: "مهاجم", category: "كأس العالم" },
    { name: "رونالدينيو", nationality: "البرازيل", position: "مهاجم", category: "كأس العالم" },
    { name: "كافو", nationality: "البرازيل", position: "مدافع", category: "كأس العالم" },
    { name: "روبرتو كارلوس", nationality: "البرازيل", position: "مدافع", category: "كأس العالم" },
    { name: "دييغو فورلان", nationality: "الأوروغواي", position: "مهاجم", category: "كأس العالم" },
    { name: "لويس سواريز", nationality: "الأوروغواي", position: "مهاجم", category: "كأس العالم" },
    { name: "إدينسون كافاني", nationality: "الأوروغواي", position: "مهاجم", category: "كأس العالم" },
    { name: "هاري كين", nationality: "إنجلترا", position: "مهاجم", category: "كأس العالم" },
    { name: "ديفيد بيكهام", nationality: "إنجلترا", position: "وسط", category: "كأس العالم" },
    { name: "تشافي هيرنانديز", nationality: "إسبانيا", position: "وسط", category: "كأس العالم" },
    { name: "دافيد فيا", nationality: "إسبانيا", position: "مهاجم", category: "كأس العالم" },
    { name: "سيرخيو راموس", nationality: "إسبانيا", position: "مدافع", category: "كأس العالم" },
    { name: "كارليس بويول", nationality: "إسبانيا", position: "مدافع", category: "كأس العالم" },
    { name: "أندريا بيرلو", nationality: "إيطاليا", position: "وسط", category: "كأس العالم" },
    { name: "فرانسيسكو توتي", nationality: "إيطاليا", position: "مهاجم", category: "كأس العالم" },
    { name: "أليساندرو دل بييرو", nationality: "إيطاليا", position: "مهاجم", category: "كأس العالم" },
    { name: "ماريو بالوتيلي", nationality: "إيطاليا", position: "مهاجم", category: "كأس العالم" },
    { name: "ويسلي سنايدر", nationality: "هولندا", position: "وسط", category: "كأس العالم" },
    { name: "آريين روبن", nationality: "هولندا", position: "مهاجم", category: "كأس العالم" },
    { name: "روبين فان بيرسي", nationality: "هولندا", position: "مهاجم", category: "كأس العالم" },
    { name: "خاميس رودريغيز", nationality: "كولومبيا", position: "وسط", category: "كأس العالم" },
    { name: "أسامواه جيان", nationality: "غانا", position: "مهاجم", category: "كأس العالم" },
    { name: "الحاج ضيوف", nationality: "السنغال", position: "مهاجم", category: "كأس العالم" },
    { name: "بارك جي سونغ", nationality: "كوريا الجنوبية", position: "وسط", category: "كأس العالم" },
    { name: "كيسوكي هوندا", nationality: "اليابان", position: "وسط", category: "كأس العالم" },
    { name: "لاندمان دونوفان", nationality: "أمريكا", position: "مهاجم", category: "كأس العالم" },
    { name: "خافيير هيرنانديز", nationality: "المكسيك", position: "مهاجم", category: "كأس العالم" },
    { name: "غييرمو أوتشوا", nationality: "المكسيك", position: "حارس مرمى", category: "كأس العالم" },
    { name: "إسلام سليماني", nationality: "الجزائر", position: "مهاجم", category: "كأس العالم" },
    { name: "سفيان فيغولي", nationality: "الجزائر", position: "وسط", category: "كأس العالم" },
    { name: "رايس مبولحي", nationality: "الجزائر", position: "حارس مرمى", category: "كأس العالم" },
    { name: "وهبي الخزري", nationality: "تونس", position: "وسط", category: "كأس العالم" },
    { name: "صالح الشهري", nationality: "السعودية", position: "مهاجم", category: "كأس العالم" },

    /* ============ كأس الأمم الأفريقية ============ */
    { name: "سامويل إيتو", nationality: "الكاميرون", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "ريغوبرت سونغ", nationality: "الكاميرون", position: "مدافع", category: "كأس الأمم الأفريقية" },
    { name: "كارلوس إدريس كاميني", nationality: "الكاميرون", position: "حارس مرمى", category: "كأس الأمم الأفريقية" },
    { name: "فينسينت أبوبكر", nationality: "الكاميرون", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "كارل توكو إيكامبي", nationality: "الكاميرون", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "محمد أبوتريكة", nationality: "مصر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "عصام الحضري", nationality: "مصر", position: "حارس مرمى", category: "كأس الأمم الأفريقية" },
    { name: "حسام حسن", nationality: "مصر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "أحمد حسن", nationality: "مصر", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "عماد متعب", nationality: "مصر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "عمرو زكي", nationality: "مصر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "حسني عبد ربه", nationality: "مصر", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "وائل جمعة", nationality: "مصر", position: "مدافع", category: "كأس الأمم الأفريقية" },
    { name: "محمد صلاح", nationality: "مصر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "ديدييه دروغبا", nationality: "ساحل العاج", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "يايا توريه", nationality: "ساحل العاج", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "كولو توريه", nationality: "ساحل العاج", position: "مدافع", category: "كأس الأمم الأفريقية" },
    { name: "سالومون كالو", nationality: "ساحل العاج", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "إلفين كيسي", nationality: "ساحل العاج", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "سيباستيان هالير", nationality: "ساحل العاج", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "فرانك كيسي", nationality: "ساحل العاج", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "ساديو ماني", nationality: "السنغال", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "إدوارد ميندي", nationality: "السنغال", position: "حارس مرمى", category: "كأس الأمم الأفريقية" },
    { name: "كاليدو كوليبالي", nationality: "السنغال", position: "مدافع", category: "كأس الأمم الأفريقية" },
    { name: "إدريسا غي", nationality: "السنغال", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "الحاج ضيوف", nationality: "السنغال", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "هنري كمارا", nationality: "السنغال", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "رياض محرز", nationality: "الجزائر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "إسماعيل بن ناصر", nationality: "الجزائر", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "بغداد بونجاح", nationality: "الجزائر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "سفيان فيغولي", nationality: "الجزائر", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "يوسف بلايلي", nationality: "الجزائر", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "عيسى ماندي", nationality: "الجزائر", position: "مدافع", category: "كأس الأمم الأفريقية" },
    { name: "أوكوتشا نوانكو", nationality: "نيجيريا", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "نوانكو كانو", nationality: "نيجيريا", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "فيكتور أوسيمين", nationality: "نيجيريا", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "أديمولا لوكمان", nationality: "نيجيريا", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "ويلفريد نديدي", nationality: "نيجيريا", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "مايكل إيسيان", nationality: "غانا", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "أسامواه جيان", nationality: "غانا", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "أندريه آيو", nationality: "غانا", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "جوردان آيو", nationality: "غانا", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "توماس بارتي", nationality: "غانا", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "مروان الشماخ", nationality: "المغرب", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "يوسف حجي", nationality: "المغرب", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "المهدي بن عطية", nationality: "المغرب", position: "مدافع", category: "كأس الأمم الأفريقية" },
    { name: "حكيم زياش", nationality: "المغرب", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "سفيان بوفال", nationality: "المغرب", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "إبراهيم دياز", nationality: "المغرب", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "زياد الجزيري", nationality: "تونس", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "فرانسيلودو سانتوس", nationality: "تونس", position: "مهاجم", category: "كأس الأمم الأفريقية" },
    { name: "يوسف المساكني", nationality: "تونس", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "أيمن عبد النور", nationality: "تونس", position: "مدافع", category: "كأس الأمم الأفريقية" },
    { name: "سيدو كيتا", nationality: "مالي", position: "وسط", category: "كأس الأمم الأفريقية" },
    { name: "فريديريك كانوتي", nationality: "مالي", position: "مهاجم", category: "كأس الأمم الأفريقية" },

    /* ============ اليورو الأوروبي ============ */
    { name: "كريستيانو رونالدو", nationality: "البرتغال", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "نونو غوميش", nationality: "البرتغال", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "لويس فيغو", nationality: "البرتغال", position: "وسط", category: "اليورو الأوروبي" },
    { name: "بيبي", nationality: "البرتغال", position: "مدافع", category: "اليورو الأوروبي" },
    { name: "ريناتو سانشيز", nationality: "البرتغال", position: "وسط", category: "اليورو الأوروبي" },
    { name: "إيدر", nationality: "البرتغال", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "زين الدين زيدان", nationality: "فرنسا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "دافيد تريزيغيه", nationality: "فرنسا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "أنطوان غريزمان", nationality: "فرنسا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "كيليان إمبابي", nationality: "فرنسا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "تشافي هيرنانديز", nationality: "إسبانيا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "أندريس إنييستا", nationality: "إسبانيا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "فرناندو توريس", nationality: "إسبانيا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "دافيد فيا", nationality: "إسبانيا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "رودري", nationality: "إسبانيا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "لامين يامال", nationality: "إسبانيا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "داني أولمو", nationality: "إسبانيا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "نيكو ويليامز", nationality: "إسبانيا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "جانلويجي دوناروما", nationality: "إيطاليا", position: "حارس مرمى", category: "اليورو الأوروبي" },
    { name: "جورجيو كيليني", nationality: "إيطاليا", position: "مدافع", category: "اليورو الأوروبي" },
    { name: "ليوناردو بونوتشي", nationality: "إيطاليا", position: "مدافع", category: "اليورو الأوروبي" },
    { name: "ماركو فيراتي", nationality: "إيطاليا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "ماريو بالوتيلي", nationality: "إيطاليا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "أنطونيو كاسانو", nationality: "إيطاليا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "أنغيلوس خاريستياس", nationality: "اليونان", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "تيو زاجوراكيس", nationality: "اليونان", position: "وسط", category: "اليورو الأوروبي" },
    { name: "مانويل نوير", nationality: "ألمانيا", position: "حارس مرمى", category: "اليورو الأوروبي" },
    { name: "باستيان شفاينشتايغر", nationality: "ألمانيا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "ميروسلاف كلوزه", nationality: "ألمانيا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "جمال موسيالا", nationality: "ألمانيا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "فلوريان فيرتز", nationality: "ألمانيا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "واين روني", nationality: "إنجلترا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "هاري كين", nationality: "إنجلترا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "جود بيلينغهام", nationality: "إنجلترا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "رحيم ستيرلينغ", nationality: "إنجلترا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "رود فان نيستلروي", nationality: "هولندا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "ويسلي سنايدر", nationality: "هولندا", position: "وسط", category: "اليورو الأوروبي" },
    { name: "تشافي سيمونز", nationality: "هولندا", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "دانييل مالين", nationality: "هولندا", position: "مدافع", category: "اليورو الأوروبي" },
    { name: "ميلان باروش", nationality: "التشيك", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "بافيل نيدفيد", nationality: "التشيك", position: "وسط", category: "اليورو الأوروبي" },
    { name: "بيتر تشيك", nationality: "التشيك", position: "حارس مرمى", category: "اليورو الأوروبي" },
    { name: "باتريك شيك", nationality: "التشيك", position: "مهاجم", category: "اليورو الأوروبي" },
    { name: "غاريث بيل", nationality: "ويلز", position: "مهاجم", category: "اليورو الأوروبي" }

];

/* ============================================================
   2) قاعدة بيانات الأندية
   كل نادي: { name, league }
   ============================================================ */
const CLUBS_DB = [

    /* ============ أندية إسبانيا ============ */
    { name: "ريال مدريد", league: "الدوري الإسباني" },
    { name: "برشلونة", league: "الدوري الإسباني" },
    { name: "أتلتيكو مدريد", league: "الدوري الإسباني" },
    { name: "إشبيلية", league: "الدوري الإسباني" },
    { name: "فالنسيا", league: "الدوري الإسباني" },
    { name: "ديبورتيفو لاكورونيا", league: "الدوري الإسباني" },

    /* ============ أندية إنجلترا ============ */
    { name: "مانشستر يونايتد", league: "الدوري الإنجليزي" },
    { name: "مانشستر سيتي", league: "الدوري الإنجليزي" },
    { name: "ليفربول", league: "الدوري الإنجليزي" },
    { name: "آرسنال", league: "الدوري الإنجليزي" },
    { name: "تشيلسي", league: "الدوري الإنجليزي" },
    { name: "توتنهام هوتسبير", league: "الدوري الإنجليزي" },
    { name: "نيوكاسل يونايتد", league: "الدوري الإنجليزي" },
    { name: "أستون فيلا", league: "الدوري الإنجليزي" },
    { name: "إيفرتون", league: "الدوري الإنجليزي" },
    { name: "وست هام يونايتد", league: "الدوري الإنجليزي" },
    { name: "ليستر سيتي", league: "الدوري الإنجليزي" },
    { name: "ولفرهامبتون", league: "الدوري الإنجليزي" },
    { name: "برايتون", league: "الدوري الإنجليزي" },
    { name: "كريستال بالاس", league: "الدوري الإنجليزي" },
    { name: "فولهام", league: "الدوري الإنجليزي" },
    { name: "برينتفورد", league: "الدوري الإنجليزي" },
    { name: "بورنموث", league: "الدوري الإنجليزي" },
    { name: "بيرنلي", league: "الدوري الإنجليزي" },
    { name: "شيفيلد يونايتد", league: "الدوري الإنجليزي" },
    { name: "لوتون تاون", league: "الدوري الإنجليزي" },
    { name: "ساوثهامبتون", league: "الدوري الإنجليزي" },

    /* ============ أندية ألمانيا ============ */
    { name: "بايرن ميونخ", league: "الدوري الألماني" },
    { name: "بوروسيا دورتموند", league: "الدوري الألماني" },
    { name: "لايبزيغ", league: "الدوري الألماني" },
    { name: "باير ليفركوزن", league: "الدوري الألماني" },
    { name: "شالكه", league: "الدوري الألماني" },
    { name: "فيردر بريمن", league: "الدوري الألماني" },

    /* ============ أندية إيطاليا ============ */
    { name: "إنتر ميلان", league: "الدوري الإيطالي" },
    { name: "إيه سي ميلان", league: "الدوري الإيطالي" },
    { name: "يوفنتوس", league: "الدوري الإيطالي" },
    { name: "نابولي", league: "الدوري الإيطالي" },
    { name: "روما", league: "الدوري الإيطالي" },
    { name: "لاتسيو", league: "الدوري الإيطالي" },
    { name: "أتالانتا", league: "الدوري الإيطالي" },

    /* ============ أندية فرنسا ============ */
    { name: "باريس سان جيرمان", league: "الدوري الفرنسي" },
    { name: "أولمبيك ليون", league: "الدوري الفرنسي" },
    { name: "أولمبيك مارسيليا", league: "الدوري الفرنسي" },
    { name: "موناكو", league: "الدوري الفرنسي" },
    { name: "ليل", league: "الدوري الفرنسي" },

    /* ============ أندية البرتغال ============ */
    { name: "بنفيكا", league: "الدوري البرتغالي" },
    { name: "بورتو", league: "الدوري البرتغالي" },
    { name: "سبورتينغ لشبونة", league: "الدوري البرتغالي" },
    { name: "براغا", league: "الدوري البرتغالي" },

    /* ============ أندية تركيا ============ */
    { name: "غالاتاسراي", league: "الدوري التركي" },
    { name: "فنربخشة", league: "الدوري التركي" },
    { name: "بشكتاش", league: "الدوري التركي" },
    { name: "طرابزون سبور", league: "الدوري التركي" },

    /* ============ أندية مصر ============ */
    { name: "الأهلي المصري", league: "الدوري المصري" },
    { name: "الزمالك المصري", league: "الدوري المصري" },
    { name: "الإسماعيلي", league: "الدوري المصري" },
    { name: "بيراميدز", league: "الدوري المصري" },

    /* ============ أندية السعودية ============ */
    { name: "الهلال السعودي", league: "الدوري السعودي" },
    { name: "النصر السعودي", league: "الدوري السعودي" },
    { name: "الأهلي السعودي", league: "الدوري السعودي" },
    { name: "الاتحاد السعودي", league: "الدوري السعودي" },
    { name: "الشباب السعودي", league: "الدوري السعودي" },

    /* ============ أندية أوروبية أخرى ============ */
    { name: "أياكس أمستردام", league: "الدوري الهولندي" },
    { name: "بي إس في أيندهوفن", league: "الدوري الهولندي" },
    { name: "فاينورد", league: "الدوري الهولندي" },
    { name: "سيلتيك", league: "الدوري الاسكتلندي" },
    { name: "غلاسكو رينجرز", league: "الدوري الاسكتلندي" },
    { name: "شاختار دونيتسك", league: "الدوري الأوكراني" },
    { name: "دينامو كييف", league: "الدوري الأوكراني" },
    { name: "زينيت سانت بطرسبرغ", league: "الدوري الروسي" },
    { name: "سيسكا موسكو", league: "الدوري الروسي" },
    { name: "سلافيا براغ", league: "الدوري التشيكي" },
    { name: "سبارتا براغ", league: "الدوري التشيكي" },
    { name: "ريد بول سالزبورغ", league: "الدوري النمساوي" },
    { name: "كلوب بروج", league: "الدوري البلجيكي" },
    { name: "أندرلخت", league: "الدوري البلجيكي" },
    { name: "فيكتوري بيلزن", league: "الدوري التشيكي" },
    { name: "بينفينتو", league: "الدوري الإيطالي" }];

/* ============================================================
   3) نظام الشهرة (Fame System)
   5 = أسطورة عالمية | 4 = نجم كبير | 3 = نجم معروف
   2 = لاعب جيد | 1 = لاعب أقل شهرة
   
   آلية اختيار AI:
   - AI سهل: يختار من 4-5 نجوم (لاعبين مشهورين)
   - AI متوسط: يختار من 3-4 نجوم
   - AI صعب: يختار من 1-2 نجوم (لاعبين أقل شهرة)
   ============================================================ */
const PLAYER_FAME = {

    /* ============ 5 نجوم - أساطير عالمية ============ */
    "ليونيل ميسي": 5, "كريستيانو رونالدو": 5, "زين الدين زيدان": 5,
    "رونالدينيو": 5, "رونالدو نازاريو": 5, "كاكا": 5,
    "تييري هنري": 5, "محمد صلاح": 5, "نيمار دا سيلفا": 5,
    "كيليان إمبابي": 5, "إرلينغ هالاند": 5, "باولو مالديني": 5,
    "فرانسيسكو توتي": 5, "أليساندرو دل بييرو": 5, "زلاتان إبراهيموفيتش": 5,
    "أندريا بيرلو": 5, "فابيو كانافارو": 5, "روبرت ليفاندوفسكي": 5,
    "لوكا مودريتش": 5, "أندريس إنييستا": 5, "تشافي هيرنانديز": 5,
    "سيرخيو راموس": 5, "إيكر كاسياس": 5, "جانلويجي بوفون": 5,
    "مانويل نوير": 5, "دافيد بيكهام": 5, "واين روني": 5,
    "ستيفن جيرارد": 5, "فرانك لامبارد": 5, "راؤول غونزاليس": 5,
    "دافيد فيا": 5, "فرناندو توريس": 5, "لويس سواريز": 5,
    "سامويل إيتو": 5, "ديدييه دروغبا": 5, "ميروسلاف كلوزه": 5,
    "فيليب لام": 5, "باستيان شفاينشتايغر": 5, "آريين روبن": 5,

    /* ============ 4 نجوم - نجوم كبار ============ */
    "كريم بنزيما": 4, "جود بيلينغهام": 4, "فينيسيوس جونيور": 4,
    "كيفين دي بروين": 4, "فيرجيل فان دايك": 4, "أنطوان غريزمان": 4,
    "خوليان ألفاريز": 4, "بيدري": 4, "غافي": 4,
    "لامين يامال": 4, "رودريغو": 4, "تيبو كورتوا": 4,
    "يان أوبلاك": 4, "سيرخيو أغويرو": 4, "هاري كين": 4,
    "رياض محرز": 4, "ساديو ماني": 4, "يايا توريه": 4,
    "فنسنت كومباني": 4, "ريو فرديناند": 4, "جون تيري": 4,
    "بيتر تشيك": 4, "أليسون بيكر": 4, "إيدرسون": 4,
    "ديفيد دي خيا": 4, "سيسك فابريغاس": 4, "ديفيد سيلفا": 4,
    "رود فان نيستلروي": 4, "روبين فان بيرسي": 4, "ألان شيرر": 4,
    "ماركوس راشفورد": 4, "رحيم ستيرلينغ": 4, "بوكايو ساكا": 4,
    "فيل فودين": 4, "كول بالمر": 4, "سون هيونغ مين": 4,
    "أليساندرو نيستا": 4, "جورجيو كيليني": 4, "ليوناردو بونوتشي": 4,
    "جينارو غاتوزو": 4, "دانييلي دي روسي": 4, "غونزالو هيغواين": 4,
    "باولو ديبالا": 4, "لاوتارو مارتينيز": 4, "فيكتور أوسيمين": 4,
    "خفيتشا كفاراتسخيليا": 4, "أندريه شيفتشينكو": 4, "خافيير زانيتي": 4,
    "فرانك ريبيري": 4, "ماركو رويس": 4, "فيليب لام": 4,
    "ماتس هوملز": 4, "جيروم بواتينغ": 4, "مسعود أوزيل": 4,
    "جمال موسيالا": 4, "فلوريان فيرتز": 4, "إلكاي غوندوغان": 4,
    "يوزوا كيميش": 4, "أنطونيو روديغر": 4, "ماريو غوتزه": 4,
    "أنخل دي ماريا": 4, "إدينسون كافاني": 4, "راداميل فالكاو": 4,
    "تياغو سيلفا": 4, "ماركينيوس": 4, "جانلويجي دوناروما": 4,
    "أشرف حكيمي": 4, "عثمان ديمبيلي": 4, "برونو فرنانديز": 4,
    "برناردو سيلفا": 4, "بيبي": 4, "هالك": 4,
    "ويسلي سنايدر": 4, "أردا توران": 4, "إيدين دجيكو": 4,
    "محمد أبوتريكة": 4, "عصام الحضري": 4, "حسام حسن": 4,
    "أحمد حسن": 4, "محمد بركات": 4, "وائل جمعة": 4,
    "سامي الجابر": 4, "ياسر القحطاني": 4, "ماجد عبدالله": 4,
    "سالم الدوسري": 4, "محمد الدعيع": 4, "خاميس رودريغيز": 4,
    "ريفالدو": 4, "روبرتو كارلوس": 4, "كافو": 4,

    /* ============ 3 نجوم - نجوم معروفين ============ */
    "إيميليانو مارتينيز": 3, "هوغو لوريس": 3, "دومينيك ليفاكوفيتش": 3,
    "ياسين بونو": 3, "سفيان أمرابط": 3, "يوسف النصيري": 3,
    "عز الدين أوناحي": 3, "رومان سايس": 3, "إيفان بيريشيتش": 3,
    "رودريغو دي بول": 3, "هاري ماغواير": 3, "كريستيان روميرو": 3,
    "إنزو فرنانديز": 3, "داروين نونيز": 3, "مويسيس كايسيدو": 3,
    "ديكلان رايس": 3, "ويليام ساليبا": 3, "بول بوغبا": 3,
    "نغولو كانتي": 3, "مارك أندريه تير شتيغن": 3, "إيفان راكيتيتش": 3,
    "فيديريكو فالفيردي": 3, "أوريلين تشواميني": 3, "إدواردو كامافينغا": 3,
    "كاسيميرو": 3, "سيرخيو بوسكيتس": 3, "جيرارد بيكيه": 3,
    "كارليس بويول": 3, "داني ألفيش": 3, "مارسيلو": 3,
    "تشابي ألونسو": 3, "دييغو فورلان": 3, "دييغو ميليتو": 3,
    "خوان سيباستيان فيرون": 3, "أنطونيو دي ناتالي": 3, "كريستيان فييري": 3,
    "فيليبو إنزاغي": 3, "أدريانو": 3, "مايكون": 3,
    "أوليفييه جيرو": 3, "تيو هيرنانديز": 3, "نيكولو باريلا": 3,
    "ماركو فيراتي": 3, "لوكاس باكيتا": 3, "ألكسندر لاكازيت": 3,
    "ديميتري باييت": 3, "برادلي باركولا": 3, "وسام بن يدر": 3,
    "ماريو غوميز": 3, "لوكاس بودولسكي": 3, "ميشائيل بالاك": 3,
    "سيرج غنابري": 3, "ليروي ساني": 3, "بيير إيميريك أوباميانغ": 3,
    "كريستوفر نكونكو": 3, "ماريو غوميز": 3, "لوكاس بودولسكي": 3,
    "جواو فيليكس": 3, "ريكاردو كواريسما": 3, "جاكسون مارتينيز": 3,
    "نيكولاس غايتان": 3, "بابلو آيمار": 3, "روبن نيفيز": 3,
    "فيكتور غيوكيرس": 3, "خافيير سافيولا": 3, "أليكس دي سوزا": 3,
    "ماورو إيكاردي": 3, "إيمانويل أمونيكي": 3, "بوراك يلماز": 3,
    "سينك توسون": 3, "أردا غولر": 3, "رستم رتشبر": 3,
    "عماد متعب": 3, "عمرو زكي": 3, "أحمد حسام ميدو": 3,
    "حازم إمام": 3, "حسني عبد ربه": 3, "محمد الشناوي": 3,
    "إكرامي الشحات": 3, "إبراهيم سعيد": 3, "أحمد فتحي": 3,
    "سيد معوض": 3, "عبد الله السعيد": 3, "رمضان صبحي": 3,
    "مصطفى محمد": 3, "إمام عاشور": 3, "أحمد سيد زيزو": 3,
    "محمود شيكابالا": 3, "وليد سليمان": 3, "علي معلول": 3,
    "محمد عبد المنعم": 3, "محمد الشلهوب": 3, "سعود كريري": 3,
    "فهد المولد": 3, "فراس البريكان": 3, "أسامة هوساوي": 3,
    "عبد الرزاق حمد الله": 3, "عمر السومة": 3, "مالكوم": 3,
    "فابينيو": 3, "كريم بنزيما": 3, "نجولو كانتي": 3,
    "مروان الشماخ": 3, "يوسف حجي": 3, "المهدي بن عطية": 3,
    "حكيم زياش": 3, "سفيان بوفال": 3, "إبراهيم دياز": 3,
    "زياد الجزيري": 3, "فرانسيلودو سانتوس": 3, "يوسف المساكني": 3,
    "أيمن عبد النور": 3, "سيدو كيتا": 3, "فريديريك كانوتي": 3,

    /* ============ 2 نجوم - لاعبين جيدين ============ */
    "أوجينيو جونيور أجايي": 2, "أمادو فلافيو": 2, "جيلبرتو": 2,
    "أشرف بن شرقي": 2, "محمد عبد المنعم": 2, "جون تيري": 2,
    "باتريك فييرا": 2, "بول سكولز": 2, "كارل توكو إيكامبي": 2,
    "فينسينت أبوبكر": 2, "ريغوبرت سونغ": 2, "كارلوس إدريس كاميني": 2,
    "سالومون كالو": 2, "إلفين كيسي": 2, "سيباستيان هالير": 2,
    "فرانك كيسي": 2, "إدوارد ميندي": 2, "كاليدو كوليبالي": 2,
    "إدريسا غي": 2, "هنري كمارا": 2, "إسماعيل بن ناصر": 2,
    "بغداد بونجاح": 2, "يوسف بلايلي": 2, "عيسى ماندي": 2,
    "أوكوتشا نوانكو": 2, "نوانكو كانو": 2, "أديمولا لوكمان": 2,
    "ويلفريد نديدي": 2, "مايكل إيسيان": 2, "أسامواه جيان": 2,
    "أندريه آيو": 2, "جوردان آيو": 2, "توماس بارتي": 2,
    "الحاج ضيوف": 2, "أندريه شيفتشينكو": 2, "توماس مولر": 2,
    "توني كروس": 2, "كاكا": 2, "جوردي ألبا": 2,
    "أنطوان غريزمان": 2, "خاميس رودريغيز": 2, "إيسكو": 2,
    "لوكا يوفيتش": 2, "ماريو بالوتيلي": 2, "أنطونيو كاسانو": 2,
    "أنغيلوس خاريستياس": 2, "تيو زاجوراكيس": 2, "ميلان باروش": 2,
    "بافيل نيدفيد": 2, "باتريك شيك": 2, "غاريث بيل": 2,
    "دانييل مالين": 2, "تشافي سيمونز": 2, "لودفيغ فيليب": 2,
    "بول بوغبا": 2, "يايا توريه": 2, "مايكون": 2,
    "أدريانو": 2, "ماتس هوملز": 2, "جيروم بواتينغ": 2,
    "سيرج غنابري": 2, "ليروي ساني": 2, "ماركو رويس": 2,
    "ماريو غوتزه": 2, "أوليفييه جيرو": 2, "تيو هيرنانديز": 2,
    "نيكولو باريلا": 2, "ماركو فيراتي": 2, "ماتيو غندوزي": 2,
    "حاتم بن عرفة": 2, "ديميتري باييت": 2, "ألكسندر لاكازيت": 2,
    "وسام بن يدر": 2, "برادلي باركولا": 2, "ريكاردو كواريسما": 2,
    "جاكسون مارتينيز": 2, "نيكولاس غايتان": 2, "بابلو آيمار": 2,
    "خافيير سافيولا": 2, "أليكس دي سوزا": 2, "إيمانويل أمونيكي": 2,
    "بوراك يلماز": 2, "سينك توسون": 2, "أردا غولر": 2,
    "رستم رتشبر": 2, "مروان الشماخ": 2, "يوسف حجي": 2,
    "حكيم زياش": 2, "سفيان بوفال": 2, "إبراهيم دياز": 2,
    "زياد الجزيري": 2, "فرانسيلودو سانتوس": 2, "يوسف المساكني": 2,
    "أيمن عبد النور": 2, "سيدو كيتا": 2, "فريديريك كانوتي": 2,
    "بارك جي سونغ": 2, "كيسوكي هوندا": 2, "لاندمان دونوفان": 2,
    "خافيير هيرنانديز": 2, "غييرمو أوتشوا": 2, "إسلام سليماني": 2,
    "سفيان فيغولي": 2, "رايس مبولحي": 2, "وهبي الخزري": 2,
    "صالح الشهري": 2, "عبد المؤمن جابو": 2, "محمد عبد المنعم": 2,

    /* ============ 1 نجمة - لاعبين أقل شهرة ============ */
    "أليكس دي سوزا": 1, "إيمانويل أمونيكي": 1, "أمادو فلافيو": 1,
    "جيلبرتو": 1, "أوجينيو جونيور أجايي": 1, "عبد المؤمن جابو": 1,
    "رايس مبولحي": 1, "صالح الشهري": 1, "وهبي الخزري": 1,
    "كيسوكي هوندا": 1, "بارك جي سونغ": 1, "لاندمان دونوفان": 1,
    "غييرمو أوتشوا": 1, "رومان سايس": 1, "عز الدين أوناحي": 1,
    "كارلوس إدريس كاميني": 1, "ريغوبرت سونغ": 1, "فينسينت أبوبكر": 1,
    "كارل توكو إيكامبي": 1, "سالومون كالو": 1, "إلفين كيسي": 1,
    "ويلفريد نديدي": 1, "نوانكو كانو": 1, "أوكوتشا نوانكو": 1,
    "أنغيلوس خاريستياس": 1, "تيو زاجوراكيس": 1, "ميلان باروش": 1,
    "باتريك شيك": 1, "دانييل مالين": 1, "تشافي سيمونز": 1,
    "رستم رتشبر": 1, "سينك توسون": 1, "بوراك يلماز": 1,
    "فيكتور غيوكيرس": 1, "خافيير سافيولا": 1, "بابلو آيمار": 1,
    "جاكسون مارتينيز": 1, "نيكولاس غايتان": 1, "ريكاردو كواريسما": 1,
    "برادلي باركولا": 1, "وسام بن يدر": 1, "ديميتري باييت": 1,
    "حاتم بن عرفة": 1, "ماتيو غندوزي": 1, "لودفيغ فيليب": 1
};

/* ============================================================
   4) قائمة أسماء الذكاء الاصطناعي (400+ اسم)
   متنوعة بين عربي وإنجليزي وأشكال مختلفة
   ============================================================ */
const AI_NAMES = [
    /* أسماء عربية بسيطة */
    "محمد", "أحمد", "علي", "عمر", "خالد", "يوسف", "إبراهيم", "عبدالله",
    "سعد", "سلطان", "فيصل", "تركي", "ماجد", "ناصر", "راشد", "طارق",
    "كريم", "مصطفى", "محمود", "حسام", "وليد", "زياد", "أنس", "بلال",
    "حمزة", "ياسين", "أمين", "أيوب", "سفيان", "هشام", "عادل", "سامي",
    "رامي", "باسم", "جمال", "عمار", "فارس", "مؤمن", "آدم", "نوح",
    "إياد", "ريان", "ليث", "تيم", "جاسر", "سيف", "حماد", "مروان",
    "نور", "مريم", "فاطمة", "ريم", "لينا", "هبة", "دينا", "جنى",

    /* أسماء + أرقام */
    "mohamed77", "Ali_10", "Omar7", "Ahmed_99", "Khaled22", "Youssef5",
    "AliPro7", "OmarKing10", "Ahmed_2024", "Mohamed_1", "Salah_11",
    "KingOmar", "Prince_Ahmed", "M10_Pro", "Xx_Ali_xX", "Omar_77",
    "Youssef_10", "Khaled_07", "Ahmed_2023", "Mohamed_9", "Ali_2025",
    "Sultan_7", "Faisal_10", "Tariq_99", "Nasser_8", "Rashed_22",
    "Kareem_7", "Mostafa_10", "Mahmoud_5", "Hossam_7", "Waleed_11",
    "Ziad_77", "Anas_10", "Bilal_7", "Hamza_9", "Yassin_21",
    "Amin_7", "Ayoub_10", "Sufyan_7", "Hisham_99", "Adel_10",
    "Samy_7", "Ramy_10", "Bassem_7", "Gamal_10", "Ammar_77",
    "Fares_7", "Moamen_10", "Adam_21", "Nouh_7", "Iyad_10",
    "Rayan_7", "Laith_10", "Taim_7", "Jaser_10", "Seif_77",
    "Hammad_10", "Marwan_7", "AhmedSamir", "MohamedAdel", "OmarHassan",
    "AliIbrahim", "KhaledMostafa", "YoussefAhmed", "SultanKhalid", "FaisalNasser",
    "TariqRashid", "KareemSamir", "MostafaMagdy", "MahmoudFathi", "HossamSabry",
    "WaleedMokhtar", "ZiadBadr", "AnasSaleem", "BilalRefaat", "HamzaSabry",
    "YassinAdel", "AminMostafa", "AyoubSayed", "SufyanFathi", "HishamRashad",
    "AdelMansour", "SamyFouad", "RamyRashad", "BassemSaeed", "GamalKamal",
    "AmmarRifaat", "FaresSabry", "MoamenAdel", "AdamNaguib", "NouhRefaat",
    "IyadSabry", "RayanMostafa", "LaithSamir", "TaimNaguib", "JaserFathi",
    "SeifAdel", "HammadSabry", "MarwanSamir", "Ahmed_Pro", "Mohamed_Legend",
    "Ali_King", "Omar_Pro", "Khaled_Legend", "Youssef_Pro", "Sultan_King",
    "Faisal_Legend", "Tariq_Pro", "Nasser_King", "Kareem_Legend", "Mostafa_Pro",

    /* أسماء بستايل الألعاب */
    "ProGamer77", "KingOfKora", "El_Capitan", "Mr_Mohamed", "Mr_Ahmed",
    "The_Legend", "Golden_Boy", "Kora_King", "Ball_Master", "Goal_Machine",
    "Mr_Goal", "Top_Scorer", "Pro_Striker", "El_General", "The_Boss",
    "Champion_77", "Winner_10", "Top_Player", "Star_Player", "Golden_Star",
    "Black_Panther", "Red_Devil", "Blue_Lion", "White_Tiger", "Green_Falcon",
    "Ace_10", "Pro_10", "Legend_10", "Master_10", "King_10",
    "Number_10", "Super_Star", "Mega_Star", "Alpha_Male", "Iron_Man",
    "Dark_Knight", "Shadow_King", "Night_Hunter", "Fire_Fox", "Ice_Cold",
    "Thunder_Bolt", "Lightning_77", "Storm_Bringer", "Silent_Killer", "Speed_Demon",
    "Kora_Master", "Football_King", "Baller_77", "El_Maestro", "El_Toro",
    "El_Fantasma", "El_Diablo", "El_Leon", "El_Guerrero", "El_Rey",

    /* أسماء بأسلوب مختلف */
    "7amada", "3alaa", "5aled", "8amada_Gamer", "9ora_King",
    "Mo_Salah_Fan", "Ronaldo_Fan", "Messi_Fan", "Barcelona_Fan", "Real_Madrid_Fan",
    "Liverpool_Fan", "ManUtd_Fan", "Chelsea_Fan", "Ahly_Fan", "Zamalek_Fan",
    "Hilal_Fan", "Nasr_Fan", "Egypt_Fan", "KSA_Fan", "Morocco_Fan",
    "Egy_Kora", "Saudi_Kora", "Moor_Kora", "Arab_Gamer", "Egyptian_Pro",
    "KSA_Pro", "UAE_Pro", "Qatar_Pro", "Kuwait_Pro", "Bahrain_Pro",
    "Oman_Pro", "Jordan_Pro", "Lebanon_Pro", "Syria_Pro", "Iraq_Pro",
    "Morocco_Pro", "Tunisia_Pro", "Algeria_Pro", "Libya_Pro", "Sudan_Pro",
    "Yemen_Pro", "Palestine_Pro", "Comoros_Pro", "Djibouti_Pro", "Somalia_Pro",
    "Mohamed_99", "Ahmed_99", "Ali_99", "Omar_99", "Khaled_99",
    "Youssef_99", "Sultan_99", "Faisal_99", "Tariq_99", "Nasser_99",

    /* أسماء مع نجوم العالم */
    "Lionel_Fan", "Cristiano_Fan", "Neymar_Fan", "Mbappe_Fan", "Haaland_Fan",
    "Salah_Fan", "Benzema_Fan", "Modric_Fan", "KDB_Fan", "VanDijk_Fan",
    "Mane_Fan", "Mahrez_Fan", "Ziyech_Fan", "Hakimi_Fan", "Bono_Fan",
    "Trezeguet_Fan", "Salah_11", "Mane_10", "Mahrez_7", "Hakimi_2",
    "Ziyech_22", "Bono_1", "Trezeguet_21", "Salah_King", "Mane_King",

    /* أسماء بأرقام مشهورة */
    "CR7", "CR9", "LM10", "LM30", "Neymar11",
    "MBappe7", "MBappe10", "Haaland9", "Salah10", "Salah11",
    "Benzema9", "Modric10", "KDB17", "VanDijk4", "Mane10",
    "Mahrez26", "Hakimi2", "Ziyech22", "Bono1", "Trezeguet21",

    /* أسماء كوميدية/غريبة */
    "Kora_Addict", "Goal_Addict", "Football_Holic", "Kora_Holic", "Ball_Holic",
    "Mr_Kora", "Mr_Ball", "Mr_Goal", "Mr_Football", "Mr_Stadium",
    "Ahly_Lover", "Zamalek_Lover", "Barca_Lover", "Real_Lover", "Liverpool_Lover",
    "ManUtd_Lover", "Chelsea_Lover", "City_Lover", "Arsenal_Lover", "Tottenham_Lover",

    /* أسماء إضافية */
    "Alpha_Wolf", "Beta_Wolf", "Gamma_Wolf", "Delta_Wolf", "Omega_Wolf",
    "Phoenix", "Dragon", "Tiger", "Lion", "Eagle",
    "Wolf", "Fox", "Hawk", "Falcon", "Panther",
    "Cobra", "Viper", "Python", "Anaconda", "King_Cobra",
    "Gold_Hunter", "Silver_Hunter", "Bronze_Hunter", "Diamond_Hunter", "Platinum_Hunter",
    "Rising_Star", "Falling_Star", "Shooting_Star", "Bright_Star", "North_Star",
    "Rocket", "Comet", "Meteor", "Asteroid", "Galaxy",
    "Thunder", "Lightning", "Storm", "Tornado", "Cyclone",
    "Fire", "Ice", "Wind", "Earth", "Water",
    "Kora_Knight", "Kora_Warrior", "Kora_Champion", "Kora_Legend", "Kora_King"
];

/* ============================================================
   5) أسئلة الجولات الأربعة
   ============================================================ */

/* أسماء البطولات والدوريات (للسؤال العشوائي - الجولة 2) */
const QUIZ_TOURNAMENTS = [
    "دوري أبطال أوروبا", "الدوري الإنجليزي", "الدوري الفرنسي",
    "الدوري البرتغالي", "الدوري الإلماني", "الدوري الإيطالي",
    "الدوري الإسباني", "الدوري التركي", "الدوري المصري",
    "الدوري السعودي", "كأس العالم", "كأس الأمم الأفريقية",
    "اليورو الأوروبي"
];

/* السنوات المتاحة (من 2000 إلى 2026) */
const QUIZ_YEARS = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025, 2026
];

/* إجابات صحيحة لبعض البطولات (للاستخدام في الجولة 2) */
const TOURNAMENT_WINNERS = {
    "دوري أبطال أوروبا": {
        2000: "ريال مدريد", 2001: "بايرن ميونخ", 2002: "ريال مدريد",
        2003: "إيه سي ميلان", 2004: "بورتو", 2005: "ليفربول",
        2006: "برشلونة", 2007: "إيه سي ميلان", 2008: "مانشستر يونايتد",
        2009: "برشلونة", 2010: "إنتر ميلان", 2011: "برشلونة",
        2012: "تشيلسي", 2013: "بايرن ميونخ", 2014: "ريال مدريد",
        2015: "برشلونة", 2016: "ريال مدريد", 2017: "ريال مدريد",
        2018: "ريال مدريد", 2019: "ليفربول", 2020: "بايرن ميونخ",
        2021: "تشيلسي", 2022: "ريال مدريد", 2023: "مانشستر سيتي",
        2024: "ريال مدريد", 2025: "ريال مدريد", 2026: "ريال مدريد"
    },
    "كأس العالم": {
        2002: "البرازيل", 2006: "إيطاليا", 2010: "إسبانيا",
        2014: "ألمانيا", 2018: "فرنسا", 2022: "الأرجنتين",
        2026: "غير محدد"
    },
    "كأس الأمم الأفريقية": {
        2000: "الكاميرون", 2002: "الكاميرون", 2004: "تونس",
        2006: "مصر", 2008: "مصر", 2010: "مصر",
        2012: "زامبيا", 2013: "نيجيريا", 2015: "ساحل العاج",
        2017: "الكاميرون", 2019: "الجزائر", 2021: "السنغال",
        2023: "ساحل العاج"
    },
    "اليورو الأوروبي": {
        2000: "فرنسا", 2004: "اليونان", 2008: "إسبانيا",
        2012: "إسبانيا", 2016: "البرتغال", 2020: "إيطاليا",
        2024: "إسبانيا"
    },
    "الدوري المصري": {
        2000: "الأهلي", 2005: "الأهلي", 2010: "الأهلي",
        2015: "الأهلي", 2020: "الأهلي", 2024: "الأهلي"
    },
    "الدوري السعودي": {
        2000: "الاتحاد", 2005: "الهلال", 2010: "الهلال",
        2015: "الهلال", 2020: "الهلال", 2024: "الهلال"
    }
};

/* أسئلة المزاد (الجولة 3) */
const AUCTION_QUESTIONS = [
    "لعب في دوري أبطال أوروبا",
    "لعب في الدوري الإنجليزي",
    "لعب في الدوري الفرنسي",
    "لعب في الدوري البرتغالي",
    "لعب في الدوري الإلماني",
    "لعب في الدوري الإيطالي",
    "لعب في الدوري الإسباني",
    "لعب في الدوري التركي",
    "لعب في الدوري المصري",
    "لعب في الدوري السعودي",
    "لعب في كأس العالم",
    "لعب في كأس الأمم الأفريقية",
    "لعب في اليورو الأوروبي",
    "لعب في ليفربول",
    "لعب في ريال مدريد",
    "لعب في تشيلسي",
    "لعب في مانشستر سيتي",
    "لعب في برشلونة",
    "لعب في توتنهام",
    "لعب في مانشستر يونايتد",
    "لعب في أتلتيكو مدريد",
    "لعب في بايرن ميونخ",
    "لعب في بوروسيا دورتموند",
    "لعب في باريس سان جيرمان",
    "لعب في نادي ميلان",
    "لعب في إنتر ميلان",
    "لعب في روما",
    "لعب في الأهلي المصري",
    "لعب في الزمالك المصري",
    "لعب في بنفيكا",
    "لعب في سبورتينغ لشبونة",
    "لعب في الهلال السعودي",
    "لعب في النصر السعودي",
    "لعب في الأهلي السعودي",
    "فاز بدوري أبطال أوروبا",
    "فاز بالدوري الإنجليزي",
    "فاز بالدوري الإسباني",
    "فاز بالدوري الإيطالي",
    "فاز بالدوري الألماني",
    "فاز بالدوري الفرنسي",
    "فاز بالدوري المصري",
    "فاز بالدوري السعودي",
    "فاز بكأس العالم",
    "فاز بكأس الأمم الأفريقية",
    "فاز باليورو الأوروبي"
];

/* قائمة الأندية الكبرى (للجولة 4 - "من هو لاعبي") */
const BIG_CLUBS_FOR_GAME = [
    "ليفربول", "ريال مدريد", "تشيلسي", "مانشستر سيتي", "برشلونة",
    "توتنهام", "مانشستر يونايتد", "أتلتيكو مدريد", "بايرن ميونخ",
    "بوروسيا دورتموند", "باريس سان جيرمان", "إيه سي ميلان",
    "إنتر ميلان", "روما", "الأهلي المصري", "الزمالك المصري",
    "ليستر سيتي", "برايتون", "موناكو", "إشبيلية",
    "الهلال السعودي", "النصر السعودي", "الأهلي السعودي",
    "بنفيكا", "سبورتينغ لشبونة", "طرابزون سبور", "غالاتاسراي"
];

/* ============================================================
   6) الديفجنات السبعة
   ============================================================ */
const DIVISIONS = [
    {
        id: 1,
        name: "هاوي",
        requiredMatches: 10,
        aiDifficulty: "easy",
        fameRange: [4, 5],   // يختار لاعبين مشهورين
        description: "مستوى المبتدئين - كل حاجة سهلة"
    },
    {
        id: 2,
        name: "نصف محترف",
        requiredMatches: 10,
        aiDifficulty: "easy",
        fameRange: [4, 5],
        description: "بدأت تتعلم - استمر"
    },
    {
        id: 3,
        name: "محترف",
        requiredMatches: 10,
        aiDifficulty: "easy-medium",
        fameRange: [3, 4],
        description: "سهل قليلاً مائل للمتوسط"
    },
    {
        id: 4,
        name: "متميز",
        requiredMatches: 15,
        aiDifficulty: "medium",
        fameRange: [3, 4],
        description: "نصف سهل ونصف متوسط"
    },
    {
        id: 5,
        name: "عالمي",
        requiredMatches: 15,
        aiDifficulty: "medium",
        fameRange: [2, 3],
        description: "المستوى المتوسط - تحدي حقيقي"
    },
    {
        id: 6,
        name: "مثقف",
        requiredMatches: 20,
        aiDifficulty: "medium-hard",
        fameRange: [2, 3],
        description: "متوسط قليلاً مائل للصعب"
    },
    {
        id: 7,
        name: "مختم اللعبة",
        requiredMatches: 25,
        aiDifficulty: "hard",
        fameRange: [1, 2],   // لاعبين أقل شهرة
        description: "المستوى الأخير - للمحترفين فقط"
    }
];

/* ============================================================
   7) مراكز التشكيل (كوّن تشكيلتك)
   ============================================================ */
const FORMATION_POSITIONS = [
    { id: "gk", name: "حراسة المرمى", shortName: "حارس", icon: "🧤" },
    { id: "def", name: "مدافع", shortName: "مدافع", icon: "🛡️" },
    { id: "mid1", name: "خط وسط 1", shortName: "وسط", icon: "⚙️" },
    { id: "mid2", name: "خط وسط 2", shortName: "وسط", icon: "⚙️" },
    { id: "att", name: "مهاجم", shortName: "مهاجم", icon: "⚽" }
];

/* ============================================================
   8) إعدادات إضافية
   ============================================================ */
const GAME_CONFIG = {
    /* إعدادات المزاد */
    auction: {
        budget: 100,             // 100 مليون دولار
        startingBid: 5,          // سعر البداية 5 مليون
        bidIncrement: 5,         // الزيادة 5 مليون
        timerPerPlayer: 15       // 15 ثانية لكل لاعب
    },
    
    /* إعدادات الجولات */
    rounds: {
        round1: { timer: 15, points: 3 },     // بيانات لاعب
        round2: { timer: 20, points: [5, 3, 2, 1] },  // سؤال عشوائي
        round3: { timer: 30, points: 3 },     // مزاد لاعبين
        round4: { 
            easy: { timer: 60, points: 3 },
            medium: { timer: 60, points: 4 },
            hard: { timer: 45, points: 5 },
            impossible: { timer: 30, points: 7 }
        }
    },
    
    /* إعدادات المحاكاة */
    simulation: {
        duration: 60,            // 60 ثانية
        hasPenalties: true       // ضربات جزاء في حالة التعادل
    }
};

/* ============================================================
   تحقق من التحميل
   ============================================================ */
console.log("✅ DESHA & MARO GAMES - Data Loaded Successfully");
console.log(`📊 Players: ${PLAYERS_DB.length}`);
console.log(`🏟️ Clubs: ${CLUBS_DB.length}`);
console.log(`🤖 AI Names: ${AI_NAMES.length}`);
console.log(`🏆 Divisions: ${DIVISIONS.length}`);

