// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
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
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          // CRITICAL: Ensure body doesn't block WebGL canvas
          background: 'transparent',
          // Prevent stacking context issues
          position: 'relative',
          // Allow WebGL to render
          isolation: 'auto'
        }}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Add a fallback background div for non-WebGL content */}
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
