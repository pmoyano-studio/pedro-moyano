'use client';

import { useState, useEffect } from 'react';

export default function RetreatsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Generamos la lista de las 25 fotos COLOR-1.jpg ... COLOR-25.jpg
  const photos = Array.from({ length: 25 }, (_, i) => `/teaching/3-retreats/photos/COLOR-${i + 1}.jpg`);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">
        
        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          retreats
        </h1>

        {/* 1. VÍDEO */}
        <div className="w-full mb-8">
          <video controls className="w-full border border-neutral-100">
            <source src="/teaching/3-retreats/video/retreat.mp4" type="video/mp4" />
            Tu navegador no soporta vídeo HTML5.
          </video>
        </div>

        {/* 2. TEXTO CON ENLACES */}
        <div className="mb-20 space-y-2 text-sm md:text-base font-light text-neutral-600 tracking-wide">
          <p>
            ONE-DAY-TRIAL-RETREAT at{' '}
            <a
              href="https://cortijolagunachico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              "Cortijo Laguna Chico"
            </a>{' '}
            Torre del Mar, Málaga. Spain. 07.07.2026
          </p>
          <p>
            Video and Photography by{' '}
            <a
              href="https://alexriofoto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              Alexriofoto.com
            </a>
          </p>
        </div>

        {/* 3. GALERÍA GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIndex(index)}
              className="overflow-hidden bg-neutral-50 aspect-[4/5] cursor-pointer"
            >
              <img
                src={photo}
                alt={`Retreat photo ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* 4. LIGHTBOX */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 overflow-y-auto py-8 px-4">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="fixed top-6 right-6 md:right-10 text-3xl font-light hover:opacity-50 transition-opacity z-20"
              aria-label="Cerrar"
            >
              ✕
            </button>

            {/* Flecha Izquierda */}
            <button 
              onClick={prevImage}
              className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 text-4xl md:text-5xl font-extralight hover:opacity-30 transition-opacity p-2 z-20"
            >
              ‹
            </button>

            {/* Imagen Principal */}
            <div className="max-w-5xl w-full flex flex-col items-center my-auto">
              <img
                src={photos[selectedIndex]}
                alt="Selected"
                className="max-h-[82vh] w-auto max-w-full object-contain mx-auto"
              />
              <p className="mt-4 text-xs font-light text-neutral-400 tracking-widest">
                {selectedIndex + 1} / {photos.length}
              </p>
            </div>

            {/* Flecha Derecha */}
            <button 
              onClick={nextImage}
              className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 text-4xl md:text-5xl font-extralight hover:opacity-30 transition-opacity p-2 z-20"
            >
              ›
            </button>
          </div>
        )}

      </section>
    </main>
  );
}