import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import Faq from './components/Faq.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B0B10] text-zinc-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Перейти к основному контенту
        </a>

        <Header />

        <main id="main-content">
          <Hero />
          <About />
          <Services onSelectService={setSelectedService} />
          <Process />
          <Faq />
          <Contact selectedService={selectedService} />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
