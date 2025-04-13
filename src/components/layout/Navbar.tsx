"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { COMPONENT_PROPS } from "@/lib/variables";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* الشعار والرابط الأساسي */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/images/logo.svg"
              alt="شعار الموقع"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">شات بوت</span>
          </Link>
        </div>

        {/* روابط التنقل للشاشات الكبيرة */}
        <nav className="hidden md:flex items-center justify-center gap-6 mx-4">
          {COMPONENT_PROPS.navbarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-medium text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* تسجيل و CTA */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <Link
            href="/auth/login"
            className="hidden sm:inline-block text-sm font-medium text-white hover:text-primary transition-colors"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/auth/register"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            إنشاء حساب
          </Link>

          {/* زر القائمة الجانبية للهاتف */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary text-white bg-primary/20 hover:bg-primary/30 transition-colors md:hidden"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للهاتف */}
      <div 
        className={`md:hidden fixed inset-x-0 top-16 bg-black border-t border-slate-700 transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {COMPONENT_PROPS.navbarLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t flex flex-col space-y-2">
                <Link
                  href="/auth/login"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  تسجيل الدخول
                </Link>
                <Link
                  href="/auth/register"
                  className="text-sm font-medium text-primary transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  إنشاء حساب
                </Link>
              </div>
            </nav>
          </div>
        </div>
      
    </header>
  );
}
