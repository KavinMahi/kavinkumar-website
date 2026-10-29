import React, { useState } from 'react';
import { SectionBadge, SkillIcon } from './Icons';
import { SKILLS } from '../data/portfolioData';
import { formatSkillLevel } from '../utils/portfolioLogic';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      aria-label="Skills and Tools"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
    >
      {/* Centered Badge */}
      <div className="flex justify-center mb-4">
        <SectionBadge text="My Skills And Tools" />
      </div>

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#161513] dark:text-white transition-colors">
          Exploring the Tools and skills
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#161513] dark:text-white mt-1 transition-colors">
          Behind My Designs
        </p>
      </div>

      {/* Skills Grid: 3 in row 1, 3 in row 2, and 2 centered in row 3 exactly as in screenshot */}
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
        {/* Rows 1 & 2: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {SKILLS.slice(0, 6).map((skill) => {
            const levelInfo = formatSkillLevel(skill.percentage);
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group bg-white dark:bg-[#161512] rounded-2xl p-4 sm:p-5 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-[#F6A81C]/60 dark:hover:border-[#F6A81C]/60 transition-all duration-200 flex items-center justify-between"
              >
                {/* Left: Icon & Name */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-stone-50 dark:bg-[#1F1E1A] flex items-center justify-center p-2 shrink-0 group-hover:scale-110 transition-transform">
                    <SkillIcon type={skill.iconType} className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 dark:text-white text-sm sm:text-base tracking-tight transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-stone-400 capitalize">
                      {levelInfo.label}
                    </span>
                  </div>
                </div>

                {/* Right: Badge with Percentage */}
                <div className="shrink-0">
                  <span className="inline-block bg-[#161513] dark:bg-[#252420] text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                    {skill.percentage}%
                  </span>
                </div>

                {isHovered && (
                  <div
                    className="absolute bottom-0 left-4 right-4 h-1 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full bg-[#F6A81C] transition-all duration-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Row 3: 2 centered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center gap-4 md:gap-5">
          {SKILLS.slice(6, 8).map((skill) => {
            const levelInfo = formatSkillLevel(skill.percentage);
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative group bg-white dark:bg-[#161512] rounded-2xl p-4 sm:p-5 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-[#F6A81C]/60 dark:hover:border-[#F6A81C]/60 transition-all duration-200 flex items-center justify-between md:w-[31%]"
              >
                {/* Left: Icon & Name */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-stone-50 dark:bg-[#1F1E1A] flex items-center justify-center p-2 shrink-0 group-hover:scale-110 transition-transform">
                    <SkillIcon type={skill.iconType} className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 dark:text-white text-sm sm:text-base tracking-tight transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-stone-400 capitalize">
                      {levelInfo.label}
                    </span>
                  </div>
                </div>

                {/* Right: Badge with Percentage */}
                <div className="shrink-0">
                  <span className="inline-block bg-[#161513] dark:bg-[#252420] text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                    {skill.percentage}%
                  </span>
                </div>

                {isHovered && (
                  <div
                    className="absolute bottom-0 left-4 right-4 h-1 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full bg-[#F6A81C] transition-all duration-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
