import Image from "next/image";
import Link from "next/link";
import { UI_TEXT } from "@/lib/variables";

export const metadata = {
  title: "أدوات مجانية - منصة شات بوت",
  description: "مجموعة من الأدوات المجانية لمساعدتك في تحسين تواصلك مع العملاء",
};

// بيانات الأدوات المجانية
const tools = [
  {
    id: "qrcode-menu",
    title: "مولد رمز QR للقوائم",
    description: "أداة لإنشاء رموز QR للقوائم والمنتجات والخدمات لتسهيل وصول العملاء إليها",
    icon: "/icons/qrcode.svg",
    link: "/tools/qrcode-menu",
  },
  {
    id: "link-generator",
    title: "مولد روابط واتساب",
    description: "أداة لإنشاء روابط واتساب مخصصة تفتح محادثة مباشرة مع رقم هاتفك مع رسالة محددة مسبقًا",
    icon: "/icons/whatsapp.svg",
    link: "/tools/link-generator",
  },
  {
    id: "chat-button",
    title: "زر الدردشة للمواقع",
    description: "أداة لإنشاء زر دردشة يمكن إضافته إلى موقعك الإلكتروني للتواصل المباشر مع العملاء",
    icon: "/icons/chat-button.svg",
    link: "/tools/chat-button",
  },
];

// بيانات مميزات الأدوات
const features = [
  {
    title: "سهلة الاستخدام",
    description: "واجهة بسيطة وسهلة الاستخدام تمكنك من إنشاء الأدوات بسرعة وسهولة",
    icon: "/icons/easy-to-use.svg",
  },
  {
    title: "مجانية بالكامل",
    description: "جميع الأدوات متاحة مجانًا بدون أي قيود أو تكاليف خفية",
    icon: "/icons/free.svg",
  },
  {
    title: "تخصيص كامل",
    description: "إمكانية تخصيص جميع الأدوات لتتناسب مع هوية علامتك التجارية واحتياجاتك",
    icon: "/icons/customize.svg",
  },
  {
    title: "تكامل سهل",
    description: "سهولة دمج الأدوات مع موقعك الإلكتروني أو تطبيقك أو منصات التواصل الاجتماعي",
    icon: "/icons/integration.svg",
  },
];

export default function ToolsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            أدوات مجانية
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من الأدوات المجانية لمساعدتك في تحسين تواصلك مع العملاء
          </p>
        </div>

        {/* عرض الأدوات */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              className="group overflow-hidden rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-primary">
                {tool.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tool.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                استخدم الأداة
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
              </div>
            </Link>
          ))}
        </div>

        {/* مميزات الأدوات */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              لماذا تستخدم أدواتنا؟
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              مجموعة من المميزات التي تجعل أدواتنا الخيار الأمثل لتحسين تواصلك مع العملاء
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
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

        {/* دعوة للعمل */}
        <div className="mt-24 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                هل تريد المزيد من المميزات؟
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                اكتشف منصتنا المتكاملة لإنشاء وإدارة روبوتات المحادثة الذكية لعملك باستخدام أحدث تقنيات الذكاء الاصطناعي.
              </p>
              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  اكتشف خططنا
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] md:h-auto">
              <Image
                src="/images/tools-cta.svg"
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