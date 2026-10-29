/**
 * Pure helper and validation functions for portfolio data & forms.
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  featured?: boolean;
}

export function filterProjectsByTag(projects: ProjectItem[], selectedTag: string): ProjectItem[] {
  if (!selectedTag || selectedTag.toLowerCase() === 'all') {
    return projects;
  }
  return projects.filter(p =>
    p.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())
  );
}

export function formatSkillLevel(percentage: number): { label: string; widthPercent: string } {
  const bounded = Math.max(0, Math.min(100, percentage));
  let label = 'Proficient';
  if (bounded >= 95) label = 'Mastery';
  else if (bounded >= 90) label = 'Expert';
  else if (bounded >= 80) label = 'Advanced';
  else label = 'Intermediate';

  return {
    label,
    widthPercent: `${bounded}%`,
  };
}
