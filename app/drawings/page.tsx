import DrawingsGallery from "@/app/components/DrawingsGallery";

export default function DrawingsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          Drawings
        </h1>

        <DrawingsGallery />

      </div>
    </main>
  );
}