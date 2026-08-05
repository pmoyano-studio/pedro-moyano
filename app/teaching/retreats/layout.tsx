import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retiros Artísticos & Retreats",
  description:
    "Retiros de arte y convivencia artística con Pedro Moyano. Talleres de dibujo en entornos naturales.",
};

export default function RetreatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}