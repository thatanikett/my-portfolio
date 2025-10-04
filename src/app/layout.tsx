// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

// Font configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start', // Add a CSS variable
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

// Single RootLayout function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}
        style={{
          background: 'transparent',
          position: 'relative',
          isolation: 'auto'
        }}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div 
            className="fallback-background"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'var(--background)',
              zIndex: -2,
              pointerEvents: 'none'
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
