"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">

      {/* Desktop */}
      <Image
        src="/images/home-desktop.jpg"
        alt="Pedro Moyano"
        fill
        priority
        className={`
          hidden md:block
          object-cover
          transition-opacity duration-[2200ms]
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Mobile */}
      <Image
        src="/images/home-mobile.jpg"
        alt="Pedro Moyano"
        fill
        priority
        className={`
          block md:hidden
          object-cover
          transition-opacity duration-[2200ms]
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

    </section>
  );
}