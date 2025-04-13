import Image from "next/image";
import Link from "next/link";
import { UI_TEXT } from "@/lib/variables";

export const metadata = {
  title: "حالات الاستخدام - منصة شات بوت",
  description: "اكتشف كيف يمكن لمنصة شات بوت مساعدة عملك حسب نشاطك التجاري",
};

// بيانات حالات الاستخدام حسب النشاط التجاري
const useCases = [
  {
    id: "restaurants",
    title: "المطاعم والمقاهي",
    description: "أتمتة استقبال الطلبات، الحجوزات، والرد على الاستفسارات الشائعة",
    icon: "/icons/restaurant.svg",
    image: "/images/use-cases/restaurant.jpg",
    link: "/use-cases/restaurants",
  },
  {
    id: "clinics",
    title: "العيادات والمراكز الطبية",
    description: "تنظيم المواعيد، متابعة الحالات، وتقديم معلومات عن الخدمات الطبية",
    icon: "/icons/clinic.svg",
    image: "/images/use-cases/clinic.jpg",
    link: "/use-cases/clinics",
  },
  {
    id: "e-commerce",
    title: "المتاجر الإلكترونية",
    description: "مساعدة العملاء في التسوق، متابعة الطلبات، وتقديم توصيات المنتجات",
    icon: "/icons/ecommerce.svg",
    image: "/images/use-cases/ecommerce.jpg",
    link: "/use-cases/e-commerce",
  },
  {
    id: "education",
    title: "المراكز التعليمية",
    description: "الرد على استفسارات الطلاب، جدولة الدروس، وتقديم المساعدة التعليمية",
    icon: "/icons/education.svg",
    image: "/images/use-cases/education.jpg",
    link: "/use-cases/education",
  },
  {
    id: "services",
    title: "شركات الخدمات",
    description: "تنظيم طلبات الخدمة، متابعة المشاريع، والرد على الاستفسارات الفنية",
    icon: "/icons/services.svg",
    image: "/images/use-cases/services.jpg",
    link: "/use-cases/services",
  },
];

// بيانات أنواع البوتات
const botTypes = [
  {
    id: "customer-service",
    title: "بوت خدمة العملاء",
    description: "للرد على الاستفسارات الشائعة وتوجيه العملاء",
    icon: "/icons/customer-service.svg",
    link: "/use-cases/bot-types/customer-service",
  },
  {
    id: "sales",
    title: "بوت المبيعات",
    description: "لعرض المنتجات والخدمات وإتمام عمليات البيع",
    icon: "/icons/sales.svg",
    link: "/use-cases/bot-types/sales",
  },
  {
    id: "appointment",
    title: "بوت المواعيد",
    description: "لتنظيم وجدولة المواعيد والحجوزات",
    icon: "/icons/appointment.svg",
    link: "/use-cases/bot-types/appointment",
  },
  {
    id: "faq",
    title: "بوت الأسئلة الشائعة",
    description: "للإجابة على الأسئلة المتكررة وتوفير المعلومات",
    icon: "/icons/faq.svg",
    link: "/use-cases/bot-types/faq",
  },
];

// بيانات الإحصائيات
const stats = [
  {
    value: "70%",
    label: "تقليل وقت الانتظار",
  },
  {
    value: "24/7",
    label: "خدمة عملاء متاحة",
  },
  {
    value: "35%",
    label: "زيادة في المبيعات",
  },
  {
    value: "50%",
    label: "توفير في تكاليف التشغيل",
  },
];

export default function UseCasesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            حالات الاستخدام
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            اكتشف كيف يمكن لمنصة شات بوت مساعدة عملك حسب نشاطك التجاري
          </p>
        </div>

        {/* الإحصائيات */}
        <div className="mt-16 rounded-2xl bg-muted/30 p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* حالات الاستخدام حسب النشاط التجاري */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            حلول مخصصة لكل نشاط تجاري
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            نقدم حلولًا مصممة خصيصًا لتلبية احتياجات مختلف القطاعات والأنشطة التجارية
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Link
                key={index}
                href={useCase.link}
                className="group overflow-hidden rounded-lg border bg-background transition-all hover:border-primary hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Image
                        src={useCase.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                    <h3 className="mr-3 text-xl font-bold text-foreground group-hover:text-primary">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{useCase.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    اكتشف المزيد
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
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* أنواع البوتات */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            أنواع البوتات المتاحة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            اختر نوع البوت المناسب لاحتياجات عملك أو قم بتخصيص بوت متكامل
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {botTypes.map((bot, index) => (
              <Link
                key={index}
                href={bot.link}
                className="group rounded-lg border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Image
                    src={bot.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary">
                  {bot.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{bot.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="mt-24 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                جاهز لتحسين تواصلك مع العملاء؟
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
                src="/images/use-cases-cta.svg"
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