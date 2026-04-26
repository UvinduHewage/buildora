import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, FolderOpen, Eye } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
  })
};

const documentGroups = [
  {
    title: "TAF Document",
    desc: "Topic Assessment Form for Research Project",
    status: "Available",
    files: [
      { name: "Topic Assessment Form", size: "1.5 MB", previewLink: "https://drive.google.com/file/d/1kjCtVipgWUAb0LhjsmXGX5r7veErBK_I/view?usp=sharing", downloadLink: "https://drive.google.com/file/d/1kjCtVipgWUAb0LhjsmXGX5r7veErBK_I/view?usp=sharing" }
    ]
  },
  {
    title: "Proposal Documents",
    desc: "Research proposal documents for all team members",
    status: "Available",
    files: [
      { name: "Proposal Document - Vithana D.T.M.", size: "2.1 MB", previewLink: "#", downloadLink: "#" },
      { name: "Proposal Document - Madhushan S.M.P.B.", size: "2.3 MB", previewLink: "#", downloadLink: "#" },
      { name: "Proposal Document - Jayashani V.P.N.", size: "2.5 MB", previewLink: "#", downloadLink: "#" },
      { name: "Proposal Document - U.U.M. Hewage", size: "1.8 MB", previewLink: "https://drive.google.com/file/d/1CMWNfyJLeVOTAIOpo7F2KNI_05972AI6/view?usp=sharing", downloadLink: "https://drive.google.com/file/d/1CMWNfyJLeVOTAIOpo7F2KNI_05972AI6/view?usp=sharing" },
    ]
  },
  {
    title: "Final Reports",
    desc: "Individual final reports for each team member",
    status: "Available",
    files: [
      { name: "Final Report - Vithana D.T.M.", size: "3.5 MB", previewLink: "#", downloadLink: "#" },
      { name: "Final Report - Madhushan S.M.P.B.", size: "4.2 MB", previewLink: "#", downloadLink: "#" },
      { name: "Final Report - Jayashani V.P.N.", size: "4.8 MB", previewLink: "#", downloadLink: "#" },
      { name: "Final Report - U.U.M. Hewage", size: "5.1 MB", previewLink: "#", downloadLink: "#" },
    ]
  },
  {
    title: "Research Paper",
    desc: "Complete research paper with methodology, findings, and conclusions",
    status: "Available",
    files: [
      { name: "Research Paper", size: "7.2 MB", previewLink: "#", downloadLink: "#" }
    ]
  }
];

export default function Documentation() {
  return (
    <section id="documents" className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            <FolderOpen className="w-3.5 h-3.5" />
            Documentation
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900 mb-5">
            Project Documents
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Access all research documents, reports, and supporting materials for this project.
          </motion.p>
        </motion.div>

        {/* Grouped Doc Cards */}
        <div className="space-y-8 w-full">
          {documentGroups.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <Card className="border-slate-200 shadow-sm overflow-hidden bg-white">
                <CardContent className="p-0">
                  {/* Group Header */}
                  <div className="p-6 border-b border-slate-100 flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
                        <p className="text-sm text-slate-500">{group.desc}</p>
                      </div>
                    </div>
                    <Badge className="bg-slate-900 hover:bg-slate-900 text-white text-[10px] uppercase tracking-wider px-3 py-1">
                      {group.status}
                    </Badge>
                  </div>

                  {/* Files List */}
                  <div className="p-6 bg-slate-50/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {group.files.map((file, fileIdx) => (
                        <div 
                          key={fileIdx} 
                          className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors group/file shadow-sm"
                        >
                          <div className="min-w-0 flex-1 mr-4">
                            <p className="font-semibold text-slate-800 text-sm truncate group-hover/file:text-blue-600 transition-colors">{file.name}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{file.size}</p>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <Button size="sm" asChild className="bg-slate-900 hover:bg-slate-800 text-white h-9 px-4 rounded-lg shadow-sm transition-all active:scale-95">
                              <a href={file.previewLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Eye className="w-3.5 h-3.5" />
                                <span className="font-bold text-xs">View</span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}