import React from "react";

interface SkillCardProps {
  skill: string;
  profiency: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, profiency }) => {
  return (
    <div className="flex flex-col max-w-[300px]">
      <h3 className="font-medium">{skill}</h3>
      <ul className="flex items-center flex-wrap text-md gap-1">
        {profiency.map((level, index) => (
          <li key={index}>
            {level}
            {index == profiency.length - 1 ? "" : ","}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
