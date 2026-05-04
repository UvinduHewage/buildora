import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Download, Clock, Layers } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const presentations = [
  {
    title: "Proposal Presentation",
    date: "March 15, 2025",
    desc: "Initial project proposal and research methodology overview.",
    status: "Completed",
    link: "https://drive.google.com/file/d/1V-wwOA5NpKMHNt_6LbPpIbvLmugWKwLm/view?usp=sharing",
  },
  {
    title: "Progress Presentation 1",
    date: "April 20, 2025",
    desc: "Literature review findings and preliminary data collection.",
    status: "Completed",
    link: "https://drive.google.com/file/d/1tH3kXSFZHQblJ2B5u3BDqZkevEWv97YN/view?usp=sharing",
  },
  {
    title: "Progress Presentation 2",
    date: "May 25, 2025",
    desc: "Data analysis results and initial findings discussion.",
    status: "Completed",
    link: "https://drive.google.com/file/d/1wlfZxJIx-RGqJiSEaMr_fFL_NBzLGPKM/view?usp=sharing",
  },
  {
    title: "Final Presentation",
    date: "June 30, 2025",
    desc: "Complete research findings, conclusions, and recommendations.",
    status: "Completed",
    link: "#",
  },
];

export default function Presentations() {
  return (
    <section id="presentations" className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 w-full">

        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Layers className="w-4 h-4" />
            Presentations
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Research <span className="text-blue-600">Presentations</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate-500 leading-relaxed text-balance"
          >
            View slides and materials from past and upcoming research presentations.
          </motion.p>
        </motion.div>

        {/* ── 2×2 Card grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6 w-full"
        >
          {presentations.map((pres, i) => {
            const isCompleted = pres.status === "Completed";
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                <Card className="group border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">

                    {/* Row 1: icon + status badge */}
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                        <Monitor className="w-5 h-5 text-blue-600" />
                      </div>
                      <Badge
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isCompleted
                            ? "bg-slate-900 hover:bg-slate-800 text-white"
                            : "bg-amber-400 hover:bg-amber-500 text-white"
                        }`}
                      >
                        {pres.status}
                      </Badge>
                    </div>

                    {/* Row 2: title + meta */}
                    <div>
                      <h3 className="font-bold text-blue-600 text-lg mb-1.5 group-hover:text-blue-700 transition-colors">
                        {pres.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <span>{pres.date}</span>
                        <Clock className="w-3 h-3" />
                        <span>{pres.duration}</span>
                      </div>
                    </div>

                    {/* Row 3: description */}
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                      {pres.desc}
                    </p>

                    {/* Row 4: View Slides button */}
                    <Button
                      className="w-full bg-slate-900 hover:bg-slate-700 text-white font-semibold rounded-lg gap-2 transition-all duration-200 mt-auto"
                      asChild
                    >
                      <a href={pres.link} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" />
                        View Slides
                      </a>
                    </Button>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}