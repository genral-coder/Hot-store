/* ═══════════════════════════════════════════════════════════════
   HOT STORE RP — FiveM Store (Vanilla JavaScript)
   ───────────────────────────────────────────────────────────────
   كل التعديلات اللي محتاجها أنت (الأسماء، الأسعار، المنتجات...)
   كلها في الجزئين اللي تحت 👇 مفيش داعي تلمس أي حاجة بعدها.
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════ 1) الإعدادات العامة — عدّل من هنا ═══════════ */
const CONFIG = {
  serverName: "Hot Pursuit Store",                // 👈 اسم السيرفر
  tagline: "Premium FiveM Roleplay Store",        // 👈 الجملة تحت الاسم
  description:
    "Thank you for supporting Hot Pursuit. Your donations to Hot Pursuit are highly appreciated.",     // 👈 وصف السيرفر
  logoImage: "images/Asset_2.png",                // 👈 صورة اللوجو (سيبها "" لو معندكش صورة)
  logoText: "HS",                                 // 👈 حرفين بيظهروا لو مفيش لوجو
  discordUrl: "discord://-/channels/1341426480827203584/1341516123123744881",   // 👈 ⭐ بيفتح تذاكر الشراء في تطبيق الديسكورد
};

/* ═══════════ 2) التصنيفات — أضف/احذف/عدّل من هنا ═══════════ */
const CATEGORIES = [
  { id: "vehicles", name: "Vehicles", nameAr: "المركبات", emoji: "🚗", color: "#ff2d3f" },
  { id: "mlo",      name: "Business", nameAr: "بيزنس",    emoji: "🏢", color: "#4da6ff" },
  { id: "vip",      name: "VIP",      nameAr: "VIP",      emoji: "💎", color: "#ffc24b" },
  { id: "bundles",  name: "Bundles",  nameAr: "الباقات",  emoji: "🎁", color: "#b26bff" },
];

/* ═══════════ 2.25) أقسام البيزنس — المطاعم/المعارض/الميكانيكا... ═══════════ */
const BUSINESS_TYPES = [
  { id: "restaurant", name: "Restaurants", nameAr: "المطاعم",        emoji: "🍽️" },
  { id: "mechanic",   name: "Mechanics",   nameAr: "الميكانيكا",      emoji: "🔧" },
  { id: "dealership", name: "Dealerships", nameAr: "المعارض",         emoji: "🚗" },
  { id: "nightclub",  name: "Nightclubs",  nameAr: "النوادي الليلية", emoji: "🕺" },
  { id: "cafe",       name: "Cafes",       nameAr: "الكافيهات",       emoji: "☕" },
  { id: "hotel",      name: "Hotels",      nameAr: "الفنادق",         emoji: "🏨" },
];

/* ═══════════ 2.5) الترجمة (عربي / إنجليزي) ═══════════ */
const I18N = {
  en: {
    home: "Home",
    tagline: CONFIG.tagline,
    heroChip: "🎮 FiveM Roleplay Server",
    heroDesc: CONFIG.description,
    joinDiscord: "Join Discord",
    discord: "Discord ↗",
    chipSupport: "⏱ 24/7 Support",
    chipSafe: "🛡 Safe & Secure",
    secCategories: "Categories",
    secPopular: "Popular Products",
    secRules: "Purchase Rules",
    payLabel: "Payment Methods:",
    soon: "Soon",
    classes: "classes",
    comingSoon: "Coming Soon",
    comingSoonDesc: "Products in this category are on the way. Stay tuned!",
    vehClassesTitle: "Vehicle Classes & Pricing",
    vehMonthly: "Monthly",
    vehSeason: "Per Season",
    vehRulesTitle: "Vehicle Rules",
    vehPick: "Pick class in Discord",
    vehView: "View Vehicles",
    vehHide: "Hide Vehicles",
    vehAll: "All Classes",
    searchPlaceholder: "Search products, categories...",
    product: "product",
    products: "products",
    browse: "Browse",
    details: "Details",
    donate: "Purchase",
    donateBtn: "Purchase 💳",
    popularBadge: "Popular",
    soldBadge: "SOLD",
    dmTitle: "Purchase Ticket",
    dmText: "You will be redirected to Discord to open a purchase ticket for <b>{name} ({price})</b>.",
    cancel: "Cancel",
    continueDiscord: "Continue to Discord ↗",
    openingDiscord: "Opening Discord...",
    resultsFor: 'Results for "{q}"',
    noResults: 'No products found for "<b>{q}</b>". Try another search.',
  },
  ar: {
    home: "الرئيسية",
    tagline: "متجر فايف إم رول بلاي مميز",
    heroChip: "🎮 سيرفر رول بلاي فايف إم",
    heroDesc: "شكراً لدعمكم Hot Pursuit. تبرعاتكم لـ Hot Pursuit محل تقدير كبير.",
    joinDiscord: "انضم للديسكورد",
    discord: "ديسكورد ↗",
    chipSupport: "⏱ دعم 24/7",
    chipSafe: "🛡 آمن ومضمون",
    secCategories: "التصنيفات",
    secPopular: "الأكثر طلباً",
    secRules: "قوانين الشراء",
    payLabel: "طرق الدفع:",
    soon: "قريباً",
    classes: "فئات",
    comingSoon: "قريباً",
    comingSoonDesc: "منتجات هذا التصنيف جاية قريباً. ترقبوا!",
    vehClassesTitle: "فئات المركبات والأسعار",
    vehMonthly: "شهرياً",
    vehSeason: "للموسم",
    vehRulesTitle: "قوانين المركبات",
    vehPick: "اختار الفئة في الديسكورد",
    vehView: "عرض العربيات",
    vehHide: "إخفاء العربيات",
    vehAll: "كل الكلاسات",
    searchPlaceholder: "ابحث عن منتجات أو تصنيفات...",
    product: "منتج",
    products: "منتجات",
    browse: "تصفح",
    details: "التفاصيل",
    donate: "شراء",
    donateBtn: "شراء 💳",
    popularBadge: "الأكثر طلباً",
    soldBadge: "مباع",
    dmTitle: "تذكرة الشراء",
    dmText: "هيتم تحويلك للديسكورد لفتح تذكرة شراء لـ <b>{name} ({price})</b>.",
    cancel: "إلغاء",
    continueDiscord: "متابعة للديسكورد ↗",
    openingDiscord: "جاري فتح الديسكورد...",
    resultsFor: 'نتائج البحث عن "{q}"',
    noResults: 'مفيش منتجات لـ "<b>{q}</b>". جرب بحث تاني.',
  },
};

/* ═══════════ 2.5) قوانين الشراء — عدّل/أضف من هنا ═══════════ */
const RULES = [
  { en: "All purchases are non-refundable in case if no issues with our end.", ar: "جميع المشتريات غير قابلة للاسترداد في حال عدم وجود أي مشكلة من طرفنا." },
  { en: "Purchases are either Monthly, Quarterly, or per season.", ar: "تكون المشتريات إما شهرية، أو ربع سنوية، أو لكل موسم." },
  { en: "Purchases made per season have special discounts.", ar: "المشتريات الخاصة بالموسم تتضمن خصومات مميزة." },
  { en: "No Pay-to-Win. Our store is designed to enhance your experience while maintaining fair and enjoyable gameplay for everyone.", ar: "لا يوجد نظام الدفع للفوز (Pay-to-Win)، حيث تم تصميم متجرنا لتحسين تجربتكم مع الحفاظ على أسلوب لعب عادل وممتع للجميع." },
  { en: "Store packages do not exempt you from the rules. All players, including supporters, must follow the server rules at all times.", ar: "الحصول على باقات المتجر لا يعفيك من الالتزام بالقوانين. يجب على جميع اللاعبين، بما فيهم الداعمون، الالتزام بقوانين السيرفر في جميع الأوقات." },
  { en: "Abuse of purchased packages may result in their removal. Exploiting or using packages to disrupt gameplay can lead to punishment without compensation.", ar: "إساءة استخدام الباقات المشتراة قد يؤدي إلى سحبها. كما أن استغلال الباقات أو استخدامها لتعطيل تجربة اللعب قد يترتب عليه عقوبات دون أي تعويض." },
  { en: "Package contents may change. To keep the server balanced, we reserve the right to adjust or modify package contents at any time.", ar: "محتويات الباقات قابلة للتغيير. وللحفاظ على توازن السيرفر، نحتفظ بحق تعديل أو تغيير محتويات الباقات في أي وقت." },
  { en: "Purchased delivery time will change based on the package purchased without exceeding 1 week as a maximum.", ar: "تختلف مدة تسليم المشتريات حسب نوع الباقة، على ألا تتجاوز أسبوعًا واحدًا كحد أقصى." },
  { en: "Need help? If you experience any issues with your purchase, contact our support team through Tickets, and we'll be happy to assist you.", ar: "تحتاج إلى مساعدة؟ إذا واجهت أي مشكلة في مشترياتك، يرجى التواصل مع فريق الدعم عبر التذاكر (Tickets)، وسيسعدنا مساعدتك." },
  { en: "Rules are subject to change so please be aware of any notifications made on this channel.", ar: "القوانين قابلة للتغيير، لذا يرجى متابعة أي إشعارات أو تحديثات يتم نشرها في هذه القناة." },
];

const PAYMENT_METHODS = {
  en: ["Bank Transfer", "Instapay", "Vodafone Cash", "PayPal", "Crypto"],
  ar: ["تحويل بنكي", "انستا باي", "فودافون كاش", "باي بال", "كريبتو"],
};

/* ═══════════ 2.75) فئات المركبات وقوانينها ═══════════ */
const VEHICLE_CLASSES = [
  { id: "S",  monthly: "20$", season: "100$", color: "#ff8a00" },
  { id: "S+", monthly: "25$", season: "150$", color: "#e63a00" },
  { id: "S++", monthly: "30$", season: "200$", color: "#ff2d3f" },
  { id: "X",  monthly: "40$", season: "250$", color: "#b26bff" },
];

const VEHICLE_RULES = [
  {
    en: "Any purchased vehicle will follow its class and server handling rules.",
    ar: "أي مركبة يتم شراؤها ستخضع لفئتها (Class) وقواعد الهاندلينج (Handling) المعتمدة في السيرفر.",
  },
  {
    en: "1 of 1 vehicles are agreed on their prices and models within a donation ticket.",
    ar: "يتم الاتفاق على سعر وموديل المركبات الحصرية (1of1) من خلال تذكرة تبرع (Donation Ticket).",
  },
];

/* ═══════════ 3) المنتجات — أضف/احذف/عدّل من هنا ═══════════
   لكل منتج:
   - id: رقم فريد (ما يتكررش)
   - category: لازم يطابق id التصنيف اللي فوق
   - name: اسم المنتج
   - short: وصف قصير يظهر في الكارت
   - description: وصف طويل يظهر في صفحة التفاصيل
   - features: قائمة المميزات (تظهر في التفاصيل)
   - price: السعر (أي نص تحبه)
   - image: صورة المنتج (حطها في مجلد images/products/)
            ⭐ لو الصورة مش موجودة هيظهر مكانها تصميم تلقائي
   - featured: true = يظهر في قسم Featured في الهوم
   - popular:  true = يظهر في قسم Popular في الهوم
   - type: فقط لمتجات Business — "restaurant" | "mechanic" | "dealership" | "nightclub" | "cafe" | "hotel"
   - class: فقط للعربيات — "S" | "S+" | "S++" | "X" (هيتجمعوا تحت الكلاس)
   ═══════════════════════════════════════════════════════════ */
/* ═══════════ 4) المنتجات — عدّل/أضف/احذف من هنا ═══════════
   ⚠️ دول المنتجات المحلية (fallback).
   الموقع بيحاول يقرا أولاً من ملف products.json
   (اللي بتعدّله من لوحة التحكم — GitHub API)
   ولو حصل أي خطأ يرجع للمنتجات اللي تحت تلقائياً.
   ═══════════════════════════════════════════════════════════ */
let PRODUCTS = [
  /* ── ✏️ ضيف منتجاتك هنا واحد واحد — كل منتج كده: ── */
  {
    id: 1, category: "vip",
    name: "Verified Account",
    nameAr: "توثيق الحساب",
    short: "Get your account verified for only $1/Monthly.",
    shortAr: "احصل على توثيق حسابك مقابل دولار واحد فقط شهرياً.",
    description: "Get your account verified for only 1$/Monthly for each application.",
    descriptionAr: "احصل على توثيق حسابك مقابل دولار واحد فقط شهريًا لكل حساب.",
    features: [
      "$1/Monthly per account",
      "Instant verification",
      "Official verified badge",
    ],
    featuresAr: [
      "دولار واحد شهرياً لكل حساب",
      "توثيق فوري",
      "شارة توثيق رسمية",
    ],
    price: "$1/Monthly", image: "images/products/vip/Verified Accounts.png",
    featured: false, popular: false,
  },
  {
    id: 2, category: "mlo",
    name: "Bennys LSIA",
    nameAr: "بينيز LSIA",
    short: "A mechanic workshop, ready for business.",
    shortAr: "ورشة ميكانيكا جاهزة للشغل.",
    description: "Bennys LSIA — a mechanic workshop. Costs 20$ Monthly.",
    descriptionAr: "بينيز LSIA — ورشة ميكانيكا. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Workshop location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع ورشة",
      "جاهزة داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Bennys LSIA.png",
    featured: false, popular: false, type: "mechanic",
  },
  {
    id: 3, category: "mlo",
    name: "Bennys Docks",
    nameAr: "بينيز دوكس",
    short: "A mechanic workshop, ready for business.",
    shortAr: "ورشة ميكانيكا جاهزة للشغل.",
    description: "Bennys Docks — a mechanic workshop. Costs 20$ Monthly.",
    descriptionAr: "بينيز دوكس — ورشة ميكانيكا. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Workshop location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع ورشة",
      "جاهزة داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Bennys Docks.png",
    featured: false, popular: false, type: "mechanic",
  },
  {
    id: 4, category: "mlo",
    name: "Paleto Car Dealer",
    nameAr: "باليتو معرض سيارات",
    short: "A car dealership, ready for business.",
    shortAr: "معرض سيارات جاهز للشغل.",
    description: "Paleto Car Dealer — a car dealership. Costs 30$ Monthly.",
    descriptionAr: "باليتو معرض سيارات — معرض سيارات. التكلفة 30$ شهرياً.",
    features: [
      "30$ Monthly",
      "Dealership location",
      "In-game ready",
    ],
    featuresAr: [
      "30$ شهرياً",
      "موقع معرض سيارات",
      "جاهز داخل اللعبة",
    ],
    price: "30$ Monthly", image: "images/products/mlo/Paleto Car Dealer.png",
    featured: false, popular: false, type: "dealership",
  },
  {
    id: 5, category: "mlo",
    name: "Kebab King",
    nameAr: "كباب كينج",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Kebab King — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "كباب كينج — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Kebab King.png",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 6, category: "mlo",
    name: "Tropical Heights",
    nameAr: "تروبيكال هايتس",
    short: "A nightclub, ready for business.",
    shortAr: "نادي ليلي جاهز للشغل.",
    description: "Tropical Heights — a nightclub. Costs 10$ Monthly.",
    descriptionAr: "تروبيكال هايتس — نادي ليلي. التكلفة 10$ شهرياً.",
    features: [
      "10$ Monthly",
      "Nightclub location",
      "In-game ready",
    ],
    featuresAr: [
      "10$ شهرياً",
      "موقع نادي ليلي",
      "جاهز داخل اللعبة",
    ],
    price: "10$ Monthly", image: "images/products/mlo/Tropical Heights.png",
    featured: false, popular: false, type: "nightclub",
  },
  {
    id: 7, category: "mlo",
    name: "Leapfrog",
    nameAr: "ليفروج",
    short: "A cafe, ready for business.",
    shortAr: "كافيه جاهز للشغل.",
    description: "Leapfrog — a cafe. Costs 15$ Monthly.",
    descriptionAr: "ليفروج — كافيه. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Cafe location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع كافيه",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Leapfrog.png",
    featured: false, popular: false, type: "cafe",
  },
  {
    id: 8, category: "mlo",
    name: "Opium Nights",
    nameAr: "أوبيوم نايتس",
    short: "A hotel, ready for business.",
    shortAr: "فندق جاهز للشغل.",
    description: "Opium Nights — a hotel. Costs 20$ Monthly.",
    descriptionAr: "أوبيوم نايتس — فندق. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Hotel location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع فندق",
      "جاهز داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Opium Nights.png",
    featured: false, popular: false, type: "hotel",
  },
  {
    id: 9, category: "mlo",
    name: "Red's",
    nameAr: "ريدز",
    short: "A mechanic workshop, ready for business.",
    shortAr: "ورشة ميكانيكا جاهزة للشغل.",
    description: "Red's — a mechanic workshop. Costs 20$ Monthly.",
    descriptionAr: "ريدز — ورشة ميكانيكا. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Workshop location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع ورشة",
      "جاهزة داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Red's.png",
    featured: false, popular: false, type: "mechanic",
  },
  {
    id: 10, category: "mlo",
    name: "Vespucci PDM",
    nameAr: "فيسوتشي معرض سيارات",
    short: "A car dealership, ready for business.",
    shortAr: "معرض سيارات جاهز للشغل.",
    description: "Vespucci PDM — a car dealership. Costs 30$ Monthly.",
    descriptionAr: "فيسوتشي معرض سيارات — معرض سيارات. التكلفة 30$ شهرياً.",
    features: [
      "30$ Monthly",
      "Dealership location",
      "In-game ready",
    ],
    featuresAr: [
      "30$ شهرياً",
      "موقع معرض سيارات",
      "جاهز داخل اللعبة",
    ],
    price: "30$ Monthly", image: "images/products/mlo/Vespucci PDM.png",
    featured: false, popular: false, type: "dealership",
  },
  {
    id: 11, category: "mlo",
    name: "Pier 76",
    nameAr: "بير 76",
    short: "A car dealership, ready for business.",
    shortAr: "معرض سيارات جاهز للشغل.",
    description: "Pier 76 — a car dealership. Costs 30$ Monthly.",
    descriptionAr: "بير 76 — معرض سيارات. التكلفة 30$ شهرياً.",
    features: [
      "30$ Monthly",
      "Dealership location",
      "In-game ready",
    ],
    featuresAr: [
      "30$ شهرياً",
      "موقع معرض سيارات",
      "جاهز داخل اللعبة",
    ],
    price: "30$ Monthly", image: "images/products/mlo/Pier 76.webp",
    featured: false, popular: false, type: "dealership",
  },
  {
    id: 12, category: "mlo",
    name: "Pearls",
    nameAr: "بيرلز",
    short: "A hotel business, ready for business.",
    shortAr: "فندق جاهز للشغل.",
    description: "Pearls — a hotel business. Costs 20$ Monthly.",
    descriptionAr: "بيرلز — فندق. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Hotel location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع فندق",
      "جاهز داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Pearls.webp",
    featured: false, popular: false, type: "hotel",
  },
  {
    id: 13, category: "mlo",
    name: "LaMesa Mechanic",
    nameAr: "لاميسا ميكانيكا",
    short: "A mechanic workshop, ready for business.",
    shortAr: "ورشة ميكانيكا جاهزة للشغل.",
    description: "LaMesa Mechanic — a mechanic workshop. Costs 20$ Monthly.",
    descriptionAr: "لاميسا ميكانيكا — ورشة ميكانيكا. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Workshop location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع ورشة",
      "جاهزة داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/LaMesa Mechanic.jpg",
    featured: false, popular: false, type: "mechanic",
  },
  {
    id: 14, category: "mlo",
    name: "Koi",
    nameAr: "كوي",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Koi — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "كوي — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Koi.webp",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 15, category: "mlo",
    name: "Horny's",
    nameAr: "هورنيز",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Horny's — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "هورنيز — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Horny's.png",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 16, category: "mlo",
    name: "Up n Atom",
    nameAr: "أب أند أتوم",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Up n Atom — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "أب أند أتوم — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Up n Atom.png",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 17, category: "mlo",
    name: "Vanilla Unicorn",
    nameAr: "فانيلا يونيكورن",
    short: "A nightclub, ready for business.",
    shortAr: "نادي ليلي جاهز للشغل.",
    description: "Vanilla Unicorn — a nightclub. Costs 10$ Monthly.",
    descriptionAr: "فانيلا يونيكورن — نادي ليلي. التكلفة 10$ شهرياً.",
    features: [
      "10$ Monthly",
      "Nightclub location",
      "In-game ready",
    ],
    featuresAr: [
      "10$ شهرياً",
      "موقع نادي ليلي",
      "جاهز داخل اللعبة",
    ],
    price: "10$ Monthly", image: "images/products/mlo/Vanilla Unicorn.jpg",
    featured: false, popular: false, type: "nightclub",
  },
  {
    id: 18, category: "mlo",
    name: "Exotic Dealership",
    nameAr: "إكزوتيك معرض سيارات",
    short: "A car dealership, ready for business.",
    shortAr: "معرض سيارات جاهز للشغل.",
    description: "Exotic Dealership — a car dealership. Costs 20$ Monthly.",
    descriptionAr: "إكزوتيك معرض سيارات — معرض سيارات. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Dealership location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع معرض سيارات",
      "جاهز داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Exotic Dealership.webp",
    featured: false, popular: false, sold: true, type: "dealership",
  },
  {
    id: 19, category: "mlo",
    name: "Pizzeria",
    nameAr: "بيتزيريا",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Pizzeria — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "بيتزيريا — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Pizzeria.png",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 20, category: "mlo",
    name: "Ottos Auto",
    nameAr: "أوتوز أوتو",
    short: "A mechanic workshop, ready for business.",
    shortAr: "ورشة ميكانيكا جاهزة للشغل.",
    description: "Ottos Auto — a mechanic workshop. Costs 20$ Monthly.",
    descriptionAr: "أوتوز أوتو — ورشة ميكانيكا. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Workshop location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع ورشة",
      "جاهز داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Ottos Auto.png",
    featured: false, popular: false, type: "mechanic",
  },
  {
    id: 21, category: "mlo",
    name: "Bennys",
    nameAr: "بينيز",
    short: "A mechanic workshop, ready for business.",
    shortAr: "ورشة ميكانيكا جاهزة للشغل.",
    description: "Bennys — a mechanic workshop. Costs 20$ Monthly.",
    descriptionAr: "بينيز — ورشة ميكانيكا. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Workshop location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع ورشة",
      "جاهز داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Bennys.png",
    featured: false, popular: false, type: "mechanic",
  },
  {
    id: 22, category: "mlo",
    name: "Hayes",
    nameAr: "هايز",
    short: "A mechanic workshop, ready for business.",
    shortAr: "ورشة ميكانيكا جاهزة للشغل.",
    description: "Hayes — a mechanic workshop. Costs 20$ Monthly.",
    descriptionAr: "هايز — ورشة ميكانيكا. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Workshop location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع ورشة",
      "جاهز داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Hayes.webp",
    featured: false, popular: false, sold: true, type: "mechanic",
  },
  {
    id: 23, category: "mlo",
    name: "Pops Dinner",
    nameAr: "بوبز دينر",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Pops Dinner — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "بوبز دينر — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Pops Dinner.webp",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 24, category: "mlo",
    name: "Bean Machine",
    nameAr: "بين ماشين",
    short: "A cafe, ready for business.",
    shortAr: "كافيه جاهز للشغل.",
    description: "Bean Machine — a cafe. Costs 15$ Monthly.",
    descriptionAr: "بين ماشين — كافيه. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Cafe location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع كافيه",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Bean Machine.webp",
    featured: false, popular: false, type: "cafe",
  },
  {
    id: 25, category: "mlo",
    name: "Bahamas",
    nameAr: "بهامس",
    short: "A nightclub, ready for business.",
    shortAr: "نادي ليلي جاهز للشغل.",
    description: "Bahamas — a nightclub. Costs 10$ Monthly.",
    descriptionAr: "بهامس — نادي ليلي. التكلفة 10$ شهرياً.",
    features: [
      "10$ Monthly",
      "Nightclub location",
      "In-game ready",
    ],
    featuresAr: [
      "10$ شهرياً",
      "موقع نادي ليلي",
      "جاهز داخل اللعبة",
    ],
    price: "10$ Monthly", image: "images/products/mlo/Bahamas.webp",
    featured: false, popular: false, type: "nightclub",
  },
  {
    id: 26, category: "mlo",
    name: "Cat Cafe",
    nameAr: "كات كافيه",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Cat Cafe — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "كات كافيه — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Cat Cafe.webp",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 27, category: "mlo",
    name: "Burgershot",
    nameAr: "برغرشوت",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Burgershot — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "برغرشوت — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Burgershot.webp",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 28, category: "vip",
    name: "Car Radio",
    nameAr: "راديو السيارة",
    short: "A VIP car radio, ready for use.",
    shortAr: "راديو سيارة VIP جاهز للاستخدام.",
    description: "Car Radio — a VIP feature. Costs 10$ Monthly.",
    descriptionAr: "راديو السيارة — ميزة VIP. التكلفة 10$ شهرياً.",
    features: [
      "10$ Monthly",
      "VIP feature",
      "In-game ready",
    ],
    featuresAr: [
      "10$ شهرياً",
      "ميزة VIP",
      "جاهز داخل اللعبة",
    ],
    price: "10$ Monthly", image: "images/products/vip/car radio.png",
    featured: false, popular: false,
  },
  {
    id: 29, category: "mlo",
    name: "Pearls Restaurant",
    nameAr: "مطعم بيرلز",
    short: "A restaurant, ready for business.",
    shortAr: "مطعم جاهز للشغل.",
    description: "Pearls Restaurant — a restaurant. Costs 15$ Monthly.",
    descriptionAr: "مطعم بيرلز — مطعم. التكلفة 15$ شهرياً.",
    features: [
      "15$ Monthly",
      "Restaurant location",
      "In-game ready",
    ],
    featuresAr: [
      "15$ شهرياً",
      "موقع مطعم",
      "جاهز داخل اللعبة",
    ],
    price: "15$ Monthly", image: "images/products/mlo/Pearls.webp",
    featured: false, popular: false, type: "restaurant",
  },
  {
    id: 30, category: "bundles",
    name: "Pearls Combo",
    nameAr: "كومبو بيرلز",
    short: "Hotel business & restaurant combo, costs 30$ instead of 35$.",
    shortAr: "كومبو الفندق والمطعم، بـ30$ بدل 35$.",
    description: "Pearls Combo — Hotel Business & Restaurant. Costs 30$ instead of 35$.",
    descriptionAr: "كومبو بيرلز — الفندق والمطعم. التكلفة 30$ بدل 35$.",
    features: [
      "30$ Monthly (instead of 35$)",
      "Hotel Business + Restaurant",
      "In-game ready",
    ],
    featuresAr: [
      "30$ شهرياً (بدل 35$)",
      "الفندق + المطعم",
      "جاهز داخل اللعبة",
    ],
    price: "30$ Monthly", image: "images/products/mlo/Pearls.webp",
    featured: false, popular: false,
  },
  {
    id: 31, category: "mlo",
    name: "Ottos Auto Used Car Dealer",
    nameAr: "أوتوز أوتو معرض سيارات مستعملة",
    short: "A used car dealer, ready for business.",
    shortAr: "معرض سيارات مستعملة جاهز للشغل.",
    description: "Ottos Auto Used Car Dealer — a used car dealer. Costs 20$ Monthly.",
    descriptionAr: "أوتوز أوتو معرض سيارات مستعملة — معرض سيارات مستعملة. التكلفة 20$ شهرياً.",
    features: [
      "20$ Monthly",
      "Dealership location",
      "In-game ready",
    ],
    featuresAr: [
      "20$ شهرياً",
      "موقع معرض سيارات",
      "جاهز داخل اللعبة",
    ],
    price: "20$ Monthly", image: "images/products/mlo/Ottos Auto.png",
    featured: false, popular: false, type: "dealership",
  },
  {
    id: 32, category: "bundles",
    name: "Ottos Auto Combo",
    nameAr: "كومبو أوتوز أوتو",
    short: "Mechanic & used car dealer combo, costs 35$ instead of 40$.",
    shortAr: "كومبو الميكانيكا ومعرض السيارات، بـ35$ بدل 40$.",
    description: "Ottos Auto Combo — Mechanic & Used Car Dealer. Costs 35$ instead of 40$.",
    descriptionAr: "كومبو أوتوز أوتو — الميكانيكا ومعرض السيارات المستعملة. التكلفة 35$ بدل 40$.",
    features: [
      "35$ Monthly (instead of 40$)",
      "Mechanic + Used Car Dealer",
      "In-game ready",
    ],
    featuresAr: [
      "35$ شهرياً (بدل 40$)",
      "الميكانيكا + معرض السيارات المستعملة",
      "جاهز داخل اللعبة",
    ],
    price: "35$ Monthly", image: "images/products/mlo/Ottos Auto.png",
    featured: false, popular: false,
  },
  /* ── 🚗 عربيات تجريبية (بريفيو) — هتشيلها وتمسحها لما تديني الحقيقية ── */
  {
    id: 33, category: "vehicles", class: "S",
    name: "Preview Class S",
    nameAr: "عرض كلاس S",
    short: "Vehicle preview for Class S.",
    shortAr: "عربية بريفيو لكلاس S.",
    description: "Preview vehicle — Class S. Replace with the real one.",
    descriptionAr: "عربية بريفيو — كلاس S. هتتستبدل بالحقيقية.",
    features: ["20$ Monthly", "100$ Per Season", "In-game ready"],
    featuresAr: ["20$ شهرياً", "100$ للموسم", "جاهزة داخل اللعبة"],
    price: "20$ Monthly", image: "",
    featured: false, popular: false,
  },
  {
    id: 34, category: "vehicles", class: "S+",
    name: "Preview Class S+",
    nameAr: "عرض كلاس S+",
    short: "Vehicle preview for Class S+.",
    shortAr: "عربية بريفيو لكلاس S+.",
    description: "Preview vehicle — Class S+. Replace with the real one.",
    descriptionAr: "عربية بريفيو — كلاس S+. هتتستبدل بالحقيقية.",
    features: ["25$ Monthly", "150$ Per Season", "In-game ready"],
    featuresAr: ["25$ شهرياً", "150$ للموسم", "جاهزة داخل اللعبة"],
    price: "25$ Monthly", image: "",
    featured: false, popular: false,
  },
  {
    id: 35, category: "vehicles", class: "S++",
    name: "Preview Class S++",
    nameAr: "عرض كلاس S++",
    short: "Vehicle preview for Class S++.",
    shortAr: "عربية بريفيو لكلاس S++.",
    description: "Preview vehicle — Class S++. Replace with the real one.",
    descriptionAr: "عربية بريفيو — كلاس S++. هتتستبدل بالحقيقية.",
    features: ["30$ Monthly", "200$ Per Season", "In-game ready"],
    featuresAr: ["30$ شهرياً", "200$ للموسم", "جاهزة داخل اللعبة"],
    price: "30$ Monthly", image: "",
    featured: false, popular: false,
  },
  {
    id: 36, category: "vehicles", class: "X",
    name: "Preview Class X",
    nameAr: "عرض كلاس X",
    short: "Vehicle preview for Class X.",
    shortAr: "عربية بريفيو لكلاس X.",
    description: "Preview vehicle — Class X. Replace with the real one.",
    descriptionAr: "عربية بريفيو — كلاس X. هتتستبدل بالحقيقية.",
    features: ["40$ Monthly", "250$ Per Season", "In-game ready"],
    featuresAr: ["40$ شهرياً", "250$ للموسم", "جاهزة داخل اللعبة"],
    price: "40$ Monthly", image: "",
    featured: false, popular: false,
  },
  {
    id: 37, category: "vip",
    name: "Custom Car Plate",
    nameAr: "لوحة سيارة مخصصة",
    short: "A custom car plate, one-time purchase.",
    shortAr: "لوحة سيارة مخصصة، شراء لمرة واحدة.",
    description: "Custom Car Plate — get your own custom plate. Costs 5$ One Time.",
    descriptionAr: "لوحة سيارة مخصصة — احصل على لوحتك الخاصة. التكلفة 5$ لمرة واحدة.",
    features: [
      "5$ One Time",
      "Custom plate text",
      "In-game ready",
    ],
    featuresAr: [
      "5$ لمرة واحدة",
      "نص مخصص للوحة",
      "جاهز داخل اللعبة",
    ],
    price: "5$ One Time", image: "images/products/vip/plat.png",
    featured: false, popular: false,
  },
  {
    id: 38, category: "vip",
    name: "Custom Phone Number",
    nameAr: "رقم تليفون مخصص",
    short: "A custom phone number, one-time purchase.",
    shortAr: "رقم تليفون مخصص، شراء لمرة واحدة.",
    description: "Custom Phone Number — get your own custom number. Costs 5$ One Time.",
    descriptionAr: "رقم تليفون مخصص — احصل على رقمك الخاص. التكلفة 5$ لمرة واحدة.",
    features: [
      "5$ One Time",
      "Custom number",
      "In-game ready",
    ],
    featuresAr: [
      "5$ لمرة واحدة",
      "رقم مخصص",
      "جاهز داخل اللعبة",
    ],
    price: "5$ One Time", image: "images/products/vip/custom phone numbers.png",
    featured: false, popular: false,
  },
];

/* ═══════════════════════════════════════════════════════════
   ⬇️ من هنا تحت كله شغل الموقع — متلمسهوش إطلاقاً
   ═══════════════════════════════════════════════════════════ */

/* ---------- اللغة (عربي / إنجليزي) ---------- */
let currentLang = localStorage.getItem("hs_lang") || "en";
const lang = () => currentLang;
const t = (key) => (I18N[lang()][key] ?? key);
const catName = (c) => (lang() === "ar" && c.nameAr ? c.nameAr : c.name);
const tr = (p, enKey, arKey) => (lang() === "ar" && p[arKey] != null ? p[arKey] : p[enKey]);

/* لغة القوانين مستقلة — بتترجم المودال بس */
let rulesLang = null;
const rl = () => (rulesLang !== null ? rulesLang : lang());

function setLang(l) {
  currentLang = l;
  localStorage.setItem("hs_lang", l);
  applyLang();
  renderNav();
  renderCurrentView();
  /* زرار اللغة الأساسي بيغيّر القوانين برضو */
  if (rulesLang !== null) rulesLang = l;
  if ($("rulesModal").classList.contains("open")) {
    renderRules();
    updateRulesLangBtn();
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* ---------- الفوتر (طرق الدفع) ---------- */
function renderFooter() {
  const methods = lang() === "ar" ? PAYMENT_METHODS.ar : PAYMENT_METHODS.en;
  $("footerPayLabel").textContent = t("payLabel");
  $("footerPay").innerHTML = methods.map((m) => `<span class="pay-chip">${m}</span>`).join("");
  $("footerName").textContent = CONFIG.serverName;
}

/* ---------- تطبيق الترجمة على العناصر الثابتة ---------- */
function applyLang() {
  const L = I18N[lang()];
  $("navTagline").textContent = L.tagline;
  $("heroTagline").textContent = L.tagline;
  $("heroDesc").textContent = L.heroDesc;
  $("chipSupport").textContent = L.chipSupport;
  $("chipSafe").textContent = L.chipSafe;
  $("secCategories").textContent = L.secCategories;
  $("secPopular").innerHTML = L.secPopular + ' <span class="title-badge">⭐</span>';
  $("rulesBtn").textContent = L.secRules;
  renderFooter();
  $("searchInput").placeholder = L.searchPlaceholder;
  $("joinDiscord").textContent = L.joinDiscord;
  $("navDiscord").textContent = L.discord;
  $("dmTitle").textContent = L.dmTitle;
  $("dmCancel").textContent = L.cancel;
  $("dmGo").textContent = L.continueDiscord;
  $("langBtn").textContent = lang() === "en" ? "العربية" : "English";
}

/* ---------- إعادة رسم العرض الحالي ---------- */
function renderCurrentView() {
  if (state.view === "home") renderHome();
  else if (state.view === "category") {
    if (state.vehClass) {
      renderStore(
        "Class " + state.vehClass,
        PRODUCTS.filter((p) => p.category === "vehicles" && p.class === state.vehClass)
      );
    } else {
      renderStore(catName(catMap[state.category]), PRODUCTS.filter((p) => p.category === state.category));
    }
  } else if (state.view === "search") {
    renderStore(t("resultsFor").replace("{q}", state.query), getSearchResults(state.query));
  }
}

/* ---------- عناصر الصفحة ---------- */
const $ = (id) => document.getElementById(id);
const catMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

let state = { view: "home", category: null, query: "", vehClass: null };

/* ---------- تطبيق الإعدادات على الصفحة ---------- */
function applyConfig() {
  document.title = CONFIG.serverName + " — FiveM Store";
  $("navName").textContent = CONFIG.serverName;
  $("heroName").textContent = CONFIG.serverName;

  ["navLogo", "heroLogo"].forEach((id) => {
    const el = $(id);
    if (CONFIG.logoImage) { el.src = CONFIG.logoImage; el.style.display = ""; }
    else el.style.display = "none";
  });
}

/* ---------- صورة المنتج (مع بديل تلقائي لو الصورة مش موجودة) ---------- */
function getProductImage(p) {
  if (p.image) return p.image;
  const cat = catMap[p.category];
  const name = tr(p, "name", "nameAr");
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='375'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='#1c1c24'/><stop offset='1' stop-color='#0d0d11'/>` +
    `</linearGradient></defs>` +
    `<rect width='600' height='375' fill='url(#g)'/>` +
    `<circle cx='500' cy='60' r='160' fill='rgba(255,45,63,0.08)'/>` +
    `<text x='300' y='160' font-size='96' text-anchor='middle'>${cat.emoji}</text>` +
    `<text x='300' y='245' font-size='34' font-weight='bold' fill='#e8e8ee' text-anchor='middle' font-family='Arial'>${name}</text>` +
    `<text x='300' y='285' font-size='20' fill='#8a8a96' text-anchor='middle' font-family='Arial'>${catName(cat)}</text>` +
    `</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

/* ---------- كارت المنتج ---------- */
function productCard(p, i = 0) {
  const cat = catMap[p.category];
  const name = tr(p, "name", "nameAr");
  const badges =
    (p.popular ? `<span class="p-badge popular">${t("popularBadge")}</span>` : "") +
    (p.sold ? `<span class="p-badge sold">${t("soldBadge")}</span>` : "");
  const div = document.createElement("article");
  div.className = "p-card" + (p.sold ? " sold" : "");
  div.style.animationDelay = (i * 0.06) + "s";
  div.innerHTML = `
    <div class="p-img">
      <img src="${getProductImage(p)}" alt="${name}" onerror="this.onerror=null;this.src=window.__ph('${name}','${cat.emoji}','${catName(cat)}')" loading="lazy" decoding="async">
      ${badges}
      <button class="like-btn ${isLiked(p.id) ? "liked" : ""}" data-like="${p.id}" aria-label="Like" title="Like">
        <span class="like-ico">♥</span>
        <span class="like-count" data-likes="${p.id}">${p.likes || 0}</span>
      </button>
    </div>
    <div class="p-body">
      <span class="p-cat">${cat.emoji} ${catName(cat)}</span>
      <h3>${name}</h3>
      <p>${tr(p, "short", "shortAr")}</p>
      <div class="p-foot">
        <span class="p-price">${p.price}</span>
        <div class="p-actions">
          <button class="btn btn-outline btn-sm" data-details="${p.id}">${t("details")}</button>
          <button class="btn btn-primary btn-sm" data-donate="${p.id}">${t("donate")}</button>
        </div>
      </div>
    </div>`;
  return div;
}

/* ---------- شريط التصنيفات في السايدبار ---------- */
function renderNav() {
  const nav = $("categoryNav");

  /* حفظ موضع المؤشر القديم عشان ينزلق من تلقاء نفسه */
  const oldInd = nav.querySelector(".nav-indicator");
  const oldPos = oldInd ? { left: oldInd.offsetLeft, width: oldInd.offsetWidth } : null;

  nav.innerHTML = "";

  const homeBtn = document.createElement("button");
  homeBtn.className = "nav-link" + (state.view === "home" ? " active" : "");
  homeBtn.dataset.cat = "home";
  homeBtn.innerHTML = `<span class="cat-emoji">🏠</span> ${t("home")}`;
  homeBtn.addEventListener("click", () => openCategory("home"));
  nav.appendChild(homeBtn);

  CATEGORIES.forEach((c) => {
    const count = PRODUCTS.filter((p) => p.category === c.id).length;
    const btn = document.createElement("button");
    btn.className = "nav-link" + (state.view === "category" && state.category === c.id ? " active" : "");
    btn.dataset.cat = c.id;
    btn.innerHTML =
      `<span class="cat-emoji">${c.emoji}</span> ${catName(c)}` +
      (count === 0
        ? `<span class="nl-count soon">${t("soon")}</span>`
        : `<span class="nl-count">${count}</span>`);
    btn.addEventListener("click", () => openCategory(c.id));
    nav.appendChild(btn);
  });

  /* المؤشر المنزلق */
  const ind = document.createElement("div");
  ind.className = "nav-indicator";
  nav.appendChild(ind);

  const active = nav.querySelector(".nav-link.active");
  if (!active) return;

  const targetLeft = active.offsetLeft;
  const targetWidth = active.offsetWidth;

  if (oldPos) {
    /* ابدأ من مكان القديم من غير حركة، وبعدين انزلق للجديد */
    ind.style.transition = "none";
    ind.style.left = oldPos.left + "px";
    ind.style.width = oldPos.width + "px";
    ind.style.opacity = "1";
    void ind.offsetWidth;
    ind.style.transition = "";
    ind.style.left = targetLeft + "px";
    ind.style.width = targetWidth + "px";
  } else {
    ind.style.left = targetLeft + "px";
    ind.style.width = targetWidth + "px";
    ind.style.opacity = "1";
  }
}

/* ---------- تحويل لون hex إلى rgba ---------- */
function hexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ---------- اختصارات التصنيفات في الهوم (كروت مميزة) ---------- */
function renderShortcuts() {
  const wrap = $("catShortcuts");
  wrap.innerHTML = "";
  CATEGORIES.forEach((c, i) => {
    const count = PRODUCTS.filter((p) => p.category === c.id).length;
    const btn = document.createElement("button");
    btn.className = "cat-card";
    btn.style.animationDelay = (i * 0.08) + "s";
    btn.style.setProperty("--cc", c.color);
    btn.style.setProperty("--cc-soft", hexToRgba(c.color, .16));
    btn.style.setProperty("--cc-glow", hexToRgba(c.color, .38));
    btn.innerHTML = `
      <span class="cc-emoji">${c.emoji}</span>
      <span class="cc-name">${catName(c)}</span>
      <span class="cc-count${count === 0 ? " soon" : ""}">${count === 0 ? t("soon") : count + " " + (count === 1 ? t("product") : t("products"))}</span>
      <span class="cc-go">${t("browse")} <span class="cc-arrow">→</span></span>`;
    btn.addEventListener("click", () => openCategory(c.id));
    wrap.appendChild(btn);
  });
}

/* ---------- إظهار قسم مع أنيميشن سلس ---------- */
function showView(el) {
  el.hidden = false;
  el.classList.remove("v-enter");
  void el.offsetWidth;
  el.classList.add("v-enter");
}

/* ---------- الصفحة الرئيسية ---------- */
function renderHome() {
  $("view-store").hidden = true;
  $("pageTitle").textContent = t("home");
  showView($("view-home"));
  renderShortcuts();

  const fillGrid = (id, list) => {
    const grid = $(id);
    grid.innerHTML = "";
    list.forEach((p, i) => grid.appendChild(productCard(p, i)));
  };

  fillGrid("popularGrid", PRODUCTS.filter((p) => p.popular).slice(0, 6));

  document.querySelectorAll("#view-home .section").forEach((el) => el.classList.add("reveal"));
  initReveal($("view-home"));
}

/* ---------- فتح مودال قوانين الشراء ---------- */
function openRules() {
  if (rulesLang === null) rulesLang = lang();
  renderRules();
  updateRulesLangBtn();
  openModal("rulesModal");
}

/* ---------- زرار لغة القوانين (يترجم المودال بس) ---------- */
function updateRulesLangBtn() {
  $("rmLangBtn").textContent = rl() === "en" ? "العربية" : "English";
  $("rmTitle").textContent = rl() === "ar" ? I18N.ar.secRules : I18N.en.secRules;
}

/* ---------- قوانين الشراء ---------- */
function renderRules() {
  const box = $("rulesBox");
  box.innerHTML = "";

  const list = document.createElement("ol");
  list.className = "rules-list";
  RULES.forEach((r, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="rule-num">${i + 1}</span><span>${rl() === "ar" ? r.ar : r.en}</span>`;
    list.appendChild(li);
  });
  box.appendChild(list);

  const pay = document.createElement("div");
  pay.className = "pay-methods";
  const methods = rl() === "ar" ? PAYMENT_METHODS.ar : PAYMENT_METHODS.en;
  pay.innerHTML =
    `<span class="pay-label">${rl() === "ar" ? I18N.ar.payLabel : I18N.en.payLabel}</span>` +
    methods.map((m) => `<span class="pay-chip">${m}</span>`).join("");
  box.appendChild(pay);
}

/* ---------- صفحة الستور (تصنيف أو نتائج بحث) ---------- */
function renderStore(title, list) {
  $("view-home").hidden = true;
  $("pageTitle").textContent = title;
  showView($("view-store"));
  $("storeTitle").textContent = title;
  const isVeh = state.view === "category" && state.category === "vehicles";
  const isBiz = state.view === "category" && state.category === "mlo";
  const emptyCat = state.view === "category" && list.length === 0;
  $("storeCount").textContent = isVeh
    ? (list.length
        ? list.length + " " + (list.length === 1 ? t("product") : t("products"))
        : VEHICLE_CLASSES.length + " " + t("classes"))
    : emptyCat
      ? t("soon")
      : list.length + " " + (list.length === 1 ? t("product") : t("products"));
  const grid = $("productGrid");
  grid.innerHTML = "";

  if (isVeh) {
    if (state.vehClass) {
      grid.appendChild(vehClassHeader(state.vehClass));
      list.forEach((p, i) => grid.appendChild(productCard(p, i)));
    } else {
      grid.appendChild(vehicleClassesSection());
    }
    markStoreReveal();
    return;
  }

  if (list.length === 0) {
    if (state.view === "category") {
      grid.innerHTML = `
        <div class="empty-state coming-soon">
          <span class="cs-emoji">🚀</span>
          <b>${t("comingSoon")}</b>
          <span>${t("comingSoonDesc")}</span>
        </div>`;
    } else {
      grid.innerHTML = `<div class="empty-state">🔍 ${t("noResults")}</div>`;
      grid.querySelector("b").textContent = state.query;
    }
    return;
  }

  if (isBiz) {
    grid.appendChild(businessSections(list));
    markStoreReveal();
    return;
  }
  list.forEach((p, i) => grid.appendChild(productCard(p, i)));
}

/* ---------- إضافة reveal لأقسام صفحة الستور ---------- */
function markStoreReveal() {
  const vs = $("view-store");
  vs.querySelectorAll(".veh-classes, .veh-class-page, .biz-group").forEach((el) => el.classList.add("reveal"));
  $("storeTitle").closest(".store-head").classList.add("reveal");
  initReveal(vs);
}

/* ---------- ترويسة صفحة كلاس (زرار رجوع + السعر) ---------- */
function vehClassHeader(cls) {
  const vc = VEHICLE_CLASSES.find((c) => c.id === cls);
  if (!vc) return document.createDocumentFragment();
  const lang = currentLang;
  const sec = document.createElement("section");
  sec.className = "veh-class-page";
  sec.innerHTML = `
    <div class="veh-back-row">
      <button class="btn btn-outline btn-sm" data-backveh>← ${t("vehAll")}</button>
      <span class="veh-page-name" style="--vc:${vc.color}">${lang === "ar" ? "كلاس" : "Class"} ${vc.id}</span>
    </div>
    <div class="veh-page-card" style="--vc:${vc.color}">
      <div class="vc-prices">
        <div><span class="vc-amt">${vc.monthly}</span><span class="vc-label">${t("vehMonthly")}</span></div>
        <div><span class="vc-amt">${vc.season}</span><span class="vc-label">${t("vehSeason")}</span></div>
      </div>
      <span class="vc-hint">${lang === "ar" ? "عربيات هذا الكلاس" : "Vehicles of this class"}</span>
    </div>`;
  return sec;
}

/* ---------- تجميع البيزنس حسب النوع (مطاعم/معارض/ميكانيكا...) ---------- */
function businessSections(list) {
  const frag = document.createDocumentFragment();
  BUSINESS_TYPES.forEach((bt) => {
    const items = list.filter((p) => p.type === bt.id);
    if (!items.length) return;
    const sec = document.createElement("section");
    sec.className = "biz-group";
    const h = document.createElement("h3");
    h.className = "biz-title";
    h.innerHTML = `<span class="biz-emoji">${bt.emoji}</span> ${catName(bt)}`;
    const g = document.createElement("div");
    g.className = "grid";
    items.forEach((p, i) => g.appendChild(productCard(p, i)));
    sec.appendChild(h);
    sec.appendChild(g);
    frag.appendChild(sec);
  });
  return frag;
}

/* ---------- فئات المركبات (كارت الأقساط) ---------- */
function vehicleClassesSection() {
  const lang = currentLang;
  const sec = document.createElement("section");
  sec.className = "veh-classes";
  const card = (c) => `
    <button class="veh-class" data-vclass="${c.id}" style="--vc:${c.color}">
      <span class="vc-name">${lang === "ar" ? "كلاس" : "Class"} ${c.id}</span>
      <div class="vc-prices">
        <div><span class="vc-amt">${c.monthly}</span><span class="vc-label">${t("vehMonthly")}</span></div>
        <div><span class="vc-amt">${c.season}</span><span class="vc-label">${t("vehSeason")}</span></div>
      </div>
      <span class="vc-hint">${t("vehView")} →</span>
    </button>`;
  const rule = (r) => `<li>${lang === "ar" ? r.ar : r.en}</li>`;
  sec.innerHTML = `
    <div class="veh-head">
      <h2>${t("vehClassesTitle")}</h2>
    </div>
    <div class="veh-grid">${VEHICLE_CLASSES.map(card).join("")}</div>
    <div class="veh-rules">
      <h3>${t("vehRulesTitle")}</h3>
      <ul>${VEHICLE_RULES.map(rule).join("")}</ul>
    </div>`;
  return sec;
}

/* ---------- فتح صفحة كلاس (عربيات الكلاس لوحده) ---------- */
function openVehClass(cls) {
  state = { view: "category", category: "vehicles", vehClass: cls, query: "" };
  $("searchInput").value = "";
  renderStore("Class " + cls, PRODUCTS.filter((p) => p.category === "vehicles" && p.class === cls));
  renderNav();
  closeNav();
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* ---------- فتح تصنيف ---------- */
function openCategory(id) {
  $("searchInput").value = "";
  if (id === "home") {
    state = { view: "home", category: null, query: "", vehClass: null };
    renderHome();
  } else {
    state = { view: "category", category: id, query: "", vehClass: null };
    renderStore(catName(catMap[id]), PRODUCTS.filter((p) => p.category === id));
  }
  renderNav();
  closeNav();
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* ---------- البحث ---------- */
function doSearch(q) {
  q = q.trim().toLowerCase();
  if (!q) {
    if (state.view === "search") openCategory(state.category || "home");
    return;
  }
  state = { view: "search", category: state.category, query: q };
  renderStore(t("resultsFor").replace("{q}", q), getSearchResults(q));
  renderNav();
  closeNav();
}

/* ---------- نظام الإعجابات ❤️ ---------- */
const likedKey = (id) => "hs_liked_" + id;
const isLiked = (id) => localStorage.getItem(likedKey(id)) === "1";
const setLiked = (id, v) => localStorage.setItem(likedKey(id), v ? "1" : "0");

async function toggleLike(id, btn) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const liked = !isLiked(id);
  setLiked(id, liked);

  const counter = btn.querySelector(".like-count");
  p.likes = Math.max(0, (p.likes || 0) + (liked ? 1 : -1));
  btn.classList.toggle("liked", liked);
  if (counter) counter.textContent = p.likes;
  const pmCount = $("pmLikeCount");
  if (pmCount) pmCount.textContent = p.likes;
}

/* ---------- نتائج البحث (دالة نقية) ---------- */
function getSearchResults(q) {  q = q.trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    const cat = catMap[p.category];
    const hay = (
      p.name + " " + (p.nameAr || "") + " " + p.short + " " + (p.shortAr || "") +
      " " + p.description + " " + (p.descriptionAr || "") + " " + cat.name + " " + (cat.nameAr || "") + " " + cat.emoji
    ).toLowerCase();
    return hay.includes(q);
  });
}

/* ---------- مودال تفاصيل المنتج ---------- */
function openProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const cat = catMap[p.category];
  const name = tr(p, "name", "nameAr");
  $("pmImg").src = getProductImage(p);
  $("pmImg").onerror = () => { $("pmImg").src = window.__ph(name, cat.emoji, catName(cat)); };
  $("pmImg").decoding = "async";
  $("pmCat").textContent = cat.emoji + " " + catName(cat);
  $("pmName").textContent = name;
  $("pmDesc").textContent = tr(p, "description", "descriptionAr");
  const features = lang() === "ar" && p.featuresAr ? p.featuresAr : p.features;
  $("pmFeatures").innerHTML = features.map((f) => `<li>${f}</li>`).join("");
  $("pmPrice").textContent = p.price;
  $("pmLikeCount").textContent = p.likes || 0;
  const likeBtn = $("pmLike");
  likeBtn.classList.toggle("liked", isLiked(p.id));
  likeBtn.onclick = () => toggleLike(p.id, likeBtn);
  $("pmDonate").textContent = t("donateBtn");
  $("pmDonate").onclick = () => { closeModal("productModal"); openDonate(p); };
  openModal("productModal");}

/* ---------- مودال تأكيد الديسكورد ---------- */
function openDonate(p) {
  $("dmText").innerHTML = t("dmText")
    .replace("{name}", tr(p, "name", "nameAr"))
    .replace("{price}", p.price);
  $("dmGo").onclick = () => {
    toast(t("openingDiscord"));
    setTimeout(() => window.open(CONFIG.discordUrl, "_blank"), 350);
    closeModal("donateModal");
  };
  openModal("donateModal");
}

/* ---------- فتح/إغلاق المودال ---------- */
function openModal(id) { $(id).classList.add("open"); document.body.style.overflow = "hidden"; }
function closeModal(id) { $(id).classList.remove("open"); document.body.style.overflow = ""; }

/* ---------- التوست ---------- */
let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- قائمة الموبايل ---------- */
function openNav() { $("navbar").classList.add("menu-open"); $("overlay").classList.add("show"); }
function closeNav() { $("navbar").classList.remove("menu-open"); $("overlay").classList.remove("show"); }

/* ---------- الأحداث ---------- */
function bindEvents() {
  $("menuBtn").addEventListener("click", () => {
    if ($("navbar").classList.contains("menu-open")) closeNav();
    else openNav();
  });
  $("overlay").addEventListener("click", closeNav);

  document.addEventListener("contextmenu", (e) => e.preventDefault());

  document.addEventListener("click", (e) => {
    const vb = e.target.closest("[data-backveh]");
    if (vb) {
      openCategory("vehicles");
      return;
    }
    const vc = e.target.closest("[data-vclass]");
    if (vc) {
      openVehClass(vc.dataset.vclass);
      return;
    }
    const d = e.target.closest("[data-details]");
    const dn = e.target.closest("[data-donate]");
    const lk = e.target.closest("[data-like]");
    const hm = e.target.closest("[data-action='home']");
    if (lk) toggleLike(+lk.dataset.like, lk);
    else if (d) openProduct(+d.dataset.details);
    else if (dn) openDonate(PRODUCTS.find((p) => p.id === +dn.dataset.donate));
    else if (hm) openCategory("home");
  });

  document.querySelectorAll("[data-close]").forEach((b) =>
    b.addEventListener("click", () => closeModal(b.closest(".modal").id))
  );

  $("dmCancel").addEventListener("click", () => closeModal("donateModal"));

  $("rulesBtn").addEventListener("click", openRules);
  $("rmLangBtn").addEventListener("click", () => {
    rulesLang = rl() === "en" ? "ar" : "en";
    renderRules();
    updateRulesLangBtn();
  });

  $("langBtn").addEventListener("click", () => setLang(lang() === "en" ? "ar" : "en"));

  let debounce;
  $("searchInput").addEventListener("input", (e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => doSearch(e.target.value), 180);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal("productModal");
      closeModal("donateModal");
      closeModal("rulesModal");
      closeNav();
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === "a" || e.key === "A")) {
      e.preventDefault();
    }
  });
}

/* ---------- تشغيل الموقع ---------- */
window.__ph = (name, emoji, cat) => {  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='375'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='#1c1c24'/><stop offset='1' stop-color='#0d0d11'/>` +
    `</linearGradient></defs>` +
    `<rect width='600' height='375' fill='url(#g)'/>` +
    `<circle cx='500' cy='60' r='160' fill='rgba(255,45,63,0.08)'/>` +
    `<text x='300' y='160' font-size='96' text-anchor='middle'>${emoji}</text>` +
    `<text x='300' y='245' font-size='34' font-weight='bold' fill='#e8e8ee' text-anchor='middle' font-family='Arial'>${name}</text>` +
    `<text x='300' y='285' font-size='20' fill='#8a8a96' text-anchor='middle' font-family='Arial'>${cat}</text>` +
    `</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
};

/* ---------- أوبتميز: وقف أنيميشنز الهيرو لما يخرج من الشاشة ---------- */
function initHeroObserver() {
  const hero = document.querySelector(".hero");
  if (!hero || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      document.body.classList.toggle("hero-idle", !entries[0].isIntersecting);
    },
    { rootMargin: "200px 0px" }
  );
  io.observe(hero);
}

/* ---------- Scroll Reveal: العناصر تظهر بتحرك خفيف مع السكرول ---------- */
let revealIO;
function initReveal(root = document) {
  if (!("IntersectionObserver" in window)) {
    root.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
    return;
  }
  revealIO = revealIO || new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("revealed");
          revealIO.unobserve(en.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  root.querySelectorAll(".reveal:not(.revealed)").forEach((el) => revealIO.observe(el));
}

/* ---------- الهيدر يتغير مع السكرول ---------- */
function initHeaderScroll() {
  const nav = $("navbar");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- جزيئات خلفية خفيفة (Canvas) ---------- */
function initParticles() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = document.createElement("canvas");
  cv.id = "particles";
  document.body.prepend(cv);

  /* طبقة النجوم الثابتة ورا الجزيئات */
  const stars = document.createElement("div");
  stars.id = "stars";
  document.body.prepend(stars);
  const ctx = cv.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const COLORS = ["255, 45, 63", "255, 194, 75", "255, 255, 255"];
  const N = Math.min(32, Math.max(12, Math.floor(window.innerWidth / 45)));
  const pts = [];
  for (let i = 0; i < N; i++) {
    pts.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + .5,
      vx: (Math.random() - .5) * .00012,
      vy: -(Math.random() * .00016 + .00004),
      a: Math.random() * .35 + .1,
      tw: Math.random() * Math.PI * 2,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
  }
  function resize() {
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });
  let raf;
  const tick = () => {
    ctx.clearRect(0, 0, cv.width, cv.height);
    pts.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.tw += .02;
      if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
      if (p.x < -0.02) p.x = 1.02;
      if (p.x > 1.02) p.x = -0.02;
      const a = p.a * (0.5 + 0.5 * Math.sin(p.tw));
      ctx.beginPath();
      ctx.arc(p.x * cv.width, p.y * cv.height, p.r * dpr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c}, ${a.toFixed(3)})`;
      ctx.fill();
    });
    raf = requestAnimationFrame(tick);
  };
  const stop = () => cancelAnimationFrame(raf);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else tick();
  });
  tick();
}

/* ---------- تحميل المنتجات من products.json (مع fallback للمحلي) ---------- */
async function loadRemoteProducts() {
  try {
    const res = await fetch("products.json", { cache: "no-store" });
    if (!res.ok) return false;
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) return false;
    PRODUCTS = data;
    return true;
  } catch (e) {
    console.warn("products.json load failed, using local products.", e);
    return false;
  }
}

applyConfig();
applyLang();
renderNav();
renderHome();
initHeroObserver();
initHeaderScroll();
initParticles();
initReveal();
bindEvents();
loadRemoteProducts().then((ok) => {
  if (ok) {
    renderNav();
    renderCurrentView();
    initReveal();
  }
});
