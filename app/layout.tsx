// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SplashScreen from "@/components/SplashScreen";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Operium | Business Growth. Automated.",
  description:
    "Operium is a premium growth agency founded by Mantra Patel and Tanush Shah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-transparent font-sans antialiased">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
