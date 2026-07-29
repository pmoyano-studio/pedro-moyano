export default function RetreatsPage() {
  const photos = [
    "/teaching/3-retreats/photos/006.jpg",
    "/teaching/3-retreats/photos/005.jpg",
    "/teaching/3-retreats/photos/004.jpg",
    "/teaching/3-retreats/photos/002.jpg",
    "/teaching/3-retreats/photos/001.jpg",
    "/teaching/3-retreats/photos/000.jpg",
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">

        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          Retreats
        </h1>

        <div className="w-full mb-32">
          <video controls className="w-full">
            <source
              src="/teaching/3-retreats/video/retreat.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta vídeo HTML5.
          </video>
        </div>

        <div className="space-y-32">
          {photos.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt=""
              loading="lazy"
              className="w-full block"
            />
          ))}
        </div>

      </section>
    </main>
  );
}