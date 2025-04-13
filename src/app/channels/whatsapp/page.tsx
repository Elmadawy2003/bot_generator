import Image from "next/image";
import Link from "next/link";
import { CHANNELS_DATA } from "@/lib/variables";

export const metadata = {
  title: "واتساب - منصة شات بوت",
  description: "ربط بوت المحادثة الخاص بك مع واتساب للأعمال للتواصل مع عملائك",
};

// ميزات قناة واتساب
const features = [
  {
    title: "ربط سهل وسريع",
    description: "ربط البوت مع واتساب للأعمال في دقائق معدودة دون الحاجة لمعرفة تقنية",
    icon: "/icons/easy-setup.svg",
  },
  {
    title: "رد تلقائي على الرسائل",
    description: "الرد التلقائي على رسائل العملاء على مدار الساعة دون تأخير",
    icon: "/icons/auto-reply.svg",
  },
  {
    title: "دعم الوسائط المتعددة",
    description: "إرسال واستقبال النصوص والصور والفيديوهات والملفات والمواقع",
    icon: "/icons/multimedia.svg",
  },
  {
    title: "قوالب رسائل جاهزة",
    description: "استخدام قوالب رسائل معتمدة من واتساب لإرسال إشعارات للعملاء",
    icon: "/icons/templates.svg",
  },
  {
    title: "تحويل المحادثة لموظف بشري",
    description: "إمكانية تحويل المحادثة لموظف بشري عند الحاجة لمساعدة إضافية",
    icon: "/icons/human-handoff.svg",
  },
  {
    title: "تحليلات وتقارير",
    description: "تقارير تفصيلية عن أداء البوت والمحادثات والتفاعلات",
    icon: "/icons/analytics.svg",
  },
];

// خطوات الربط
const integrationSteps = [
  {
    title: "إنشاء حساب واتساب للأعمال",
    description: "قم بإنشاء حساب واتساب للأعمال وتأكيد رقم الهاتف الخاص بعملك",
  },
  {
    title: "ربط الحساب بمنصة شات بوت",
    description: "قم بربط حساب واتساب للأعمال بمنصة شات بوت من خلال لوحة التحكم",
  },
  {
    title: "تكوين البوت",
    description: "قم بتكوين البوت وتخصيصه ليتناسب مع احتياجات عملك",
  },
  {
    title: "اختبار البوت",
    description: "قم باختبار البوت للتأكد من أنه يعمل بشكل صحيح ويستجيب للرسائل",
  },
];

// الأسئلة الشائعة
const faqs = [
  {
    question: "هل أحتاج إلى حساب واتساب للأعمال لاستخدام هذه الميزة؟",
    answer: "نعم، تحتاج إلى حساب واتساب للأعمال (WhatsApp Business API) لربطه مع منصة شات بوت. يمكننا مساعدتك في إعداد الحساب والحصول على الموافقات اللازمة من واتساب.",
  },
  {
    question: "كم من الوقت يستغرق ربط البوت مع واتساب؟",
    answer: "عملية الربط نفسها تستغرق بضع دقائق فقط. ومع ذلك، قد تستغرق عملية الموافقة على حساب واتساب للأعمال من 1-5 أيام عمل حسب سياسات واتساب الحالية.",
  },
  {
    question: "هل يمكنني استخدام رقم هاتف الشركة الحالي؟",
    answer: "نعم، يمكنك استخدام رقم هاتف الشركة الحالي لواتساب للأعمال، ولكن يجب أن يكون هذا الرقم قادرًا على استقبال رسائل SMS أو مكالمات للتحقق.",
  },
  {
    question: "ما هي قوالب الرسائل وكيف يمكنني استخدامها؟",
    answer: "قوالب الرسائل هي رسائل معتمدة مسبقًا من واتساب يمكنك استخدامها لإرسال إشعارات للعملاء. يمكنك إنشاء قوالب مخصصة من لوحة التحكم وتقديمها للموافقة عليها من قبل واتساب.",
  },
];

export default function WhatsAppChannelPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* رأس الصفحة */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              واتساب للأعمال
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              ربط بوت المحادثة الخاص بك مع واتساب للأعمال للتواصل مع عملائك على المنصة الأكثر استخدامًا في العالم
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
              src="/images/channels/whatsapp.svg"
              alt="واتساب للأعمال"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ميزات القناة */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ميزات قناة واتساب
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من الميزات المتقدمة التي تجعل واتساب القناة المثالية للتواصل مع عملائك
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

        {/* خطوات الربط */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            خطوات ربط واتساب للأعمال
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            اتبع هذه الخطوات البسيطة لربط بوت المحادثة الخاص بك مع واتساب للأعمال
          </p>

          <div className="mt-8 space-y-8">
            {integrationSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex items-center">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mr-4 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {step.description}
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
            إجابات على الأسئلة الشائعة حول ربط البوت مع واتساب للأعمال
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

        {/* قسم الدعوة للعمل */}
        <div className="mt-24 rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ابدأ التواصل مع عملائك على واتساب اليوم
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            انضم إلى آلاف الشركات التي تستخدم منصة شات بوت للتواصل مع عملائها على واتساب
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/auth/register"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ابدأ الآن مجانًا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}