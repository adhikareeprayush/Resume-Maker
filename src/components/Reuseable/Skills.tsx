import React from "react";
import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";

// Define the types for the props
interface Skill {
  skill: string;
  profiency: string[];
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skillObj, index) => (
          <SkillCard
            key={index}
            skill={skillObj.skill}
            profiency={skillObj.profiency}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
