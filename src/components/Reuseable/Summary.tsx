import React from "react";
import SectionHeader from "./SectionHeader";

interface SummaryProps {
  title: string; // The title of the summary section
  content: string; // The content or description text
}

const Summary: React.FC<SummaryProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col ">
      <SectionHeader title={title} />
      <p className="text-neutral-600">{content}</p>
    </div>
  );
};

export default Summary;
