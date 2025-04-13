import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "بوت خدمة العملاء - منصة شات بوت",
  description: "بوت ذكي للرد على استفسارات العملاء وتوجيههم بشكل آلي على مدار الساعة",
};

// ميزات بوت خدمة العملاء
const features = [
  {
    title: "رد آلي على الاستفسارات الشائعة",
    description: "يمكن للبوت الرد على الأسئلة المتكررة بشكل فوري وبدقة عالية",
    icon: "/icons/auto-reply.svg",
  },
  {
    title: "متاح 24/7",
    description: "خدمة عملاء متاحة على مدار الساعة طوال أيام الأسبوع دون توقف",
    icon: "/icons/24-7.svg",
  },
  {
    title: "تحويل المحادثة لموظف بشري",
    description: "إمكانية تحويل المحادثة لموظف بشري عند الحاجة لمساعدة إضافية",
    icon: "/icons/human-handoff.svg",
  },
  {
    title: "تخصيص كامل للردود",
    description: "تخصيص ردود البوت لتتناسب مع هوية علامتك التجارية وأسلوب تواصلك",
    icon: "/icons/customize.svg",
  },
  {
    title: "تحليلات وتقارير",
    description: "تقارير تفصيلية عن أداء البوت واستفسارات العملاء الأكثر شيوعًا",
    icon: "/icons/analytics.svg",
  },
  {
    title: "دعم متعدد اللغات",
    description: "دعم للغة العربية والإنجليزية ولغات أخرى للتواصل مع عملاء من مختلف الجنسيات",
    icon: "/icons/multilingual.svg",
  },
];

// حالات استخدام بوت خدمة العملاء
const useCases = [
  {
    title: "الرد على الاستفسارات الشائعة",
    description: "يمكن للبوت الرد على الأسئلة المتكررة مثل ساعات العمل، الموقع، سياسات الإرجاع، وغيرها",
  },
  {
    title: "توجيه العملاء للمنتجات والخدمات",
    description: "مساعدة العملاء في العثور على المنتجات أو الخدمات المناسبة لاحتياجاتهم",
  },
  {
    title: "متابعة الطلبات والشحنات",
    description: "تمكين العملاء من متابعة حالة طلباتهم وشحناتهم بسهولة",
  },
  {
    title: "جمع معلومات العملاء",
    description: "جمع معلومات العملاء وتفضيلاتهم لتحسين الخدمة وتخصيص العروض",
  },
];

// الأسئلة الشائعة
const faqs = [
  {
    question: "كيف يمكن لبوت خدمة العملاء تحسين تجربة العملاء؟",
    answer: "يعمل بوت خدمة العملاء على تحسين تجربة العملاء من خلال توفير ردود فورية على استفساراتهم على مدار الساعة، مما يقلل من وقت الانتظار ويزيد من رضا العملاء. كما يمكنه التعامل مع عدة عملاء في وقت واحد دون تأخير.",
  },
  {
    question: "هل يمكن تخصيص بوت خدمة العملاء ليتناسب مع علامتي التجارية؟",
    answer: "نعم، يمكن تخصيص بوت خدمة العملاء بالكامل ليتناسب مع هوية علامتك التجارية، بما في ذلك الأسلوب واللغة والردود والمظهر. يمكنك أيضًا تدريب البوت على المعلومات الخاصة بعملك لضمان دقة الردود.",
  },
  {
    question: "كيف يتعامل البوت مع الاستفسارات المعقدة التي لا يمكنه الإجابة عليها؟",
    answer: "عندما يواجه البوت استفسارًا معقدًا لا يمكنه الإجابة عليه، يقوم تلقائيًا بتحويل المحادثة إلى موظف بشري للمساعدة. يمكن تكوين البوت لتحديد متى يجب تحويل المحادثة بناءً على معايير محددة مسبقًا.",
  },
  {
    question: "هل يمكن للبوت التعامل مع لغات متعددة؟",
    answer: "نعم، يدعم البوت اللغة العربية والإنجليزية ولغات أخرى، مما يتيح لك التواصل مع عملاء من مختلف الجنسيات. يمكن للبوت التعرف تلقائيًا على لغة العميل والرد بنفس اللغة.",
  },
];

export default function CustomerServiceBotPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* رأس الصفحة */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              بوت خدمة العملاء
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              بوت ذكي للرد على استفسارات العملاء وتوجيههم بشكل آلي على مدار الساعة، مما يوفر وقت فريق خدمة العملاء ويحسن تجربة العملاء
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
              src="/images/bot-types/customer-service-bot.svg"
              alt="بوت خدمة العملاء"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ميزات البوت */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ميزات بوت خدمة العملاء
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من الميزات المتقدمة التي تجعل بوت خدمة العملاء الخيار الأمثل لتحسين تواصلك مع العملاء
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
            حالات استخدام بوت خدمة العملاء
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            تعرف على كيفية استفادة عملك من بوت خدمة العملاء في مختلف السيناريوهات
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
            إجابات على الأسئلة الشائعة حول بوت خدمة العملاء
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
        </div>

        {/* دعوة للعمل */}
        <div className="mt-24 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                جاهز لتحسين خدمة العملاء لديك؟
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ابدأ اليوم واستفد من قوة الذكاء الاصطناعي في أتمتة خدمة العملاء وتحسين تجربتهم
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
                src="/images/bot-types/customer-service-cta.svg"
                alt="بوت خدمة العملاء"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* رابط العودة */}
        <div className="mt-16 text-center">
          <Link
            href="/use-cases"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            العودة إلى حالات الاستخدام
          </Link>
        </div>
      </div>
    </div>
  );
}