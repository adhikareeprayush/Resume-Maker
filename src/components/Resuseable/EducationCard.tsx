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
    <div className="w-full flex justify-between">
      <div className="flex flex-col">
        <span className="font-semibold text-base">{degree}</span>
        <span className="text-md font-normal">{institution}</span>
        <ul className="list-disc text-sm font-normal pl-6 text-neutral-600">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <span className="text-base font-semibold">{duration}</span>
    </div>
  );
};

export default EducationCard;
