import React, { useState } from 'react';
import { validateContactForm, ContactFormData } from '../utils/portfolioLogic';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    projectType: 'UI/UX Design',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '', projectType: 'UI/UX Design' });
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
    >
      <div className="relative w-full max-w-lg bg-[#181714] text-white border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#F6A81C]"
        >
          ✕
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#F6A81C]">
            Get in touch
          </span>
          <h3 id="contact-modal-title" className="text-2xl font-bold text-white mt-1">
            Let&apos;s build something great
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Fill in the details below or email directly at{' '}
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#F6A81C] hover:underline">
              {PERSONAL_INFO.email}
            </a>
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h4 className="text-lg font-bold text-white">Message Sent!</h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Thank you for reaching out. Kavinkumar will respond to your inquiry shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-300 mb-1">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-[#12110F] border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#F6A81C]"
              />
              {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-stone-300 mb-1">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-[#12110F] border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#F6A81C]"
              />
              {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contact-project-type" className="block text-xs font-semibold text-stone-300 mb-1">
                Service Needed
              </label>
              <select
                id="contact-project-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-[#12110F] border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F6A81C]"
              >
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="App Design">Mobile App Design</option>
                <option value="Website Redesign">Website Redesign</option>
                <option value="Front-end Development">Web Development</option>
                <option value="Prototyping">Wireframing & Prototyping</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-300 mb-1">
                Project Overview / Message
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe what you would like to build..."
                className="w-full bg-[#12110F] border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#F6A81C]"
              />
              {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#F6A81C] hover:bg-[#e29915] text-stone-950 font-bold text-sm py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
