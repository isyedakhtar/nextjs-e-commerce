import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CDPPageView from "@/components/CDP/CDPPageView";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart-shopping",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CDPPageView />
      <body className={inter.className}>
        <div>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
