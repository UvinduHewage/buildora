import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 py-14 border-t border-zinc-900 w-full">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/20">
                <span className="font-black text-black text-xl">B</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">Buildora</p>
                <p className="text-xs text-zinc-500 mt-0.5">Group 25-26J-168</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              An intelligent, integrated AI-powered construction project management system developed at SLIIT.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Research Foundation", href: "#research" },
                { label: "Methodology",         href: "#methodology" },
                { label: "Project Timeline",    href: "#timeline" },
                { label: "Documentation",       href: "#documents" },
                { label: "Our Team",            href: "#team" },
                { label: "Contact",             href: "#contact" },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-yellow-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Institution</p>
            <div className="space-y-2 text-sm">
              <p className="text-zinc-300 font-medium">Sri Lanka Institute of Information Technology</p>
              <p>Faculty of Computing</p>
              <p>Malabe, Sri Lanka</p>
              <p className="mt-4 text-yellow-400/80 font-mono">Batch 2025/2026</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <p>© 2026 Buildora Research Project · Group 25-26J-168 · SLIIT</p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}