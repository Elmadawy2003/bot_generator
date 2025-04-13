import Image from "next/image";
import Link from "next/link";
import { USE_CASES_DATA } from "@/lib/variables";

export default function UseCases() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            حالات الاستخدام
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            حلول مخصصة لمختلف القطاعات والأعمال
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(USE_CASES_DATA).map(([key, useCase]) => (
            <Link
              key={key}
              href={`/use-cases/${key}`}
              className="group rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Image
                  src={useCase.icon}
                  alt={useCase.title}
                  width={24}
                  height={24}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
                {useCase.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{useCase.description}</p>
              <div className="mt-4">
                <span className="text-sm font-medium text-primary">
                  اكتشف المزيد &larr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/use-cases"
            className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            عرض جميع حالات الاستخدام
          </Link>
        </div>
      </div>
    </section>
  );
}