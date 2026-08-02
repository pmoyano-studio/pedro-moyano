"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-neutral-200 z-50">
      <div className="h-20 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-medium uppercase tracking-[0.35em] text-black"
        >
          PEDRO MOYANO
        </Link>

        {/* Botón Menú */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-black focus:outline-none z-50 p-2"
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {open && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-8 overflow-y-auto">
          <nav className="flex flex-col gap-6 text-sm uppercase tracking-[0.2em] text-black">
            <p className="text-xs text-neutral-400 tracking-widest uppercase">Works</p>
            <Link href="/works" onClick={() => setOpen(false)} className="pl-4">
              Paintings
            </Link>
            <Link href="/drawings" onClick={() => setOpen(false)} className="pl-4">
              Drawings
            </Link>

            <hr className="border-neutral-100 my-2" />

            <Link href="/artist" onClick={() => setOpen(false)}>
              Artist
            </Link>

            <hr className="border-neutral-100 my-2" />

            <p className="text-xs text-neutral-400 tracking-widest uppercase">Teaching</p>
            <Link href="/teaching/classes" onClick={() => setOpen(false)} className="pl-4">
              Classes
            </Link>
            <Link href="/teaching/workshops" onClick={() => setOpen(false)} className="pl-4">
              Workshops
            </Link>
            <Link href="/teaching/retreats" onClick={() => setOpen(false)} className="pl-4">
              Retreats
            </Link>

            <hr className="border-neutral-100 my-2" />

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}