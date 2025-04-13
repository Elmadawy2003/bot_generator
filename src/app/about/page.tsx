import Image from "next/image";
import Link from "next/link";
import { UI_TEXT } from "@/lib/variables";

export const metadata = {
  title: "عن المنصة - منصة شات بوت",
  description: "تعرف على قصتنا ورؤيتنا وفريق العمل في منصة شات بوت",
};

// بيانات أعضاء الفريق
const teamMembers = [
  {
    name: "أحمد محمد",
    position: "المؤسس والرئيس التنفيذي",
    bio: "خبرة أكثر من 10 سنوات في مجال الذكاء الاصطناعي وتطوير البرمجيات",
    image: "/images/team/team-1.jpg",
  },
  {
    name: "سارة أحمد",
    position: "مديرة المنتج",
    bio: "متخصصة في تطوير المنتجات وتحسين تجربة المستخدم",
    image: "/images/team/team-2.jpg",
  },
  {
    name: "محمد علي",
    position: "رئيس قسم التكنولوجيا",
    bio: "خبير في تقنيات الذكاء الاصطناعي ومعالجة اللغة الطبيعية",
    image: "/images/team/team-3.jpg",
  },
  {
    name: "نورا خالد",
    position: "مديرة التسويق",
    bio: "متخصصة في التسويق الرقمي واستراتيجيات النمو",
    image: "/images/team/team-4.jpg",
  },
];

// بيانات القيم
const values = [
  {
    title: "الابتكار",
    description: "نسعى دائمًا لتطوير حلول مبتكرة تلبي احتياجات عملائنا المتغيرة",
    icon: "/icons/innovation.svg",
  },
  {
    title: "الجودة",
    description: "نلتزم بتقديم منتجات وخدمات عالية الجودة تتجاوز توقعات عملائنا",
    icon: "/icons/quality.svg",
  },
  {
    title: "التعاون",
    description: "نؤمن بأهمية العمل الجماعي والتعاون مع عملائنا لتحقيق النجاح المشترك",
    icon: "/icons/collaboration.svg",
  },
  {
    title: "الشفافية",
    description: "نتبنى الشفافية في جميع تعاملاتنا مع العملاء والشركاء",
    icon: "/icons/transparency.svg",
  },
];

// بيانات الإنجازات
const achievements = [
  {
    value: "5000+",
    label: "عميل نشط",
  },
  {
    value: "10M+",
    label: "محادثة شهريًا",
  },
  {
    value: "20+",
    label: "دولة حول العالم",
  },
  {
    value: "95%",
    label: "نسبة رضا العملاء",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* قسم المقدمة */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              عن منصة شات بوت
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              منصة متكاملة لإنشاء وإدارة روبوتات المحادثة الذكية لعملك باستخدام أحدث تقنيات الذكاء الاصطناعي
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
          <div className="relative mx-auto h-[300px] w-full max-w-lg">
            <Image
              src="/images/about-hero.svg"
              alt="منصة شات بوت"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* قسم قصتنا */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              قصتنا
            </h2>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/our-story.jpg"
                alt="قصتنا"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-muted-foreground">
                بدأت قصتنا في عام 2020 عندما لاحظنا الحاجة المتزايدة للشركات الصغيرة والمتوسطة لتحسين تواصلها مع العملاء باستخدام تقنيات الذكاء الاصطناعي، ولكن بطريقة بسيطة وبتكلفة معقولة.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                قمنا بتطوير منصة شات بوت لتكون حلاً متكاملاً يمكّن الشركات من إنشاء وإدارة روبوتات محادثة ذكية بسهولة، دون الحاجة لخبرة تقنية متقدمة أو استثمارات ضخمة.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                اليوم، نفخر بخدمة آلاف العملاء في أكثر من 20 دولة حول العالم، ونواصل تطوير منصتنا لتلبية احتياجات عملائنا المتغيرة.
              </p>
            </div>
          </div>
        </div>

        {/* قسم رؤيتنا */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              رؤيتنا
            </h2>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center md:order-2">
              <p className="text-lg text-muted-foreground">
                نسعى لأن نكون الشريك الأول للشركات في رحلتها نحو التحول الرقمي وتحسين تجربة العملاء باستخدام تقنيات الذكاء الاصطناعي.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع، ولذلك نعمل على تبسيط تقنيات الذكاء الاصطناعي المعقدة وجعلها سهلة الاستخدام ومتاحة للشركات بمختلف أحجامها.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                هدفنا هو تمكين الشركات من تقديم خدمة عملاء استثنائية على مدار الساعة، وبناء علاقات أقوى مع عملائها، وتحقيق نمو مستدام في عالم رقمي متغير باستمرار.
              </p>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-1">
              <Image
                src="/images/our-vision.jpg"
                alt="رؤيتنا"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* قسم قيمنا */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              قيمنا
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* قسم الإنجازات */}
        <div className="mt-24 rounded-2xl bg-muted/30 p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{achievement.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم فريق العمل */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              فريق العمل
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              فريق من الخبراء المتخصصين في مجالات الذكاء الاصطناعي وتطوير البرمجيات وتجربة المستخدم
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.position}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="mt-24 rounded-2xl bg-muted/30 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                انضم إلى قائمة عملائنا
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                ابدأ رحلتك مع منصة شات بوت اليوم واستفد من قوة الذكاء الاصطناعي في تحسين تواصلك مع العملاء
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
                src="/images/about-cta.svg"
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