"use client";

import { useState } from "react";

export default function RetreatsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const retreatImages = [
    { 
      src: "/teaching/3-retreats/retreat-01.jpg", 
      alt: "Art and drawing retreat in nature with Pedro Moyano" 
    },
    { 
      src: "/teaching/3-retreats/retreat-02.jpg", 
      alt: "Students practicing during the intensive art retreat" 
    },
    { 
      src: "/teaching/3-retreats/retreat-03.jpg", 
      alt: "Plein air painting session during the art retreat" 
    },
    { 
      src: "/teaching/3-retreats/retreat-04.jpg", 
      alt: "Artistic fellowship and drawing instruction with Pedro Moyano" 
    },
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">
        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          retreats
        </h1>

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