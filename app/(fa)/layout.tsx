// چیدمان ریشهٔ نسخهٔ فارسی — راست‌به‌چپ.
import type { Metadata } from "next";
import { fa } from "@/content/fa";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: fa.meta.title,
  description: fa.meta.description,
};

export default function PersianLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
