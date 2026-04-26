import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const presentations = [
  {
    title: "Proposal Presentation",
    date: "March 15, 2025",
    slides: "25 slides",
    duration: "20 minutes",
    desc: "Initial project proposal and research methodology overview",
    status: "Completed",
    link: "#"
  },
  {
    title: "Progress Presentation 1",
    date: "April 20, 2025",
    slides: "30 slides",
    duration: "25 minutes",
    desc: "Literature review findings and preliminary data collection",
    status: "Completed",
    link: "https://drive.google.com/file/d/1tH3kXSFZHQblJ2B5u3BDqZkevEWv97YN/view?usp=sharing"
  },
  {
    title: "Progress Presentation 2",
    date: "May 25, 2025",
    slides: "35 slides",
    duration: "30 minutes",
    desc: "Data analysis results and initial findings discussion",
    status: "Completed",
    link: "https://drive.google.com/file/d/1wlfZxJIx-RGqJiSEaMr_fFL_NBzLGPKM/view?usp=sharing"
  },
  {
    title: "Final Presentation",
    date: "June 30, 2025",
    slides: "40 slides",
    duration: "35 minutes",
    desc: "Complete research findings, conclusions, and recommendations",
    status: "Completed",
    link: "#"
  },
];

export default function Presentations() {
  return (
    <section id="presentations" className="py-24 w-full bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            <Monitor className="w-3.5 h-3.5" />
            Presentations
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
            Research Presentations
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            View slides and materials from past and upcoming research presentations.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-8 w-full">
          {presentations.map((pres, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <Card className="group border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden bg-white shadow-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge className="bg-slate-900 text-white text-[10px] uppercase tracking-wider px-3 py-1">
                      {pres.status}
                    </Badge>
                  </div>

                  <div className="flex-1 mb-8">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2 group-hover:text-blue-600 transition-colors">{pres.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                      <span>{pres.date}</span>
                      <span>•</span>
                      <span>{pres.slides}</span>
                      <span>•</span>
                      <span>{pres.duration}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{pres.desc}</p>
                  </div>

                  <Button size="lg" asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl transition-all active:scale-[0.98]">
                    <a href={pres.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Monitor className="w-4 h-4" />
                      View Slides
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}