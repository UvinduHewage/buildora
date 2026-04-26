import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, GitBranch, MessageSquare } from 'lucide-react';

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
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    title: "Co-Supervisor",
    name: "Chathurya Kumarapperuma",
    sub: "Assistant Lecturer, SLIIT",
    link: "mailto:chathurya.k@sliit.lk",
    linkLabel: "chathurya.k@sliit.lk",
  },
  {
    icon: MapPin,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    title: "Location",
    name: "SLIIT — Faculty of Computing",
    sub: "Malabe, Sri Lanka",
    link: "https://maps.google.com",
    linkLabel: "View on Maps",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            About Us
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Interested in Buildora? Reach out for collaboration, demo requests, or research inquiries.
          </motion.p>
        </motion.div>

        {/* Contact cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-6 mb-12 w-full">
          {contacts.map((c, i) => (
            <motion.div key={c.title} variants={fadeUp} custom={i} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="border-slate-200 hover:shadow-lg transition-all duration-300 group h-full bg-white">
                <CardContent className="p-8 flex flex-col gap-5 h-full">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${c.bg}`}>
                    <c.icon className={`w-7 h-7 ${c.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-semibold">{c.title}</p>
                    <p className="font-bold text-slate-900 text-lg">{c.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{c.sub}</p>
                  </div>
                  <a href={c.link} target="_blank" rel="noopener noreferrer"
                     className={`text-sm font-semibold ${c.color} hover:underline underline-offset-4 transition-colors`}>
                    {c.linkLabel}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0}>
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden shadow-sm">
            <CardContent className="p-10 md:p-14 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to explore Buildora?</h3>
              <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Whether you're a reviewer, researcher, contractor, or just curious — we'd love to connect and share more about what we've built.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 rounded-full text-base shadow-sm">
                    <Mail className="w-5 h-5 mr-2" />
                    Email the Team
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 px-12 rounded-full text-base transition-all bg-white">
                    <GitBranch className="w-5 h-5 mr-2" />
                    View on GitHub
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}