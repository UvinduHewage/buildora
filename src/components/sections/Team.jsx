import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  { id: "IT22150998", name: "Vithana D.T.M.",      role: "Material Recommendation & Wood Quality",  module: "Module 01", color: "text-emerald-500", bg: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-600 border-emerald-200", img: "/team/vithana.jpg" },
  { id: "IT22172532", name: "Madhushan S.M.P.B.",  role: "Building Plan Analysis & 3D",             module: "Module 03", color: "text-purple-500",  bg: "bg-purple-500",  badge: "bg-purple-50 text-purple-600 border-purple-200", img: "https://drive.google.com/file/d/17Sx5P317HH0pSpD4Fz3zEyP9-lw_EeRo/view?usp=sharing" },
  { id: "IT22574718", name: "Jayashani V.P.N.",    role: "Cost, Time & Progress Tracking",          module: "Module 02", color: "text-blue-500",    bg: "bg-blue-500",    badge: "bg-blue-50 text-blue-600 border-blue-200", img: "/team/jayashani.jpg"         },
  { id: "IT22196460", name: "U.U.M. Hewage",       role: "Smart Logistics & System Integration",    module: "Module 04", color: "text-amber-500",   bg: "bg-amber-500",   badge: "bg-amber-50 text-amber-600 border-amber-200", img: "/team/hewage.jpg"   },
];

const supervisors = [
  { name: "Ravi Supunya",            title: "Supervisor",    dept: "Senior Lecturer",             inst: "SLIIT", img: "/team/ravi.jpg", badge: "bg-blue-100 text-blue-700" },
  { name: "Chathurya Kumarapperuma", title: "Co-Supervisor", dept: "Assistant Lecturer",          inst: "SLIIT", img: "/team/chathurya.jpg", badge: "bg-indigo-100 text-indigo-700" },
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
                  <div className="relative mb-6 mt-4">
                    {/* Creative backdrop ring effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.bg.replace('bg-', 'from-')}/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110`} />
                    <Avatar className={`w-40 h-40 lg:w-48 lg:h-48 ring-4 ring-offset-[6px] ring-offset-white ${member.color.replace('text-', 'ring-')}/40 group-hover:${member.color.replace('text-', 'ring-')} transition-all duration-500 shadow-lg relative z-10`}>
                      {member.img && <AvatarImage src={member.img} alt={member.name} className="object-cover" />}
                      <AvatarFallback className={`text-4xl font-bold ${member.bg} text-white`}>
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <Badge variant="outline" className={`text-sm font-extrabold px-4 py-1.5 rounded-full mb-6 ${member.badge}`}>
                    {member.module}
                  </Badge>

                  <div className="mb-4 px-2">
                    <p className="font-extrabold text-slate-900 text-lg lg:text-xl mb-1 leading-tight text-balance">{member.name}</p>
                    <p className="font-mono text-xs text-slate-400 font-medium tracking-wider">{member.id}</p>
                  </div>

                  <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[220px] mx-auto text-balance px-2">{member.role}</p>
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

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {supervisors.map((s, i) => (
              <motion.div key={s.name} variants={fadeUp} custom={i + 1} whileHover={{ y: -4 }}>
                <Card className="border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white rounded-[1.5rem] p-6 lg:p-8 group h-full">
                  <CardContent className="p-0 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8 h-full">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-[2rem] bg-blue-50 flex items-center justify-center flex-shrink-0 overflow-hidden ring-4 ring-offset-[6px] ring-blue-100 group-hover:ring-blue-400 transition-all duration-500 relative z-10 shadow-lg">
                        {s.img ? (
                          <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                        ) : (
                          <GraduationCap className="w-12 h-12 text-blue-600" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 mt-2 sm:mt-4 min-w-0 pr-4">
                      <Badge className={`text-xs font-bold mb-3 px-3 py-1 border-none shadow-none ${s.badge}`}>{s.title}</Badge>
                      <p className="font-extrabold text-slate-900 text-xl lg:text-2xl mb-1.5 leading-tight break-words">{s.name}</p>
                      <p className="text-sm font-medium text-slate-500">{s.dept} · {s.inst}</p>
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