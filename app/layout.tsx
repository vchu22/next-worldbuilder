import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const messages = await getMessages();
    const locale = await getLocale();
    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh max-w-[97vw] flex 
                flex-col justify-between`}>
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <Providers>{children}</Providers>
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
