import React from 'react';
import { SectionBadge, ArrowUpRightIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onDownloadCV?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="bg-[#151412] text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-800"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left: Yellow Arch / Dome with Big Character Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 sm:w-84 md:w-96 lg:w-[420px]">
            {/* The signature golden-yellow arch/dome behind character */}
            <div className="w-full h-[360px] sm:h-[420px] md:h-[480px] bg-[#F6A81C] rounded-t-full rounded-b-3xl overflow-hidden relative shadow-2xl flex items-end justify-center">
              {/* Character inside/overlapping the arch */}
              <img
                src="/assets/aistudio/men_2_71a6d729.png"
                alt="Kavinkumar V - Profile portrait"
                className="w-full h-auto object-contain max-h-[460px] drop-shadow-xl transform translate-y-3 hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Right: Bio & Call to Action */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          {/* Badge */}
          <div>
            <SectionBadge text="What I Do" isDark={true} />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Who is <span className="text-[#F6A81C]">Kavinkumar</span>
          </h2>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed font-normal">
            {PERSONAL_INFO.aboutBio}
          </p>

          {/* Download CV Button -> Downloads attached resume */}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Kavinkumar_V_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#1B1A17] hover:bg-[#24221E] text-white border border-[#F6A81C]/50 hover:border-[#F6A81C] px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6A81C] cursor-pointer"
            >
              <span>Download CV</span>
              <span className="w-8 h-8 rounded-full bg-[#F6A81C] text-stone-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRightIcon className="w-4 h-4 stroke-[2.5]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
