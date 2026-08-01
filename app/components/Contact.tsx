export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <div className="grid lg:grid-cols-[220px_1fr] gap-16">

        <div>
          <h2 className="text-sm tracking-[0.3em] uppercase text-neutral-400">
            Contact
          </h2>
        </div>

        <div className="space-y-10">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Email
            </p>

            <p className="text-lg text-neutral-400">
              Available on request
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Instagram
            </p>

            <a
              href="https://instagram.com/pedromoyanoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-neutral-500 transition-colors"
            >
              @pedromoyanoart
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Location
            </p>

            <p className="text-lg">
              Madrid, Spain
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}