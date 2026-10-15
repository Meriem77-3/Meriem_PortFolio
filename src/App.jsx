import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experiences';
import Formation from './Components/Formation';
import Services from './Components/Services';
import Work from './Components/Work';
import Certifs from './Components/Certifs';
import Contact from './Components/Contact';

// Même ordre que la Navbar :
// À propos → Expérience → Formations → Compétences → Projets → Certifications → Contact
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Formation />
      <Services />
      <Work />
      <Certifs />
      <Contact />
    </div>
  );
}

export default App;