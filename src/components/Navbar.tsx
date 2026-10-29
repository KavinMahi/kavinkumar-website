import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'My Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-5xl mx-auto transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className="w-full bg-[#131210]/95 backdrop-blur-md text-white rounded-full px-3.5 py-2 md:py-2.5 flex items-center justify-between shadow-2xl border border-stone-800/80"
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 pl-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6A81C] rounded-full"
        >
          <img
            src="/assets/aistudio/Group_1035_c357ad7c.png"
            alt="KK logo"
            className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-sm md:text-base tracking-tight text-white group-hover:text-[#F6A81C] transition-colors">
            Kavinkumar<span className="text-[#F6A81C]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9 text-xs lg:text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.label.toLowerCase().replace(/\s+/g, '') ||
              (activeSection === 'home' && item.label === 'Home');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 hover:text-[#F6A81C] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F6A81C] rounded px-1 py-0.5 ${
                  isActive ? 'text-[#F6A81C] font-semibold' : 'text-stone-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-8 h-8 rounded-full border border-stone-700/80 hover:border-[#F6A81C] bg-stone-900/60 flex items-center justify-center text-stone-300 hover:text-[#F6A81C] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6A81C] active:scale-95"
          >
            {theme === 'dark' ? (
              /* Sun icon when dark (click to become light) */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#F6A81C]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon / Sun setting icon from original reference */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-stone-300"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Let's Talk CTA button -> Directly calls mobile number */}
          <a
            href={PERSONAL_INFO.phoneCallUrl}
            aria-label={`Call Kavinkumar at ${PERSONAL_INFO.phone}`}
            className="bg-white text-stone-900 hover:bg-[#F6A81C] hover:text-black font-semibold text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6A81C] inline-flex items-center justify-center cursor-pointer"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#181714] border border-stone-800 rounded-2xl p-4 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-200 hover:text-[#F6A81C] py-2 px-3 rounded-lg text-sm font-medium hover:bg-stone-900/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.phoneCallUrl}
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#F6A81C] text-stone-950 text-center font-bold py-2.5 px-3 rounded-xl text-sm shadow transition-colors block mt-1"
          >
            Let&apos;s Talk ({PERSONAL_INFO.phone})
          </a>
        </div>
      )}
    </header>
  );
};
