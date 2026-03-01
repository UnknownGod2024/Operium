// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-transparent font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
