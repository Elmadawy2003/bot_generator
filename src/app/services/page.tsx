import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "الخدمات - منصة شات بوت",
  description: "اكتشف الخدمات المتكاملة التي تقدمها منصة شات بوت لأتمتة خدمة العملاء",
};

// بيانات دراسات الحالة
const caseStudies = [
  {
    title: "مطعم الذواقة",
    description: "تمكن مطعم الذواقة من تقليل وقت الانتظار للعملاء بنسبة 70% وزيادة المبيعات عبر الإنترنت بنسبة 45% باستخدام بوت المحادثة لاستقبال الطلبات والرد على الاستفسارات الشائعة.",
    image: "/case-studies/restaurant.jpg",
    industry: "المطاعم",
  },
  {
    title: "عيادات الصحة المتكاملة",
    description: "استطاعت عيادات الصحة المتكاملة توفير 30 ساعة أسبوعياً من وقت موظفي الاستقبال من خلال أتمتة حجز المواعيد والرد على الاستفسارات الطبية الشائعة.",
    image: "/case-studies/clinic.jpg",
    industry: "الرعاية الصحية",
  },
  {
    title: "متجر تك مارت",
    description: "حقق متجر تك مارت زيادة في معدل تحويل العملاء بنسبة 35% من خلال توفير مساعد تسوق افتراضي يساعد العملاء في اختيار المنتجات المناسبة.",
    image: "/case-studies/ecommerce.jpg",
    industry: "التجارة الإلكترونية",
  },
];

// بيانات الأسئلة الشائعة
const faqs = [
  {
    question: "كيف يمكنني البدء باستخدام منصة شات بوت؟",
    answer: "يمكنك البدء من خلال إنشاء حساب مجاني على المنصة، ثم اختيار القالب المناسب لعملك، وتخصيص البوت وفقاً لاحتياجاتك، وأخيراً ربطه بقنوات التواصل التي تستخدمها.",
  },
  {
    question: "هل يمكن تخصيص البوت ليتناسب مع هوية علامتي التجارية؟",
    answer: "نعم، توفر المنصة إمكانية تخصيص كاملة للبوت بما في ذلك الشخصية والأسلوب واللغة والردود، بالإضافة إلى إمكانية تخصيص المظهر ليتناسب مع هوية علامتك التجارية.",
  },
  {
    question: "ما هي القنوات التي يمكن ربط البوت بها؟",
    answer: "يمكن ربط البوت بالعديد من القنوات مثل واتساب للأعمال، تيليجرام، فيسبوك ماسنجر، انستجرام، الموقع الإلكتروني، بالإضافة إلى إمكانية التكامل مع المكالمات الصوتية.",
  },
  {
    question: "هل يمكن للبوت التعامل مع اللغة العربية؟",
    answer: "نعم، البوت مدعوم بأحدث تقنيات الذكاء الاصطناعي التي تمكنه من فهم اللغة العربية بشكل ممتاز، بالإضافة إلى دعم اللغة الإنجليزية ولغات أخرى.",
  },
  {
    question: "كيف يمكنني قياس أداء البوت؟",
    answer: "توفر المنصة لوحة تحكم متقدمة تتضمن تحليلات وإحصائيات دقيقة حول أداء البوت، بما في ذلك عدد المحادثات، معدل الرضا، الاستفسارات الأكثر شيوعاً، وغيرها من المؤشرات المهمة.",
  },
];

const services = [
  {
    title: "بوتات محادثة ذكية",
    description: "بوتات محادثة مدعومة بأحدث تقنيات الذكاء الاصطناعي لفهم استفسارات العملاء بدقة والرد عليها بشكل طبيعي",
    icon: "/icons/ai-chat.svg",
    features: [
      "فهم اللغة الطبيعية",
      "تعلم مستمر من المحادثات السابقة",
      "دعم اللغة العربية والإنجليزية",
      "تخصيص الشخصية والأسلوب",
    ],
  },
  {
    title: "تكامل متعدد القنوات",
    description: "ربط البوت الخاص بك بجميع قنوات التواصل التي يستخدمها عملاؤك من منصة واحدة",
    icon: "/icons/multi-channel.svg",
    features: [
      "واتساب للأعمال",
      "تيليجرام",
      "فيسبوك ماسنجر",
      "انستجرام",
      "الموقع الإلكتروني",
      "المكالمات الصوتية",
    ],
  },
  {
    title: "تحليلات متقدمة",
    description: "رؤى قيمة حول أداء البوت واستفسارات العملاء الأكثر شيوعًا لتحسين خدمة العملاء",
    icon: "/icons/analytics.svg",
    features: [
      "تقارير أداء البوت",
      "تحليل المحادثات",
      "قياس رضا العملاء",
      "اكتشاف الاتجاهات والأنماط",
    ],
  },
  {
    title: "تكامل مع الأنظمة الحالية",
    description: "دمج البوت مع أنظمتك الحالية مثل CRM وأنظمة إدارة الطلبات لتوفير تجربة سلسة",
    icon: "/icons/integration.svg",
    features: [
      "تكامل مع أنظمة CRM",
      "ربط بأنظمة إدارة الطلبات",
      "تكامل مع أنظمة المواعيد",
      "واجهة برمجة تطبيقات (API) مرنة",
    ],
  },
  {
    title: "قوالب جاهزة للاستخدام",
    description: "مجموعة متنوعة من القوالب الجاهزة المصممة خصيصًا لمختلف الصناعات والاحتياجات",
    icon: "/icons/templates.svg",
    features: [
      "قوالب للمطاعم",
      "قوالب للعيادات",
      "قوالب للمتاجر الإلكترونية",
      "قوالب للمراكز التعليمية",
      "قوالب لشركات الخدمات",
    ],
  },
  {
    title: "دعم فني متميز",
    description: "فريق دعم فني متخصص جاهز لمساعدتك في كل خطوة من رحلة إنشاء وإدارة البوت الخاص بك",
    icon: "/icons/support.svg",
    features: [
      "دعم على مدار الساعة",
      "مساعدة في الإعداد والتكوين",
      "تدريب على استخدام المنصة",
      "استشارات لتحسين أداء البوت",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* قسم العنوان */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            خدماتنا
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            حلول متكاملة لأتمتة خدمة العملاء باستخدام الذكاء الاصطناعي
          </p>
        </div>

        {/* قسم الخدمات */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                  className="text-primary"
                />
              </div>
              <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="ml-2 h-5 w-5 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* قسم دراسات الحالة */}
        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              قصص نجاح عملائنا
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              تعرف على كيف ساعدت منصتنا الشركات في تحسين خدمة العملاء وزيادة المبيعات
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <div className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                    {caseStudy.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{caseStudy.title}</h3>
                  <p className="mt-2 text-muted-foreground">{caseStudy.description}</p>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      قراءة القصة كاملة &larr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم الأسئلة الشائعة */}
        <div className="mt-20 rounded-lg bg-muted/20 p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              الأسئلة الشائعة
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* قسم التواصل */}
        <div className="mt-16 rounded-lg bg-muted/30 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">لم تجد ما تبحث عنه؟</h2>
            <p className="mt-2 text-muted-foreground">
              تواصل معنا للحصول على حلول مخصصة تناسب احتياجات عملك
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}