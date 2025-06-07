import type { Metadata } from "next";
import PageHeader from "./header";
import PageFooter from "./footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh max-w-[97vw] flex flex-col justify-between`}
      >
        <SessionProvider>
          <PageHeader />
          {children}
          <PageFooter />
        </SessionProvider>
      </body>
    </html>
  );
}
