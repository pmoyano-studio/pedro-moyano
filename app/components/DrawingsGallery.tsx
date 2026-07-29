import Image from "next/image";
import Link from "next/link";
import { drawings } from "@/app/data/drawings";

export default function DrawingsGallery() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {drawings.map((drawing) => (
        <Link
          key={drawing.id}
          href={`/drawings/${drawing.id}`}
          className="group"
        >
          <div className="relative h-[320px] overflow-hidden">

            <Image
              src={drawing.image}
              alt={drawing.title}
              fill
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.02]
              "
            />

          </div>

          <p className="mt-3 text-xs uppercase tracking-[0.15em] text-neutral-500">
            {drawing.title}
          </p>

        </Link>
      ))}
    </section>
  );
}