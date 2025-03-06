import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/layout";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=' bg-gradient-to-r from-teal-950 to-teal-800'>
      <body className={inter.className}>
        <div className="flex">
          <Layout/>
           {children}
        </div>
      </body>
    </html>
  );
}
