import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Worldbuilder",
  description: "A NextJS-based worldbuilding platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh max-w-[97vw] flex 
                flex-col justify-between`}>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                  <Providers>{children}</Providers>
              </ThemeProvider>
          </body>
      </html>
  );
}
