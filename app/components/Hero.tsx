"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen bg-white flex items-center justify-center overflow-hidden">
      <Image
        src="/images/home.jpg"
        alt="Pedro Moyano"
        width={1800}
        height={1200}
        priority
        className={`w-[78vw] h-auto max-h-[78vh] object-contain transition-opacity duration-[2200ms] ${
          imageVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
}