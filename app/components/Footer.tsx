export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <p className="text-sm tracking-[0.3em] font-light">
            PEDRO MOYANO
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            Contemporary Painting
          </p>
        </div>

        <div className="flex gap-8 text-sm text-neutral-500">

          <a
            href="mailto:info@pedromoyano.com"
            className="hover:text-black transition-colors"
          >
            Email
          </a>

          <a
            href="https://instagram.com/pedromoyanoart"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Instagram
          </a>

        </div>

        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}