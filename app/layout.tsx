import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://becapital.swiss"),
  title: {
    default: "BE Capital SA | Preserving Generational Wealth",
    template: "%s | BE Capital SA",
  },
  description:
    "BE Capital SA is a Swiss family office stewarding generational wealth with discretion, excellence, and long-term perspective.",
  keywords: [
    "BE Capital",
    "family office",
    "Swiss wealth management",
    "generational wealth",
    "private equity",
  ],
  openGraph: {
    title: "BE Capital SA",
    description:
      "Independent Swiss family office dedicated to preserving and growing generational wealth.",
    url: "https://becapital.swiss",
    siteName: "BE Capital SA",
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BE Capital SA",
    description:
      "Stewards of Swiss generational wealth with a focus on continuity and excellence.",
  },
  authors: [{ name: "BE Capital SA" }],
  creator: "BE Capital SA",
  publisher: "BE Capital SA",
  category: "Finance",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-base text-foreground selection:bg-accent/30 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <NavigationBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
