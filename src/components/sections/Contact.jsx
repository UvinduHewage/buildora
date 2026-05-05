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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">References</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p><span className="font-semibold">[1]</span> Z. Zeng, X. Li, Y. K. Yu, and C.-W. Fu, "Deep floor plan recognition using a multi-task network with room-boundary-guided attention," in Proc. IEEE/CVF Int. Conf. Comput. Vision (ICCV), Seoul, South Korea, 2019, pp. 9096–9104.</p>
              
              <p><span className="font-semibold">[2]</span> A. Rezvanifar, M. Cartwright, and U. Bhatt, "Symbol spotting on digital architectural floor plans using a deep learning-based framework," in Proc. IEEE/CVF Conf. Comput. Vision Pattern Recognit. Workshops (CVPRW), Seattle, WA, USA, 2020, pp. 626–627.</p>
              
              <p><span className="font-semibold">[3]</span> M. Valinejadshoubi, O. Moselhi, I. Iordanova, F. Valdivieso, and A. Bagchi, "Automated system for high-accuracy quantity takeoff using BIM," Autom. Constr., vol. 155, p. 105054, Nov. 2023.</p>
              
              <p><span className="font-semibold">[4]</span> W. Wang, H. Li, and X. Wang, "Construction duration prediction using machine learning: A case study," Automation in Construction, vol. 127, p. 103705, 2021.</p>
              
              <p><span className="font-semibold">[5]</span> T. Czerniawski and F. Leite, "Automated digital modeling of existing buildings: A review of visual object recognition methods," Autom. Constr., vol. 113, p. 103131, 2020.</p>
              
              <p><span className="font-semibold">[6]</span> A. Braun and A. Borrmann, "Combining inverse photogrammetry and BIM for automated labeling of construction site images for machine learning," Autom. Constr., vol. 106, p. 102879, 2019.</p>
              
              <p><span className="font-semibold">[7]</span> D. Liciotti, M. Paolanti, R. Pietrini, E. Frontoni, and P. Zingaretti, "Automatic floor plan analysis and recognition," Autom. Constr., vol. 140, p. 104348, 2022.</p>
              
              <p><span className="font-semibold">[8]</span> W. S. D. Perera, K. A. T. O. Ranadewa, A. Parameswaran, and D. Weerasooriya, "Status quo of digitalisation in the Sri Lankan construction industry," in Proc. 11th World Construction Symposium, Sri Lanka, 2023, pp. 944–959.</p>
              
              <p><span className="font-semibold">[9]</span> I. N. Vod and N. Kawmudi, "Investigating the challenges of software adoption among quantity surveyors in Sri Lanka," 2024.</p>
              
              <p><span className="font-semibold">[10]</span> "Evaluation of the technological gap in quantity surveying practices: Sri Lankan context vs global context," 2023.</p>
              
              <p><span className="font-semibold">[11]</span> "Quantity surveyor's perspective on document management in construction projects: An exploratory study in Sri Lanka," 2023.</p>
              
              <p><span className="font-semibold">[12]</span> "Building Information Modelling adoption for better cost estimation: Sri Lankan perspective," 2018.</p>
              
              <p><span className="font-semibold">[13]</span> A. G. D. Premalal and R. K. P. C. B. Mudalige, "Identification of significant factors influencing cost overruns in construction projects of Sri Lanka," in Proc. Annu. Tech. Session, Inst. Quantity Surveyors Sri Lanka (IQSSL), Colombo, Sri Lanka, 2020.</p>
              
              <p><span className="font-semibold">[14]</span> S. M. H. Fernando, P. H. G. M. A. Ranasinghe, and H. D. Subhasingha, "Adaptability of emerging technologies by Sri Lankan construction SMEs: A social sustainability perspective," in Proc. Int. Conf. Smart Engineering, Technology and Sustainability, Springer, 2024, pp. 45–58.</p>
              
              <p><span className="font-semibold">[15]</span> K. Manoharana, P. Dissanayake, C. Pathirana, D. Deegahawature, and R. Silva, "Assessment of critical factors influencing the performance of labour in Sri Lankan construction industry," Int. J. Constr. Manag., vol. 23, no. 1, pp. 1–12, 2023.</p>
              
              <p><span className="font-semibold">[16]</span> K. B. S. Ruwansiri, "Factors affecting time and cost overrun in rural construction projects in Sri Lanka," M.S. thesis, Dept. Civil Eng., Univ. of Moratuwa, Moratuwa, Sri Lanka, 2021.</p>
              
              <p><span className="font-semibold">[17]</span> Y. Pan and L. Zhang, "Roles of artificial intelligence in construction engineering and management: A critical review and future trends," Autom. Constr., vol. 122, p. 103517, 2021.</p>
              
              <p><span className="font-semibold">[18]</span> Y. Pan and L. Zhang, "Roles of artificial intelligence in construction engineering and management: A critical review and future trends," Autom. Constr., vol. 122, p. 103517, 2021.</p>
              
              <p><span className="font-semibold">[19]</span> M. Valinejadshoubi, O. Moselhi, I. Iordanova, F. Valdivieso, and A. Bagchi, "Automated system for high-accuracy quantity takeoff using BIM," Autom. Constr., vol. 155, p. 105054, Nov. 2023.</p>
              
              <p><span className="font-semibold">[20]</span> M. O. Sanni-Anibire, R. M. Zin, and S. O. Olatunji, "Developing a machine learning model to predict the construction duration of tall building projects," J. Constr. Eng., Manag. Innov., vol. 4, no. 1, pp. 22–36, 2021.</p>
              
              <p><span className="font-semibold">[21]</span> B. Ekanayake, J. K.-W. Wong, A. A. F. Fini, and P. Smith, "Computer vision-based interior construction progress monitoring: A literature review and future research directions," Autom. Constr., vol. 127, p. 103705, 2021.</p>
              
              <p><span className="font-semibold">[22]</span> A. Urbonas, V. Raudonis, R. Maskeliunas, and R. Damasevicius, "Automated identification of wood veneer surface defects using faster region based convolutional neural network with data augmentation and transfer learning," Appl. Sci., vol. 9, no. 22, p. 4898, 2019.</p>
              
              <p><span className="font-semibold">[23]</span> S. Kim, K. Kim, and S. Park, "A data-driven approach for construction cost estimation using machine learning techniques," Journal of Construction Engineering and Management, vol. 146, no. 3, pp. 1–12, 2020.</p>
              
              <p><span className="font-semibold">[24]</span> M. Marzouk and M. Elkadi, "Estimating construction costs using artificial intelligence techniques," HBRC Journal, vol. 15, no. 1, pp. 1–12, 2019.</p>
              
              <p><span className="font-semibold">[25]</span> T. Chen and C. Guestrin, "XGBoost: A scalable tree boosting system," in Proc. ACM SIGKDD Int. Conf. Knowledge Discovery and Data Mining, 2016, pp. 785–794.</p>
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