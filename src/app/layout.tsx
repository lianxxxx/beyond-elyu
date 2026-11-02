import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { SITE } from "@/lib/site";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { LightboxProvider } from "@/components/shared/lightbox";
import "./globals.css";

// Display face — Clash Display, self-hosted via next/font/local.
// The variable .woff2 lives beside this file in ./fonts and carries the full
// Extralight→Bold axis (200–700). next/font scopes & preloads it; no CDN.
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "200 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.seoTitle,
    // Child pages set a short title; this frames it, e.g. "A note | beyond elyu".
    template: `%s | ${SITE.name}`,
  },
  description: SITE.seoDescription,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  category: "travel",
  alternates: { canonical: "/" },
  verification: {
    google: "rY9SijY4W3VToci9239TIjvxZz95zjdZxk82S-9Qhgw",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-body text-ink">
        <LoadingScreen />
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}
