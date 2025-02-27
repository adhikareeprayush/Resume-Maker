import React from 'react';
import type { HistoryState } from '../types';
import Headline from '../../Reuseable/Headline';
import Summary from '../../Reuseable/Summary';
import Education from '../../Reuseable/Education';
import ProfessionalExperience from '../../Reuseable/ProfessionalExperience';
import Skills from '../../Reuseable/Skills';
import Projects from '../../Reuseable/Projects';
import ProfileLinks from '../../Reuseable/ProfileLinks';

interface ModernTemplateProps {
  state: HistoryState;
  refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ state, refs }) => {
  // We need to pass a custom className to handle date elements
  const customClasses = {
    duration: "duration-text"
  };

  return (
    <div className="font-sans">
      <div ref={refs.headline}>
        <Headline {...state.headlineData} />
      </div>

      <div ref={refs.summary} className="mt-6">
        <Summary title="Summary" content={state.summaryContent} />
      </div>

      <div ref={refs.education} className="mt-6">
        <Education educationData={state.educationData} customClasses={customClasses} />
      </div>

      <div ref={refs.experience} className="mt-6">
        <ProfessionalExperience experiences={state.experienceData} customClasses={customClasses} />
      </div>

      <div ref={refs.skills} className="mt-6">
        <Skills skills={state.skillsData} />
      </div>

      <div ref={refs.projects} className="mt-6">
        <Projects projects={state.projectsData} customClasses={customClasses} />
      </div>

      <div ref={refs.profileLinks} className="mt-6">
        <ProfileLinks profileLinks={state.profileLinksData} />
      </div>
    </div>
  );
};

export default ModernTemplate;