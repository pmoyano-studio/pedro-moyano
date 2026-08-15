import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art & Drawing Retreats in Málaga | Pedro Moyano",
  description:
    "Intensive painting and drawing retreats in nature at Cortijo Laguna Chico, Torre del Mar. Guided tuition on observation, drawing, and light by Pedro Moyano.",
  openGraph: {
    title: "Art & Drawing Retreats in Málaga | Pedro Moyano",
    description:
      "Intensive painting and drawing retreats in nature at Cortijo Laguna Chico, Torre del Mar. Guided tuition on observation, drawing, and light by Pedro Moyano.",
    url: "https://pedromoyano.com/teaching/retreats",
    siteName: "Pedro Moyano",
    images: [
      {
        url: "/teaching/3-retreats/photos/COLOR-1.jpg",
        width: 1200,
        height: 630,
        alt: "Art Retreat with Pedro Moyano at Cortijo Laguna Chico",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art & Drawing Retreats in Málaga | Pedro Moyano",
    description:
      "Intensive painting and drawing retreats in nature at Cortijo Laguna Chico, Torre del Mar.",
    images: ["/teaching/3-retreats/photos/COLOR-1.jpg"],
  },
};

export default function RetreatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}