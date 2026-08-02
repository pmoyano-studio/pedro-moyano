import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Moyano",
  description: "Painting",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        {/* Tu Navbar original solo se verá en pantallas medianas y grandes */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Tu nuevo NavbarMobile solo se verá en pantallas pequeñas */}
        <div className="block md:hidden">
          <NavbarMobile />
        </div>

        {children}
      </body>
    </html>
  );
}