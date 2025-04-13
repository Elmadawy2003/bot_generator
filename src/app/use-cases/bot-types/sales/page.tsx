import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "بوت المبيعات - منصة شات بوت",
  description: "بوت ذكي لعرض المنتجات والخدمات وإتمام عمليات البيع بشكل آلي",
};

// ميزات بوت المبيعات
const features = [
  {
    title: "عرض المنتجات والخدمات",
    description: "عرض كتالوج المنتجات والخدمات بطريقة تفاعلية وسهلة الاستخدام",
    icon: "/icons/products.svg",
  },
  {
    title: "توصيات ذكية",
    description: "تقديم توصيات مخصصة للعملاء بناءً على اهتماماتهم وسلوكهم الشرائي",
    icon: "/icons/recommendations.svg",
  },
  {
    title: "إتمام عمليات الشراء",
    description: "تمكين العملاء من إتمام عمليات الشراء مباشرة من خلال المحادثة",
    icon: "/icons/checkout.svg",
  },
  {
    title: "متابعة سلة التسوق",
    description: "تذكير العملاء بالمنتجات في سلة التسوق ومساعدتهم على إكمال عملية الشراء",
    icon: "/icons/cart.svg",
  },
  {
    title: "عروض وخصومات مخصصة",
    description: "تقديم عروض وخصومات مخصصة للعملاء بناءً على سلوكهم الشرائي",
    icon: "/icons/offers.svg",
  },
  {
    title: "تحليلات المبيعات",
    description: "تقارير تفصيلية عن أداء المبيعات والمنتجات الأكثر مبيعًا",
    icon: "/icons/analytics.svg",
  },
];

// حالات استخدام بوت المبيعات
const useCases = [
  {
    title: "عرض المنتجات والخدمات",
    description: "يمكن للبوت عرض المنتجات والخدمات بطريقة تفاعلية، مع توفير صور ووصف وأسعار وخيارات متاحة",
  },
  {
    title: "الإجابة على استفسارات المنتجات",
    description: "الرد على أسئلة العملاء حول المنتجات والخدمات، مثل المواصفات والتوفر والضمان",
  },
  {
    title: "تقديم توصيات مخصصة",
    description: "اقتراح منتجات وخدمات مناسبة للعملاء بناءً على اهتماماتهم واحتياجاتهم",
  },
  {
    title: "إدارة سلة التسوق",
    description: "مساعدة العملاء في إضافة المنتجات إلى سلة التسوق وتعديلها وإتمام عملية الشراء",
  },
];

// الأسئلة الشائعة
const faqs = [
  {
    question: "كيف يمكن لبوت المبيعات زيادة المبيعات؟",
    answer: "يساعد بوت المبيعات في زيادة المبيعات من خلال توفير تجربة تسوق سلسة وشخصية للعملاء، وتقديم توصيات مخصصة، والرد الفوري على استفسارات العملاء، وتذكير العملاء بالمنتجات في سلة التسوق، مما يؤدي إلى زيادة معدل التحويل وقيمة الطلب المتوسطة.",
  },
  {
    question: "هل يمكن ربط بوت المبيعات بنظام إدارة المخزون؟",
    answer: "نعم، يمكن ربط بوت المبيعات بنظام إدارة المخزون لعرض معلومات دقيقة عن توفر المنتجات في الوقت الفعلي. كما يمكن ربطه بأنظمة إدارة علاقات العملاء (CRM) ونظام نقاط البيع (POS) لتوفير تجربة متكاملة.",
  },
  {
    question: "كيف يمكن للبوت تقديم توصيات مخصصة للعملاء؟",
    answer: "يستخدم البوت تقنيات الذكاء الاصطناعي وتعلم الآلة لتحليل سلوك العملاء واهتماماتهم وتاريخ مشترياتهم، ثم يقدم توصيات مخصصة بناءً على هذه البيانات. كلما تفاعل العميل أكثر مع البوت، أصبحت التوصيات أكثر دقة وملاءمة.",
  },
  {
    question: "هل يمكن للعملاء إتمام عملية الشراء بالكامل من خلال البوت؟",
    answer: "نعم، يمكن للعملاء إتمام عملية الشراء بالكامل من خلال البوت، بدءًا من اختيار المنتجات وإضافتها إلى سلة التسوق، وصولاً إلى الدفع وتأكيد الطلب. يدعم البوت مختلف طرق الدفع ويوفر تأكيدًا فوريًا للطلب.",
  },
];

export default function SalesBotPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* رأس الصفحة */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              بوت المبيعات
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              بوت ذكي لعرض المنتجات والخدمات وإتمام عمليات البيع بشكل آلي، مما يزيد من المبيعات ويحسن تجربة التسوق للعملاء
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
              src="/images/bot-types/sales-bot.svg"
              alt="بوت المبيعات"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ميزات البوت */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ميزات بوت المبيعات
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من الميزات المتقدمة التي تجعل بوت المبيعات الخيار الأمثل لزيادة مبيعاتك وتحسين تجربة التسوق لعملائك
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
            حالات استخدام بوت المبيعات
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            تعرف على كيفية استفادة عملك من بوت المبيعات في مختلف السيناريوهات
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
            إجابات على الأسئلة الشائعة حول بوت المبيعات
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
                جاهز لزيادة مبيعاتك؟
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ابدأ اليوم واستفد من قوة الذكاء الاصطناعي في تحسين تجربة التسوق لعملائك وزيادة مبيعاتك
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
                src="/images/bot-types/sales-cta.svg"
                alt="بوت المبيعات"
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