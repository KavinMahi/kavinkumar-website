import React, { useState } from 'react';
import { BehanceIcon, LinkedInIcon, InstagramIcon, ArrowUpRightIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { validateEmail } from '../utils/portfolioLogic';

interface ContactFooterProps {
  onOpenContact: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenContact }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [legalModal, setLegalModal] = useState<{ title: string; content: string } | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(newsletterEmail)) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer
      id="contact"
      aria-label="Footer and Contact"
      className="bg-[#FAF7EE] dark:bg-[#0E0D0B] text-[#161513] dark:text-stone-200 pt-16 md:pt-20 pb-8 px-4 sm:px-6 md:px-8 border-t border-stone-300/60 dark:border-stone-800 transition-colors"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Call to action top banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#161513] dark:text-white transition-colors">
            Let&apos;s <span className="text-[#F6A81C]">Connect</span> there
          </h2>

          <div>
            <a
              href={PERSONAL_INFO.phoneCallUrl}
              aria-label={`Call Kavinkumar at ${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-3 bg-[#F6A81C] hover:bg-[#e29915] text-stone-950 font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 cursor-pointer"
            >
              <span>Contact Me</span>
              <span className="w-7 h-7 rounded-full bg-stone-950 text-white flex items-center justify-center">
                <ArrowUpRightIcon className="w-4 h-4 stroke-[2.5]" />
              </span>
            </a>
          </div>
        </div>

        {/* Dotted / Dashed Divider Line */}
        <div className="border-b border-dashed border-stone-300 dark:border-stone-800 w-full" />

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pt-2 text-left">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/aistudio/Group_1035_c357ad7c.png"
                alt="KK logo"
                className="w-8 h-8 rounded-full object-contain shadow-sm"
              />
              <span className="font-bold text-lg tracking-tight text-[#161513] dark:text-white transition-colors">
                Kavinkumar<span className="text-[#F6A81C]">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
              {PERSONAL_INFO.footerBio}
            </p>

            {/* Social Icons in golden/orange circles */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={PERSONAL_INFO.socials.behance}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance profile"
                className="w-8 h-8 rounded-full bg-[#F6A81C] text-stone-950 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-8 h-8 rounded-full bg-[#F6A81C] text-stone-950 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                className="w-8 h-8 rounded-full bg-[#F6A81C] text-stone-950 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#161513] dark:text-white tracking-tight">Navigation</h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-300">
              <li>
                <a href="#home" className="hover:text-[#F6A81C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F6A81C] transition-colors">
                  About US
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#F6A81C] transition-colors">
                  My work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F6A81C] transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#161513] dark:text-white tracking-tight">Contact</h3>
            <div className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-normal">
              <p>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-[#F6A81C] transition-colors block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[#F6A81C] transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p className="leading-relaxed text-stone-500 dark:text-stone-400">
                {PERSONAL_INFO.address}
              </p>
            </div>
          </div>

          {/* Column 4: Get Latest Updates (Newsletter) */}
          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#161513] dark:text-white tracking-tight">
              Get Latest Updates
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center bg-white dark:bg-[#161512] rounded-full border border-stone-300 dark:border-stone-700 p-1 pl-4 shadow-sm focus-within:border-stone-800 dark:focus-within:border-[#F6A81C] transition-colors">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Email Address"
                  aria-label="Email address for updates"
                  className="w-full bg-transparent text-xs sm:text-sm text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none pr-2"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="w-8 h-8 rounded-full bg-[#161513] dark:bg-[#F6A81C] hover:bg-[#F6A81C] dark:hover:bg-[#e29915] text-white dark:text-stone-950 flex items-center justify-center shrink-0 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3.5 h-3.5"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {errorMsg && (
                <p className="text-[11px] text-red-600 pl-2">{errorMsg}</p>
              )}

              {subscribed && (
                <p className="text-[11px] text-green-700 font-medium pl-2 animate-in fade-in">
                  ✓ Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-stone-500">
          <p>
            copyright © 2026 <span className="font-medium text-stone-700">Kavinkumar V.</span> All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setLegalModal({
                  title: 'Terms & Conditions',
                  content:
                    'All designs, interface concepts, visual assets, and project materials displayed on this portfolio are the creative work and property of Kavinkumar V. Unauthorized copying or redistribution without written permission is prohibited.',
                })
              }
              className="hover:text-stone-800 dark:hover:text-stone-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() =>
                setLegalModal({
                  title: 'Privacy Policy',
                  content:
                    'Your privacy is respected. Any contact information, emails, or project inquiries submitted through this portfolio website will remain confidential and will never be sold, rented, or shared with third parties.',
                })
              }
              className="hover:text-stone-800 dark:hover:text-stone-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* In-app Legal Modal */}
        {legalModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
          >
            <div className="relative w-full max-w-md bg-[#161512] text-stone-100 border border-stone-800 rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <h3 id="legal-modal-title" className="text-lg font-bold text-white">
                  {legalModal.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  aria-label="Close dialog"
                  className="w-7 h-7 rounded-full bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed font-normal">
                {legalModal.content}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="px-4 py-1.5 rounded-full bg-[#F6A81C] text-stone-950 text-xs font-bold hover:bg-[#e29915] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
