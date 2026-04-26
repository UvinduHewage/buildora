import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const team = [
  { id: "IT22150998", name: "Vithana D.T.M.",      role: "Material Recommendation & Wood Quality",  module: "Module 01", color: "text-emerald-600", bg: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { id: "IT22172532", name: "Madhushan S.M.P.B.",   role: "Building Plan Analysis & 3D",             module: "Module 03", color: "text-purple-600",  bg: "bg-purple-500",  badge: "bg-purple-50 text-purple-700 border-purple-200"   },
  { id: "IT22574718", name: "Jayashani V.P.N.",      role: "Cost, Time & Progress Tracking",          module: "Module 02", color: "text-blue-600",    bg: "bg-blue-500",    badge: "bg-blue-50 text-blue-700 border-blue-200"         },
  { id: "IT22196460", name: "U.U.M. Hewage",         role: "Smart Logistics & System Integration",    module: "Module 04", color: "text-yellow-600",  bg: "bg-yellow-500",  badge: "bg-yellow-50 text-yellow-700 border-yellow-200"   },
];

const supervisors = [
  { name: "Ravi Supunya",            title: "Supervisor",    dept: "Senior Lecturer",             inst: "SLIIT" },
  { name: "Chathurya Kumarapperuma", title: "Co-Supervisor", dept: "Assistant Lecturer",          inst: "SLIIT" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-600 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            <Users className="w-3.5 h-3.5" />
            The Team
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
            Research Team
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Four final-year undergraduates from SLIIT Faculty of Computing — Group 25-26J-168.
          </motion.p>
        </motion.div>

        {/* Team cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
          {team.map((member, i) => (
            <motion.div key={member.id} variants={fadeUp} custom={i} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 group h-full overflow-hidden bg-white">
                {/* Top colour bar */}
                <div className={`h-1.5 ${member.bg}`} />
                <CardContent className="pt-8 pb-6 flex flex-col items-center gap-3">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Avatar className={`w-20 h-20 ring-4 ring-offset-2 ring-offset-white ring-transparent group-hover:ring-current transition-all ${member.color}`}>
                      <AvatarFallback className={`text-xl font-black ${member.bg} text-white`}>
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <Badge variant="outline" className={`text-xs font-bold ${member.badge}`}>{member.module}</Badge>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{member.name}</p>
                    <p className="font-mono text-xs text-slate-500 mt-0.5">{member.id}</p>
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Supervisors */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.h3 variants={fadeUp} custom={0} className="text-2xl font-bold text-center text-slate-900 mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            Academic Supervisors
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {supervisors.map((s, i) => (
              <motion.div key={s.name} variants={fadeUp} custom={i + 1} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-slate-200 hover:shadow-md transition-all duration-300 group bg-white">
                  <CardContent className="p-6 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700 mb-2">{s.title}</Badge>
                      <p className="font-bold text-slate-900 text-lg">{s.name}</p>
                      <p className="text-sm text-slate-500">{s.dept} · {s.inst}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Institute callout */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0} className="mt-12">
          <Card className="border-blue-200 bg-blue-50 max-w-2xl mx-auto shadow-sm">
            <CardContent className="p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-blue-900">SLIIT — Faculty of Computing</p>
                <p className="text-sm text-blue-800/80">Sri Lanka Institute of Information Technology · Malabe, Sri Lanka · 2025/2026</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}