import React from 'react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in"
    >
      <div className="relative w-full max-w-3xl bg-[#181714] text-white border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="sticky top-0 float-right z-10 w-8 h-8 rounded-full bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#F6A81C]"
        >
          ✕
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1 rounded-full bg-[#F6A81C] text-stone-950 text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* High-Resolution Project Showcase Image */}
        <div className="rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 p-2 sm:p-4 mb-6">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* Key Deliverables & Process */}
        {project.deliverables && (
          <div className="mb-6 space-y-2">
            <h4 className="text-sm font-bold text-stone-200 uppercase tracking-wider">
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs sm:text-sm text-stone-300 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800"
                >
                  <span className="text-[#F6A81C] font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-400">
            Designed & Developed by Kavinkumar V
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-stone-700 text-stone-300 hover:text-white text-xs font-medium"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-5 py-2 rounded-full bg-[#F6A81C] hover:bg-[#e29915] text-stone-950 text-xs font-bold"
            >
              Inquire About Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
