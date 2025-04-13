import Image from "next/image";
import Link from "next/link";
import { UI_TEXT } from "@/lib/variables";

export const metadata = {
  title: "الأكاديمية - منصة شات بوت",
  description: "مركز المعرفة والموارد التعليمية لمساعدتك في الاستفادة القصوى من منصة شات بوت",
};

// بيانات الأقسام التعليمية
const educationalSections = [
  {
    title: "دليل البدء السريع",
    description: "تعلم كيفية إعداد وتكوين بوت المحادثة الخاص بك في دقائق",
    icon: "/icons/quick-start.svg",
    link: "/academy/quick-start",
  },
  {
    title: "أساسيات الذكاء الاصطناعي",
    description: "فهم أساسيات الذكاء الاصطناعي وكيفية عمل بوتات المحادثة",
    icon: "/icons/ai-basics.svg",
    link: "/academy/ai-basics",
  },
  {
    title: "تخصيص البوت",
    description: "تعلم كيفية تخصيص بوت المحادثة ليتناسب مع هوية علامتك التجارية",
    icon: "/icons/customize.svg",
    link: "/academy/customization",
  },
  {
    title: "إدارة المحادثات",
    description: "كيفية إدارة ومراقبة محادثات العملاء وتحسين أداء البوت",
    icon: "/icons/conversations.svg",
    link: "/academy/conversations",
  },
  {
    title: "تكامل القنوات",
    description: "دليل خطوة بخطوة لربط البوت بمختلف قنوات التواصل",
    icon: "/icons/channels.svg",
    link: "/academy/channels",
  },
  {
    title: "تحليلات وتقارير",
    description: "كيفية استخدام التحليلات والتقارير لتحسين أداء البوت",
    icon: "/icons/analytics.svg",
    link: "/academy/analytics",
  },
];

// بيانات الفيديوهات التعليمية
const tutorials = [
  {
    title: "كيفية إنشاء بوت محادثة في 5 دقائق",
    duration: "5:32",
    thumbnail: "/images/academy/tutorial-1.jpg",
    link: "/academy/tutorials/create-bot",
  },
  {
    title: "ربط البوت مع واتساب للأعمال",
    duration: "7:15",
    thumbnail: "/images/academy/tutorial-2.jpg",
    link: "/academy/tutorials/whatsapp-integration",
  },
  {
    title: "تدريب البوت على معلومات عملك",
    duration: "8:45",
    thumbnail: "/images/academy/tutorial-3.jpg",
    link: "/academy/tutorials/bot-training",
  },
  {
    title: "إعداد الردود الآلية والقوالب",
    duration: "6:20",
    thumbnail: "/images/academy/tutorial-4.jpg",
    link: "/academy/tutorials/auto-replies",
  },
];

// بيانات الأسئلة الشائعة
const faqs = [
  {
    question: "ما هي متطلبات استخدام منصة شات بوت؟",
    answer: "لا توجد متطلبات تقنية خاصة لاستخدام منصة شات بوت. كل ما تحتاجه هو جهاز متصل بالإنترنت ومتصفح ويب حديث. يمكنك إدارة البوت من أي جهاز، بما في ذلك الهواتف الذكية والأجهزة اللوحية.",
  },
  {
    question: "هل يمكنني تخصيص البوت ليتحدث بأسلوب معين؟",
    answer: "نعم، يمكنك تخصيص شخصية البوت وأسلوب الحديث بالكامل ليتناسب مع هوية علامتك التجارية. يمكنك تحديد نبرة الصوت (رسمية، ودية، مهنية) واللغة المستخدمة والمصطلحات الخاصة بمجال عملك.",
  },
  {
    question: "كيف يمكنني تدريب البوت على معلومات شركتي؟",
    answer: "يمكنك تدريب البوت على معلومات شركتك من خلال قسم 'قاعدة المعرفة' في لوحة التحكم. يمكنك إضافة الأسئلة الشائعة وإجاباتها، تحميل المستندات والكتيبات، أو إدخال المعلومات يدويًا. كلما أضفت المزيد من المعلومات، أصبح البوت أكثر ذكاءً في الرد على استفسارات العملاء.",
  },
  {
    question: "هل يمكن للبوت التعامل مع لغات متعددة؟",
    answer: "نعم، يدعم البوت اللغة العربية والإنجليزية ولغات أخرى. يمكنك إعداد البوت للتعرف تلقائيًا على لغة العميل والرد بنفس اللغة، أو يمكنك إنشاء بوتات منفصلة لكل لغة حسب احتياجاتك.",
  },
  {
    question: "كيف يمكنني قياس أداء البوت؟",
    answer: "توفر المنصة لوحة تحكم تحليلية شاملة تعرض مؤشرات الأداء الرئيسية مثل عدد المحادثات، معدل الرضا، الأسئلة الأكثر شيوعًا، ومعدل تحويل المحادثات لموظف بشري. يمكنك استخدام هذه البيانات لتحسين أداء البوت وتحديد المجالات التي تحتاج إلى تحسين.",
  },
  {
    question: "هل يمكن ربط البوت بأنظمتي الحالية؟",
    answer: "نعم، توفر المنصة واجهات برمجة تطبيقات (APIs) تسمح بالتكامل مع مختلف الأنظمة مثل أنظمة إدارة علاقات العملاء (CRM)، أنظمة إدارة المحتوى (CMS)، أنظمة إدارة الطلبات، وغيرها. يمكنك أيضًا الاستفادة من التكاملات الجاهزة مع الأنظمة الشائعة.",
  },
];

export default function AcademyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            الأكاديمية
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            مركز المعرفة والموارد التعليمية لمساعدتك في الاستفادة القصوى من منصة شات بوت
          </p>
        </div>

        {/* الأقسام التعليمية */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            الأقسام التعليمية
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            استكشف مجموعة من الموارد التعليمية المصممة لمساعدتك في كل خطوة
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {educationalSections.map((section, index) => (
              <Link
                key={index}
                href={section.link}
                className="group rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Image
                    src={section.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* الفيديوهات التعليمية */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            الفيديوهات التعليمية
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            شاهد دروسنا التعليمية لفهم كيفية استخدام المنصة بشكل أفضل
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tutorials.map((tutorial, index) => (
              <Link
                key={index}
                href={tutorial.link}
                className="group overflow-hidden rounded-lg border bg-background transition-all hover:border-primary hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 text-primary-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary">
                    {tutorial.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/academy/tutorials"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              عرض جميع الفيديوهات التعليمية
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m14 0l-7-7m7 7l-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* الأسئلة الشائعة */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            إجابات على الأسئلة الأكثر شيوعًا حول منصة شات بوت
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/academy/faq"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              عرض جميع الأسئلة الشائعة
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m14 0l-7-7m7 7l-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="mt-24 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                هل لديك سؤال لم تجد إجابته؟
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                فريق الدعم الفني لدينا جاهز لمساعدتك في أي وقت. تواصل معنا وسنرد عليك في أقرب وقت ممكن.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] md:h-auto">
              <Image
                src="/images/academy-cta.svg"
                alt="منصة شات بوت"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}