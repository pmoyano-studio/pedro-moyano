'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí conectas tu servicio de envío si lo utilizas
    setSubmitted(true);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 font-sans text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Columna Izquierda: Información */}
        <section className="flex flex-col justify-between space-y-8">
          <div>
            <h1 className="text-3xl font-light tracking-wide uppercase mb-6">Contacto</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Obra disponible, encargos y exposiciones. Visitas al estudio con cita previa.
            </p>
          </div>

          <div className="space-y-4 text-sm tracking-wide">
            <p>
              <span className="block text-xs uppercase text-gray-400">Email</span>
              <a href="mailto:info@pedromoyano.com" className="hover:underline">tu@email.com</a>
            </p>
            <p>
              <span className="block text-xs uppercase text-gray-400">Ubicación</span>
              Málaga, España
            </p>
            <p>
              <span className="block text-xs uppercase text-gray-400">Instagram</span>
              <a href="https://instagram.com/pedromoyano" target="_blank" rel="noreferrer" className="hover:underline">@pedromoyano</a>
            </p>
          </div>
        </section>

        {/* Columna Derecha: Formulario */}
        <section>
          {submitted ? (
            <div className="py-12 text-sm text-gray-600">
              Mensaje enviado. Responderé lo antes posible.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  required
                  type="text"
                  placeholder="Nombre"
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                />
              </div>

              <div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent"
                />
              </div>

              <div>
                <select
                  defaultValue=""
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent text-gray-600"
                >
                  <option value="" disabled>Motivo de la consulta</option>
                  <option value="comprar">Comprar obra</option>
                  <option value="encargo">Encargo personalizado</option>
                  <option value="exposicion">Exposición / Galería</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  placeholder="Mensaje"
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black bg-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 border border-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
              >
                Enviar
              </button>
            </form>
          )}
        </section>

      </div>
    </main>
  );
}