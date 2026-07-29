"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.45);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-white">

      <div className="max-w-4xl mx-auto px-8 pt-28">

        <div
          className={`transition-all duration-[1800ms] ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-4xl md:text-5xl leading-tight font-light text-stone-900">
            Mi trabajo parte de la figura,
            <br />
            pero habla de la pintura.
          </p>

          <p className="mt-12 max-w-2xl text-lg leading-9 text-stone-600">
            Texto provisional.
          </p>

        </div>

      </div>

      {/* Pausa antes de comenzar la exposición */}

      <div className="h-[26rem]" />

    </section>
  );
}