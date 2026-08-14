"use client";

import { useState } from "react";

export default function RetreatsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Genera automáticamente las rutas para COLOR-1.jpg hasta COLOR-25.jpg
  const retreatImages = Array.from({ length: 25 }, (_, i) => ({
    src: `/teaching/3-retreats/photos/COLOR-${i + 1}.jpg`,
    alt: `Art retreat photo ${i + 1} by Pedro Moyano`,
  }));

  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">
        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-12">
          retreats
        </h1>

        {/* Sección de Vídeo y Texto Informativo */}
        <div className="mb-16 max-w-4xl">
          <video 
            controls 
            playsInline
            preload="metadata"
            className="w-full aspect-video rounded-sm shadow-sm bg-neutral-100"
          >
            <source src="/teaching/3-retreats/video/retreat.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de vídeo.
          </video>

          <div className="mt-4 text-xs tracking-wider uppercase text-neutral-500 space-y-1">
            <p>
              ONE-DAY-TRIAL-RETREAT at{" "}
              <a 
                href="https://cortijolagunachico.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-black underline underline-offset-4 transition-colors"
              >
                "Cortijo Laguna Chico"
              </a>{" "}
              Torre del Mar, Málaga. Spain. 07.07.2026
            </p>
            <p>
              Video and Photography by{" "}
              <a 
                href="https://alexriofoto.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-black underline underline-offset-4 transition-colors"
              >
                Alexriofoto.com
              </a>
            </p>
          </div>
        </div>

        {/* Galería de Fotos (25 imágenes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {retreatImages.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(img.src)}
              className="w-full aspect-square overflow-hidden border border-neutral-100 bg-neutral-50 shadow-sm cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center p-2"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Visor Modal de Imagen */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Expanded view of art retreat by Pedro Moyano" 
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