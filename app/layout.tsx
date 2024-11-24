import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Navbar from "./components/Navbar";
// Supports weights 100-700
import '@fontsource-variable/josefin-sans';

export const metadata: Metadata = {
  title: "Greenmind - Plant Store",
  description: "Plant Store with Next and Strapi Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
      <body className="bg-background">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
    </ViewTransitions>
  );
}
