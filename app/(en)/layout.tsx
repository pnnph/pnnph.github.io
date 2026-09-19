// چیدمان ریشهٔ نسخهٔ انگلیسی. صفحهٔ فارسی چیدمان جدا دارد (app/(fa)/layout.tsx)
// چون lang و dir روی خود تگ <html> می‌نشینند و باید برای هر زبان متفاوت باشند.
import type { Metadata } from "next";
import { en } from "@/content/en";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
