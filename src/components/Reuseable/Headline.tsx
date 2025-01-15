import React from "react";

interface HeadlineProps {
  name: string; // Full name of the person
  role: string; // Job title or role
  location: string; // Address or location
  email: string; // Email address
  phone: string; // Phone number
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
      <h4 className="text-2xl md:text-3xl font-bold font-sans bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{name}</h4>
      <p className="font-sans text-lg md:text-xl text-gray-700 font-semibold mt-1">{role}</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm md:text-base mt-2 text-gray-600">
        <span className="sm:pr-2 sm:border-r-[1px] sm:border-gray-300 flex items-center gap-1">
          {location}
        </span>
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:text-blue-700 transition-colors sm:pr-2 sm:border-r-[1px] sm:border-gray-300 flex items-center gap-1"
        >
          {email}
        </a>
        <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
          {phone}
        </a>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600 mt-3 rounded-full"></div>
    </div>
  );
};

export default Headline;
