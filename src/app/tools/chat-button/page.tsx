'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ChatButtonPage() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('تحدث معنا');
  const [buttonColor, setButtonColor] = useState('#10b981');
  const [buttonPosition, setButtonPosition] = useState('left');
  const [buttonSize, setButtonSize] = useState('medium');
  const [generatedCode, setGeneratedCode] = useState('');

  const generateCode = () => {
    if (!phone) {
      alert('الرجاء إدخال رقم الهاتف');
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;

    const buttonSizeClass = {
      small: 'width: 50px; height: 50px; font-size: 20px;',
      medium: 'width: 60px; height: 60px; font-size: 24px;',
      large: 'width: 70px; height: 70px; font-size: 28px;',
    }[buttonSize];

    const buttonPositionStyle = {
      left: 'left: 20px;',
      right: 'right: 20px;',
    }[buttonPosition];

    const code = `<!-- زر الدردشة من منصة شات بوت -->
<div id="chat-bot-button" style="position: fixed; bottom: 20px; ${buttonPositionStyle} z-index: 1000;">
  <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; ${buttonSizeClass} background-color: ${buttonColor}; color: white; border-radius: 50%; text-decoration: none; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60%" height="60%" fill="white">
      <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4 0.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1 0.6 2.4 0.9 3.7 0.9 4.3 0 7.8-3.5 7.8-7.8 0-2.1-0.8-4-2.3-5.5zm-5.5 11.9c-1.2 0-2.3-0.3-3.3-0.9l-0.2-0.1-2.4 0.6 0.6-2.3-0.1-0.2c-0.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3 0.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6 0 3.5-2.9 6.4-6.5 6.4zm3.5-4.8c-0.2-0.1-1.1-0.6-1.3-0.6-0.2-0.1-0.3-0.1-0.4 0.1-0.1 0.2-0.5 0.6-0.6 0.8-0.1 0.1-0.2 0.1-0.4 0-0.2-0.1-0.8-0.3-1.5-0.9-0.6-0.5-0.9-1.1-1-1.3-0.1-0.2 0-0.3 0.1-0.4 0.1-0.1 0.2-0.2 0.3-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0-0.2 0-0.3 0-0.1-0.4-1-0.6-1.4-0.2-0.4-0.3-0.3-0.4-0.3h-0.3c-0.1 0-0.3 0-0.5 0.2-0.2 0.2-0.6 0.6-0.6 1.5s0.7 1.8 0.8 1.9c0.1 0.1 1.4 2.1 3.3 2.9 0.5 0.2 0.8 0.3 1.1 0.4 0.5 0.1 0.9 0.1 1.2 0.1 0.4-0.1 1.1-0.5 1.3-0.9 0.2-0.5 0.2-0.9 0.1-0.9-0.1-0.1-0.2-0.1-0.4-0.2z"/>
    </svg>
  </a>
  <span style="position: absolute; top: -30px; ${buttonPosition === 'left' ? 'left' : 'right'}: 0; background-color: ${buttonColor}; color: white; padding: 5px 10px; border-radius: 4px; font-size: 14px; opacity: 0; transition: opacity 0.3s ease; pointer-events: none;">${buttonText}</span>
</div>
<script>
  document.getElementById('chat-bot-button').addEventListener('mouseenter', function() {
    this.querySelector('span').style.opacity = '1';
  });
  document.getElementById('chat-bot-button').addEventListener('mouseleave', function() {
    this.querySelector('span').style.opacity = '0';
  });
</script>
<!-- نهاية زر الدردشة -->`;

    setGeneratedCode(code);
  };

  const copyToClipboard = () => {
    if (!generatedCode) return;
    navigator.clipboard.writeText(generatedCode);
    alert('تم نسخ الكود بنجاح!');
  };

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            زر الدردشة للمواقع
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            أداة مجانية لإنشاء زر دردشة مخصص يمكن إضافته إلى موقعك الإلكتروني للتواصل المباشر مع العملاء
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">تخصيص زر الدردشة</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              خصص زر الدردشة ليتناسب مع هوية علامتك التجارية
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
                  rows={2}
                  placeholder="مرحبًا، أود الاستفسار عن..."
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div>
                <label htmlFor="buttonText" className="block text-sm font-medium text-foreground">
                  نص الزر
                </label>
                <input
                  type="text"
                  id="buttonText"
                  placeholder="تحدث معنا"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="buttonColor" className="block text-sm font-medium text-foreground">
                  لون الزر
                </label>
                <div className="mt-1 flex items-center space-x-2 space-x-reverse">
                  <input
                    type="color"
                    id="buttonColor"
                    className="h-8 w-8 cursor-pointer rounded-md border border-input"
                    value={buttonColor}
                    onChange={(e) => setButtonColor(e.target.value)}
                  />
                  <input
                    type="text"
                    value={buttonColor}
                    className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    onChange={(e) => setButtonColor(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">موضع الزر</label>
                <div className="mt-1 flex space-x-4 space-x-reverse">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="positionLeft"
                      name="buttonPosition"
                      className="h-4 w-4 border-input text-primary focus:ring-primary"
                      checked={buttonPosition === 'left'}
                      onChange={() => setButtonPosition('left')}
                    />
                    <label htmlFor="positionLeft" className="mr-2 block text-sm text-foreground">
                      يسار
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="positionRight"
                      name="buttonPosition"
                      className="h-4 w-4 border-input text-primary focus:ring-primary"
                      checked={buttonPosition === 'right'}
                      onChange={() => setButtonPosition('right')}
                    />
                    <label htmlFor="positionRight" className="mr-2 block text-sm text-foreground">
                      يمين
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">حجم الزر</label>
                <div className="mt-1 flex space-x-4 space-x-reverse">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="sizeSmall"
                      name="buttonSize"
                      className="h-4 w-4 border-input text-primary focus:ring-primary"
                      checked={buttonSize === 'small'}
                      onChange={() => setButtonSize('small')}
                    />
                    <label htmlFor="sizeSmall" className="mr-2 block text-sm text-foreground">
                      صغير
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="sizeMedium"
                      name="buttonSize"
                      className="h-4 w-4 border-input text-primary focus:ring-primary"
                      checked={buttonSize === 'medium'}
                      onChange={() => setButtonSize('medium')}
                    />
                    <label htmlFor="sizeMedium" className="mr-2 block text-sm text-foreground">
                      متوسط
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="sizeLarge"
                      name="buttonSize"
                      className="h-4 w-4 border-input text-primary focus:ring-primary"
                      checked={buttonSize === 'large'}
                      onChange={() => setButtonSize('large')}
                    />
                    <label htmlFor="sizeLarge" className="mr-2 block text-sm text-foreground">
                      كبير
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={generateCode}
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  إنشاء الكود
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">معاينة ونسخ الكود</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              انسخ الكود وألصقه في موقعك الإلكتروني قبل علامة الإغلاق &lt;/body&gt;
            </p>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute left-0 top-0 flex space-x-1 space-x-reverse rounded-tr-md bg-muted p-2">
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    disabled={!generatedCode}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-foreground disabled:opacity-50"
                    title="نسخ الكود"
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
                <div className="max-h-[400px] overflow-auto rounded-md bg-muted p-4 pt-12">
                  {generatedCode ? (
                    <pre className="text-xs text-muted-foreground">{generatedCode}</pre>
                  ) : (
                    <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
                      قم بتخصيص الزر وانقر على &quot;إنشاء الكود&quot; لعرض الكود هنا
                    </div>
                  )}
                </div>
              </div>

              {generatedCode && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-foreground">معاينة الزر</h3>
                  <div className="mt-4 flex h-[200px] items-center justify-center rounded-md border bg-muted/30 p-4">
                    <div
                      style={{
                        position: 'relative',
                        width: buttonSize === 'small' ? '50px' : buttonSize === 'medium' ? '60px' : '70px',
                        height: buttonSize === 'small' ? '50px' : buttonSize === 'medium' ? '60px' : '70px',
                      }}
                    >
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                          backgroundColor: buttonColor,
                          color: 'white',
                          borderRadius: '50%',
                          textDecoration: 'none',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="60%"
                          height="60%"
                          fill="white"
                        >
                          <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4 0.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1 0.6 2.4 0.9 3.7 0.9 4.3 0 7.8-3.5 7.8-7.8 0-2.1-0.8-4-2.3-5.5zm-5.5 11.9c-1.2 0-2.3-0.3-3.3-0.9l-0.2-0.1-2.4 0.6 0.6-2.3-0.1-0.2c-0.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3 0.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6 0 3.5-2.9 6.4-6.5 6.4zm3.5-4.8c-0.2-0.1-1.1-0.6-1.3-0.6-0.2-0.1-0.3-0.1-0.4 0.1-0.1 0.2-0.5 0.6-0.6 0.8-0.1 0.1-0.2 0.1-0.4 0-0.2-0.1-0.8-0.3-1.5-0.9-0.6-0.5-0.9-1.1-1-1.3-0.1-0.2 0-0.3 0.1-0.4 0.1-0.1 0.2-0.2 0.3-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0-0.2 0-0.3 0-0.1-0.4-1-0.6-1.4-0.2-0.4-0.3-0.3-0.4-0.3h-0.3c-0.1 0-0.3 0-0.5 0.2-0.2 0.2-0.6 0.6-0.6 1.5s0.7 1.8 0.8 1.9c0.1 0.1 1.4 2.1 3.3 2.9 0.5 0.2 0.8 0.3 1.1 0.4 0.5 0.1 0.9 0.1 1.2 0.1 0.4-0.1 1.1-0.5 1.3-0.9 0.2-0.5 0.2-0.9 0.1-0.9-0.1-0.1-0.2-0.1-0.4-0.2z" />
                        </svg>
                      </a>
                      <span
                        style={{
                          position: 'absolute',
                          top: '-30px',
                          [buttonPosition === 'left' ? 'left' : 'right']: 0,
                          backgroundColor: buttonColor,
                          color: 'white',
                          padding: '5px 10px',
                          borderRadius: '4px',
                          fontSize: '14px',
                        }}
                      >
                        {buttonText}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">كيفية إضافة زر الدردشة إلى موقعك</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">خصص زر الدردشة</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    قم بتخصيص زر الدردشة باستخدام الخيارات المتاحة في النموذج
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">انسخ الكود</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    انقر على زر النسخ لنسخ الكود المولد
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-medium text-foreground">ألصق الكود في موقعك</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    ألصق الكود في موقعك الإلكتروني قبل علامة الإغلاق &lt;/body&gt;
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