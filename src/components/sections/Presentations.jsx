import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Layers, Monitor, Trophy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const presentations = [
  {
    icon: Layers,
    color: "text-blue-600",
    bg: "bg-blue-100",
    borderColor: "bg-blue-500",
    badge: "PP1",
    title: "Progress Presentation 1",
    slides: "28 Slides",
    date: "Dec 2025",
    desc: "Initial research findings, dataset preparation overview, preliminary model architecture, and literature review summary.",
    link: "#"
  },
  {
    icon: Monitor,
    color: "text-purple-600",
    bg: "bg-purple-100",
    borderColor: "bg-purple-500",
    badge: "PP2",
    title: "Progress Presentation 2",
    slides: "35 Slides",
    date: "Mar 2026",
    desc: "Module integration status, preliminary accuracy results, UI/UX prototype walkthrough, and system performance benchmarks.",
    link: "#"
  },
  {
    icon: Trophy,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    borderColor: "bg-yellow-500",
    badge: "Final",
    title: "Final Project Defence",
    slides: "42 Slides",
    date: "Apr 2026",
    desc: "Complete system demonstration, validated ML results (R²=0.9531), research conclusions, and future work recommendations.",
    link: "#"
  },
];

export default function Presentations() {
  return (
    <section id="presentations" className="py-24 w-full bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-purple-600 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            <Monitor className="w-3.5 h-3.5" />
            Presentations
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Research Presentations
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Three presentation milestones capturing the full journey from proposal through to final defence.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-8 w-full">
          {presentations.map((pres, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 280 }}>
              <Card className="group border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden bg-white">
                {/* Top accent line */}
                <div className={`h-1.5 w-full ${pres.borderColor}`} />
                <CardContent className="p-8 flex flex-col gap-5 flex-1">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${pres.bg}`}>
                      <pres.icon className={`w-7 h-7 ${pres.color}`} />
                    </div>
                    <Badge variant="outline" className={`font-bold ${pres.color} bg-slate-50 border-slate-200`}>{pres.badge}</Badge>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-widest font-semibold">{pres.date}</p>
                    <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-blue-600 transition-colors">{pres.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{pres.desc}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className={`text-sm font-bold ${pres.color}`}>{pres.slides}</span>
                    <Button variant="outline" size="sm" asChild className="border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all">
                      <a href={pres.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Slides
                      </a>
                    </Button>
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