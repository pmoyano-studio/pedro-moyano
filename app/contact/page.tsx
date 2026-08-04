'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-black min-h-screen">
      <section className="max-w-5xl mx-auto px-8 pt-28 pb-32">

        <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-28">
          contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Direct info */}
          <div className="space-y-6 text-sm font-light">
            <div>
              <span className="block text-xs uppercase text-neutral-400 mb-1">Email</span>
              <a href="mailto:info@pedromoyano.com" className="hover:underline">info@pedromoyano.com</a>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-400 mb-1">Location</span>
              <span>Málaga, Spain</span>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-400 mb-1">Instagram</span>
              <a href="https://instagram.com/pedromoyanoart" target="_blank" rel="noreferrer" className="hover:underline">@pedromoyanoart</a>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div>
            {submitted ? (
              <p className="text-xl font-light text-neutral-500">
                Message sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-light">
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    className="w-full border-b border-neutral-300 py-2 text-base focus:outline-none focus:border-black bg-transparent"
                  />
                </div>

                <div>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-neutral-300 py-2 text-base focus:outline-none focus:border-black bg-transparent"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Message"
                    className="w-full border-b border-neutral-300 py-2 text-base focus:outline-none focus:border-black bg-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="border border-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            )}
          </div>

        </div>

      </section>
    </main>
  );
}