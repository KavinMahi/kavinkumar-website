import React from 'react';
import { SectionBadge, ArrowUpRightIcon } from './Icons';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject?: (project: ProjectItem) => void;
  onViewAllProjects?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = () => {
  return (
    <section
      id="work"
      aria-label="Portfolio Projects"
      className="bg-[#151412] text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 border-t border-stone-800"
    >
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="mb-3">
              <SectionBadge text="My Portfolio" isDark={true} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Have a <span className="text-[#F6A81C]">Look</span>
              <br />
              at My Portfolio
            </h2>
          </div>

          <div>
            <a
              href="https://www.behance.net/Kavinmahi"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border border-[#F6A81C] hover:bg-[#F6A81C] hover:text-black text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6A81C]"
            >
              <span>View All Projects</span>
              <span className="w-7 h-7 rounded-full bg-[#F6A81C] group-hover:bg-stone-900 text-stone-950 group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowUpRightIcon className="w-4 h-4 stroke-[2.5]" />
              </span>
            </a>
          </div>
        </div>

        {/* Project Cards List - clean display without popups or options */}
        <div className="space-y-10 md:space-y-12">
          {PROJECTS.map((project) => {
            const isImageLeft = project.layout === 'image-left';

            return (
              <div
                key={project.id}
                className="group bg-[#1C1B18] border border-stone-800/90 hover:border-stone-700/80 rounded-[2.25rem] p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300"
              >
                <div
                  className={`flex flex-col ${
                    isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center justify-between gap-8 md:gap-12`}
                >
                  {/* BIG Image Column */}
                  <div className="w-full lg:w-[55%] overflow-hidden rounded-2xl bg-[#141311] shadow-inner flex items-center justify-center p-2 sm:p-3">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-auto max-h-[460px] md:max-h-[520px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-5 text-left">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-[#F6A81C] text-stone-950 text-xs font-bold tracking-tight shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug group-hover:text-[#F6A81C] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Action Arrow Icon Button */}
                    <div className="pt-2">
                      <div
                        className="w-12 h-12 rounded-full border border-[#F6A81C]/70 text-[#F6A81C] group-hover:bg-[#F6A81C] group-hover:text-black flex items-center justify-center transition-all duration-200"
                        aria-hidden="true"
                      >
                        <ArrowUpRightIcon className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
