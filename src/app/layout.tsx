import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The GOAT Tech — Business IT, VoIP Phones & Security in Grand Rapids",
    template: "%s — The GOAT Tech",
  },
  description:
    "We are the anti-MSP. Business phones (GOAT Comms), custom computers, network & Wi-Fi, surveillance, and honest IT support in the Greater Grand Rapids area.",
  openGraph: {
    title: "The GOAT Tech",
    description:
      "We are the anti-MSP. Business phones, custom computers, network & Wi-Fi, surveillance, and honest IT support in Greater Grand Rapids.",
    type: "website",
    siteName: "The GOAT Tech",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          Skip to Content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
