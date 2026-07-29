import Image from "next/image";
import Link from "next/link";

import { drawings } from "@/app/data/drawings";

export default async function DrawingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const drawing = drawings.find((d) => d.id === Number(id));

  if (!drawing) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Artwork not found
      </main>
    );
  }

  const currentIndex = drawings.findIndex(
    (d) => d.id === Number(id)
  );

  const previousDrawing =
    currentIndex > 0 ? drawings[currentIndex - 1] : null;

  const nextDrawing =
    currentIndex < drawings.length - 1
      ? drawings[currentIndex + 1]
      : null;

  return (
    <main className="h-screen overflow-hidden bg-white">

      <div className="h-full px-10 py-8 flex flex-col">

        {/* VISOR */}

        <div className="flex-1 flex items-center justify-center gap-10 min-h-0">

          {/* DIBUJO */}

          <div className="relative flex-1 h-full">

            <Image
              src={drawing.image}
              alt={drawing.title}
              fill
              priority
              className="object-contain"
            />

          </div>

          {/* CARTELA */}

          <aside className="w-[140px] flex-shrink-0 text-sm text-neutral-500 leading-7">

            <h1 className="text-black font-light mb-8">
              {drawing.title}
            </h1>

            {drawing.medium && (
              <p>{drawing.medium}</p>
            )}

            {drawing.dimensions && (
              <p>{drawing.dimensions}</p>
            )}

            {drawing.year && (
              <p>{drawing.year}</p>
            )}

          </aside>

        </div>

        {/* NAVEGACIÓN */}

        <div className="flex-shrink-0 pt-5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">

          {previousDrawing ? (
            <Link
              href={`/drawings/${previousDrawing.id}`}
              className="hover:text-black transition-colors"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {nextDrawing ? (
            <Link
              href={`/drawings/${nextDrawing.id}`}
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