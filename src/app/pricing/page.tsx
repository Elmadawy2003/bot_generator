import { COMPONENT_PROPS } from "@/lib/variables";

export const metadata = {
  title: "الأسعار - منصة شات بوت",
  description: "اختر خطة الاشتراك المناسبة لاحتياجات عملك",
};

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            خطط الأسعار
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            اختر الخطة المناسبة لاحتياجات عملك
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {COMPONENT_PROPS.pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border ${plan.popular ? 'border-primary' : 'border-border'} bg-background p-8 shadow-sm transition-all hover:shadow-md`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-0 left-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-sm font-medium text-primary-foreground">
                  الأكثر شيوعًا
                </div>
              )}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground">{plan.name}</h2>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="mr-2 text-xl font-medium text-muted-foreground">
                    ريال / شهريًا
                  </span>
                </div>
                <ul className="mt-8 space-y-4 text-right">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-2 h-5 w-5 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    type="button"
                    className={`inline-flex h-10 w-full items-center justify-center rounded-md ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-foreground hover:bg-muted/80'} px-4 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="rounded-lg border border-border bg-background p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">أسئلة شائعة حول الأسعار</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">هل يمكنني تغيير خطتي في أي وقت؟</h3>
                <p className="mt-2 text-muted-foreground">
                  نعم، يمكنك ترقية خطتك في أي وقت. إذا قمت بالترقية، سيتم احتساب الفرق بين الخطتين على أساس تناسبي للفترة المتبقية من الشهر الحالي.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">هل هناك فترة تجريبية مجانية؟</h3>
                <p className="mt-2 text-muted-foreground">
                  نعم، نقدم فترة تجريبية مجانية لمدة 14 يومًا للخطة الأساسية. يمكنك الاستفادة من جميع الميزات خلال هذه الفترة دون أي التزام.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">ما هي طرق الدفع المقبولة؟</h3>
                <p className="mt-2 text-muted-foreground">
                  نقبل بطاقات الائتمان (فيزا، ماستركارد، أمريكان إكسبريس) وباي بال ومدى وآبل باي.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">هل يمكنني إلغاء اشتراكي في أي وقت؟</h3>
                <p className="mt-2 text-muted-foreground">
                  نعم، يمكنك إلغاء اشتراكك في أي وقت. إذا قمت بالإلغاء، ستستمر خطتك حتى نهاية فترة الفوترة الحالية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}