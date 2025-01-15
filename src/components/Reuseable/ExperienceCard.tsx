import React from "react";

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  details: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  company,
  duration,
  details,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
      <div className="flex flex-col">
        <span className="font-semibold text-base text-gray-800">
          {position} <span className="text-blue-600">@</span> {company}
        </span>
        <ul className="list-disc text-sm font-normal pl-6 text-gray-600 mt-2 space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="hover:text-gray-800 transition-colors">{detail}</li>
          ))}
        </ul>
      </div>
      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full h-fit">
        {duration}
      </span>
    </div>
  );
};

export default ExperienceCard;
