import Image from "next/image";
import Link from "next/link";
import { paintings } from "@/app/data/paintings";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const painting = paintings.find((p) => p.id === Number(id));

  if (!painting) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
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
    <main className="h-screen bg-white pt-24">

      <div className="h-[calc(100vh-6rem)] px-10 pb-8 flex flex-col">

        <div className="flex-1 flex items-center justify-center gap-2 min-h-0">

          <div className="flex items-center justify-center">

            <a
              href={painting.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[900px] h-[80vh] block cursor-zoom-in"
            >
              <Image
                src={painting.image}
                alt={painting.title}
                fill
                priority
                className="object-contain"
              />
            </a>

            <aside
              style={{
                marginLeft: `${painting.labelOffset ?? -20}px`,
              }}
              className="w-[140px] text-sm text-neutral-500 leading-7"
            >

              <h1 className="text-black font-light mb-3">
                {painting.title}
              </h1>

              {painting.medium && <p>{painting.medium}</p>}
              {painting.dimensions && <p>{painting.dimensions}</p>}
              {painting.year && <p>{painting.year}</p>}

            </aside>

          </div>

        </div>

        <div className="pt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">

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