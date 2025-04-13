import Image from "next/image";
import { UI_TEXT } from "@/lib/variables";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    title: "اختر القالب المناسب",
    description: "اختر من بين مجموعة متنوعة من القوالب المصممة خصيصًا لمختلف الصناعات والاحتياجات",
    icon: "/icons/template.svg",
    number: "01",
  },
  {
    title: "خصص البوت الخاص بك",
    description: "قم بتخصيص الردود والشخصية والمظهر ليتناسب مع علامتك التجارية",
    icon: "/icons/customize.svg",
    number: "02",
  },
  {
    title: "اربط القنوات المفضلة",
    description: "قم بتوصيل البوت بقنوات التواصل التي يستخدمها عملاؤك مثل واتساب وتيليجرام",
    icon: "/icons/connect.svg",
    number: "03",
  },
  {
    title: "أطلق وراقب الأداء",
    description: "أطلق البوت وراقب أداءه من خلال لوحة التحكم المتقدمة",
    icon: "/icons/launch.svg",
    number: "04",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container">
        <SectionTitle 
          title={UI_TEXT.home.howItWorksTitle} 
          subtitle="عملية بسيطة من أربع خطوات لإطلاق بوت المحادثة الخاص بك"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card relative p-6 transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="absolute -top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {step.number}
              </div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={28}
                  height={28}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* رسم توضيحي للخطوات */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-muted"></div>
          <div className="absolute left-1/4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
          <div className="absolute left-2/4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
          <div className="absolute left-3/4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
          <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary"></div>
          <div className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
}