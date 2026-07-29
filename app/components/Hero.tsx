"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200);

    const handleScroll = () => {
      const scroll = window.scrollY;

      // Empieza a fundirse más tarde y más despacio
      const progress = Math.min(
        Math.max((scroll - 180) / 700, 0),
        1
      );

      setFade(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-white"
    >
      {/* Imagen */}

      <div
        className="absolute inset-0"
        style={{
          opacity: 1 - fade * 0.92,
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Pedro Moyano"
          fill
          priority
          className={`object-cover object-center transition-all duration-[4500ms] ease-out ${
            loaded
              ? "opacity-100 scale-[1.02] translate-x-0"
              : "opacity-0 scale-[1.15] translate-x-24"
          }`}
        />

        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Capa blanca */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `rgba(255,255,255,${fade})`,
        }}
      />

      {/* Nombre */}

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: loaded ? 1 - fade : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-light tracking-[0.45em]">
          PEDRO MOYANO
        </h1>
      </div>
    </section>
  );
}