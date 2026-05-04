import { motion } from 'framer-motion';
import { Mail, GitBranch, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0C10] text-slate-400 py-20 border-t border-slate-800/50 w-full relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand & Mission */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-600/20 group hover:rotate-6 transition-transform duration-500">
                <span className="font-black text-white text-2xl">B</span>
              </div>
              <div>
                <p className="text-white font-black text-2xl tracking-tighter">Buildora</p>
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em]">Research Project</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Revolutionizing the construction lifecycle through integrated AI, Computer Vision, 
              and data-driven intelligence for the local SME sector.
            </p>
          </div>

          {/* Platform Links */}
          <div className="space-y-8">
            <p className="text-white font-bold text-sm uppercase tracking-[0.2em]">Platform</p>
            <ul className="space-y-4">
              {[
                { label: "Research Foundation", href: "#research" },
                { label: "Methodology",         href: "#methodology" },
                { label: "Project Timeline",    href: "#timeline" },
                { label: "Our Modules",         href: "#modules" },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-blue-500 hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-500" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className="space-y-8">
            <p className="text-white font-bold text-sm uppercase tracking-[0.2em]">Resources</p>
            <ul className="space-y-4">
              {[
                { label: "Documentation",       href: "#documents" },
                { label: "Research Paper",      href: "#research" },
                { label: "Our Team",            href: "#team" },
                { label: "Contact Us",          href: "#contact" },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-blue-500 hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-500" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-white font-bold text-sm uppercase tracking-[0.2em]">Institution</p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-slate-300">
                  <span className="font-bold text-white">SLIIT</span><br />
                  Faculty of Computing<br />
                  Malabe, Sri Lanka
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <p>25-26J-168</p>
              </div>
              <div className="pt-2">
                <span className="px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                  Batch 2025/2026
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-medium uppercase tracking-widest text-slate-500">
          <p>© {currentYear} Buildora Research Group · SLIIT Malabe</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-slate-700">Built with React & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}