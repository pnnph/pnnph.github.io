// چیدمان ریشهٔ نسخهٔ انگلیسی. صفحهٔ فارسی چیدمان جدا دارد (app/(fa)/layout.tsx)
// چون lang و dir روی خود تگ <html> می‌نشینند و باید برای هر زبان متفاوت باشند.
import type { Metadata } from "next";
import { en } from "@/content/en";
import { themeScript } from "@/components/ThemeToggle";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* پوستهٔ ذخیره‌شدهٔ کاربر قبل از رسم صفحه اعمال می‌شود تا یک لحظه رنگ اشتباه دیده نشود. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
