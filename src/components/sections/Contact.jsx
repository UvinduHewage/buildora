import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, GitBranch, MessageSquare, ArrowRight, BookOpen, Zap, Building2 } from 'lucide-react';
import { useState } from 'react';

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
    color: "text-rose-600",
    bg: "bg-rose-50 border-rose-100",
    title: "Team Contact",
    name: "Buildora Research Team",
    sub: "General inquiries and collaboration",
    link: "mailto:buildoraicmp@gmail.com",
    linkLabel: "buildoraicmp@gmail.com",
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
    phone: "+94 77 437 6121",
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
    phone: "+94 78 623 4514",
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
    phone: "+94 70 139 8090",
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
    phone: "+94 71 945 6781",
  },
];

const references = [
  { id: 1, category: "Vision", year: 2019, title: "Deep floor plan recognition using a multi-task network with room-boundary-guided attention", authors: "Z. Zeng, X. Li, Y. K. Yu, and C.-W. Fu", venue: "IEEE/CVF Int. Conf. Comput. Vision (ICCV)" },
  { id: 2, category: "Vision", year: 2020, title: "Symbol spotting on digital architectural floor plans using a deep learning-based framework", authors: "A. Rezvanifar, M. Cartwright, and U. Bhatt", venue: "IEEE/CVF Conf. Comput. Vision Pattern Recognit. Workshops" },
  { id: 3, category: "BIM", year: 2023, title: "Automated system for high-accuracy quantity takeoff using BIM", authors: "M. Valinejadshoubi, O. Moselhi, I. Iordanova, F. Valdivieso, and A. Bagchi", venue: "Automation in Construction" },
  { id: 4, category: "ML", year: 2021, title: "Construction duration prediction using machine learning: A case study", authors: "W. Wang, H. Li, and X. Wang", venue: "Automation in Construction" },
  { id: 5, category: "Vision", year: 2020, title: "Automated digital modeling of existing buildings: A review of visual object recognition methods", authors: "T. Czerniawski and F. Leite", venue: "Automation in Construction" },
  { id: 6, category: "BIM", year: 2019, title: "Combining inverse photogrammetry and BIM for automated labeling of construction site images for machine learning", authors: "A. Braun and A. Borrmann", venue: "Automation in Construction" },
  { id: 7, category: "Vision", year: 2022, title: "Automatic floor plan analysis and recognition", authors: "D. Liciotti, M. Paolanti, R. Pietrini, E. Frontoni, and P. Zingaretti", venue: "Automation in Construction" },
  { id: 8, category: "Sri Lanka", year: 2023, title: "Status quo of digitalisation in the Sri Lankan construction industry", authors: "W. S. D. Perera, K. A. T. O. Ranadewa, A. Parameswaran, and D. Weerasooriya", venue: "World Construction Symposium" },
  { id: 9, category: "Sri Lanka", year: 2024, title: "Investigating the challenges of software adoption among quantity surveyors in Sri Lanka", authors: "I. N. Vod and N. Kawmudi", venue: "Research" },
  { id: 10, category: "Sri Lanka", year: 2023, title: "Evaluation of the technological gap in quantity surveying practices: Sri Lankan context vs global context", authors: "Author Unknown", venue: "Research" },
  { id: 11, category: "Sri Lanka", year: 2023, title: "Quantity surveyor's perspective on document management in construction projects: An exploratory study in Sri Lanka", authors: "Author Unknown", venue: "Research" },
  { id: 12, category: "BIM", year: 2018, title: "Building Information Modelling adoption for better cost estimation: Sri Lankan perspective", authors: "Author Unknown", venue: "Research" },
  { id: 13, category: "Sri Lanka", year: 2020, title: "Identification of significant factors influencing cost overruns in construction projects of Sri Lanka", authors: "A. G. D. Premalal and R. K. P. C. B. Mudalige", venue: "IQSSL Annual Tech. Session" },
  { id: 14, category: "Sri Lanka", year: 2024, title: "Adaptability of emerging technologies by Sri Lankan construction SMEs: A social sustainability perspective", authors: "S. M. H. Fernando, P. H. G. M. A. Ranasinghe, and H. D. Subhasingha", venue: "Int. Conf. Smart Engineering" },
  { id: 15, category: "Construction", year: 2023, title: "Assessment of critical factors influencing the performance of labour in Sri Lankan construction industry", authors: "K. Manoharana, P. Dissanayake, C. Pathirana, D. Deegahawature, and R. Silva", venue: "Int. J. Constr. Manag." },
  { id: 16, category: "Construction", year: 2021, title: "Factors affecting time and cost overrun in rural construction projects in Sri Lanka", authors: "K. B. S. Ruwansiri", venue: "M.S. thesis, Univ. of Moratuwa" },
  { id: 17, category: "AI", year: 2021, title: "Roles of artificial intelligence in construction engineering and management: A critical review and future trends", authors: "Y. Pan and L. Zhang", venue: "Automation in Construction" },
  { id: 18, category: "AI", year: 2021, title: "Roles of artificial intelligence in construction engineering and management: A critical review and future trends", authors: "Y. Pan and L. Zhang", venue: "Automation in Construction" },
  { id: 19, category: "BIM", year: 2023, title: "Automated system for high-accuracy quantity takeoff using BIM", authors: "M. Valinejadshoubi, O. Moselhi, I. Iordanova, F. Valdivieso, and A. Bagchi", venue: "Automation in Construction" },
  { id: 20, category: "ML", year: 2021, title: "Developing a machine learning model to predict the construction duration of tall building projects", authors: "M. O. Sanni-Anibire, R. M. Zin, and S. O. Olatunji", venue: "J. Constr. Eng., Manag. Innov." },
  { id: 21, category: "Vision", year: 2021, title: "Computer vision-based interior construction progress monitoring: A literature review and future research directions", authors: "B. Ekanayake, J. K.-W. Wong, A. A. F. Fini, and P. Smith", venue: "Automation in Construction" },
  { id: 22, category: "Vision", year: 2019, title: "Automated identification of wood veneer surface defects using faster region based convolutional neural network with data augmentation and transfer learning", authors: "A. Urbonas, V. Raudonis, R. Maskeliunas, and R. Damasevicius", venue: "Applied Sciences" },
  { id: 23, category: "ML", year: 2020, title: "A data-driven approach for construction cost estimation using machine learning techniques", authors: "S. Kim, K. Kim, and S. Park", venue: "Journal of Construction Engineering and Management" },
  { id: 24, category: "ML", year: 2019, title: "Estimating construction costs using artificial intelligence techniques", authors: "M. Marzouk and M. Elkadi", venue: "HBRC Journal" },
  { id: 25, category: "ML", year: 2016, title: "XGBoost: A scalable tree boosting system", authors: "T. Chen and C. Guestrin", venue: "ACM SIGKDD Int. Conf." },
];

const categories = [
  { name: "All", icon: BookOpen, color: "text-slate-600", bg: "bg-slate-50" },
  { name: "Vision", icon: Zap, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "AI", icon: Zap, color: "text-indigo-600", bg: "bg-indigo-50" },
  { name: "ML", icon: Building2, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "BIM", icon: Building2, color: "text-rose-600", bg: "bg-rose-50" },
  { name: "Sri Lanka", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "Construction", icon: Building2, color: "text-orange-600", bg: "bg-orange-50" },
];

function ReferenceSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  
  const filtered = activeCategory === "All" ? references : references.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">References</h2>
        <p className="text-slate-600 text-lg">Explore {references.length} research papers curated for this project</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 md:px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeCategory === cat.name
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat.name}
          </motion.button>
        ))}
      </div>

      {/* References Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((ref, idx) => (
          <motion.div
            key={ref.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => setExpandedId(expandedId === ref.id ? null : ref.id)}
            className="group cursor-pointer"
          >
            <Card className="h-full border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-500 overflow-hidden bg-white hover:bg-blue-50/30">
              <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
              <CardContent className="p-6">
                {/* Top Row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-bold text-sm shrink-0">
                      {ref.id}
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 whitespace-nowrap">
                      {ref.year}
                    </span>
                  </div>
                  <span className="text-slate-400 text-2xl font-light group-hover:text-blue-600 transition-colors">
                    {expandedId === ref.id ? '−' : '+'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 mb-3 text-base leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {ref.title}
                </h3>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-100">
                    {ref.category}
                  </span>
                </div>

                {/* Authors - Always visible */}
                <p className="text-sm text-slate-600 font-medium mb-2 line-clamp-1">
                  {ref.authors}
                </p>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedId === ref.id ? "auto" : 0, opacity: expandedId === ref.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Venue</p>
                      <p className="text-sm text-slate-700">{ref.venue}</p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline group/link"
                    >
                      View Reference
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center text-slate-600 text-sm"
      >
        Showing <span className="font-bold text-slate-900">{filtered.length}</span> of <span className="font-bold text-slate-900">{references.length}</span> references
      </motion.div>
    </div>
  );
}

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
            <h3 className="text-lg font-bold text-slate-700 mb-6 px-2">Supervisors & Team Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contacts.slice(0, 3).map((c, i) => (
                <motion.div key={c.name} variants={fadeUp} custom={i} whileHover={{ y: -8 }}>
                  <Card className="relative border-2 border-slate-200 hover:shadow-xl transition-all duration-500 group h-full bg-white rounded-2xl overflow-hidden">
                    <div className={`h-1.5 w-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-indigo-500' : 'bg-rose-500'}`} />
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
              {contacts.slice(3).map((c, i) => (
                <motion.div key={c.name} variants={fadeUp} custom={i + 3} whileHover={{ y: -4 }}>
                  <Card className="relative border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-500 group h-full bg-white rounded-xl overflow-hidden">
                    <div className={`h-1 w-full ${c.bg}`} />
                    <CardContent className="p-5 md:p-6 flex flex-col gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${c.bg} group-hover:scale-110 transition-transform duration-500`}>
                        <c.icon className={`w-6 h-6 ${c.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1.5">{c.title}</p>
                        <p className="font-bold text-slate-900 text-base">{c.name}</p>
                        <p className="text-xs text-slate-600 mt-1.5 leading-snug">{c.sub}</p>
                      </div>
                      <div className="space-y-2 pt-1">
                        <a href={c.link} target="_blank" rel="noopener noreferrer"
                           className={`text-xs font-bold ${c.color} hover:underline flex items-center gap-1 group/link`}>
                          {c.linkLabel.split('@')[0]}@
                          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                        {c.phone && (
                          <a href={`tel:${c.phone.replace(/\s+/g, '')}`}
                             className={`text-xs font-bold ${c.color} hover:underline flex items-center gap-1 group/link`}>
                            {c.phone}
                            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* References Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0} className="mt-24 md:mt-32 py-16 md:py-24 border-t border-slate-200">
          <ReferenceSection />
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