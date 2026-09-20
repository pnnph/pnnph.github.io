// چیدمان ریشهٔ نسخهٔ فارسی — راست‌به‌چپ.
import type { Metadata } from "next";
import { fa } from "@/content/fa";
import { themeScript } from "@/components/ThemeToggle";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: fa.meta.title,
  description: fa.meta.description,
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function PersianLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* پوستهٔ ذخیره‌شدهٔ کاربر قبل از رسم صفحه اعمال می‌شود تا یک لحظه رنگ اشتباه دیده نشود. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
