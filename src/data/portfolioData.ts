export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  iconType: 'figma' | 'canva' | 'html5' | 'css3' | 'javascript' | 'react' | 'nextjs' | 'tailwind';
  category: 'design' | 'code';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  isDark?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  layout: 'image-left' | 'image-right';
  deliverables?: string[];
  link?: string;
}

export interface ExperienceItem {
  id: string;
  type: 'education' | 'work';
  title: string;
  organization: string;
  roleOrDegree: string;
  years: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Kavinkumar',
  fullName: 'Kavinkumar V',
  title: 'UI/UX Designer',
  heroHeadline: "I'm Kavinkumar",
  heroDescription: 'Professional UI/UX designer with great creativity!',
  aboutBio:
    "I'm Kavinkumar V, a UI/UX Designer with a web development background. I create clean, user-friendly, and responsive digital experiences using Figma, user research, wireframing, and prototyping.",
  footerBio:
    "I'm Kavinkumar V, a passionate UI/UX Designer with a background in web development, creating intuitive, visually appealing, and user-friendly digital experiences.",
  phone: '+91-7339451207',
  phoneCallUrl: 'tel:+917339451207',
  email: 'kavinmahi.cs@gmail.com',
  address: 'Erode, Tamil Nadu, India',
  socials: {
    behance: 'https://www.behance.net/Kavinmahi',
    linkedin: 'https://www.linkedin.com/in/kavinkumarv/',
    instagram: 'https://www.instagram.com/uidesigner_001/',
  },
  resumeUrl: '/assets/aistudio/kavinkumar-resume_52a98029.pdf',
  resumePreviewUrl: '/assets/aistudio/kavinkumar-resume_88c7a99c.png',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ui-design',
    number: '01.',
    title: 'UI Design',
    description:
      'Creating modern, consistent, and visually engaging interfaces for web and mobile applications.',
    isDark: true,
  },
  {
    id: 'ux-design',
    number: '02.',
    title: 'UX Design',
    description:
      'Conducting comprehensive user research, intuitive user journeys, wireframes, usability audits, and iterative interactive prototyping.',
    isDark: false,
  },
  {
    id: 'web-dev',
    number: '03.',
    title: 'Web Development',
    description:
      'Transforming aesthetic designs into blazing-fast, responsive, semantic, and pixel-perfect web experiences with modern front-end tech.',
    isDark: false,
  },
];

export const SKILLS: SkillItem[] = [
  { id: 'figma', name: 'Figma', percentage: 95, iconType: 'figma', category: 'design' },
  { id: 'canva', name: 'Canva', percentage: 85, iconType: 'canva', category: 'design' },
  { id: 'html5', name: 'Html5', percentage: 95, iconType: 'html5', category: 'code' },
  { id: 'css3', name: 'CSS3', percentage: 95, iconType: 'css3', category: 'code' },
  { id: 'javascript', name: 'Javascript', percentage: 95, iconType: 'javascript', category: 'code' },
  { id: 'react', name: 'React JS', percentage: 90, iconType: 'react', category: 'code' },
  { id: 'nextjs', name: 'Next JS', percentage: 85, iconType: 'nextjs', category: 'code' },
  { id: 'tailwind', name: 'Tailwind CSS', percentage: 85, iconType: 'tailwind', category: 'code' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'innsync',
    title: 'InnSync – Hotel Service Management App',
    subtitle: 'Hotel Service Management App',
    description:
      'A modern hotel service app designed to simplify guest requests, streamline hotel operations, and create a seamless guest experience.',
    tags: ['UI/UX Design', 'App Design'],
    image: '/assets/aistudio/Group_1113_baafe4c6.png',
    imageAlt: 'InnSync Hotel Service Management App Mockups',
    layout: 'image-left',
    deliverables: ['Mobile UI System', 'Guest Order Flow', 'Staff Task Dashboard', 'Interactive Prototyping'],
  },
  {
    id: 'zutail',
    title: 'ZuTail – Website Redesign',
    subtitle: 'Pet Care & Grooming Website Redesign',
    description:
      'A modern website redesign focused on improving visual appeal, simplifying navigation, and creating a seamless, user-friendly browsing experience.',
    tags: ['UI/UX Design', 'App Design', 'Website Redesign'],
    image: '/assets/aistudio/Group_1121_cb755bd4.png',
    imageAlt: 'ZuTail Pet Grooming Website Redesign Presentation',
    layout: 'image-right',
    deliverables: ['Brand Refresh', 'Booking Flow Redesign', 'Responsive Web Layout', 'Component Library'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'edu-1',
    type: 'education',
    title: 'Education',
    organization: 'Mahendra Institute of Technology',
    roleOrDegree: 'Bachelor of Engineering',
    years: '2018-2022',
  },
  {
    id: 'work-1',
    type: 'work',
    title: 'Work Experience',
    organization: 'Jicate Solutions',
    roleOrDegree: 'Web Developer',
    years: '2024-2025',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Research & Analyze',
    description:
      'Understanding users, business goals, and product requirements to build meaningful experiences.',
  },
  {
    step: '02',
    title: 'Plan & Strategize',
    description:
      'Defining product direction, user flows, and experience foundations for seamless usability.',
  },
  {
    step: '03',
    title: 'Design & Prototype',
    description:
      'Creating modern, intuitive, and visually engaging interfaces focused on user interaction.',
  },
  {
    step: '04',
    title: 'Refine & Deliver',
    description:
      'Finalizing polished designs, design systems, and developer-ready assets for launch.',
  },
];

export const HERO_FLOATING_TAGS = {
  left: [
    { text: 'CSS3', bg: 'bg-[#F6A81C]', textCol: 'text-stone-900', border: 'border-transparent' },
    { text: 'Html5', bg: 'bg-[#151412]', textCol: 'text-white', border: 'border-stone-800' },
    { text: 'Javascript', bg: 'bg-[#F6A81C]', textCol: 'text-stone-900', border: 'border-transparent' },
    { text: 'Tailwind css', bg: 'bg-[#151412]', textCol: 'text-white', border: 'border-stone-800', hasPlus: true },
    { text: 'Next JS', bg: 'bg-[#151412]', textCol: 'text-white', border: 'border-stone-800' },
    { text: 'React JS', bg: 'bg-[#F6A81C]', textCol: 'text-stone-900', border: 'border-transparent' },
  ],
  right: [
    { text: 'Prototype', bg: 'bg-[#151412]', textCol: 'text-white', border: 'border-stone-800' },
    { text: 'Dashboard', bg: 'bg-[#F6A81C]', textCol: 'text-stone-900', border: 'border-transparent' },
    { text: 'Mobile App Design', bg: 'bg-[#F6A81C]', textCol: 'text-stone-900', border: 'border-transparent', hasPlusPrefix: true },
    { text: 'Website', bg: 'bg-[#151412]', textCol: 'text-white', border: 'border-stone-800' },
    { text: 'Wireframe', bg: 'bg-[#F6A81C]', textCol: 'text-stone-900', border: 'border-transparent' },
  ],
};
