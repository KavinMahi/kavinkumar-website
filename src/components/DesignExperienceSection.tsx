import React from 'react';
import { SectionBadge } from './Icons';
import { PROCESS_STEPS } from '../data/portfolioData';

export const DesignExperienceSection: React.FC = () => {
  return (
    <section
      id="process"
      aria-label="Design Process and Experiences"
      className="bg-[#151412] text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-800"
    >
      <div className="max-w-5xl mx-auto space-y-10 md:space-y-14">
        {/* Header */}
        <div className="space-y-3">
          <div>
            <SectionBadge text="Education & Work" isDark={true} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Way I Design
            <br />
            Experiences
          </h2>
        </div>

        {/* 2x2 Grid of White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="group bg-white text-stone-900 rounded-3xl p-6 sm:p-8 shadow-md border border-stone-200/90 hover:border-[#F6A81C] transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Top Row: Dotted guide line with step number pill */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-7 rounded-full border border-stone-300 text-stone-600 font-mono text-xs font-semibold flex items-center justify-center bg-stone-50">
                  {step.step}
                </span>
                <div className="flex-1 border-b border-dashed border-stone-300" />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950 group-hover:text-[#F6A81C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
