import Image from "next/image";
import Link from "next/link";
import { retreats } from "@/app/data/retreats";

export function generateStaticParams() {
  return retreats.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function RetreatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const retreat = retreats.find((r) => r.id === Number(id));

  if (!retreat) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white text-sm uppercase tracking-widest">
        Retreat photo not found
      </main>
    );
  }

  const currentIndex = retreats.findIndex((r) => r.id === Number(id));
  const previousRetreat = currentIndex > 0 ? retreats[currentIndex - 1] : null;
  const nextRetreat =
    currentIndex < retreats.length - 1 ? retreats[currentIndex + 1] : null;

  return (
    <main className="min-h-screen md:h-screen bg-white pt-20 md:pt-24 flex flex-col justify-between">
      <div className="flex-1 px-4 md:px-10 pb-6 md:pb-8 flex flex-col justify-center max-w-6xl mx-auto w-full">
        
        {/* Foto limpia centrada sin cartela */}
        <div className="flex-1 flex items-center justify-center min-h-0 py-4">
          <div className="relative w-full max-w-[95vw] md:max-w-[1000px] h-[65vh] md:h-[80vh]">
            <Image
              src={retreat.image}
              alt={retreat.title || "Retreat photo"}
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Navegación Anterior / Siguiente */}
        <div className="pt-4 md:pt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500 w-full">
          {previousRetreat ? (
            <Link
              href={`/teaching/retreats/${previousRetreat.id}`}
              className="hover:text-black transition-colors"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {nextRetreat ? (
            <Link
              href={`/teaching/retreats/${nextRetreat.id}`}
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