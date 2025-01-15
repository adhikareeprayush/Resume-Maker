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
    <div className="flex flex-col">
      <h4 className="text-2xl md:text-3xl font-bold font-sans text-gray-900">{name}</h4>
      <p className="font-sans text-lg md:text-xl text-gray-700 font-semibold mt-1">{role}</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm md:text-base mt-2 text-gray-600">
        <span className="sm:pr-2 sm:border-r-[1px] sm:border-gray-300 flex items-center gap-1">
          {location}
        </span>
        <a
          href={`mailto:${email}`}
          className="text-gray-700 hover:text-gray-900 transition-colors sm:pr-2 sm:border-r-[1px] sm:border-gray-300 flex items-center gap-1"
        >
          {email}
        </a>
        <a href={`tel:${phone}`} className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
          {phone}
        </a>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-gray-800 to-gray-600 mt-3 rounded-full"></div>
    </div>
  );
};

export default Headline;