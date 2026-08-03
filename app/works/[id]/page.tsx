import Image from "next/image";
import Link from "next/link";
import { paintings } from "@/app/data/paintings";

export function generateStaticParams() {
  return paintings.map((painting) => ({
    id: painting.id.toString(),
  }));
}

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
    <main className="min-h-screen md:h-screen bg-white pt-20 md:pt-24 flex flex-col justify-between">

      <div className="flex-1 px-4 md:px-10 pb-6 md:pb-8 flex flex-col justify-center">

        {/* Estructura: flex-col en móvil (vertical), flex-row en ordenador (horizontal) */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 min-h-0 py-4">

          {/* Imagen de la obra */}
          <a
            href={painting.image}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-[90vw] md:w-[900px] h-[55vh] md:h-[80vh] block cursor-zoom-in"
          >
            <Image
              src={painting.image}
              alt={painting.title}
              fill
              priority
              className="object-contain"
            />
          </a>

          {/* Cartela / Información */}
          <aside
            style={{
              marginLeft: undefined, // Se desactiva el offset en móvil dinámicamente vía CSS
            }}
            className="w-full md:w-[140px] text-center md:text-left text-sm text-neutral-500 leading-6 md:leading-7 md:[margin-left:var(--label-offset)]"
          >
            <div 
              style={{ '--label-offset': `${painting.labelOffset ?? -20}px` } as React.CSSProperties} 
              className="contents"
            >
              <h1 className="text-black font-light mb-1 md:mb-3 text-base md:text-sm">
                {painting.title}
              </h1>

              {painting.medium && <p>{painting.medium}</p>}
              {painting.dimensions && <p>{painting.dimensions}</p>}
              {painting.year && <p>{painting.year}</p>}
            </div>
          </aside>

        </div>

        {/* Botones Anterior / Siguiente */}
        <div className="pt-4 md:pt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500 max-w-5xl mx-auto w-full">

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
              className="hover:text-black transition-colors px-4"
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