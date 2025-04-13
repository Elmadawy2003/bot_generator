import Image from "next/image";
import { UI_TEXT } from "@/lib/variables";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    title: "ذكاء اصطناعي متقدم",
    description: "بوتات محادثة مدعومة بأحدث تقنيات الذكاء الاصطناعي لفهم استفسارات العملاء بدقة",
    icon: "/icons/ai.svg",
  },
  {
    title: "متعدد القنوات",
    description: "تواصل مع عملائك عبر واتساب، تيليجرام، فيسبوك، والمزيد من منصة واحدة",
    icon: "/icons/channels.svg",
  },
  {
    title: "سهولة الإعداد",
    description: "أنشئ بوت محادثة خاص بك في دقائق دون الحاجة لمهارات برمجية",
    icon: "/icons/setup.svg",
  },
  {
    title: "تخصيص كامل",
    description: "خصص ردود البوت وشخصيته ليتناسب مع هوية علامتك التجارية",
    icon: "/icons/customize.svg",
  },
  {
    title: "تحليلات متقدمة",
    description: "احصل على رؤى قيمة حول أداء البوت واستفسارات العملاء الأكثر شيوعًا",
    icon: "/icons/analytics.svg",
  },
  {
    title: "تكامل سلس",
    description: "دمج البوت مع أنظمتك الحالية مثل CRM وأنظمة إدارة الطلبات",
    icon: "/icons/integration.svg",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/40 backdrop-blur-sm">
      <div className="container">
        <SectionTitle 
          title={UI_TEXT.home.featuresTitle} 
          subtitle="اكتشف المميزات التي تجعل منصتنا الخيار الأمثل لأتمتة خدمة العملاء"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shadow-inner">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}