import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import FocusCards from './components/sections/FocusCards';
import ResearchFoundation from './components/sections/ResearchFoundation';
import Methodology from './components/sections/Methodology';
import Timeline from './components/sections/Timeline';
import Documentation from './components/sections/Documentation';
import Presentations from './components/sections/Presentations';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <Hero />
      <FocusCards />
      <ResearchFoundation />
      <Methodology />
      <Timeline />
      <Documentation />
      <Presentations />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;