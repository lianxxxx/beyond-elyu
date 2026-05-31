import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
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
  title: "beyond elyu — La Union, look closer",
  description:
    "La Union is not overrated. An editorial field guide to the coast everyone thinks they already know.",
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
        {children}
      </body>
    </html>
  );
}
