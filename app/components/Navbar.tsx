"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 transition-opacity duration-[1400ms] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          href="/"
          className="text-base font-medium uppercase tracking-[0.35em] text-black"
        >
          PEDRO MOYANO
        </Link>

        <div className="flex gap-10 text-sm uppercase tracking-[0.2em] text-black">

          <div className="relative group">

            <button className="uppercase tracking-[0.2em]">
              Works
            </button>

            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="bg-white text-black shadow-lg py-3 min-w-[180px]">

                <Link
                  href="/works"
                  className="block px-6 py-2 hover:bg-neutral-100"
                >
                  Paintings
                </Link>

                <Link
                  href="/drawings"
                  className="block px-6 py-2 hover:bg-neutral-100"
                >
                  Drawings
                </Link>

              </div>

            </div>

          </div>

          <Link href="/artist">
            Artist
          </Link>

          <div className="relative group">

            <button className="uppercase tracking-[0.2em]">
              Teaching
            </button>

            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="bg-white text-black shadow-lg py-3 min-w-[180px]">

                <Link
                  href="/teaching/classes"
                  className="block px-6 py-2 hover:bg-neutral-100"
                >
                  Classes
                </Link>

                <Link
                  href="/teaching/workshops"
                  className="block px-6 py-2 hover:bg-neutral-100"
                >
                  Workshops
                </Link>

                <Link
                  href="/teaching/retreats"
                  className="block px-6 py-2 hover:bg-neutral-100"
                >
                  Retreats
                </Link>

              </div>

            </div>

          </div>

          <Link href="/contact">
            Contact
          </Link>

        </div>

      </nav>
    </header>
  );
}