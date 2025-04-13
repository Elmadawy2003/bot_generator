import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "بوت المواعيد - منصة شات بوت",
  description: "بوت ذكي لتنظيم وجدولة المواعيد والحجوزات بشكل آلي على مدار الساعة",
};

// ميزات بوت المواعيد
const features = [
  {
    title: "حجز المواعيد تلقائيًا",
    description: "تمكين العملاء من حجز المواعيد بشكل تلقائي دون تدخل بشري",
    icon: "/icons/booking.svg",
  },
  {
    title: "متاح 24/7",
    description: "خدمة حجز المواعيد متاحة على مدار الساعة طوال أيام الأسبوع",
    icon: "/icons/24-7.svg",
  },
  {
    title: "تذكير بالمواعيد",
    description: "إرسال تذكيرات تلقائية للعملاء قبل موعدهم بوقت كافٍ",
    icon: "/icons/reminder.svg",
  },
  {
    title: "إعادة جدولة وإلغاء",
    description: "إمكانية إعادة جدولة أو إلغاء المواعيد بسهولة وبشكل تلقائي",
    icon: "/icons/reschedule.svg",
  },
  {
    title: "تكامل مع التقويم",
    description: "تكامل مع تقويم Google وOutlook وغيرها من تطبيقات التقويم",
    icon: "/icons/calendar.svg",
  },
  {
    title: "تقارير وإحصائيات",
    description: "تقارير تفصيلية عن المواعيد والحجوزات والإلغاءات",
    icon: "/icons/analytics.svg",
  },
];

// حالات استخدام بوت المواعيد
const useCases = [
  {
    title: "حجز المواعيد",
    description: "تمكين العملاء من حجز المواعيد بسهولة من خلال اختيار التاريخ والوقت المناسب من الأوقات المتاحة",
  },
  {
    title: "التحقق من توفر المواعيد",
    description: "السماح للعملاء بالتحقق من المواعيد المتاحة قبل الحجز",
  },
  {
    title: "إدارة المواعيد",
    description: "تمكين العملاء من عرض وتعديل وإلغاء مواعيدهم بسهولة",
  },
  {
    title: "جمع معلومات العملاء",
    description: "جمع المعلومات اللازمة من العملاء قبل الموعد لتحسين الخدمة",
  },
];

// الأسئلة الشائعة
const faqs = [
  {
    question: "كيف يمكن لبوت المواعيد توفير الوقت والجهد؟",
    answer: "يقوم بوت المواعيد بأتمتة عملية حجز وإدارة المواعيد بالكامل، مما يوفر وقت وجهد موظفي الاستقبال ويقلل من الأخطاء البشرية. كما يمكّن العملاء من حجز مواعيدهم في أي وقت دون الحاجة للانتظار للتحدث مع موظف.",
  },
  {
    question: "هل يمكن تخصيص بوت المواعيد ليتناسب مع جدول عملي؟",
    answer: "نعم، يمكن تخصيص بوت المواعيد بالكامل ليتناسب مع ساعات عملك وأيام الإجازات والمناسبات الخاصة. يمكنك تحديد الأوقات المتاحة للحجز، ومدة كل موعد، والفترات الفاصلة بين المواعيد.",
  },
  {
    question: "كيف يتعامل البوت مع حالات التعارض في المواعيد؟",
    answer: "يقوم البوت بالتحقق من توفر المواعيد في الوقت الفعلي، ويعرض فقط الأوقات المتاحة للعملاء. في حالة حدوث أي تغييرات في الجدول، يقوم البوت بتحديث قائمة المواعيد المتاحة تلقائيًا لتجنب أي تعارض.",
  },
  {
    question: "هل يمكن ربط بوت المواعيد بأنظمة أخرى؟",
    answer: "نعم، يمكن ربط بوت المواعيد بمختلف الأنظمة مثل أنظمة إدارة علاقات العملاء (CRM)، وتطبيقات التقويم (Google Calendar, Outlook)، وأنظمة إدارة المواعيد الحالية. هذا التكامل يضمن تزامن البيانات وتحديثها في جميع الأنظمة.",
  },
];

export default function AppointmentBotPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* رأس الصفحة */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              بوت المواعيد
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              بوت ذكي لتنظيم وجدولة المواعيد والحجوزات بشكل آلي على مدار الساعة، مما يوفر وقت فريق العمل ويحسن تجربة العملاء
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-x-reverse sm:space-y-0">
              <Link
                href="/auth/register"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                ابدأ الآن مجانًا
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                عرض الأسعار
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-[300px] w-full max-w-lg">
            <Image
              src="/images/bot-types/appointment-bot.svg"
              alt="بوت المواعيد"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ميزات البوت */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ميزات بوت المواعيد
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من الميزات المتقدمة التي تجعل بوت المواعيد الخيار الأمثل لتنظيم وجدولة المواعيد والحجوزات
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* حالات الاستخدام */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            حالات استخدام بوت المواعيد
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            تعرف على كيفية استفادة عملك من بوت المواعيد في مختلف السيناريوهات
          </p>

          <div className="mt-8 space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex items-center">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mr-4 text-lg font-bold text-foreground">
                    {useCase.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* الأسئلة الشائعة */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            إجابات على الأسئلة الشائعة حول بوت المواعيد
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="mt-24 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                جاهز لتحسين نظام المواعيد لديك؟
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ابدأ اليوم واستفد من قوة الذكاء الاصطناعي في تنظيم وجدولة المواعيد والحجوزات بشكل آلي
              </p>
              <div className="mt-8">
                <Link
                  href="/auth/register"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  ابدأ الآن مجانًا
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] md:h-auto">
              <Image
                src="/images/bot-types/appointment-cta.svg"
                alt="بوت المواعيد"
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