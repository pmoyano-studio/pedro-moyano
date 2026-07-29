

export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen">

      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">


        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-28">
          Contact
        </h1>

        <div className="space-y-10 text-2xl font-light">

          <a
  href="mailto:info@pedromoyano.com"
  className="block hover:text-neutral-500 transition-colors"
>
  info@pedromoyano.com
</a>

          <a
            href="https://www.instagram.com/pedromoyanoart"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-neutral-500 transition-colors"
          >
            @pedromoyanoart
          </a>

        </div>

      </section>

    </main>
  );
}