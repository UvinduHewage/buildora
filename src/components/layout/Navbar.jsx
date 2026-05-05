import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { name: "Research", href: "#research" },
  { name: "Methodology", href: "#methodology" },
  { name: "Timeline", href: "#timeline" },
  { name: "Project Documents", href: "#documents" },
  { name: "Presentations", href: "#presentations" },
  { name: "About Us", href: "#team" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') return;

    // Search through nav links and navigate to matching section
    const matchedLink = navLinks.find(link => 
      link.name.toLowerCase().includes(query)
    );

    if (matchedLink) {
      scrollToSection(matchedLink.href);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 w-full">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="font-bold text-white text-xl">B</span>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-600 uppercase tracking-widest">Buildora</p>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-8 text-sm font-semibold text-slate-600 flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-blue-600 transition-colors whitespace-nowrap relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Search & CTA + hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden lg:flex items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all duration-300">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={handleSearch}
              className="bg-transparent border-none outline-none text-sm w-24 focus:w-48 transition-all duration-300 text-slate-700 placeholder:text-slate-400 font-medium"
            />
          </div>
          <Button
            className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-5 rounded-xl shadow-md shadow-blue-600/10 transition-all active:scale-95"
            onClick={() => scrollToSection('#documents')}
          >
            View Documents
          </Button>
          <button
            className="xl:hidden text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-6 py-6 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-base font-bold text-slate-600 hover:text-blue-600 transition-colors py-3 px-4 rounded-xl hover:bg-slate-50"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}