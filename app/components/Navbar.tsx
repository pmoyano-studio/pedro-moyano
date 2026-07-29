"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          href="/"
          className="text-sm uppercase tracking-[0.35em] text-black"
        >
          PEDRO MOYANO
        </Link>

        <div className="flex gap-10 text-sm uppercase tracking-[0.2em] text-neutral-700">

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