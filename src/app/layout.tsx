import type { Metadata } from "next";
import { Geist, Geist_Mono, Sour_Gummy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourGummy = Sour_Gummy()

export const metadata: Metadata = {
  title: "Nor's Cook Book",
  description: "Cooked by Nor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourGummy.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
