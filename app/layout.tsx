import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "PGSA Web",
  description: "Obafemi Awolowo University Postgraduate Students' Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body
              className={cn(
                  "md:container p-1 min-h-screen bg-background font-sans antialiased",
                  fontSans.variable
              )}
          >
              <Header />
              {children}
          </body>
      </html>
  );
}
