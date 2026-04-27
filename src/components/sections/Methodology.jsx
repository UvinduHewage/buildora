import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const technologies = [
  { name: "Flutter",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Python",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "TensorFlow",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Scikit-learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "OpenCV",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "FastAPI",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "MongoDB",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "React",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Pandas",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "NumPy",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Google Colab", src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-32 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="text-center mb-24"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6">
            <Layers className="w-4 h-4" />
            Technology Stack
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            The Engines Behind <span className="text-blue-600">Buildora</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-xl text-slate-500 leading-relaxed text-balance">
            We leverage a cutting-edge combination of Deep Learning, Computer Vision, and Cloud Infrastructure to deliver industrial-grade accuracy and performance.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 justify-items-center"
        >
          {technologies.map((tech, i) => (
            <motion.div 
              key={tech.name} 
              variants={fadeUp} 
              custom={i} 
              whileHover={{ y: -10, scale: 1.05 }} 
              className="flex flex-col items-center gap-5 group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 bg-slate-50 rounded-[2rem] flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-white group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-600/10 transition-all duration-500">
                <img src={tech.src} alt={tech.name} className="w-10 h-10 md:w-14 md:h-14 object-contain group-hover:rotate-6 transition-transform duration-500" />
              </div>
              <p className="text-xs md:text-sm font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-widest transition-colors">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}