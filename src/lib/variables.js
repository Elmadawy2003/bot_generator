/**
 * variables.js
 * 
 * هذا الملف يحتوي على المتغيرات والثوابت المستخدمة في جميع أنحاء التطبيق
 */

// نقاط النهاية للواجهة البرمجية
export const API_ENDPOINTS = {
  // نقاط نهاية المصادقة
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    resetPassword: '/api/auth/reset-password',
  },
  
  // نقاط نهاية البوتات
  bots: {
    fetchAll: '/api/bots',
    create: '/api/bots/create',
    update: '/api/bots/:id',
    delete: '/api/bots/:id',
    templates: '/api/bots/templates',
  }
};

// نصوص واجهة المستخدم
export const UI_TEXT = {
  // نصوص عامة
  general: {
    welcomeMessage: 'مرحبًا بك في منصة الشات بوت',
    loading: 'جاري التحميل...',
    error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
  },
  
  // نصوص الصفحة الرئيسية
  home: {
    heroTitle: 'أتمتة خدمة العملاء مع الذكاء الاصطناعي',
    heroSubtitle: 'منصة متكاملة لإنشاء وإدارة روبوتات المحادثة الذكية لعملك',
    ctaButton: 'ابدأ الآن مجانًا',
    featuresTitle: 'المميزات الرئيسية',
    howItWorksTitle: 'كيف يعمل',
    testimonialsTitle: 'آراء العملاء',
  },
  
  // نصوص المصادقة
  auth: {
    loginTitle: 'تسجيل الدخول',
    registerTitle: 'إنشاء حساب جديد',
    emailPlaceholder: 'البريد الإلكتروني',
    passwordPlaceholder: 'كلمة المرور',
    namePlaceholder: 'الاسم الكامل',
    forgotPassword: 'نسيت كلمة المرور؟',
    noAccount: 'ليس لديك حساب؟',
    haveAccount: 'لديك حساب بالفعل؟',
    createAccount: 'إنشاء حساب',
    loginButton: 'تسجيل الدخول',
    registerButton: 'إنشاء حساب',
    agreeTerms: 'بالتسجيل، أنت توافق على شروط الاستخدام وسياسة الخصوصية'
  }
};

// خصائص المكونات
export const COMPONENT_PROPS = {
  // خطط التسعير
  pricingPlans: [
    {
      name: "الخطة المجانية",
      price: "0",
      features: [
        "بوت واحد",
        "100 محادثة شهرياً",
        "القوالب الأساسية",
        "الدعم عبر البريد الإلكتروني"
      ],
      popular: false,
      cta: "ابدأ مجاناً"
    },
    {
      name: "الخطة الأساسية",
      price: "199",
      features: [
        "5 بوتات",
        "1000 محادثة شهرياً",
        "جميع القوالب",
        "تخصيص كامل",
        "دعم فني على مدار الساعة",
        "تحليلات متقدمة"
      ],
      popular: true,
      cta: "ابدأ التجربة المجانية"
    },
    {
      name: "الخطة المتقدمة",
      price: "499",
      features: [
        "بوتات غير محدودة",
        "محادثات غير محدودة",
        "جميع المميزات المتقدمة",
        "تكامل مع الأنظمة",
        "دعم فني مخصص",
        "تدريب وإعداد مجاني",
        "تقارير مخصصة"
      ],
      popular: false,
      cta: "تواصل معنا"
    }
  ],

  // روابط شريط التنقل
  navbarLinks: [
    { name: 'الرئيسية', href: '/' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'الخدمات', href: '/services' },
    { name: 'القوالب', href: '/templates' },
    { name: 'الأدوات', href: '/tools' },
    { name: 'حالات الاستخدام', href: '/use-cases' },
    { name: 'الأكاديمية', href: '/academy' },
    { name: 'من نحن', href: '/about' },
    { name: 'اتصل بنا', href: '/contact' },
  ],
  
  // روابط تذييل الصفحة
  footerLinks: [
    {
      title: 'المنتج',
      links: [
        { name: 'المميزات', href: '/services' },
        { name: 'الأسعار', href: '/pricing' },
        { name: 'القوالب', href: '/templates' },
        { name: 'الأدوات', href: '/tools' },
      ],
    },
    {
      title: 'الموارد',
      links: [
        { name: 'الأكاديمية', href: '/academy' },
        { name: 'حالات الاستخدام', href: '/use-cases' },
        { name: 'المدونة', href: '/blog' },
        { name: 'الأسئلة الشائعة', href: '/faq' },
      ],
    },
    {
      title: 'الشركة',
      links: [
        { name: 'من نحن', href: '/about' },
        { name: 'اتصل بنا', href: '/contact' },
        { name: 'سياسة الخصوصية', href: '/privacy' },
        { name: 'شروط الاستخدام', href: '/terms' },
      ],
    }
  ]
};

// بيانات حالات الاستخدام
export const USE_CASES_DATA = {
  restaurants: {
    title: 'المطاعم',
    icon: '/icons/restaurant.svg',
    description: 'أتمتة حجوزات الطاولات واستقبال الطلبات والرد على الاستفسارات الشائعة',
  },
  clinics: {
    title: 'العيادات',
    icon: '/icons/clinic.svg',
    description: 'إدارة المواعيد وتسجيل المرضى والرد على الاستفسارات الطبية',
  },
  ecommerce: {
    title: 'التجارة الإلكترونية',
    icon: '/icons/ecommerce.svg',
    description: 'مساعدة العملاء في التسوق ومتابعة الطلبات وتقديم توصيات المنتجات',
  },
  education: {
    title: 'التعليم',
    icon: '/icons/education.svg',
    description: 'الرد على استفسارات الطلاب وتنظيم الدروس وتوفير مواد تعليمية',
  }
};
