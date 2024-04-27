import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JUFooter from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JECRC Research and Development Cell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <JUFooter />
      </body>
    </html>
  );
}
