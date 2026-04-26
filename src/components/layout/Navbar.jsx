import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Research", href: "#research" },
  { name: "Methodology", href: "#methodology" },
  { name: "Timeline", href: "#timeline" },
  { name: "Project Documents", href: "#documents" },
  { name: "Presentations", href: "#presentations" },
  { name: "Research Team", href: "#team" },
  { name: "About Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 w-full">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center">
            <span className="font-bold text-black text-xl">B</span>
          </div>
          <div>
            <p className="font-semibold text-base text-white leading-none">25-26J-168</p>
            <p className="text-xs text-zinc-400">Buildora</p>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-zinc-300 flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-yellow-400 transition-colors whitespace-nowrap"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 text-sm"
            onClick={() => scrollToSection('#documents')}
          >
            View Documents
          </Button>
          <button
            className="xl:hidden text-white p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors py-2 border-b border-zinc-800 last:border-0"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}