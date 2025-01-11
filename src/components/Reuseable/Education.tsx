import React from "react";
import SectionHeader from "./SectionHeader";
import EducationCard from "./EducationCard";

interface EducationProps {
  educationData: {
    degree: string;
    institution: string;
    duration: string;
    details: string[];
  }[];
}

const Education: React.FC<EducationProps> = ({ educationData }) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Education" />
      <div className="flex flex-col gap-2">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            degree={education.degree}
            institution={education.institution}
            duration={education.duration}
            details={education.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
