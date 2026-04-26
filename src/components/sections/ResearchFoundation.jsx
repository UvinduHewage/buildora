import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle, Target, FlaskConical,
  Eye, Truck, BarChart3, Layers, Lightbulb,
  TrendingDown, Smartphone, CheckCircle2,
  DollarSign, Clock, Package
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
  })
};

const litSurveyItems = [
  { icon: Layers,      color: "text-purple-600", bg: "bg-purple-100", title: "Automated BOQ & Quantity Take-off", desc: "Computer vision and BIM-integrated models extract structural elements from 2D drawings, generate accurate Bills of Quantities, and support real-time editing." },
  { icon: BarChart3,   color: "text-blue-600",   bg: "bg-blue-100",   title: "Cost & Time Estimation",             desc: "ML models like XGBoost, HistGradientBoostingRegressor, and MultiOutputRegressor predict project costs, phase durations, and delays with superior accuracy." },
  { icon: Eye,         color: "text-emerald-600",bg: "bg-emerald-100",title: "Safety & Quality Monitoring",         desc: "CNNs and computer vision detect defects in materials (paint, wood, surfaces) and perform on-site safety monitoring automatically." },
  { icon: Truck,       color: "text-yellow-600", bg: "bg-yellow-100", title: "Logistics & Resource Management",     desc: "AI enables predictive maintenance, demand forecasting, route optimisation, and resource allocation, reducing idle time for vehicles and machinery." },
];

const gaps = [
  "Most commercial tools focus on single functions rather than providing an end-to-end integrated platform.",
  "Limited affordable, mobile-first solutions for small and medium-scale contractors in Sri Lanka.",
  "Smart logistics optimisation that simultaneously predicts vehicles, labour, machinery, and waste margins is underdeveloped locally.",
  "Integration of CV (plan analysis + material quality) with ML models (cost, time, logistics) into one Flutter app is rarely addressed.",
  "Very few systems combine 2D plan → automatic BOQ → 3D visualisation → logistics prediction in a seamless workflow.",
];

const problems = [
  { icon: DollarSign, color: "text-red-600",     bg: "bg-red-100",     title: "Frequent Cost Overruns",           desc: "Inaccurate BOQ, price escalation, and poor logistics planning drive costs far beyond initial estimates." },
  { icon: Clock,      color: "text-orange-600",  bg: "bg-orange-100",  title: "Schedule Delays",                  desc: "Unrealistic time estimates and inefficient resource deployment push project timelines consistently." },
  { icon: Package,    color: "text-yellow-600",  bg: "bg-yellow-100",  title: "Material Waste & Poor Logistics",  desc: "Vehicle, labour, and machinery over-allocation or underutilisation drives up project waste and cost." },
  { icon: Layers,     color: "text-purple-600",  bg: "bg-purple-100",  title: "Limited BOQ & 3D Capability",      desc: "Difficulty generating accurate, stage-wise BOQ or interactive 3D models for progress tracking." },
  { icon: Eye,        color: "text-blue-600",    bg: "bg-blue-100",    title: "No Real-time Quality Assessment",  desc: "Absence of affordable tools for assessing wood, paint, and surface quality on-site in real time." },
  { icon: Smartphone, color: "text-emerald-600", bg: "bg-emerald-100", title: "Inaccessible Software",            desc: "Existing systems are expensive, complex, and not tailored for Sri Lankan contractors' operational realities." },
];

const objectives = [
  { icon: Eye,        color: "text-purple-600",  num: "01", title: "2D Plan Interpretation & 3D Visualisation", desc: "Develop a CV-based module for automated architectural plan interpretation, element extraction, interactive BOQ generation, and 2D-to-3D visualisation." },
  { icon: BarChart3,  color: "text-blue-600",    num: "02", title: "Cost & Progress Prediction",                desc: "Implement ML models (HistGradientBoosting, MultiOutputRegressor) to predict project cost breakdowns, phase-wise durations, and progress." },
  { icon: Truck,      color: "text-yellow-600",  num: "03", title: "Smart Logistics Optimisation",              desc: "Ingest BOQ data to forecast required vehicles, labourers, machinery, and waste margins using ensemble ML techniques with scikit-learn and pandas." },
  { icon: CheckCircle2, color: "text-emerald-600", num: "04", title: "Material Intelligence",                     desc: "Build a material recommendation (budget-based) and quality assessment (wood defects, paint, surface) component using CV and classification models." },
  { icon: Smartphone, color: "text-rose-600",    num: "05", title: "Unified Mobile Application",                desc: "Integrate all four modules into an intuitive Flutter app suitable for homeowners, contractors, quantity surveyors, and site engineers." },
  { icon: Target,     color: "text-cyan-600",  num: "06", title: "Validation & Relevance",                   desc: "Validate the system's practical accuracy through experimental results and demonstrate relevance to improving efficiency in Sri Lankan construction." },
];

function SectionLabel({ icon: Icon, color, label }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest ${color} border-current/30 bg-current/5 mb-4`}>
      <Icon className="w-3.5 h-3.5" />
      {label}
    </div>
  );
}

export default function ResearchFoundation() {
  return (
    <section id="research" className="py-24 w-full bg-slate-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">

        {/* ── Literature Survey ── */}
        <div className="mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14 text-center">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel icon={FlaskConical} color="text-purple-600" label="Literature Survey" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900">
              What Research Tells Us
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A structured review of <span className="text-slate-900 font-semibold">135 peer-reviewed articles (1985–2024)</span> shows AI is most prominent in the planning, monitoring, and control phases of construction.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 gap-6 mb-10">
            {litSurveyItems.map((item, i) => (
              <motion.div key={item.title} variants={fadeLeft} custom={i}>
                <Card className="h-full border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm">
                  <CardContent className="p-6 flex gap-5">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <Card className="border-yellow-200 bg-yellow-50 shadow-sm">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-yellow-800">Sri Lankan Context</h4>
                    <p className="text-yellow-900/80 leading-relaxed text-sm md:text-base">
                      Studies confirm cost overruns and time delays remain chronic in Sri Lanka's road and building projects. Major contributors include payment delays, poor planning, design changes, price escalation, inaccurate BOQ estimates, and fragmented management of materials, logistics, and resources. Despite global AI advances, most systems address only <span className="font-semibold text-yellow-900">isolated tasks</span> — no unified mobile solution exists for Sri Lanka's SME construction sector.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Separator className="my-12 opacity-50" />

        {/* ── Research Gap ── */}
        <div className="my-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel icon={AlertTriangle} color="text-orange-500" label="Research Gap" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-slate-900">
              What's Missing in Existing Solutions
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Despite rapid AI growth in construction globally, critical gaps persist that Buildora directly addresses.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="space-y-4">
            {gaps.map((gap, i) => (
              <motion.div key={i} variants={fadeLeft} custom={i}>
                <Card className="border-slate-200 hover:border-orange-200 transition-all duration-300 group shadow-sm">
                  <CardContent className="p-5 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                      <span className="text-orange-600 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed pt-2">{gap}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Separator className="my-12 opacity-50" />

        {/* ── Research Problem ── */}
        <div className="my-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14 text-center">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel icon={TrendingDown} color="text-red-500" label="Research Problem" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-slate-900">
              The Pain Points We Address
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Sri Lankan small and medium-scale construction companies heavily depend on manual and paper-based methods.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <motion.div key={p.title} variants={scaleIn} custom={i}>
                <Card className={`h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 group`}>
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${p.bg}`}>
                      <p.icon className={`w-6 h-6 ${p.color}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-2">{p.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Separator className="my-12 opacity-50" />

        {/* ── Research Objectives ── */}
        <div className="my-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-14 text-center">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel icon={Target} color="text-cyan-600" label="Research Objectives" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-slate-900">
              What Buildora Sets Out to Achieve
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <motion.div key={obj.title} variants={fadeUp} custom={i}>
                <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 ${obj.color}`}>
                        <obj.icon className={`w-5 h-5`} />
                      </div>
                      <span className="text-3xl font-black text-slate-200">{obj.num}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-2">{obj.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{obj.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}