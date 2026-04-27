import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, BookOpen, FolderOpen, Eye, ScrollText } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
  })
};

// ── Team members in the order they appear in the screenshots ──────────────
const members = [
  { label: "Vithana D.T.M.",      short: "Vithana D T M" },
  { label: "Madhushan S.M.P.B.",  short: "Madhushan S M P B" },
  { label: "Jayashani V.P.N.",    short: "Jayashani V P N" },
  { label: "U.U.M. Hewage",       short: "Hewage U U M" },
];

// ── Document categories ───────────────────────────────────────────────────
const categories = [
  {
    icon: ScrollText,
    color: "text-orange-600",
    bg: "bg-orange-50",
    title: "TAF Document",
    subtitle: "Topic Assessment Form for Research Project",
    files: [
      { name: "Topic Assessment Form", size: "1.5 MB", preview: "https://drive.google.com/file/d/1kjCtVipgWUAb0LhjsmXGX5r7veErBK_I/preview", download: "https://drive.google.com/file/d/1kjCtVipgWUAb0LhjsmXGX5r7veErBK_I/view?usp=sharing" },
    ],
  },
  {
    icon: BookOpen,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Proposal Documents",
    subtitle: "Research proposal documents for all team members",
    files: [
      { name: "Proposal Document — Vithana D T M", size: "2.2 MB", preview: "https://drive.google.com/file/d/1XaYMnlC894gUne_l1w_t7SH_2hS_bJiZ/preview", download: "https://drive.google.com/file/d/1XaYMnlC894gUne_l1w_t7SH_2hS_bJiZ/view?usp=sharing" },
      { name: "Proposal Document — Madhushan S M P B", size: "2.2 MB", preview: "#", download: "#" },
      { name: "Proposal Document — Jayashani V P N", size: "2.2 MB", preview: "https://drive.google.com/file/d/1gRiLsdJfWUXNY_UoPm0P0g5K5kYzzTNL/preview", download: "https://drive.google.com/file/d/1gRiLsdJfWUXNY_UoPm0P0g5K5kYzzTNL/view?usp=sharing" },
      { name: "Proposal Document — Hewage U U M", size: "2.2 MB", preview: "https://drive.google.com/file/d/1CMWNfyJLeVOTAIOpo7F2KNI_05972AI6/preview", download: "https://drive.google.com/file/d/1CMWNfyJLeVOTAIOpo7F2KNI_05972AI6/view?usp=sharing" },
    ],
  },
  {
    icon: FileText,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Final Reports",
    subtitle: "Individual final reports for each team member",
    files: members.map(m => ({
      name: `Final Report — ${m.short}`,
      size: "4.2 MB",
      preview: "#",
      download: "#",
    })),
  },
  {
    icon: FolderOpen,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Research Paper",
    subtitle: "Complete research paper with methodology, findings, and conclusions",
    files: [
      { name: "Research Paper", size: "7.2 MB", preview: "https://drive.google.com/file/d/1GMKIrFX8sVdNaGEITJyzo7FoyiKIq1D4/preview", download: "https://drive.google.com/file/d/1GMKIrFX8sVdNaGEITJyzo7FoyiKIq1D4/view?usp=sharing" },
    ],
  },
];

export default function Documentation() {
  return (
    <section id="documents" className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 w-full">

        {/* ── Header ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            <FolderOpen className="w-3.5 h-3.5" />
            Documentation
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Project <span className="text-blue-600">Documents</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-500 leading-relaxed text-balance">
            Access all research documents, reports, and supporting materials for this project.
          </motion.p>
        </motion.div>

        {/* ── Category cards ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} className="space-y-6">
          {categories.map((cat, ci) => (
            <motion.div key={cat.title} variants={fadeUp} custom={ci}>
              <Card className="border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">

                  {/* Category header row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.bg} flex-shrink-0`}>
                        <cat.icon className={`w-5 h-5 ${cat.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">{cat.title}</h3>
                        <p className={`text-xs font-semibold mt-0.5 ${cat.color}`}>{cat.subtitle}</p>
                      </div>
                    </div>
                    <Badge className="bg-slate-900 hover:bg-slate-800 text-white text-xs px-3 py-1 rounded-full shrink-0">
                      Available
                    </Badge>
                  </div>

                  {/* File rows — two-column grid when ≥2 items */}
                  <div className={`grid gap-3 ${cat.files.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {cat.files.map((file, fi) => (
                      <div
                        key={fi}
                        className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 hover:border-blue-200 hover:bg-blue-50/40 transition-colors duration-200"
                      >
                        <div className="min-w-0">
                          <p className={`text-sm font-semibold truncate ${cat.color}`}>{file.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{file.size}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {/* Preview button */}
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 px-3 text-xs border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all gap-1.5"
                            asChild
                          >
                            <a href={file.preview} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-3.5 h-3.5" />
                              Preview
                            </a>
                          </Button>
                          {/* View / Download button */}
                          <Button
                            size="sm"
                            className="h-8 px-3 text-xs bg-slate-900 hover:bg-slate-700 text-white transition-all gap-1.5"
                            asChild
                          >
                            <a href={file.download} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-3.5 h-3.5" />
                              View
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Download All banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <Card className="border-blue-200 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg shadow-blue-600/20 overflow-hidden">
            <CardContent className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 flex-shrink-0">
                  <FolderOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-tight">Full Document Package</p>
                  <p className="text-sm text-blue-100 mt-0.5">All documents · Group 25-26J-168 · Buildora Research</p>
                </div>
              </div>
              <Button
                className="bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 rounded-full shrink-0 shadow-md gap-2 transition-all"
                asChild
              >
                <a href="#" download>
                  <Download className="w-4 h-4" />
                  Download All
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}