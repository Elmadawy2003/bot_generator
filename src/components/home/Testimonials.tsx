import Image from "next/image";
import { UI_TEXT } from "@/lib/variables";

const testimonials = [
  {
    quote: "ساعدنا بوت المحادثة في تقليل وقت الانتظار للعملاء بنسبة 70% وزيادة رضا العملاء بشكل ملحوظ.",
    author: "محمد العمري",
    position: "مدير التسويق، مطعم الذواقة",
  },
  {
    quote: "تمكنا من التعامل مع استفسارات المرضى على مدار الساعة دون الحاجة لتوظيف فريق كامل للدعم.",
    author: "د. سارة الخالدي",
    position: "مديرة عيادات الصحة المتكاملة",
  },
  {
    quote: "سهولة الإعداد والتخصيص كانت مذهلة. تمكنا من إطلاق البوت خلال يوم واحد فقط.",
    author: "أحمد السالم",
    position: "مؤسس متجر تك مارت",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {UI_TEXT.home.testimonialsTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            اكتشف كيف ساعدت منصتنا الشركات في تحسين خدمة العملاء
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-background p-8 shadow-md transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.author}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <blockquote className="mt-6">
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}