import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

// Define the types for the project data
interface Project {
  name: string;
  company: string;
  duration: string;
  details: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Projects" />
      <div className="flex flex-col gap-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            company={project.company}
            duration={project.duration}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
