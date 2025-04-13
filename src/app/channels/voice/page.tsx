import Image from "next/image";
import Link from "next/link";
import { CHANNELS_DATA } from "@/lib/variables";

export const metadata = {
  title: "المكالمات الصوتية - منصة شات بوت",
  description: "ربط بوت المحادثة الخاص بك مع نظام المكالمات الصوتية للتواصل مع عملائك",
};

// ميزات قناة المكالمات الصوتية
const features = [
  {
    title: "رد آلي على المكالمات",
    description: "الرد التلقائي على مكالمات العملاء على مدار الساعة دون تأخير",
    icon: "/icons/auto-reply.svg",
  },
  {
    title: "تحويل الصوت إلى نص",
    description: "تحويل كلام العملاء إلى نص لفهم استفساراتهم بدقة",
    icon: "/icons/voice-to-text.svg",
  },
  {
    title: "تحويل النص إلى صوت",
    description: "تحويل ردود البوت النصية إلى كلام طبيعي",
    icon: "/icons/text-to-voice.svg",
  },
  {
    title: "دعم لغات متعددة",
    description: "التعرف على الكلام والرد بلغات مختلفة منها العربية والإنجليزية",
    icon: "/icons/multilingual.svg",
  },
  {
    title: "تحويل للموظف البشري",
    description: "إمكانية تحويل المكالمة لموظف بشري عند الحاجة لمساعدة إضافية",
    icon: "/icons/human-handoff.svg",
  },
  {
    title: "تحليلات المكالمات",
    description: "تقارير تفصيلية عن المكالمات ومدتها ومواضيعها ونتائجها",
    icon: "/icons/analytics.svg",
  },
];

// خطوات الربط
const integrationSteps = [
  {
    title: "إعداد نظام المكالمات",
    description: "قم بإعداد نظام المكالمات الصوتية وتجهيز الأرقام المطلوبة",
  },
  {
    title: "ربط النظام بمنصة شات بوت",
    description: "قم بربط نظام المكالمات بمنصة شات بوت من خلال لوحة التحكم",
  },
  {
    title: "تكوين البوت الصوتي",
    description: "قم بتكوين البوت وتخصيص الردود الصوتية والنصية",
  },
  {
    title: "اختبار النظام",
    description: "قم باختبار النظام للتأكد من جودة الصوت ودقة الردود",
  },
];

// الأسئلة الشائعة
const faqs = [
  {
    question: "ما هي المتطلبات التقنية لاستخدام نظام المكالمات الصوتية؟",
    answer: "تحتاج إلى خط هاتفي أو رقم VoIP مخصص لاستقبال المكالمات، بالإضافة إلى اتصال إنترنت مستقر. سنساعدك في إعداد البنية التحتية المناسبة لعملك.",
  },
  {
    question: "كم من الوقت يستغرق إعداد نظام المكالمات الصوتية؟",
    description: "يمكن إتمام عملية الإعداد خلال يوم عمل واحد في معظم الحالات. قد يستغرق الأمر وقتًا إضافيًا إذا كنت بحاجة إلى إعداد بنية تحتية جديدة.",
  },
  {
    question: "هل يمكن للبوت فهم اللهجات المختلفة؟",
    answer: "نعم، يستخدم نظامنا تقنيات متقدمة للتعرف على الكلام تدعم مجموعة واسعة من اللهجات العربية والإنجليزية. يمكن تدريب النظام على لهجات محددة حسب احتياجاتك.",
  },
  {
    question: "كيف يتم التعامل مع المكالمات في أوقات الذروة؟",
    answer: "يمكن للنظام التعامل مع عدة مكالمات في نفس الوقت. عند الوصول إلى الحد الأقصى، يتم وضع المكالمات في قائمة انتظار أو تحويلها إلى موظفين بشريين حسب التكوين المطلوب.",
  },
];

export default function VoiceChannelPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* رأس الصفحة */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              المكالمات الصوتية
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              ربط بوت المحادثة الخاص بك مع نظام المكالمات الصوتية للتواصل مع عملائك بشكل طبيعي وفعال
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
              src="/images/channels/voice.svg"
              alt="المكالمات الصوتية"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ميزات القناة */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            ميزات قناة المكالمات الصوتية
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من الميزات المتقدمة التي تجعل المكالمات الصوتية وسيلة فعالة للتواصل مع عملائك
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
            خطوات ربط نظام المكالمات الصوتية
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            اتبع هذه الخطوات البسيطة لربط بوت المحادثة الخاص بك مع نظام المكالمات الصوتية
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
            إجابات على الأسئلة الشائعة حول ربط البوت مع نظام المكالمات الصوتية
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
      </div>
    </div>
  );
}