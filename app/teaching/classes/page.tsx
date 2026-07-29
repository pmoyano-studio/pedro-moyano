import Image from "next/image";

const flyers = [
  "/teaching/1-classes/flyer-2026.jpg",
];

export default function ClassesPage() {
  return (
    <main className="bg-white text-black min-h-screen">

      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">

        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          Classes
        </h1>

        <div className="space-y-24">

          {flyers.map((flyer) => (
            <Image
              key={flyer}
              src={flyer}
              alt=""
              width={1200}
              height={1700}
              priority
              className="w-full h-auto block"
            />
          ))}

        </div>

      </section>

    </main>
  );
}