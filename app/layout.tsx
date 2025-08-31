import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Professional Developer',
  description: 'A modern portfolio showcasing my skills, projects, and experience as a developer.',
  keywords: ['developer', 'portfolio', 'web development', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Portfolio - Professional Developer',
    description: 'A modern portfolio showcasing my skills, projects, and experience as a developer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Professional Developer',
    description: 'A modern portfolio showcasing my skills, projects, and experience as a developer.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ea5e9" /> */}
      </head>
      <body className={inter.className}>
      <ThemeProvider defaultTheme="light">
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
