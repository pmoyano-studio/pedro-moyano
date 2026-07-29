import Link from "next/link";

export default function Teaching() {
  return (
    <section
      id="teaching"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-sm tracking-[0.35em] uppercase text-neutral-400 mb-16 text-center">
        Teaching
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <Link
          href="/teaching/classes"
          className="group"
        >
          <div className="overflow-hidden">

            <img
              src="/images/teaching/1-classes/flyer.jpg"
              alt="Classes"
              className="w-full aspect-[4/5] object-cover transition duration-500 group-hover:scale-[1.02]"
            />

          </div>

          <h3 className="mt-5 text-xl font-light">
            Classes
          </h3>

          <p className="mt-2 text-neutral-500">
            Weekly drawing and painting tuition.
          </p>

        </Link>

        <Link
          href="/teaching/workshops"
          className="group"
        >
          <div className="overflow-hidden">

            <img
              src="/images/teaching/2-workshops/flyer.jpg"
              alt="Workshops"
              className="w-full aspect-[4/5] object-cover transition duration-500 group-hover:scale-[1.02]"
            />

          </div>

          <h3 className="mt-5 text-xl font-light">
            Workshops
          </h3>

          <p className="mt-2 text-neutral-500">
            Intensive workshops centred on observation.
          </p>

        </Link>

        <Link
          href="/teaching/retreats"
          className="group"
        >
          <div className="overflow-hidden">

            <img
              src="/images/teaching/3-retreats/card.jpg"
              alt="Retreats"
              className="w-full aspect-[4/5] object-cover transition duration-500 group-hover:scale-[1.02]"
            />

          </div>

          <h3 className="mt-5 text-xl font-light">
            Retreats
          </h3>

          <p className="mt-2 text-neutral-500">
            Painting, observation and time.
          </p>

        </Link>

      </div>

    </section>
  );
}