import React from 'react';
import type { HistoryState } from '../types';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';

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

    // Prepare for download by adjusting styles temporarily if on mobile
    const isMobile = window.innerWidth < 768;
    
    // Save original styles to restore later
    let originalStyles: Record<string, string> = {};
    if (isMobile) {
      // Capture original styles
      const resumePreviewElement = document.getElementById('resume-preview');
      if (resumePreviewElement) {
        originalStyles = {
          padding: resumePreviewElement.style.padding,
          margin: resumePreviewElement.style.margin,
        };
        
        // Apply temporary mobile-friendly print styles
        resumePreviewElement.style.padding = '5mm';
        resumePreviewElement.style.margin = '0';
        
        // Fix date display for download
        const dateElements = resumePreviewElement.querySelectorAll('.duration-text');
        dateElements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.marginRight = '10px';
            el.style.overflow = 'visible';
          }
        });
      }
    }
    
    const opt = {
      margin: [5, 5, 5, 5], // Reduced margins
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        width: 210 * 3.78, // A4 width in px
        windowWidth: 210 * 3.78 // Force specific width
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      await html2pdf().set(opt).from(element).save();
      
      // Restore original styles after download
      if (isMobile) {
        const resumePreviewElement = document.getElementById('resume-preview');
        if (resumePreviewElement) {
          Object.entries(originalStyles).forEach(([prop, value]) => {
            resumePreviewElement.style[prop as any] = value;
          });
        }
      }
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
          className="bg-black text-white px-4 py-2 sm:px-8 sm:py-4 rounded-2xl font-medium hover:bg-gray-900 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-xl active:translate-y-0 active:shadow-md flex items-center gap-3"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download PDF</span>
        </button>
      </div>

      <div className="resume-container overflow-auto">
        <div
          id="resume-preview"
          className="w-full max-w-[210mm] mx-auto bg-white shadow-2xl rounded-lg p-8 a4-size transform transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] scale-100 hover:scale-[1.01] overflow-visible"
        >
          {template === "modern" ? (
            <ModernTemplate state={state} refs={refs} />
          ) : (
            <ProfessionalTemplate state={state} refs={refs} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;