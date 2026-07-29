export default function WorkshopsPage() {
  const flyers = [
    "/teaching/2-workshops/flyer.english.jpg",
    "/teaching/2-workshops/flyer-espanol.jpg",
    "/teaching/2-workshops/workshop-frigiliana.jpg",
    "/teaching/2-workshops/workshop-dibujo.jpg",
    "/teaching/2-workshops/workshop-02.jpeg",
    "/teaching/2-workshops/workshop-01.jpeg",
  ];

  return (
    <main className="bg-white text-black min-h-screen">

      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">

        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-20">
          Workshops
        </h1>

        <div className="space-y-32">

          {flyers.map((flyer) => (
            <img
              key={flyer}
              src={flyer}
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