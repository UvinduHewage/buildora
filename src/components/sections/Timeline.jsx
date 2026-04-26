import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const milestones = [
  {
    date: "16th May 2025",
    title: "Form Project Group",
    desc: "Initial step where students form their research groups and define core team roles.",
    status: "Completed",
  },
  {
    date: "26th May 2025",
    title: "Research Topic & Supervisor",
    desc: "Identification of a research gap and securing a supervisor for project guidance.",
    status: "Completed",
  },
  {
    date: "27th June 2025",
    title: "TAF Submission",
    desc: "Deadline for submitting the Topic Assessment Form (TAF) for approval.",
    status: "Completed",
  },
  {
    date: "30th June – 16th July 2025",
    title: "TAF Assessment",
    desc: "Review and assessment of the TAF by the supervisor and co-supervisor.",
    status: "Completed",
  },
  {
    date: "23rd July 2025",
    title: "Charter Submission",
    desc: "Submission of the project charter outlining scope, objectives, and timeline.",
    status: "Completed",
  },
  {
    date: "15th August 2025",
    title: "Proposal Report (Draft)",
    desc: "Submission of the initial draft of the research proposal report.",
    status: "Completed",
  },
  {
    date: "08th – 12th September 2025",
    title: "Proposal Presentation",
    desc: "Formal presentation of the research proposal to the evaluation panel.",
    status: "Completed",
  },
  {
    date: "05th – 09th January 2026",
    title: "Progress Presentation I",
    desc: "First major progress review to assess development and initial project findings.",
    status: "Completed",
  },
  {
    date: "09th – 12th March 2026",
    title: "Progress Presentation II",
    desc: "Second progress review focusing on implementation details and preliminary results.",
    status: "Completed",
  },
  {
    date: "26th April 2026",
    title: "Draft Thesis Submission",
    desc: "Submission of the complete draft thesis document for final supervisor review.",
    status: "Completed",
  },
  {
    date: "26th April 2026",
    title: "Website Submission",
    desc: "Project website submission showcasing all modules, findings, and documentation.",
    status: "Completed",
  },
  {
    date: "27th Apr – 06th May 2026",
    title: "Final Presentation & Viva",
    desc: "Comprehensive project defence and viva presentation to the evaluation panel.",
    status: "Upcoming",
  },
  {
    date: "27th Apr – 06th May 2026",
    title: "Evaluation & Logbook",
    desc: "Panel evaluation of the website and submission of the project logbook.",
    status: "Upcoming",
  },
  {
    date: "30th April 2026",
    title: "Final Checklist Submission",
    desc: "Submission of the final checklist confirming all project deliverables are in order.",
    status: "Upcoming",
  },
  {
    date: "08th May 2026",
    title: "Research Paper Submission",
    desc: "Final submission of the research paper detailing methodology and results.",
    status: "Upcoming",
  },
  {
    date: "13th May 2026",
    title: "Final Thesis Submission",
    desc: "Submission of the final, bound research thesis incorporating all feedback.",
    status: "Upcoming",
  },
  {
    date: "15th June 2026",
    title: "Publication Evidence",
    desc: "Evidence submission of paper acceptance or publication in a journal/conference.",
    status: "Upcoming",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider mb-5">
            <Clock className="w-3.5 h-3.5" />
            2025 July Batch — RP Project
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Research Milestones
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Track the progress of our research project through key assessment points and deliverables.
          </p>
        </motion.div>

        {/* Vertical alternating timeline */}
        <div className="relative mt-12">

          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {milestones.map((item, i) => {
              const isRight = i % 2 === 0; // even → card on RIGHT, date on LEFT
              const isCompleted = item.status === "Completed";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* ── LEFT SIDE ── */}
                  <div className={`w-full md:w-[calc(50%-2rem)] flex md:justify-end md:pr-8 mb-4 md:mb-0 ${isRight ? 'hidden md:flex' : 'flex'}`}>
                    {isRight ? (
                      /* date label (Desktop only) */
                      <div className="text-right">
                        <p className="text-blue-600 font-bold text-sm">{item.date}</p>
                        <Badge className={`mt-1 ${isCompleted ? 'bg-slate-900 hover:bg-slate-800' : 'bg-amber-500 hover:bg-amber-600'} text-white text-xs`}>
                          {item.status}
                        </Badge>
                      </div>
                    ) : (
                      /* card (Both) */
                      <Card className="w-full shadow-sm border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                          {/* Mobile date */}
                          <div className="flex items-center justify-between mt-4 md:hidden">
                            <p className="text-blue-600 font-semibold text-xs">{item.date}</p>
                            <Badge className={`${isCompleted ? 'bg-slate-900' : 'bg-amber-500'} text-white text-xs`}>
                              {item.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* ── CENTER NODE ── */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                    <div className={`w-5 h-5 rounded-full border-4 shadow-sm ${isCompleted ? 'bg-white border-emerald-500' : 'bg-white border-amber-400'}`} />
                  </div>

                  {/* ── RIGHT SIDE ── */}
                  <div className={`w-full md:w-[calc(50%-2rem)] flex md:justify-start md:pl-8 ${isRight ? 'flex' : 'hidden md:flex'}`}>
                    {isRight ? (
                      /* card (Both) */
                      <Card className="w-full shadow-sm border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                          {/* Mobile date */}
                          <div className="flex items-center justify-between mt-4 md:hidden">
                            <p className="text-blue-600 font-semibold text-xs">{item.date}</p>
                            <Badge className={`${isCompleted ? 'bg-slate-900' : 'bg-amber-500'} text-white text-xs`}>
                              {item.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      /* date label (Desktop only) */
                      <div className="text-left">
                        <p className="text-blue-600 font-bold text-sm">{item.date}</p>
                        <Badge className={`mt-1 ${isCompleted ? 'bg-slate-900 hover:bg-slate-800' : 'bg-amber-500 hover:bg-amber-600'} text-white text-xs`}>
                          {item.status}
                        </Badge>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center space-y-3"
        >
          <p className="text-sm text-slate-500">
            N.b. ISE and IM Students have their Final Presentation and Viva/Website Evaluation on the 27th and 28th of April 2026.
          </p>
          <p className="text-base italic font-semibold text-slate-700">
            "Deadlines don't chase professionals — professionals beat deadlines."
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-4 h-4 rounded-full border-4 border-emerald-500 bg-white" />
              Completed
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-4 h-4 rounded-full border-4 border-amber-400 bg-white" />
              Upcoming
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}