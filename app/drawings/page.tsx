import DrawingsGallery from "@/app/components/DrawingsGallery";

export default function DrawingsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24">
        <DrawingsGallery />
      </div>
    </main>
  );
}