import React from 'react';

interface ProjectCardProps {
  name: string;
  company: string;
  duration: string;
  details: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  company,
  duration,
  details,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between gap-1 mb-2">
      <div className="flex flex-col">
        <span className="text-gray-900 text-sm font-medium">
          {name}, {company}
        </span>
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

export default ProjectCard;
