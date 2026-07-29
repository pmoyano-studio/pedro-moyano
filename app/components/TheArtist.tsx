import Link from "next/link";
import { artist } from "../../data/artist";

export default function TheArtist() {
  return (
    <section
      id="artist"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <div className="grid lg:grid-cols-[220px_1fr] gap-16">

        <div>
          <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-400">
            The Artist
          </h2>
        </div>

        <div className="space-y-10">

          <h3 className="text-3xl font-light">
            {artist.name}
          </h3>

          <p className="text-neutral-700 leading-8">
            {artist.biography}
          </p>

          <Link
            href="/artist"
            className="inline-block text-sm uppercase tracking-[0.2em] text-neutral-500 hover:text-black transition-colors"
          >
            Read more
          </Link>

        </div>

      </div>
    </section>
  );
}