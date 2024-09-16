/*
 * @Author: cci
 * @Date: 2024-08-29 21:28:29
 * @LastEditors: cci
 * @LastEditTime: 2024-09-15 02:06:48
 * @Description: 
 * 
 * Copyright (c) 2024 by TGM All Rights Reserved. 
 */
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "../components";

// 1.导入Providers组件
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
<head />
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className='write'>
      <head />
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
