import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hammer, Calculator, Eye, Truck, Zap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const modules = [
  {
    icon: Hammer,
    color: "text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-300",
    glow: "hover:shadow-emerald-100",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    badge: "Module 01",
    title: "Material & Wood Quality",
    desc: "Computer vision-based material recommendation and wood defect detection for budget-conscious planning."
  },
  {
    icon: Calculator,
    color: "text-blue-600",
    border: "border-blue-100 hover:border-blue-300",
    glow: "hover:shadow-blue-100",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    badge: "Module 02",
    title: "Cost & Time Estimation",
    desc: "ML-powered prediction of project cost breakdowns, phase durations and real-time progress tracking."
  },
  {
    icon: Eye,
    color: "text-purple-600",
    border: "border-purple-100 hover:border-purple-300",
    glow: "hover:shadow-purple-100",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    badge: "Module 03",
    title: "Building Plan Analysis",
    desc: "Automated 2D plan interpretation, BOQ generation with real-time editing, and 3D visualization."
  },
  {
    icon: Truck,
    color: "text-yellow-600",
    border: "border-yellow-100 hover:border-yellow-300",
    glow: "hover:shadow-yellow-100",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    badge: "Module 04",
    title: "Smart Logistics Optimization",
    desc: "BOQ-driven prediction of vehicles, labour, machinery needs and waste margin recommendations."
  },
];

export default function FocusCards() {
  return (
    <section className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            The Problem We're Solving
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Sri Lanka's small and medium-scale construction industry is held back by fragmented, manual processes.
            Buildora brings four AI-powered modules into one unified mobile platform.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={`${m.bg} ${m.border} transition-all duration-300 group shadow-sm ${m.glow} h-full`}>
                <CardContent className="p-7 flex flex-col gap-5 h-full">
                  <div className={`w-12 h-12 ${m.iconBg} rounded-full flex items-center justify-center`}>
                    <m.icon className={`w-6 h-6 ${m.color}`} />
                  </div>
                  <Badge variant="outline" className={`w-fit text-xs ${m.color} border-current/30 bg-white/50`}>{m.badge}</Badge>
                  <div className="flex-1">
                    <h3 className="text-slate-900 font-bold text-lg mb-3">{m.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}