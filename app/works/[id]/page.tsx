import Image from "next/image";
import Link from "next/link";
import { paintings } from "../../../data/paintings";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const painting = paintings.find((p) => p.id === Number(id));

  if (!painting) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Artwork not found
      </main>
    );
  }

  const currentIndex = paintings.findIndex(
    (p) => p.id === Number(id)
  );

  const previousPainting =
    currentIndex > 0 ? paintings[currentIndex - 1] : null;

  const nextPainting =
    currentIndex < paintings.length - 1
      ? paintings[currentIndex + 1]
      : null;

  return (
    <main className="h-screen overflow-hidden bg-white">

      <div className="h-full px-10 py-8 flex flex-col">

        {/* VISOR */}

        <div className="flex-1 flex items-center justify-center gap-10 min-h-0">

          {/* PINTURA */}

          <div className="relative flex-1 h-full">

            <Image
              src={painting.image}
              alt={painting.title}
              fill
              priority
              className="object-contain"
            />

          </div>

          {/* CARTELA */}

          <aside className="w-[140px] flex-shrink-0 text-sm text-neutral-500 leading-7">

            <h1 className="text-black font-light mb-8">
              {painting.title}
            </h1>

            {painting.medium && (
              <p>{painting.medium}</p>
            )}

            {painting.dimensions && (
              <p>{painting.dimensions}</p>
            )}

            {painting.year && (
              <p>{painting.year}</p>
            )}

          </aside>

        </div>

        {/* NAVEGACIÓN */}

        <div className="flex-shrink-0 pt-5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">

          {previousPainting ? (
            <Link
              href={`/works/${previousPainting.id}`}
              className="hover:text-black transition-colors"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {nextPainting ? (
            <Link
              href={`/works/${nextPainting.id}`}
              className="hover:text-black transition-colors"
            >
              Next →
            </Link>
          ) : (
            <div />
          )}

        </div>

      </div>

    </main>
  );
}