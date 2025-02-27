import React from 'react';
import type { EducationData } from '../BuildResume/types';

interface EducationProps {
  educationData: EducationData[];
  customClasses?: {
    duration?: string;
  };
}

const Education: React.FC<EducationProps> = ({ educationData, customClasses = {} }) => {
  if (educationData.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Education</h2>
      <div className="space-y-4">
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
            <div className="flex justify-between items-start flex-wrap">
              <div className="pr-2 max-w-[75%]">
                <h3 className="font-semibold text-gray-800">{education.degree}</h3>
                <p className="text-gray-600">{education.institution}</p>
              </div>
              <span className={`text-gray-500 text-sm ${customClasses.duration || ''}`}>
                {education.duration}
              </span>
            </div>
            <ul className="mt-2 list-disc list-inside text-gray-600 text-sm">
              {education.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
