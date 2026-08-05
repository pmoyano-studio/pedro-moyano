import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops & Talleres de Dibujo",
  description:
    "Talleres intensivos de dibujo y pintura impartidos por Pedro Moyano. Cursos de fundamentos del dibujo y seminarios prácticos.",
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}