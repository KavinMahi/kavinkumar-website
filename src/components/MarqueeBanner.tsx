import React from 'react';
import { StarSparkle } from './Icons';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'App Design',
    'Website Design',
    'Dashboard',
    'Wireframe',
    'UI/UX System',
    'Mobile Prototyping',
  ];

  return (
    <aside
      aria-label="Capabilities Marquee"
      className="w-full bg-[#151412] text-white py-4 md:py-5 border-y border-stone-800/80 overflow-hidden select-none"
    >
      <div className="flex animate-marquee items-center gap-8 md:gap-14 whitespace-nowrap">
        {/* Render items twice for infinite loop effect */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-14">
            <StarSparkle className="w-5 h-5 text-[#F6A81C] shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white/95 uppercase font-sans">
              {item}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};
