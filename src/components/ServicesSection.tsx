import React, { useState } from 'react';
import { SectionBadge, ArrowUpRightIcon } from './Icons';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  // Allow toggling active service card or viewing details
  const [activeCardId, setActiveCardId] = useState<string>('ui-design');

  return (
    <section
      id="services"
      aria-label="Services Section"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
    >
      {/* Badge */}
      <div className="mb-4">
        <SectionBadge text="What I Do" />
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#161513] dark:text-white max-w-3xl leading-[1.15] mb-10 md:mb-14 transition-colors">
        Creating simple, creative, and{' '}
        <span className="text-[#F6A81C]">user-friendly digital experiences.</span>
      </h2>

      {/* Services Stack */}
      <div className="space-y-4 md:space-y-6">
        {SERVICES.map((service) => {
          const isSelected = activeCardId === service.id;
          const isDarkCard = service.id === activeCardId;

          return (
            <div
              key={service.id}
              onClick={() => setActiveCardId(service.id)}
              className={`group relative rounded-[2rem] transition-all duration-300 cursor-pointer ${
                isDarkCard
                  ? 'bg-[#151412] dark:bg-[#1C1B17] text-white shadow-xl border border-stone-800 dark:border-stone-700/80 p-6 sm:p-8 md:p-10'
                  : 'bg-white dark:bg-[#161512] text-stone-900 dark:text-white shadow-sm border border-stone-200/80 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 p-5 sm:p-6 md:p-7'
              }`}
            >
              <div className="flex flex-row items-center justify-between gap-4">
                {/* Left content: Number and Title (+ description when active) */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Step Number Tag */}
                    <span
                      className={`text-xs md:text-sm font-mono font-medium px-3.5 py-1 rounded-full border border-dashed shrink-0 ${
                        isDarkCard
                          ? 'border-stone-600 text-stone-300'
                          : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className={`w-12 sm:w-20 md:w-28 border-b border-dashed shrink-0 ${
                      isDarkCard ? 'border-stone-600' : 'border-stone-300 dark:border-stone-700'
                    }`} />

                    {/* Service Title */}
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${
                        isDarkCard ? 'text-white' : 'text-[#161513] dark:text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description (shown when active) */}
                  {isDarkCard && (
                    <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed pt-2">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Right: Circular Arrow CTA Button */}
                <div className="self-end md:self-center shrink-0">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#F6A81C] text-stone-950 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <ArrowUpRightIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
