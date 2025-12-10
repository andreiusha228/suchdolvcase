import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Suchdol v čase",
  description: "Dokumentární projekt Suchdol v čase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

