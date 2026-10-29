import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { JourneySection } from './components/JourneySection';
import { DesignExperienceSection } from './components/DesignExperienceSection';
import { ContactFooter } from './components/ContactFooter';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';

function PortfolioApp() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active scroll section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7EE] dark:bg-[#0E0D0B] text-[#161513] dark:text-[#E8E6DF] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F6A81C] selection:text-black transition-colors duration-300">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        activeSection={activeSection}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 3. Horizontal Capabilities Marquee */}
        <MarqueeBanner />

        {/* 4. What I Do / Services Section */}
        <ServicesSection />

        {/* 5. About Me Section */}
        <AboutSection onDownloadCV={() => setIsResumeOpen(true)} />

        {/* 6. Tools and Skills Section */}
        <SkillsSection />

        {/* 7. Portfolio / Selected Projects Section */}
        <PortfolioSection />

        {/* 8. Academic and Professional Journey Section */}
        <JourneySection />

        {/* 9. The Way I Design Experiences Section */}
        <DesignExperienceSection />
      </main>

      {/* 10. Contact Section and Footer */}
      <ContactFooter onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals & Dialogs */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
