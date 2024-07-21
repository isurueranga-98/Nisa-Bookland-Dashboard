import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { DashboardSideBar } from "@/components/dashboard/layout/dashboard-sidebar.layout";
import { DashboardFooter } from "@/components/dashboard/layout/dashboard-footer.layout";
import { DashboardHeader } from "@/components/dashboard/layout/dashboard-header.layout";

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
        <div className="flex">
          <DashboardSideBar />
          <div className="flex flex-col w-full">
            <DashboardHeader />
            <main className="p-4 h-[calc(100vh_-_112px)]">{children}</main>
            <DashboardFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
