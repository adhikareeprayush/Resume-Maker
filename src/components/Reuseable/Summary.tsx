import React from "react";
import SectionHeader from "./SectionHeader";

interface SummaryProps {
  title: string;
  content: string;
}

const Summary: React.FC<SummaryProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col space-y-2">
      <SectionHeader title={title} />
      <p className="text-neutral-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default Summary;