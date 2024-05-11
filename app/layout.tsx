import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
    accessToken: "QM4p9Ut8JLy29QMTmvM2jwtt",
    use: [apiPlugin],
});

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "OAU PGSA",
    description:
        "Obafemi Awolowo University Postgraduate Students' Association",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <div
                        className={cn(
                            "md:container p-1 min-h-fit font-sans antialiased z-10 bg-background",
                            fontSans.variable
                        )}
                    >
                        {children}
                    </div>

                    <Footer />
                </ThemeProvider>
                <BackgroundBeams />
            </body>
        </html>
    );
}
