import React from "react";

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
    <div className="w-full flex justify-between">
      <div className="flex flex-col">
        <span className="font-semibold text-base">
          {name}, {company}
        </span>
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

export default ProjectCard;
