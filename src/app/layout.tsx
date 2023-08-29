import "./globals.css";
import "./style.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const snas = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "어의대방 트리미엄시티",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Script src='/js/uiux.js' />
      <body className={snas.className}>
        <div className='ly-container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
