import React from "react";

interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  details: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  duration,
  details,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between gap-1 mb-2">
      <div className="flex flex-col">
        <span className="text-gray-900 text-sm font-medium">{degree}</span>
        <span className="text-sm text-gray-600">{institution}</span>
        <ul className="list-disc text-sm pl-4 text-gray-600 mt-1">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <span className="text-sm text-gray-600">{duration}</span>
    </div>
  );
};

export default EducationCard;