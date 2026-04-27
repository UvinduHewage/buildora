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
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    title: "Location",
    name: "SLIIT — Faculty of Computing",
    sub: "Malabe, Sri Lanka",
    link: "https://maps.google.com",
    linkLabel: "View on Maps",
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

        {/* Contact cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-8 mb-24 w-full">
          {contacts.map((c, i) => (
            <motion.div key={c.title} variants={fadeUp} custom={i} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 group h-full bg-white rounded-[2rem]">
                <CardContent className="p-10 flex flex-col gap-6 h-full">
                  <div className={`w-16 h-16 rounded-[1.25rem] border flex items-center justify-center ${c.bg} group-hover:scale-110 transition-transform duration-500`}>
                    <c.icon className={`w-8 h-8 ${c.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-black">{c.title}</p>
                    <p className="font-extrabold text-slate-900 text-xl tracking-tight">{c.name}</p>
                    <p className="text-sm font-medium text-slate-500 mt-1">{c.sub}</p>
                  </div>
                  <a href={c.link} target="_blank" rel="noopener noreferrer"
                     className={`text-sm font-bold ${c.color} hover:underline underline-offset-8 transition-all flex items-center gap-2 group/link`}>
                    {c.linkLabel}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}>
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 p-1 md:p-1.5 shadow-2xl shadow-blue-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-600/20 pointer-events-none" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-[2.8rem] p-12 md:p-20 text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to build the future?</h3>
                <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join us in revolutionizing the construction industry with intelligent data-driven solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-12 py-8 rounded-2xl text-lg shadow-xl shadow-blue-600/20 w-full sm:w-auto">
                      <Mail className="w-6 h-6 mr-3" />
                      Email Team
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-white hover:text-slate-900 px-12 py-8 rounded-2xl text-lg transition-all w-full sm:w-auto bg-transparent">
                      <GitBranch className="w-6 h-6 mr-3" />
                      GitHub Repo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}