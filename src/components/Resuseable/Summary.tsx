import React from "react";

interface SummaryProps {
  title: string; // The title of the summary section
  content: string; // The content or description text
}

const Summary: React.FC<SummaryProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col">
      <h5 className="text-xl font-medium font-sans">{title}</h5>
      <hr className="h-[1px] w-full bg-slate-700 mb-1" />
      <p className="text-neutral-600">{content}</p>
    </div>
  );
};

export default Summary;
