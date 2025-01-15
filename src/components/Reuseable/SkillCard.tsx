import React from "react";

interface SkillCardProps {
  skill: string;
  profiency: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, profiency }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-medium text-gray-900">{skill}</h3>
      <p className="text-sm text-gray-600">
        {profiency.join(", ")}
      </p>
    </div>
  );
};

export default SkillCard;