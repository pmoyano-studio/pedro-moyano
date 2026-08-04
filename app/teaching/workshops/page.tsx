"use client";

import { useState } from "react";

export default function WorkshopsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const workshopFlyers = [
    { src: "/teaching/2-workshops/flyer.english.jpg", alt: "Fundamentals of Drawing (English)" },
    { src: "/teaching/2-workshops/workshop-dibujo.jpg", alt: "Fundamentos del Dibujo" },
    { src: "/teaching/2-workshops/workshop-frigiliana.jpg", alt: "Workshop Frigiliana" },
    { src: "/teaching/2-workshops/workshop-01.jpg", alt: "Workshop 01" },
    { src: "/teaching/2-workshops/workshop-02.jpg", alt: "Workshop 02" },
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">
        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          workshops
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {workshopFlyers.map((flyer, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(flyer.src)}
              className="w-full aspect-square overflow-hidden border border-neutral-100 bg-neutral-50 shadow-sm cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center p-2"
            >
              <img 
                src={flyer.src} 
                alt={flyer.alt} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal sobre fondo blanco */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Workshop Flyer Expanded" 
              className="max-w-full max-h-[85vh] object-contain shadow-md"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 text-neutral-400 hover:text-black text-sm lowercase tracking-widest p-4 transition-colors"
            >
              close ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}