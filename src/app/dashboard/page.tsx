'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UI_TEXT } from "@/lib/variables";

// بيانات البوتات (للعرض فقط، سيتم استبدالها بالبيانات الفعلية من الواجهة الخلفية)
const botsMockData = [
  {
    id: "bot-1",
    name: "بوت خدمة العملاء",
    status: "online",
    type: "customer-service",
    channels: ["whatsapp", "telegram", "website"],
    conversations: 245,
    lastActive: "منذ 5 دقائق",
  },
  {
    id: "bot-2",
    name: "بوت المبيعات",
    status: "offline",
    type: "sales",
    channels: ["whatsapp", "facebook"],
    conversations: 120,
    lastActive: "منذ 3 ساعات",
  },
];

// بيانات المحادثات الأخيرة (للعرض فقط)
const conversationsMockData = [
  {
    id: "conv-1",
    customer: "أحمد محمد",
    channel: "whatsapp",
    status: "active",
    lastMessage: "أريد الاستفسار عن المنتج الجديد",
    time: "منذ 10 دقائق",
  },
  {
    id: "conv-2",
    customer: "سارة أحمد",
    channel: "telegram",
    status: "closed",
    lastMessage: "شكراً لكم، تمت حل المشكلة",
    time: "منذ 1 ساعة",
  },
  {
    id: "conv-3",
    customer: "محمد علي",
    channel: "website",
    status: "pending",
    lastMessage: "متى سيتم توفر المنتج مرة أخرى؟",
    time: "منذ 3 ساعات",
  },
];

// بيانات الإحصائيات (للعرض فقط)
const statsMockData = [
  {
    title: "إجمالي المحادثات",
    value: "1,234",
    change: "+12%",
    trend: "up",
    icon: "/icons/conversations.svg",
  },
  {
    title: "معدل الرضا",
    value: "94%",
    change: "+2%",
    trend: "up",
    icon: "/icons/satisfaction.svg",
  },
  {
    title: "وقت الاستجابة",
    value: "45 ثانية",
    change: "-15%",
    trend: "down",
    icon: "/icons/response-time.svg",
  },
  {
    title: "تحويل للموظفين",
    value: "15%",
    change: "-3%",
    trend: "down",
    icon: "/icons/human-handoff.svg",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {UI_TEXT.dashboard.welcomeBack} <span className="text-primary">أحمد</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            هنا يمكنك إدارة البوتات والاطلاع على الإحصائيات
          </p>
        </div>
        <Link
          href="/dashboard/bots/create"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          إنشاء بوت جديد
        </Link>
      </div>

      {/* الإحصائيات */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsMockData.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Image
                  src={stat.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <div className="mr-3">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <span
                    className={`mr-2 text-xs font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* البوتات */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">{UI_TEXT.dashboard.botsTitle}</h2>
          <Link
            href="/dashboard/bots"
            className="text-sm font-medium text-primary hover:underline"
          >
            عرض الكل
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {botsMockData.map((bot, index) => (
            <Link
              key={index}
              href={`/dashboard/bots/${bot.id}`}
              className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-foreground">{bot.name}</h3>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${bot.status === "online" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  <span
                    className={`ml-1 h-2 w-2 rounded-full ${bot.status === "online" ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                  {bot.status === "online" ? "متصل" : "غير متصل"}
                </span>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-xs text-muted-foreground">النوع:</span>
                <span className="mr-1 text-xs font-medium text-foreground">
                  {bot.type === "customer-service" ? "خدمة العملاء" : "المبيعات"}
                </span>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-xs text-muted-foreground">القنوات:</span>
                <div className="mr-1 flex">
                  {bot.channels.map((channel, channelIndex) => (
                    <div key={channelIndex} className="ml-1">
                      {channel === "whatsapp" && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4 0.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1 0.6 2.4 0.9 3.7 0.9 4.3 0 7.8-3.5 7.8-7.8 0-2.1-0.8-4-2.3-5.5zm-5.5 11.9c-1.2 0-2.3-0.3-3.3-0.9l-0.2-0.1-2.4 0.6 0.6-2.3-0.1-0.2c-0.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3 0.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6 0 3.5-2.9 6.4-6.5 6.4zm3.5-4.8c-0.2-0.1-1.1-0.6-1.3-0.6-0.2-0.1-0.3-0.1-0.4 0.1-0.1 0.2-0.5 0.6-0.6 0.8-0.1 0.1-0.2 0.1-0.4 0-0.2-0.1-0.8-0.3-1.5-0.9-0.6-0.5-0.9-1.1-1-1.3-0.1-0.2 0-0.3 0.1-0.4 0.1-0.1 0.2-0.2 0.3-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0-0.2 0-0.3 0-0.1-0.4-1-0.6-1.4-0.2-0.4-0.3-0.3-0.4-0.3h-0.3c-0.1 0-0.3 0-0.5 0.2-0.2 0.2-0.6 0.6-0.6 1.5s0.7 1.8 0.8 1.9c0.1 0.1 1.4 2.1 3.3 2.9 0.5 0.2 0.8 0.3 1.1 0.4 0.5 0.1 0.9 0.1 1.2 0.1 0.4-0.1 1.1-0.5 1.3-0.9 0.2-0.5 0.2-0.9 0.1-0.9-0.1-0.1-0.2-0.1-0.4-0.2z" />
                          </svg>
                        </span>
                      )}
                      {channel === "telegram" && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.05.01-.23-.08-.32-.09-.1-.25-.07-.36-.04-.2.05-2.36 1.5-3.37 2.2-.32.21-.61.31-.87.31-.28 0-.54-.13-.79-.27-.43-.25-.76-.47-1.11-.47-.36 0-.55.32-.39.59.16.27.64 1.24 1.05 1.74.4.5 1.13 1.24 1.86 1.24.73 0 1.17-.36 1.6-.72.44-.36 2.16-1.42 2.56-1.72.4-.3.81-.64 1.4-.32.59.32 3.12 2.08 3.12 2.08.31.21.52-.04.31-.35z" />
                          </svg>
                        </span>
                      )}
                      {channel === "facebook" && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                          </svg>
                        </span>
                      )}
                      {channel === "website" && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="mr-1 text-xs text-muted-foreground">{bot.conversations}</span>
                </div>
                <span className="text-xs text-muted-foreground">{bot.lastActive}</span>
              </div>
            </Link>
          ))}
          <Link
            href="/dashboard/bots/create"
            className="flex flex-col items-center justify-center rounded-lg border border-dashed bg-background p-6 text-center transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">إنشاء بوت جديد</h3>
            <p className="mt-2 text-sm text-muted-foreground">أنشئ بوت محادثة جديد لعملك</p>
          </Link>
        </div>
      </div>

      {/* المحادثات الأخيرة */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">{UI_TEXT.dashboard.conversationsTitle}</h2>
          <Link
            href="/dashboard/conversations"
            className="text-sm font-medium text-primary hover:underline"
          >
            عرض الكل
          </Link>
        </div>
        <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">العميل</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">القناة</th>
                <th className="hidden px-4 py-3 text-right text-sm font-medium text-muted-foreground md:table-cell">آخر رسالة</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">الحالة</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">الوقت</th>
              </tr>
            </thead>
            <tbody>
              {conversationsMockData.map((conversation, index) => (
                <tr
                  key={index}
                  className="border-b transition-colors hover:bg-muted/20"
                >
                  <td className="px-4 py-3 text-sm font-medium text-foreground">
                    {conversation.customer}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      {conversation.channel === "whatsapp" && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4 0.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1 0.6 2.4 0.9 3.7 0.9 4.3 0 7.8-3.5 7.8-7.8 0-2.1-0.8-4-2.3-5.5zm-5.5 11.9c-1.2 0-2.3-0.3-3.3-0.9l-0.2-0.1-2.4 0.6 0.6-2.3-0.1-0.2c-0.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3 0.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6 0 3.5-2.9 6.4-6.5 6.4zm3.5-4.8c-0.2-0.1-1.1-0.6-1.3-0.6-0.2-0.1-0.3-0.1-0.4 0.1-0.1 0.2-0.5 0.6-0.6 0.8-0.1 0.1-0.2 0.1-0.4 0-0.2-0.1-0.8-0.3-1.5-0.9-0.6-0.5-0.9-1.1-1-1.3-0.1-0.2 0-0.3 0.1-0.4 0.1-0.1 0.2-0.2 0.3-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0-0.2 0-0.3 0-0.1-0.4-1-0.6-1.4-0.2-0.4-0.3-0.3-0.4-0.3h-0.3c-0.1 0-0.3 0-0.5 0.2-0.2 0.2-0.6 0.6-0.6 1.5s0.7 1.8 0.8 1.9c0.1 0.1 1.4 2.1 3.3 2.9 0.5 0.2 0.8 0.3 1.1 0.4 0.5 0.1 0.9 0.1 1.2 0.1 0.4-0.1 1.1-0.5 1.3-0.9 0.2-0.5 0.2-0.9 0.1-0.9-0.1-0.1-0.2-0.1-0.4-0.2z" />
                          </svg>
                        </span>
                      )}
                      {conversation.channel === "telegram" && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.05.01-.23-.08-.32-.09-.1-.25-.07-.36-.04-.2.05-2.36 1.5-3.37 2.2-.32.21-.61.31-.87.31-.28 0-.54-.13-.79-.27-.43-.25-.76-.47-1.11-.47-.36 0-.55.32-.39.59.16.27.64 1.24 1.05 1.74.4.5 1.13 1.24 1.86 1.24.73 0 1.17-.36 1.6-.72.44-.36 2.16-1.42 2.56-1.72.4-.3.81-.64 1.4-.32.59.32 3.12 2.08 3.12 2.08.31.21.52-.04.31-.35z" />
                          </svg>
                        </span>
                      )}
                      {conversation.channel === "website" && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </span>
                      )}
                      <span className="mr-2">{conversation.channel === "whatsapp" ? "واتساب" : conversation.channel === "telegram" ? "تيليجرام" : "الموقع"}</span>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 text-sm text-muted-foreground md:table-cell">
                    {conversation.lastMessage}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${conversation.status === "active" ? "bg-green-100 text-green-800" : conversation.status === "pending" ? "bg-yellow-100 text-yellow-800"