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
    <main className="min-h-screen md:h-screen bg-white pt-20 md:pt-24 flex flex-col justify-between">

      <div className="flex-1 px-4 md:px-10 pb-6 md:pb-8 flex flex-col justify-center">

        {/* Estructura: vertical en móvil, horizontal en ordenador */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 min-h-0 py-4">

          {/* Imagen del dibujo */}
          <a
            href={drawing.image}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-[90vw] md:w-[900px] h-[55vh] md:h-[80vh] block cursor-zoom-in"
          >
            <Image
              src={drawing.image}
              alt={drawing.title}
              fill
              priority
              className="object-contain"
            />
          </a>

          {/* Cartela / Información */}
          <aside
            className="w-full md:w-[140px] text-center md:text-left text-sm text-neutral-500 leading-6 md:leading-7 md:[margin-left:var(--label-offset)]"
          >
            <div 
              style={{ '--label-offset': `${drawing.labelOffset ?? -20}px` } as React.CSSProperties} 
              className="contents"
            >
              <h1 className="text-black font-light mb-1 md:mb-3 text-base md:text-sm">
                {drawing.title}
              </h1>

              {drawing.medium && <p>{drawing.medium}</p>}
              {drawing.dimensions && <p>{drawing.dimensions}</p>}
              {drawing.year && <p>{drawing.year}</p>}
            </div>
          </aside>

        </div>

        {/* Botones Anterior / Siguiente */}
        <div className="pt-4 md:pt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500 max-w-5xl mx-auto w-full">

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