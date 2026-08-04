import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshops | Pedro Moyano',
  description: 'Art workshops and intensive courses by Pedro Moyano.',
};

export default function WorkshopsPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">
        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-28">
          workshops
        </h1>

        <div className="max-w-3xl">
          <p className="text-2xl font-light leading-relaxed text-neutral-500">
            Details on intensive workshops and special courses coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}