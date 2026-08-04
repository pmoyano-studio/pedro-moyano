export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 px-8 bg-white border-t border-neutral-200 text-neutral-600 text-sm font-normal tracking-wider">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        <p>© {currentYear} Pedro Moyano. All rights reserved.</p>

      </div>
    </footer>
  );
}