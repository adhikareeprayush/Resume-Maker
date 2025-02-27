import React from 'react';
import type { ProjectData } from '../BuildResume/types';

interface ProjectsProps {
  projects: ProjectData[];
  customClasses?: {
    duration?: string;
  };
}

const Projects: React.FC<ProjectsProps> = ({ projects, customClasses = {} }) => {
  if (projects.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="flex justify-between items-start flex-wrap">
              <div className="pr-2 max-w-[75%]">
                <h3 className="font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600">{project.company}</p>
              </div>
              <span className={`text-gray-500 text-sm ${customClasses.duration || ''}`}>
                {project.duration}
              </span>
            </div>
            <ul className="mt-2 list-disc list-inside text-gray-600 text-sm">
              {project.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
