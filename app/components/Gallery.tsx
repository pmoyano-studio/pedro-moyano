"use client";

import Image from "next/image";
import Link from "next/link";
import { paintings } from "../../data/paintings";

export default function Gallery() {
  return (
    <section
      id="works"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">

        {paintings.map((painting) => (

          <Link
            key={painting.id}
            href={`/works/${painting.id}`}
            onClick={() =>
              sessionStorage.setItem(
                "galleryScroll",
                String(window.scrollY)
              )
            }
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden">

              <Image
                src={painting.image}
                alt={painting.title}
                fill
                className="
  object-cover
  transition-transform
  duration-500
  group-hover:scale-[1.02]
"
              />

            </div>

          </Link>

        ))}

      </div>
    </section>
  );
}
