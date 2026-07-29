import Link from "next/link";
import Image from "next/image";
import { paintings } from "../../data/paintings";

export default function WorksPage() {
  return (
    <main className="bg-white text-black min-h-screen">

      <section className="max-w-6xl mx-auto px-8 pt-28 pb-32">

        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          Paintings
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

          {paintings.map((painting) => (
            <Link
              key={painting.id}
              href={`/works/${painting.id}`}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />

              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}