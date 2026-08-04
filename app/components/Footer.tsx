export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-8 bg-white border-t border-neutral-100 text-neutral-500 text-xs font-light tracking-wider">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        {/* Solo el Copyright */}
        <p>© {currentYear} Pedro Moyano. All rights reserved.</p>

      </div>
    </footer>
  );
}