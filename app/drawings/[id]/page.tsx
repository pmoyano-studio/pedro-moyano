import Image from "next/image";
import Link from "next/link";

import { drawings } from "@/app/data/drawings";

export function generateStaticParams() {
  return drawings.map((drawing) => ({
    id: drawing.id.toString(),
  }));
}

export default async function DrawingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const drawing = drawings.find((d) => d.id === Number(id));

  if (!drawing) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
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
    <main className="h-screen bg-white pt-24">

      <div className="h-[calc(100vh-6rem)] px-10 pb-8 flex flex-col">

        <div className="flex-1 flex items-center justify-center gap-2 min-h-0">

          <div className="flex items-center justify-center">

            <div className="relative w-[900px] h-[80vh]">

              <Image
                src={drawing.image}
                alt={drawing.title}
                fill
                priority
                className="object-contain"
              />

            </div>

            <aside
              style={{ marginLeft: `${drawing.labelOffset ?? -20}px` }}
              className="w-[140px] text-sm text-neutral-500 leading-7"
            >

              <h1 className="text-black font-light mb-3">
                {drawing.title}
              </h1>

              {drawing.medium && <p>{drawing.medium}</p>}
              {drawing.dimensions && <p>{drawing.dimensions}</p>}
              {drawing.year && <p>{drawing.year}</p>}

            </aside>

          </div>

        </div>

        <div className="pt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">

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