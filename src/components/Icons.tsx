import React from 'react';

export const StarSparkle = ({ className = 'w-4 h-4 text-[#F6A81C]' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const SectionBadge = ({
  text,
  isDark = false,
}: {
  text: string;
  isDark?: boolean;
}) => (
  <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-wide">
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F6A81C] text-stone-900 shadow-sm">
      <span className="text-xs font-bold leading-none">✦</span>
    </div>
    <div className="flex items-center justify-center w-6 h-6 -ml-2 rounded-full bg-[#F6A81C] text-stone-900 shadow-sm">
      <span className="text-[10px] font-bold leading-none">➔</span>
    </div>
    <span
      className={`ml-1 text-xs md:text-sm font-medium ${
        isDark ? 'text-stone-200' : 'text-stone-800'
      }`}
    >
      {text}
    </span>
  </div>
);

export const ArrowUpRightIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const SkillIcon = ({
  type,
  className = 'w-8 h-8',
}: {
  type: string;
  className?: string;
}) => {
  switch (type) {
    case 'figma':
      return (
        <svg viewBox="0 0 38 57" className={className} aria-label="Figma logo">
          <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#0ACF83"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#1ABCFE"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M19 19V38H28.5C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19H19Z" fill="#A259FF"/>
        </svg>
      );
    case 'canva':
      return (
        <div className={`${className} rounded-full bg-[#00C4CC] flex items-center justify-center text-white font-bold text-xs select-none shadow-sm`}>
          <span className="italic font-serif text-sm">C</span>
        </div>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 512 512" className={className} aria-label="HTML5 logo">
          <path fill="#E44D26" d="M71.2 460.6L36.8 64h438.4l-34.4 396.6L256 507.2z"/>
          <path fill="#F16529" d="M256 472.4l152.8-40.4L436.4 96H256z"/>
          <path fill="#EBEBEB" d="M256 208h-68.8l-4.8-54.4H256V96H119.2l14.4 166.4H256zm0 156.4l-.8.2-64.8-17.6-4.2-46.6h-54.4l8.2 92.4 116 32.2z"/>
          <path fill="#FFFFFF" d="M256 208v57.6h63.6l-6 66.8-57.6 15.6v58.2l105.8-29.4 14.2-168.8zm0-112v57.6h136.8l4.8-57.6z"/>
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 512 512" className={className} aria-label="CSS3 logo">
          <path fill="#1572B6" d="M71.2 460.6L36.8 64h438.4l-34.4 396.6L256 507.2z"/>
          <path fill="#33A9DC" d="M256 472.4l152.8-40.4L436.4 96H256z"/>
          <path fill="#EBEBEB" d="M256 208h-68.8l-4.8-54.4H256V96H119.2l14.4 166.4H256zm0 156.4l-.8.2-64.8-17.6-4.2-46.6h-54.4l8.2 92.4 116 32.2z"/>
          <path fill="#FFFFFF" d="M256 208v57.6h63.6l-6 66.8-57.6 15.6v58.2l105.8-29.4 14.2-168.8zm0-112v57.6h136.8l4.8-57.6z"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 512 512" className={className} aria-label="JavaScript logo">
          <path fill="#F7DF1E" d="M0 0h512v512H0z"/>
          <path fill="#000000" d="M294.5 399.7c7 12 16.5 21 34.5 21 17.5 0 28.5-8.5 28.5-20.5 0-14-11.5-19.5-30.5-27.5l-10.5-4.5c-30-13-50-29.5-50-64.5 0-32 25-56 64-56 28 0 48 11 63 36l-25 16c-8-14-18-19.5-38-19.5-15 0-25 9-25 19.5 0 13 8 18 26.5 25.5l10.5 4.5c36 15 54 30.5 54 67.5 0 38.5-30.5 59.5-70.5 59.5-39.5 0-64.5-18.5-76-43.5l24.5-13.5zm-152-3.5c6 10.5 13 18 25 18 13.5 0 22-8.5 22-29.5V250h36v135.5c0 38.5-22 55.5-54 55.5-28 0-46-14-55-35.5l26-19.3z"/>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} aria-label="React logo">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <div className={`${className} rounded-full bg-black flex items-center justify-center text-white font-bold select-none`}>
          <span className="text-sm font-black tracking-tighter">N</span>
        </div>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#38BDF8" aria-label="Tailwind CSS logo">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      );
    default:
      return null;
  }
};

export const BehanceIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <span className={`${className} font-bold text-xs inline-flex items-center justify-center`}>
    Bē
  </span>
);

export const LinkedInIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <span className={`${className} font-bold text-xs inline-flex items-center justify-center`}>
    in
  </span>
);

export const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Instagram"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const GraduationCapIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Education"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export const BriefcaseIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Work experience"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
