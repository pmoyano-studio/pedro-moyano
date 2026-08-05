import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clases de Dibujo y Pintura",
  description:
    "Clases de dibujo y pintura impartidas por Pedro Moyano. Formación continua en técnicas de dibujo para todos los niveles.",
};

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}