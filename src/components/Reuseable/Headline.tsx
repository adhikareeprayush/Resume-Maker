import React from "react";

interface HeadlineProps {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
}

const Headline: React.FC<HeadlineProps> = ({
  name,
  role,
  location,
  email,
  phone,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <h4 className="text-2xl font-bold text-gray-900">{name}</h4>
      <p className="text-base font-medium text-gray-700 mt-1">{role}</p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 mt-2">
        <span>{location}</span>
        <span>•</span>
        <a href={`mailto:${email}`} className="hover:text-gray-900 transition-colors">
          {email}
        </a>
        <span>•</span>
        <a href={`tel:${phone}`} className="hover:text-gray-900 transition-colors">
          {phone}
        </a>
      </div>
      <div className="h-[2px] w-full bg-gray-200 mt-3"></div>
    </div>
  );
};

export default Headline;