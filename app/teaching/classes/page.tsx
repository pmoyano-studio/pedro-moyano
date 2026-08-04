import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classes | Pedro Moyano',
  description: 'Painting and drawing classes by Pedro Moyano.',
};

export default function ClassesPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">
        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-28">
          classes
        </h1>

        <div className="max-w-3xl">
          <p className="text-2xl font-light leading-relaxed text-neutral-500">
            Information about upcoming classes and regular studio sessions coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}