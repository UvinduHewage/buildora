import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, GitBranch, MessageSquare, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const contacts = [
  {
    icon: Mail,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
    title: "Project Supervisor",
    name: "Ravi Supunya",
    sub: "Senior Lecturer, SLIIT",
    link: "mailto:ravi.s@sliit.lk",
    linkLabel: "ravi.s@sliit.lk",
  },
  {
    icon: Mail,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
    title: "Co-Supervisor",
    name: "Chathurya Kumarapperuma",
    sub: "Assistant Lecturer, SLIIT",
    link: "mailto:chathurya.k@sliit.lk",
    linkLabel: "chathurya.k@sliit.lk",
  },
  {
    icon: Mail,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    title: "Team Member",
    name: "Vithana D.T.M.",
    sub: "Module 01 · Material Recommendation",
    link: "mailto:dtm.vithana@gmail.com",
    linkLabel: "dtm.vithana@gmail.com",
  },
  {
    icon: Mail,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    title: "Team Member",
    name: "Madhushan S.M.P.B.",
    sub: "Module 03 · Building Plan Analysis",
    link: "mailto:bawanthamadushan18@gmail.com",
    linkLabel: "bawanthamadushan18@gmail.com",
  },
  {
    icon: Mail,
    color: "text-cyan-600",
    bg: "bg-cyan-50 border-cyan-100",
    title: "Team Member",
    name: "Jayashani V.P.N.",
    sub: "Module 02 · Cost & Progress Tracking",
    link: "mailto:nuwanthivpathirana@gmail.com",
    linkLabel: "nuwanthivpathirana@gmail.com",
  },
  {
    icon: Mail,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
    title: "Team Member",
    name: "U.U.M. Hewage",
    sub: "Module 04 · Smart Logistics",
    link: "mailto:hewageuvindu@gmail.com",
    linkLabel: "hewageuvindu@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-24">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6">
            <MessageSquare className="w-4 h-4" />
            Connect
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-xl text-slate-500 leading-relaxed text-balance">
            Have questions about our research or interested in a collaboration? Our team is always ready to discuss the future of construction AI.
          </motion.p>
        </motion.div>

        {/* Contact cards - Clean Grid Layout */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="mb-24 w-full">
          {/* Supervisors Section */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-slate-700 mb-6 px-2">Supervisors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.slice(0, 2).map((c, i) => (
                <motion.div key={c.title} variants={fadeUp} custom={i} whileHover={{ y: -8 }}>
                  <Card className="relative border-2 border-slate-200 hover:shadow-xl transition-all duration-500 group h-full bg-white rounded-2xl overflow-hidden">
                    <div className={`h-1.5 w-full ${i === 0 ? 'bg-blue-500' : 'bg-indigo-500'}`} />
                    <CardContent className="p-8 md:p-10 flex flex-col gap-8">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${c.bg} group-hover:scale-110 transition-transform duration-500`}>
                        <c.icon className={`w-8 h-8 ${c.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">{c.title}</p>
                        <p className="font-bold text-slate-900 text-2xl mb-1">{c.name}</p>
                        <p className="text-sm text-slate-600">{c.sub}</p>
                      </div>
                      <a href={c.link} target="_blank" rel="noopener noreferrer"
                         className={`text-sm font-bold ${c.color} hover:underline flex items-center gap-2 group/link`}>
                        {c.linkLabel}
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-6 px-2">Team Members</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contacts.slice(2).map((c, i) => (
                <motion.div key={c.title} variants={fadeUp} custom={i + 2} whileHover={{ y: -4 }}>
                  <Card className="relative border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-500 group h-full bg-white rounded-xl overflow-hidden">
                    <div className={`h-1 w-full ${c.bg}`} />
                    <CardContent className="p-5 md:p-6 flex flex-col gap-5">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${c.bg} group-hover:scale-110 transition-transform duration-500`}>
                        <c.icon className={`w-6 h-6 ${c.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1.5">{c.title}</p>
                        <p className="font-bold text-slate-900 text-base">{c.name}</p>
                        <p className="text-xs text-slate-600 mt-1.5 leading-snug">{c.sub}</p>
                      </div>
                      <a href={c.link} target="_blank" rel="noopener noreferrer"
                         className={`text-xs font-bold ${c.color} hover:underline flex items-center gap-1 group/link`}>
                        {c.linkLabel.split('@')[0]}@
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}>
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl shadow-slate-900/20 border border-slate-800 p-12 md:p-24 text-center">
            {/* Elegant Background Glows */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tl from-blue-600/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight text-balance">
                Ready to Build the Future?
              </h3>
              <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
                Join us in revolutionizing the construction industry with intelligent, data-driven solutions designed for tomorrow.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}