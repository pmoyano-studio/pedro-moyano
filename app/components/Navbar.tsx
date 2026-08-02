"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-[1400ms] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto h-20 px-6 md:px-8 flex items-center justify-between bg-white">

          <Link
            href="/"
            className="text-sm md:text-base font-medium uppercase tracking-[0.35em] text-black"
          >
            PEDRO MOYANO
          </Link>

          {/* Escritorio */}
          <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em]">

            <Link href="/works">Works</Link>

            <Link href="/artist">Artist</Link>

            <Link href="/teaching/classes">Teaching</Link>

            <Link href="/contact">Contact</Link>

          </div>

          {/* Móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
           className="text-6xl text-red-500"
            aria-label="Menu"
          >
            {menuOpen ? "×" : "+"}
          </button>

        </nav>
      </header>

      {/* Menú móvil */}

      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >

        <div className="pt-28 px-8 flex flex-col gap-8 uppercase tracking-[0.25em] text-xl">

          <Link href="/works" onClick={() => setMenuOpen(false)}>
            Works
          </Link>

          <Link href="/drawings" onClick={() => setMenuOpen(false)}>
            Drawings
          </Link>

          <Link href="/artist" onClick={() => setMenuOpen(false)}>
            Artist
          </Link>

          <Link href="/teaching/classes" onClick={() => setMenuOpen(false)}>
            Teaching
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>

      </div>
    </>
  );
}