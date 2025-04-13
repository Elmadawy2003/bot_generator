import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "بوت الأسئلة الشائعة - منصة شات بوت",
  description: "بوت ذكي للإجابة على الأسئلة المتكررة وتوفير المعلومات للعملاء بشكل آلي",
};

// ميزات بوت الأسئلة الشائعة
const features = [
  {
    title: "الإجابة الفورية",
    description: "الرد الفوري على الأسئلة المتكررة دون الحاجة لانتظار موظف خدمة العملاء",
    icon: "/icons/instant-reply.svg",
  },
  {
    title: "قاعدة معرفة ذكية",
    description: "قاعدة معرفة متطورة تتعلم وتتحسن مع كل تفاعل جديد مع العملاء",
    icon: "/icons/knowledge-base.svg",
  },
  {
    title: "فهم اللغة الطبيعية",
    description: "القدرة على فهم أسئلة العملاء بلغتهم الطبيعية وتقديم إجابات دقيقة",
    icon: "/icons/natural-language.svg",
  },
  {
    title: "تحويل للموظف البشري",
    description: "إمكانية تحويل المحادثة لموظف بشري عند الحاجة لمساعدة إضافية",
    icon: "/icons/human-handoff.svg",
  },
  {
    title: "تحليلات الأسئلة",
    description: "تقارير تفصيلية عن الأسئلة الأكثر شيوعًا والمواضيع التي تهم العملاء",
    icon: "/icons/analytics.svg",
  },
  {
    title: "دعم متعدد اللغات",
    description: "دعم للغة العربية والإنجليزية ولغات أخرى للتواصل مع عملاء من مختلف الجنسيات",
    icon: "/icons/multilingual.svg",
  },
];

// حالات استخدام بوت الأسئلة الشائعة
const useCases = [
  {
    title: "الإجابة على الأسئلة المتكررة",
    description: "الرد على الأسئلة الشائعة حول المنتجات والخدمات وسياسات الشركة وساعات العمل وغيرها",
  },
  {
    title: "توفير معلومات المنتجات",
    description: "تقديم معلومات تفصيلية عن المنتجات والخدمات والمواصفات والأسعار",
  },
  {
    title: "شرح السياسات والإجراءات",
    description: "توضيح سياسات الشركة وإجراءات العمل وشروط الخدمة وسياسة الخصوصية",
  },
  {
    title: "المساعدة في حل المشكلات",
    description: "تقديم حلول للمشكلات الشائعة التي قد يواجهها العملاء واستكشاف الأخطاء وإصلاحها",
  },
];

// الأسئلة الشائعة
const faqs = [
  {
    question: "كيف يمكن لبوت الأسئلة الشائعة تحسين خدمة العملاء؟",
    answer: "يساعد بوت الأسئلة الشائعة في تحسين خدمة العملاء من خلال توفير إجابات فورية على الأسئلة المتكررة على مدار الساعة، مما يقلل من وقت الانتظار ويزيد من رضا العملاء. كما يمكّن فريق خدمة العملاء من التركيز على المهام الأكثر تعقيدًا التي تتطلب تدخلًا بشريًا.",
  },
  {
    question: "كيف يمكن تدريب البوت على الأسئلة الخاصة بعملي؟",
    answer: "يمكن تدريب البوت على الأسئلة الخاصة بعملك من خلال قاعدة المعرفة في لوحة التحكم. يمكنك إضافة الأسئلة الشائعة وإجاباتها، تحميل المستندات والكتيبات، أو إدخال المعلومات يدويًا. كلما أضفت المزيد من المعلومات، أصبح البوت أكثر ذكاءً في الرد على استفسارات العملاء.",
  },
  {
    question: "هل يمكن للبوت التعامل مع أسئلة معقدة؟",
    answer: "نعم، بفضل تقنيات الذكاء الاصطناعي المتقدمة وفهم اللغة الطبيعية، يمكن للبوت التعامل مع مجموعة واسعة من الأسئلة، بما في ذلك الأسئلة المعقدة. ومع ذلك، إذا كان السؤال يتجاوز قدرات البوت، فسيقوم تلقائيًا بتحويل المحادثة إلى موظف بشري للمساعدة.",
  },
  {
    question: "كيف يمكنني معرفة الأسئلة الأكثر شيوعًا التي يسألها العملاء؟",
    answer: "توفر المنصة تحليلات متقدمة تعرض الأسئلة الأكثر شيوعًا التي يسألها العملاء، والمواضيع التي تهمهم، ومعدل نجاح البوت في الإجابة على الأسئلة. يمكنك استخدام هذه البيانات لتحسين قاعدة المعرفة وتطوير منتجاتك وخدماتك بناءً على احتياجات العملاء الفعلية.",
  },
];

export default function FaqBotPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* رأس الصفحة */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              بوت الأسئلة الشائعة
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              بوت ذكي للإجابة على الأسئلة المتكررة وتوفير المعلومات للعملاء بشكل آلي على مدار الساعة، مما يوفر وقت فريق خدمة العملاء ويحسن تجربة العملاء
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
              src="/images/bot-types/faq-bot.svg"
              alt="بوت الأسئلة الشائعة"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ميزات البوت */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ميزات بوت الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من الميزات المتقدمة التي تجعل بوت الأسئلة الشائعة الخيار الأمثل لتوفير المعلومات للعملاء
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
            حالات استخدام بوت الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            تعرف على كيفية استفادة عملك من بوت الأسئلة الشائعة في مختلف السيناريوهات
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
            إجابات على الأسئلة الشائعة حول بوت الأسئلة الشائعة
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
                جاهز لتحسين خدمة العملاء لديك؟
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ابدأ اليوم واستفد من قوة الذكاء الاصطناعي في الإجابة على الأسئلة المتكررة وتوفير المعلومات للعملاء بشكل آلي
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
                src="/images/bot-types/faq-cta.svg"
                alt="بوت الأسئلة الشائعة"
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