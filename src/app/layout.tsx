import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "منصة شات بوت - الذكاء الاصطناعي لخدمة العملاء",
  description: "منصة متكاملة لإنشاء وإدارة روبوتات المحادثة الذكية لعملك باستخدام أحدث تقنيات الذكاء الاصطناعي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* خلفية التدرج اللوني للموقع بالكامل */}
        <div className="fixed inset-0 -z-50 w-full h-full">
          <img 
            src="/images/background-gradient.svg" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex min-h-screen flex-col relative z-0">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
