import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Budget vs Actual Variance Navigator | Infocreon",
  description:
    "An interactive financial intelligence dashboard for budget tracking, variance analysis, departmental performance, and forecasting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}