import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Zap, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-white pt-20 pb-32 overflow-hidden flex items-center">
      
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-blue-600" />
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Research & Innovation
                </span>
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
              >
                Intelligent Construction <br />
                <span className="text-blue-600">Management Platform</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-10"
              >
                Buildora is an AI-powered ecosystem designed to transform project 
                lifecycles in Sri Lanka. From automated BOQ generation to real-time 
                quality assessment, we eliminate manual errors and optimize efficiency.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-7 rounded-xl shadow-lg shadow-blue-600/20 group transition-all"
                  onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Research
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-semibold px-8 py-7 rounded-xl transition-all"
                >
                  <a href="#documents" className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    View Full Documents
                  </a>
                </Button>
              </motion.div>
              
              {/* Trust Badge/Simple Link */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-sm text-slate-400 flex items-center gap-2"
              >
              </motion.p>
            </motion.div>
          </div>
          
          {/* Right Image Column */}
          <div className="flex-1 w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Background Decorative Shape */}
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] -rotate-3 scale-105 pointer-events-none" />
              
              <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-slate-100 overflow-hidden group">
                <img 
                  src="/hero-construction.png" 
                  alt="Buildora Platform Visualization" 
                  className="w-full h-auto rounded-[1.5rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating UI Element for "Advanced" feel */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-[180px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">AI Analysis Live</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["30%", "85%", "60%"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                    <div className="h-1.5 w-3/4 bg-slate-100 rounded-full" />
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Icons */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 animate-bounce-slow">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Stats Row - Clean version */}
      <div className="absolute bottom-0 left-0 w-full bg-slate-50/80 border-t border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {[
            { value: "4", label: "Core Modules" },
            { value: "95%+", label: "Model Accuracy" },
            { value: "135+", label: "Research Citations" },
            { value: "Elite", label: "Group Status" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl font-black text-slate-900">{stat.value}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}