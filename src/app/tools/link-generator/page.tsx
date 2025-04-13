'use client';

import { useState } from "react";
import Link from "next/link";

export default function WhatsAppLinkGeneratorPage() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const generateLink = () => {
    if (!phone) {
      alert('الرجاء إدخال رقم الهاتف');
      return;
    }

    // تنظيف رقم الهاتف
    const cleanPhone = phone.replace(/\D/g, '');
    
    // إنشاء رابط واتساب
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
    
    setGeneratedLink(whatsappLink);
  };

  const copyToClipboard = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    alert('تم نسخ الرابط بنجاح!');
  };

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            مولد روابط واتساب
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            أداة مجانية لإنشاء روابط واتساب مخصصة تفتح محادثة مباشرة مع رقم هاتفك مع رسالة محددة مسبقًا
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">إنشاء رابط واتساب</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              أدخل رقم الهاتف والرسالة الافتراضية لإنشاء رابط واتساب مخصص
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                  رقم الهاتف (مع رمز الدولة)
                </label>
                <div className="mt-1 flex rounded-md">
                  <span className="inline-flex items-center rounded-r-md border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                    +
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="966512345678"
                    className="block w-full rounded-none rounded-l-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  مثال: 966512345678 (بدون علامة + أو أصفار إضافية)
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  الرسالة الافتراضية (اختياري)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="مرحبًا، أود الاستفسار عن..."
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <p className="mt-1 text-xs text-muted-foreground">
                  سيتم إرسال هذه الرسالة تلقائيًا عند فتح المحادثة (اختياري)
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={generateLink}
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  إنشاء رابط واتساب
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">الرابط المولد</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              انسخ الرابط واستخدمه في موقعك الإلكتروني أو وسائل التواصل الاجتماعي
            </p>

            <div className="mt-6">
              {generatedLink ? (
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={generatedLink}
                      className="block w-full rounded-md border border-input bg-muted px-3 py-2 pr-10 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                      title="نسخ الرابط"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <a
                      href={generatedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="ml-2 h-5 w-5"
                      >
                        <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4 0.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1 0.6 2.4 0.9 3.7 0.9 4.3 0 7.8-3.5 7.8-7.8 0-2.1-0.8-4-2.3-5.5zm-5.5 11.9c-1.2 0-2.3-0.3-3.3-0.9l-0.2-0.1-2.4 0.6 0.6-2.3-0.1-0.2c-0.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3 0.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6 0 3.5-2.9 6.4-6.5 6.4zm3.5-4.8c-0.2-0.1-1.1-0.6-1.3-0.6-0.2-0.1-0.3-0.1-0.4 0.1-0.1 0.2-0.5 0.6-0.6 0.8-0.1 0.1-0.2 0.1-0.4 0-0.2-0.1-0.8-0.3-1.5-0.9-0.6-0.5-0.9-1.1-1-1.3-0.1-0.2 0-0.3 0.1-0.4 0.1-0.1 0.2-0.2 0.3-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0-0.2 0-0.3 0-0.1-0.4-1-0.6-1.4-0.2-0.4-0.3-0.3-0.4-0.3h-0.3c-0.1 0-0.3 0-0.5 0.2-0.2 0.2-0.6 0.6-0.6 1.5s0.7 1.8 0.8 1.9c0.1 0.1 1.4 2.1 3.3 2.9 0.5 0.2 0.8 0.3 1.1 0.4 0.5 0.1 0.9 0.1 1.2 0.1 0.4-0.1 1.1-0.5 1.3-0.9 0.2-0.5 0.2-0.9 0.1-0.9-0.1-0.1-0.2-0.1-0.4-0.2z" />
                      </svg>
                      تجربة الرابط
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
                  أدخل رقم الهاتف وانقر على &quot;إنشاء رابط واتساب&quot; لعرض الرابط هنا
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">كيفية استخدام روابط واتساب</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">أنشئ رابط واتساب</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    أدخل رقم الهاتف والرسالة الافتراضية لإنشاء رابط واتساب مخصص
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">انسخ الرابط</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    انسخ الرابط المولد لاستخدامه في موقعك الإلكتروني أو وسائل التواصل الاجتماعي
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">أضف الرابط إلى موقعك</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    أضف الرابط إلى موقعك الإلكتروني أو وسائل التواصل الاجتماعي أو المواد التسويقية
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">استمتع بتواصل أفضل</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    يمكن للعملاء الآن التواصل معك مباشرة عبر واتساب بنقرة واحدة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            العودة إلى الأدوات
          </Link>
        </div>
      </div>
    </div>
  );
}