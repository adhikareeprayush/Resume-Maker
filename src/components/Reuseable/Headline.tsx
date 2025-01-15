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
      <h4 className="text-2xl md:text-3xl font-bold font-sans">{name}</h4>
      <p className="font-sans text-lg md:text-xl text-black font-semibold">{role}</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm md:text-base">
        <span className="sm:pr-2 sm:border-r-[1px] sm:border-slate-800">{location}</span>
        <a
          href={`mailto:${email}`}
          className="underline sm:pr-2 sm:border-r-[1px] sm:border-slate-800"
        >
          {email}
        </a>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <hr className="h-[3px] w-full bg-black mt-1" />
    </div>
  );
};

export default Headline;
