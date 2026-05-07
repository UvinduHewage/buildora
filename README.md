# 🏗️ Buildora: Intelligent Construction Management Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **Revolutionizing the Sri Lankan construction industry through AI-driven automation and integrated project lifecycles.**

Buildora is an advanced research-based ecosystem designed to eliminate manual errors and optimize efficiency in small to medium-scale construction projects. By integrating Computer Vision and Machine Learning, Buildora provides an end-to-end platform for automated planning, estimation, and quality assessment.

---

## 🌟 Key Research Modules

Buildora is built upon four core intelligent modules, each addressing a critical pain point in traditional construction workflows:

### 1. 📐 Building Plan Analysis & 3D Visualization
*   **Core**: Computer Vision (CV) based architectural plan interpretation.
*   **Features**: Automatic extraction of structural elements from 2D drawings, stage-wise BOQ generation, and seamless 2D-to-3D visualization.

### 2. 📉 Cost & Progress Tracking
*   **Core**: Machine Learning (XGBoost, HistGradientBoostingRegressor).
*   **Features**: Predictive modeling for total project costs and phase-wise durations, helping contractors avoid common budget overruns and schedule delays.

### 3. 🚛 Smart Logistics Optimization
*   **Core**: Resource forecasting and allocation models.
*   **Features**: Optimizes vehicle deployment, labor allocation, and machinery utilization while predicting waste margins to ensure lean construction practices.

### 4. 💎 Material Intelligence & Quality Assessment
*   **Core**: CNN-based image classification and budget-optimized recommendation engines.
*   **Features**: Real-time on-site quality assessment for wood defects, paint, and surfaces, paired with intelligent material recommendations based on project constraints.

---

## 🛠️ Technical Stack

### **Frontend & UX**
- **React 18** with **Vite** for lightning-fast development.
- **Tailwind CSS** & **Shadcn UI** for a premium, accessible design system.
- **Framer Motion** for smooth, high-performance micro-animations.
- **Lucide React** for consistent, modern iconography.

### **Mobile Integration**
- **Flutter** (Cross-platform mobile application for site engineers and contractors).

### **Artificial Intelligence**
- **Computer Vision**: OpenCV, CNNs for plan analysis and material quality.
- **Machine Learning**: Scikit-learn, XGBoost, Pandas for predictive cost/time modeling.

---

## 📁 Project Structure

```text
buildora/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable shadcn/ui components
│   │   ├── layout/      # Navbar, Footer, etc.
│   │   ├── sections/    # Main landing page sections (Hero, Research, etc.)
│   │   └── common/      # Reusable UI patterns
│   ├── lib/             # Utility functions (cn, etc.)
│   ├── App.jsx          # Main application entry
│   ├── main.jsx         # React mounting
│   └── index.css        # Global styles & Tailwind directives
├── tailwind.config.js   # Style tokens & theme configuration
└── vite.config.js       # Vite build configuration
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/UvinduHewage/buildora.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 👥 Research Team & Supervision

**Supervisors:**
- **Ravi Supunya** (Senior Lecturer, SLIIT)
- **Chathurya Kumarapperuma** (Assistant Lecturer, SLIIT)

**Team Members:**
- **Vithana D.T.M.** - Material Intelligence
- **Madhushan S.M.P.B.** - Building Plan Analysis
- **Jayashani V.P.N.** - Cost & Progress Tracking
- **U.U.M. Hewage** - Smart Logistics

---

## 📬 Contact
For research inquiries or collaboration:
📧 [buildoraicmp@gmail.com](mailto:buildoraicmp@gmail.com)