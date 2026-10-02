import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIERU — See. Track. Grow.",
  description:
    "Track your SEO performance and AI search visibility in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}