import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { ShopHeader } from "@/components/shop/layout/shop-header.layout";
import { ShopFooter } from "@/components/shop/layout/shop-footer.layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + TypeScript Template",
  description: "developed by @anjana784",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopHeader />
        {children}
        <ShopFooter />
      </body>
    </html>
  );
}
