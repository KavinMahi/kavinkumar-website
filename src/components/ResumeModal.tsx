import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7EE] dark:bg-[#161512] text-[#161513] dark:text-stone-100 border border-stone-300 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:m-0">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close CV dialog"
          className="sticky top-0 float-right z-10 w-8 h-8 rounded-full bg-stone-900 dark:bg-stone-800 text-white flex items-center justify-center transition-colors focus:outline-none print:hidden"
        >
          ✕
        </button>

        {/* Resume Header */}
        <div className="border-b border-stone-300 dark:border-stone-800 pb-5 mb-5">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/assets/aistudio/Group_1035_c357ad7c.png"
              alt="KK"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 id="resume-modal-title" className="text-2xl font-extrabold text-[#161513] dark:text-white">
                {PERSONAL_INFO.fullName}
              </h3>
              <p className="text-xs font-semibold text-[#F6A81C] uppercase tracking-wider">
                {PERSONAL_INFO.title} & Front-end Developer
              </p>
            </div>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
            📧 {PERSONAL_INFO.email} | 📞 {PERSONAL_INFO.phone} | 📍 {PERSONAL_INFO.address}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
            <a
              href={PERSONAL_INFO.socials.behance}
              target="_blank"
              rel="noreferrer"
              className="text-[#F6A81C] hover:underline font-medium"
            >
              Behance
            </a>
            <span className="text-stone-400">•</span>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#F6A81C] hover:underline font-medium"
            >
              LinkedIn
            </a>
            <span className="text-stone-400">•</span>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[#F6A81C] hover:underline font-medium"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-5 space-y-1.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-300">
            Professional Summary
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {PERSONAL_INFO.aboutBio}
          </p>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="bg-white dark:bg-[#1E1D19] p-4 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6A81C]">
              Work Experience
            </h4>
            {EXPERIENCES.filter((e) => e.type === 'work').map((e) => (
              <div key={e.id} className="text-xs">
                <p className="font-bold text-stone-900 dark:text-white">{e.roleOrDegree}</p>
                <p className="text-stone-600 dark:text-stone-300">{e.organization}</p>
                <p className="text-stone-400 font-mono text-[11px]">{e.years}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-[#1E1D19] p-4 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6A81C]">
              Education
            </h4>
            {EXPERIENCES.filter((e) => e.type === 'education').map((e) => (
              <div key={e.id} className="text-xs">
                <p className="font-bold text-stone-900 dark:text-white">{e.roleOrDegree}</p>
                <p className="text-stone-600 dark:text-stone-300">{e.organization}</p>
                <p className="text-stone-400 font-mono text-[11px]">{e.years}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-300">
            Core Competencies & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {SKILLS.map((skill) => (
              <span
                key={skill.id}
                className="px-2.5 py-1 bg-white dark:bg-[#1E1D19] border border-stone-300 dark:border-stone-700 rounded-md text-[11px] font-medium text-stone-800 dark:text-stone-200 shadow-2xs"
              >
                {skill.name} ({skill.percentage}%)
              </span>
            ))}
          </div>
        </div>

        {/* Attached Resume Document Preview */}
        <div className="mb-6 rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 shadow-md">
          <div className="p-2 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold flex items-center justify-between">
            <span>Kavinkumar V - Official Resume</span>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Kavinkumar_V_Resume.pdf"
              className="text-[#F6A81C] hover:underline font-bold"
            >
              Download PDF ↓
            </a>
          </div>
          <img
            src={PERSONAL_INFO.resumePreviewUrl}
            alt="Kavinkumar V Resume Preview"
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-300 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
          <span className="text-xs text-stone-500">
            Available for freelance and full-time opportunities
          </span>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Kavinkumar_V_Resume.pdf"
              className="px-4 py-2 rounded-full bg-[#F6A81C] hover:bg-[#e29915] text-stone-950 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              Download Resume (PDF)
            </a>
            <a
              href={PERSONAL_INFO.phoneCallUrl}
              className="px-4 py-2 rounded-full border border-stone-800 hover:bg-stone-800 hover:text-white dark:border-stone-700 dark:hover:bg-stone-700 text-xs font-bold transition-colors"
            >
              Call {PERSONAL_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
