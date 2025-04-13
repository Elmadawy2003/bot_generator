'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function QRCodeMenuPage() {
  const [url, setUrl] = useState('');
  const [qrSize, setQrSize] = useState(200);
  const [qrColor, setQrColor] = useState('#000000');
  const [qrBgColor, setQrBgColor] = useState('#ffffff');
  const [generatedQR, setGeneratedQR] = useState('');

  const generateQRCode = () => {
    if (!url) {
      alert('الرجاء إدخال الرابط');
      return;
    }

    // تنظيف الرابط
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    // إنشاء رابط API لتوليد رمز QR
    const encodedUrl = encodeURIComponent(cleanUrl);
    const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=${qrSize}x${qrSize}&color=${qrColor.replace('#', '')}&bgcolor=${qrBgColor.replace('#', '')}`;
    
    setGeneratedQR(qrCodeApiUrl);
  };

  const downloadQRCode = () => {
    if (!generatedQR) return;
    
    // إنشاء رابط تنزيل
    const link = document.createElement('a');
    link.href = generatedQR;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            مولد رمز QR للقوائم
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            أداة مجانية لإنشاء رموز QR للقوائم والمنتجات والخدمات لتسهيل وصول العملاء إليها
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">إنشاء رمز QR</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              أدخل الرابط وخصص رمز QR الخاص بك
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-foreground">
                  الرابط
                </label>
                <input
                  type="url"
                  id="url"
                  placeholder="https://example.com/menu"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  أدخل رابط قائمة الطعام أو المنتجات أو الخدمات
                </p>
              </div>

              <div>
                <label htmlFor="qrSize" className="block text-sm font-medium text-foreground">
                  حجم رمز QR
                </label>
                <div className="mt-1 flex items-center space-x-2 space-x-reverse">
                  <input
                    type="range"
                    id="qrSize"
                    min="100"
                    max="500"
                    step="10"
                    className="w-full"
                    value={qrSize}
                    onChange={(e) => setQrSize(parseInt(e.target.value))}
                  />
                  <span className="w-12 text-center text-sm text-muted-foreground">{qrSize}px</span>
                </div>
              </div>

              <div>
                <label htmlFor="qrColor" className="block text-sm font-medium text-foreground">
                  لون رمز QR
                </label>
                <div className="mt-1 flex items-center space-x-2 space-x-reverse">
                  <input
                    type="color"
                    id="qrColor"
                    className="h-8 w-8 cursor-pointer rounded-md border border-input"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                  />
                  <input
                    type="text"
                    value={qrColor}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    onChange={(e) => setQrColor(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="qrBgColor" className="block text-sm font-medium text-foreground">
                  لون خلفية رمز QR
                </label>
                <div className="mt-1 flex items-center space-x-2 space-x-reverse">
                  <input
                    type="color"
                    id="qrBgColor"
                    className="h-8 w-8 cursor-pointer rounded-md border border-input"
                    value={qrBgColor}
                    onChange={(e) => setQrBgColor(e.target.value)}
                  />
                  <input
                    type="text"
                    value={qrBgColor}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    onChange={(e) => setQrBgColor(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={generateQRCode}
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  إنشاء رمز QR
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">معاينة رمز QR</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              معاينة وتنزيل رمز QR الخاص بك
            </p>

            <div className="mt-6">
              {generatedQR ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center rounded-md bg-muted p-4">
                    <Image
                      src={generatedQR}
                      alt="رمز QR"
                      width={qrSize}
                      height={qrSize}
                      className="rounded-md"
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={downloadQRCode}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-2 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      تنزيل رمز QR
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
                  أدخل الرابط وانقر على &quot;إنشاء رمز QR&quot; لعرض رمز QR هنا
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">كيفية استخدام رموز QR للقوائم</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">أنشئ قائمة رقمية</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    قم بإنشاء قائمة رقمية لمنتجاتك أو خدماتك على موقعك الإلكتروني
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">أنشئ رمز QR للقائمة</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    استخدم هذه الأداة لإنشاء رمز QR يشير إلى رابط القائمة الرقمية
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">اطبع رمز QR واعرضه</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    اطبع رمز QR وضعه على طاولات المطعم أو في المتجر أو أي مكان يمكن للعملاء مسحه
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">استمتع بتجربة رقمية سلسة</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    يمكن للعملاء الآن مسح رمز QR والوصول إلى قائمتك الرقمية بسهولة
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