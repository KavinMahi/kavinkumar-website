import React from 'react';
import { SectionBadge, GraduationCapIcon, BriefcaseIcon } from './Icons';
import { EXPERIENCES } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      aria-label="Academic and Professional Journey"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
    >
      {/* Centered Badge */}
      <div className="flex justify-center mb-4">
        <SectionBadge text="Education & Work" />
      </div>

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#161513] dark:text-white transition-colors">
          My <span className="text-[#F6A81C]">Academic and Professional</span> Journey
        </h2>
      </div>

      {/* 2-Column Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {EXPERIENCES.map((item) => {
          const isEducation = item.type === 'education';

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-[#161512] rounded-2xl p-6 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4"
            >
              {/* Left: Icon and Details */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-[#F6A81C] text-stone-950 flex items-center justify-center shrink-0 shadow-sm"
                  aria-hidden="true"
                >
                  {isEducation ? (
                    <GraduationCapIcon className="w-6 h-6 stroke-[2]" />
                  ) : (
                    <BriefcaseIcon className="w-6 h-6 stroke-[2]" />
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-base text-stone-950 dark:text-white tracking-tight transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300">
                    {item.organization}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-normal">
                    {item.roleOrDegree}
                  </p>
                </div>
              </div>

              {/* Right: Year Badge */}
              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-block bg-[#161513] dark:bg-[#252420] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {item.years}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
