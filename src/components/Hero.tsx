import React from 'react';
import { BehanceIcon, LinkedInIcon, InstagramIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-0 px-3 sm:px-4 md:px-6 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* 1. Main Title & Subtitle (Centered across all viewports) */}
      <div className="text-center mb-1.5 sm:mb-2 md:mb-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#161513] dark:text-white transition-colors duration-200">
          I&apos;m <span className="text-[#F6A81C]">Kavinkumar</span>
        </h1>
        <p className="mt-1 sm:mt-1.5 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-stone-700 dark:text-stone-300 tracking-wide transition-colors duration-200">
          {PERSONAL_INFO.title}
        </p>
      </div>

      {/* 
        DESKTOP & TABLET VIEW (md: >= 768px):
        True 3-column composition matching the exact reference UI template.
        - Left: Follow Me On, socials, and 3 rows of skill pills
        - Center: Wave circle backdrop + 3D avatar sitting flush on the marquee
        - Right: Tagline and 3 rows of deliverable pills
      */}
      <div className="hidden md:flex relative max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto items-end justify-center gap-2 lg:gap-6 xl:gap-10">
        
        {/* LEFT COLUMN: Follow Me On & Skills (Flush bottom aligned) */}
        <div className="w-[195px] lg:w-[240px] xl:w-[270px] shrink-0 flex flex-col items-start pb-3 md:pb-5 lg:pb-8 xl:pb-10 z-20">
          {/* Follow Me On */}
          <div className="mb-6 md:mb-7 lg:mb-9 xl:mb-10 space-y-1.5">
            <h2 className="text-xs lg:text-sm font-semibold text-stone-700 dark:text-stone-300">
              Follow Me On
            </h2>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.behance}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance profile"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#181714] text-white flex items-center justify-center hover:bg-[#F6A81C] hover:text-black transition-all shadow-sm"
              >
                <BehanceIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#181714] text-white flex items-center justify-center hover:bg-[#F6A81C] hover:text-black transition-all shadow-sm"
              >
                <LinkedInIcon className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#181714] text-white flex items-center justify-center hover:bg-[#F6A81C] hover:text-black transition-all shadow-sm"
              >
                <InstagramIcon className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              </a>
            </div>
          </div>

          {/* Left Pill Rows */}
          <div className="flex flex-col gap-2 lg:gap-2.5 w-full">
            {/* Row 1: CSS3 & Html5 */}
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                CSS3
              </span>
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#181714] text-white font-medium text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Html5
              </span>
            </div>

            {/* Row 2: Javascript & Tailwind css (+) */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Javascript
              </span>
              <div className="flex items-center gap-1 px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-full bg-[#181714] text-white font-medium text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                <span>Tailwind css</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#F6A81C] text-black text-[10px] font-bold flex items-center justify-center ml-0.5">
                  +
                </span>
              </div>
            </div>

            {/* Row 3: Next JS & React JS */}
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#181714] text-white font-medium text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Next JS
              </span>
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                React JS
              </span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: BIG 3D Character with Large Wave Circle Backdrop (Sitting flush on marquee) */}
        <div className="relative w-[340px] md:w-[370px] lg:w-[460px] xl:w-[530px] 2xl:w-[580px] shrink-0 flex justify-center items-end self-end z-10">
          {/* Large wavy circular backdrop pattern (Group_1203) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] pointer-events-none z-0">
            <div className="relative w-[320px] h-[320px] md:w-[350px] md:h-[350px] lg:w-[440px] lg:h-[440px] xl:w-[510px] xl:h-[510px] 2xl:w-[560px] 2xl:h-[560px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/assets/aistudio/Group_1203_ec7a94f0.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain rounded-full opacity-80 dark:opacity-30 dark:brightness-75 dark:hue-rotate-180"
              />
            </div>
          </div>

          {/* Large 3D Character Illustration (men_2) sitting flush onto marquee bar */}
          <div className="relative z-10 w-full drop-shadow-2xl flex justify-center">
            <img
              src="/assets/aistudio/men_2_71a6d729.png"
              alt="Kavinkumar - 3D illustrated avatar smiling in navy suit"
              className="w-full h-auto max-h-[430px] md:max-h-[470px] lg:max-h-[560px] xl:max-h-[640px] 2xl:max-h-[690px] object-contain mx-auto block -mb-[1px]"
              width="500"
              height="620"
              loading="eager"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Creativity Tagline & Deliverables (Flush bottom aligned) */}
        <div className="w-[195px] lg:w-[240px] xl:w-[270px] shrink-0 flex flex-col items-end pb-3 md:pb-5 lg:pb-8 xl:pb-10 text-right z-20">
          {/* Tagline */}
          <div className="mb-6 md:mb-7 lg:mb-9 xl:mb-10 space-y-1">
            <p className="text-xs lg:text-sm xl:text-base font-medium text-stone-700 dark:text-stone-300 leading-snug">
              Professional UI/UX designer
              <br /> with great creativity!
            </p>
          </div>

          {/* Right Pill Rows */}
          <div className="flex flex-col gap-2 lg:gap-2.5 w-full items-end">
            {/* Row 1: Prototype & Dashboard */}
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#181714] text-white font-medium text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Prototype
              </span>
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Dashboard
              </span>
            </div>

            {/* Row 2: (+) Mobile App Design */}
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#F6A81C] text-stone-900 text-[10px] lg:text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                +
              </span>
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Mobile App Design
              </span>
            </div>

            {/* Row 3: Website & Wireframe */}
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#181714] text-white font-medium text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Website
              </span>
              <span className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform whitespace-nowrap cursor-default">
                Wireframe
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 
        MOBILE VIEW (< md: 768px):
        Clean, balanced presentation where the 3D character is proudly positioned
        at the bottom sitting flush on the marquee ribbon, preceded by clear tagline,
        social links, and all authentic skill pills.
      */}
      <div className="flex md:hidden flex-col items-center max-w-md mx-auto">
        {/* Mobile Tagline */}
        <p className="text-xs sm:text-sm font-medium text-center text-stone-700 dark:text-stone-300 max-w-xs mb-3.5 sm:mb-4">
          Professional UI/UX designer with great creativity!
        </p>

        {/* Mobile Follow Me On & Social Icons */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <span className="text-xs font-semibold text-stone-700 dark:text-stone-300">
            Follow Me:
          </span>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.socials.behance}
              target="_blank"
              rel="noreferrer"
              aria-label="Behance profile"
              className="w-7 h-7 rounded-full bg-[#181714] text-white flex items-center justify-center hover:bg-[#F6A81C] hover:text-black transition-all shadow-sm"
            >
              <BehanceIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="w-7 h-7 rounded-full bg-[#181714] text-white flex items-center justify-center hover:bg-[#F6A81C] hover:text-black transition-all shadow-sm"
            >
              <LinkedInIcon className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram profile"
              className="w-7 h-7 rounded-full bg-[#181714] text-white flex items-center justify-center hover:bg-[#F6A81C] hover:text-black transition-all shadow-sm"
            >
              <InstagramIcon className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Mobile Skill Badges: Neatly balanced chips */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 max-w-sm mb-3 px-2">
          <span className="px-3 py-1 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs shadow-sm">
            CSS3
          </span>
          <span className="px-3 py-1 rounded-full bg-[#181714] text-white font-medium text-xs shadow-sm">
            Html5
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs shadow-sm">
            Javascript
          </span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181714] text-white font-medium text-xs shadow-sm">
            <span>Tailwind css</span>
            <span className="w-3 h-3 rounded-full bg-[#F6A81C] text-black text-[9px] font-bold flex items-center justify-center">
              +
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#181714] text-white font-medium text-xs shadow-sm">
            Prototype
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs shadow-sm">
            Dashboard
          </span>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs shadow-sm">
            <span>+ Mobile App</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#181714] text-white font-medium text-xs shadow-sm">
            Next JS
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs shadow-sm">
            React JS
          </span>
          <span className="px-3 py-1 rounded-full bg-[#181714] text-white font-medium text-xs shadow-sm">
            Website
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F6A81C] text-stone-900 font-bold text-xs shadow-sm">
            Wireframe
          </span>
        </div>

        {/* Mobile Avatar Character: Centered, LARGE, and sitting FLUSH on top of marquee */}
        <div className="relative w-full max-w-[320px] sm:max-w-[380px] flex justify-center items-end self-end">
          {/* Large wavy circular backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] pointer-events-none">
            <img
              src="/assets/aistudio/Group_1203_ec7a94f0.png"
              alt=""
              aria-hidden="true"
              className="w-72 h-72 sm:w-80 sm:h-80 object-contain rounded-full opacity-80 dark:opacity-30 dark:brightness-75 dark:hue-rotate-180"
            />
          </div>

          {/* Large 3D Character sitting flush on marquee */}
          <div className="relative z-10 w-full flex justify-center">
            <img
              src="/assets/aistudio/men_2_71a6d729.png"
              alt="Kavinkumar - 3D illustrated avatar smiling in navy suit"
              className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain mx-auto block -mb-[1px]"
              width="500"
              height="600"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

