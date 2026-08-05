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

// METADATOS OPTIMIZADOS PARA SEO
export const metadata: Metadata = {
  title: {
    default: "Pedro Moyano | Artista Plástico, Clases y Talleres de Dibujo",
    template: "%s | Pedro Moyano",
  },
  description:
    "Obra de Pedro Moyano, clases de dibujo, talleres intensivos y retiros artísticos.",
  keywords: [
    "Pedro Moyano",
    "dibujo",
    "pintura",
    "clases de dibujo",
    "workshops arte",
    "retreats",
  ],
  openGraph: {
    title: "Pedro Moyano | Artista Plástico",
    description:
      "Obra artística, clases de dibujo, talleres intensivos y retiros artísticos.",
    type: "website",
  },
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