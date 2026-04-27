import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Star, Mail, GitBranch, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const team = [
  { id: "IT22150998", name: "Vithana D.T.M.",      role: "Material Recommendation & Wood Quality",  module: "Module 01", color: "text-emerald-500", bg: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { id: "IT22172532", name: "Madhushan S.M.P.B.",  role: "Building Plan Analysis & 3D",             module: "Module 03", color: "text-purple-500",  bg: "bg-purple-500",  badge: "bg-purple-50 text-purple-600 border-purple-200"   },
  { id: "IT22574718", name: "Jayashani V.P.N.",    role: "Cost, Time & Progress Tracking",          module: "Module 02", color: "text-blue-500",    bg: "bg-blue-500",    badge: "bg-blue-50 text-blue-600 border-blue-200"         },
  { id: "IT22196460", name: "U.U.M. Hewage",       role: "Smart Logistics & System Integration",    module: "Module 04", color: "text-amber-500",   bg: "bg-amber-500",   badge: "bg-amber-50 text-amber-600 border-amber-200"   },
];

const supervisors = [
  { name: "Ravi Supunya",            title: "Supervisor",    dept: "Senior Lecturer",             inst: "SLIIT" },
  { name: "Chathurya Kumarapperuma", title: "Co-Supervisor", dept: "Assistant Lecturer",          inst: "SLIIT" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-24">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6">
            <Users className="w-4 h-4" />
            The Team
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Research <span className="text-blue-600">Architects</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-xl text-slate-500 leading-relaxed text-balance">
            A dedicated group of final-year undergraduates from the SLIIT Faculty of Computing, committed to advancing construction technology.
          </motion.p>
        </motion.div>

        {/* Team cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 w-full">
          {team.map((member, i) => (
            <motion.div key={member.id} variants={fadeUp} custom={i} whileHover={{ y: -6 }}>
              <Card className="relative text-center border-slate-200 hover:shadow-lg transition-all duration-300 bg-white rounded-2xl p-8 pt-10 h-full overflow-hidden">
                {/* Top colored line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${member.bg}`} />
                
                <CardContent className="p-0 flex flex-col items-center">
                  <Avatar className="w-16 h-16 mb-4">
                    <AvatarFallback className={`text-xl font-bold ${member.bg} text-white`}>
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <Badge variant="outline" className={`text-[10px] font-bold px-3 py-0.5 rounded-full mb-5 ${member.badge}`}>
                    {member.module}
                  </Badge>

                  <div className="mb-4">
                    <p className="font-bold text-slate-900 text-base mb-1">{member.name}</p>
                    <p className="font-mono text-[10px] text-slate-400">{member.id}</p>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mx-auto">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Supervisors Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="pt-8">
          <div className="text-center mb-10">
            <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Academic Supervisors
            </motion.h3>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {supervisors.map((s, i) => (
              <motion.div key={s.name} variants={fadeUp} custom={i + 1} whileHover={{ y: -4 }}>
                <Card className="border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-white rounded-2xl p-6">
                  <CardContent className="p-0 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <Badge variant="secondary" className="text-[10px] font-medium bg-slate-100 text-slate-600 mb-1.5 px-2">{s.title}</Badge>
                      <p className="font-bold text-slate-900 text-base">{s.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.dept} · {s.inst}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Institute callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-600/20 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-1">SLIIT Faculty of Computing</h4>
                  <p className="text-blue-100 font-medium">Sri Lanka Institute of Information Technology · Malabe · 2026</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}