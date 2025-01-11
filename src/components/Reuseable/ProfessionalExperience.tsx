import React from "react";
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";

// Define the types for the props
interface Experience {
  company: string;
  position: string;
  duration: string;
  details: string[];
}

interface ProfessionalExperienceProps {
  experiences: Experience[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  experiences,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Professional Experience" />
      <div className="flex flex-col gap-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            position={experience.position}
            duration={experience.duration}
            details={experience.details}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
