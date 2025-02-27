import React from 'react';
import type { HistoryState } from '../types';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import Headline from '../../Reuseable/Headline';
import Summary from '../../Reuseable/Summary';
import Education from '../../Reuseable/Education';
import ProfessionalExperience from '../../Reuseable/ProfessionalExperience';
import Skills from '../../Reuseable/Skills';
import Projects from '../../Reuseable/Projects';
import ProfileLinks from '../../Reuseable/ProfileLinks';

interface PreviewSectionProps {
  state: HistoryState;
  refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
  template: "modern" | "professional";
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ state, refs, template }) => {
  const downloadResume = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="preview-section p-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          Preview
        </h2>
        <button
          onClick={downloadResume}
          className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-900 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl active:translate-y-0 active:shadow-md flex items-center gap-3"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>

      <div
        id="resume-preview"
        className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl rounded-lg p-12 a4-size transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] scale-100 hover:scale-[1.01]"
      >
        {template === "modern" ? (
          <ModernTemplate state={state} refs={refs} />
        ) : (
          <ProfessionalTemplate state={state} refs={refs} />
        )}
      </div>
    </div>
  );
};

export default PreviewSection;