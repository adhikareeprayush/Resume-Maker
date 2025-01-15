import React from 'react';
import type { HistoryState } from '../types';
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
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ state, refs }) => {
  const downloadResume = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    const opt = {
      margin: [5, 0, 5, 0],
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="preview-section p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Preview</h2>
        <button
          onClick={downloadResume}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
        >
          Download PDF
        </button>
      </div>

      <div
        id="resume-preview"
        className="w-full max-w-[210mm] mx-auto bg-white shadow-lg rounded-lg p-8 a4-size"
      >
        <div ref={refs.headline}>
          <Headline {...state.headlineData} />
        </div>

        <div ref={refs.summary} className="mt-6">
          <Summary title="Summary" content={state.summaryContent} />
        </div>

        <div ref={refs.education} className="mt-6">
          <Education educationData={state.educationData} />
        </div>

        <div ref={refs.experience} className="mt-6">
          <ProfessionalExperience experiences={state.experienceData} />
        </div>

        <div ref={refs.skills} className="mt-6">
          <Skills skills={state.skillsData} />
        </div>

        <div ref={refs.projects} className="mt-6">
          <Projects projects={state.projectsData} />
        </div>

        <div ref={refs.profileLinks} className="mt-6">
          <ProfileLinks profileLinks={state.profileLinksData} />
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;