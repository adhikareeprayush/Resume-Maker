import React from "react";

interface SkillCardProps {
  skill: string;
  profiency: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, profiency }) => {
  return (
    <div className="flex flex-col p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200">
      <h3 className="font-semibold text-gray-800 mb-2">{skill}</h3>
      <div className="flex flex-wrap gap-2">
        {profiency.map((level, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
          >
            {level}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;