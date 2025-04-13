import Image from "next/image";
import Link from "next/link";
import { UI_TEXT } from "@/lib/variables";
import { motion, useScroll, useTransform } from "framer-motion";
import TypewriterEffect from "typewriter-effect";
import { Fragment } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <Fragment>
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      <div className="container relative">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-right"
          >
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              <TypewriterEffect
                options={{
                  strings: [UI_TEXT.home.heroTitle],
                  autoStart: true,
                  loop: false,
                  cursor: '|'
                }}
              />
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-2xl text-muted-foreground font-medium"
            >
              {UI_TEXT.home.heroSubtitle}
            </motion.p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/auth/register"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {UI_TEXT.home.ctaButton}
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary/30 px-8 text-base font-medium shadow-lg backdrop-blur-sm transition-all hover:bg-accent hover:border-primary/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                اكتشف المزيد
              </Link>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ scale: imageScale, y: imageY }}
            className="relative order-1 md:order-2 h-[80vh] w-full"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -left-4 -top-4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
              className="absolute -bottom-4 -right-4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" 
            />
            <Image
              src="/images/hero-illustration.jpg"
              alt="منصة شات بوت"
              fill
              className="object-cover relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
}