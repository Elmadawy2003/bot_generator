import Image from "next/image";
import Link from "next/link";
import { UI_TEXT } from "@/lib/variables";

export const metadata = {
  title: "قوالب البوتات - منصة شات بوت",
  description: "استكشف مجموعة متنوعة من قوالب البوتات الجاهزة للاستخدام لمختلف الصناعات والاحتياجات",
};

// بيانات قوالب البوتات
const templates = [
  {
    id: "restaurant-bot",
    title: "بوت المطاعم",
    description: "قالب متكامل للمطاعم والمقاهي لاستقبال الطلبات والحجوزات والرد على الاستفسارات",
    image: "/images/templates/restaurant-bot.jpg",
    category: "المطاعم والمقاهي",
    features: ["استقبال الطلبات", "حجز الطاولات", "عرض القائمة", "الرد على الاستفسارات الشائعة"],
    link: "/templates/restaurant-bot",
  },
  {
    id: "clinic-bot",
    title: "بوت العيادات",
    description: "قالب متكامل للعيادات والمراكز الطبية لتنظيم المواعيد ومتابعة الحالات",
    image: "/images/templates/clinic-bot.jpg",
    category: "الرعاية الصحية",
    features: ["حجز المواعيد", "متابعة الحالات", "تذكير بالمواعيد", "الرد على الاستفسارات الطبية الشائعة"],
    link: "/templates/clinic-bot",
  },
  {
    id: "ecommerce-bot",
    title: "بوت المتاجر الإلكترونية",
    description: "قالب متكامل للمتاجر الإلكترونية لمساعدة العملاء في التسوق ومتابعة الطلبات",
    image: "/images/templates/ecommerce-bot.jpg",
    category: "التجارة الإلكترونية",
    features: ["مساعد تسوق افتراضي", "متابعة الطلبات", "توصيات المنتجات", "الرد على استفسارات المنتجات"],
    link: "/templates/ecommerce-bot",
  },
  {
    id: "education-bot",
    title: "بوت المراكز التعليمية",
    description: "قالب متكامل للمراكز التعليمية والمدارس للرد على استفسارات الطلاب وتنظيم الدروس",
    image: "/images/templates/education-bot.jpg",
    category: "التعليم",
    features: ["جدولة الدروس", "الرد على استفسارات الطلاب", "تقديم المساعدة التعليمية", "متابعة التقدم"],
    link: "/templates/education-bot",
  },
  {
    id: "real-estate-bot",
    title: "بوت العقارات",
    description: "قالب متكامل لشركات العقارات لعرض العقارات المتاحة وتنظيم جولات المعاينة",
    image: "/images/templates/real-estate-bot.jpg",
    category: "العقارات",
    features: ["عرض العقارات المتاحة", "تنظيم جولات المعاينة", "الرد على استفسارات العملاء", "تقديم معلومات عن المناطق"],
    link: "/templates/real-estate-bot",
  },
  {
    id: "hotel-bot",
    title: "بوت الفنادق",
    description: "قالب متكامل للفنادق والمنتجعات لتنظيم الحجوزات والرد على استفسارات النزلاء",
    image: "/images/templates/hotel-bot.jpg",
    category: "الضيافة",
    features: ["حجز الغرف", "الاستعلام عن المرافق", "خدمة النزلاء", "تنظيم الأنشطة"],
    link: "/templates/hotel-bot",
  },
];

// بيانات فئات القوالب
const categories = [
  "الكل",
  "المطاعم والمقاهي",
  "الرعاية الصحية",
  "التجارة الإلكترونية",
  "التعليم",
  "العقارات",
  "الضيافة",
];

export default function TemplatesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            قوالب البوتات
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            استكشف مجموعة متنوعة من قوالب البوتات الجاهزة للاستخدام لمختلف الصناعات والاحتياجات
          </p>
        </div>

        {/* فلتر الفئات */}
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-2 text-sm font-medium ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted/50 text-muted-foreground hover:bg-muted'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* عرض القوالب */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute right-2 top-2 z-10 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {template.category}
                </div>
                <Image
                  src={template.image}
                  alt={template.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                  {template.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {template.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">المميزات:</h4>
                  <ul className="mt-2 space-y-1">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="ml-1 h-3 w-3 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    href={template.link}
                    className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    معاينة القالب
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دعوة للعمل */}
        <div className="mt-20 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                لم تجد القالب المناسب لعملك؟
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                يمكننا مساعدتك في إنشاء بوت مخصص يلبي احتياجات عملك بالضبط. تواصل معنا للحصول على استشارة مجانية.
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
                src="/images/templates-cta.svg"
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