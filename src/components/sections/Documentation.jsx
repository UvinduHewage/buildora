import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, FileSpreadsheet, BookOpen, Presentation, FolderOpen, ScrollText } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
  })
};

const docs = [
  { icon: ScrollText,       color: "text-orange-600",  bg: "bg-orange-100",  title: "Technical Assessment Form (TAF)", size: "1.2 MB", type: "PDF",  link: "#" },
  { icon: BookOpen,         color: "text-purple-600",  bg: "bg-purple-100",  title: "Research Proposal",               size: "2.8 MB", type: "PDF",  link: "#" },
  { icon: Presentation,     color: "text-blue-600",    bg: "bg-blue-100",      title: "Progress Presentation 1 (PP1)",   size: "4.5 MB", type: "PPTX", link: "#" },
  { icon: Presentation,     color: "text-cyan-600",    bg: "bg-cyan-100",      title: "Progress Presentation 2 (PP2)",   size: "5.1 MB", type: "PPTX", link: "#" },
  { icon: FileText,         color: "text-emerald-600", bg: "bg-emerald-100", title: "Final Research Report",            size: "8.3 MB", type: "PDF",  link: "#" },
  { icon: FileSpreadsheet,  color: "text-yellow-600",  bg: "bg-yellow-100",  title: "Buildora Research Paper",          size: "3.7 MB", type: "PDF",  link: "#" },
];

export default function Documentation() {
  return (
    <section id="documents" className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            <FolderOpen className="w-3.5 h-3.5" />
            Documentation
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Project Documents
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All research artefacts, proposals, presentations, and reports — ready to download.
          </motion.p>
        </motion.div>

        {/* Doc cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {docs.map((doc, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="group border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 h-full bg-white">
                <CardContent className="p-6 flex flex-col gap-5 h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border border-white ${doc.bg} flex-shrink-0`}>
                      <doc.icon className={`w-6 h-6 ${doc.color}`} />
                    </div>
                    <Badge variant="outline" className={`text-xs font-bold ${doc.color} bg-slate-50 border-slate-200`}>{doc.type}</Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-base leading-snug mb-1 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                    <p className="text-sm text-slate-500">{doc.size}</p>
                  </div>

                  <Button variant="outline" size="sm" asChild className="w-full border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all group/btn">
                    <a href={doc.link} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0} className="mt-12">
          <Card className="border-blue-200 bg-blue-50 shadow-sm">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-blue-900">Full Document Package</p>
                  <p className="text-sm text-blue-800/80">All 6 documents · Group 25-26J-168</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 rounded-full shrink-0 shadow-sm">
                <Download className="w-4 h-4 mr-2" />
                Download All
              </Button>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}