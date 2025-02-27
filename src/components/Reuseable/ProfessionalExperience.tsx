import React from 'react';
import type { ExperienceData } from '../BuildResume/types';

interface ProfessionalExperienceProps {
  experiences: ExperienceData[];
  customClasses?: {
    duration?: string;
  };
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({ 
  experiences,
  customClasses = {}
}) => {
  if (experiences.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Professional Experience</h2>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="flex justify-between items-start flex-wrap mb-1">
              <div className="pr-2 max-w-[65%]">
                <h3 className="font-semibold text-gray-800">{experience.position}</h3>
                <p className="text-gray-600">{experience.company}</p>
              </div>
              <span className={`text-gray-500 text-sm font-medium ${customClasses.duration || ''}`} title={experience.duration}>
                {experience.duration}
              </span>
            </div>
            <ul className="mt-2 list-disc list-inside text-gray-600 text-sm">
              {experience.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
