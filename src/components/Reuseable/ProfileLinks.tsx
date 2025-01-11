import React from "react";
import SectionHeader from "./SectionHeader";

interface ProfileLink {
  platform: string; // Name of the platform (e.g., LinkedIn, GitHub)
  username: string; // The username or handle
  url: string; // The profile URL
}

interface ProfileLinksProps {
  profileLinks: ProfileLink[]; // Array of profile link objects
}

const ProfileLinks: React.FC<ProfileLinksProps> = ({ profileLinks }) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Profile Links" />
      <ul className="flex flex-col gap-2">
        {profileLinks.map((link, index) => (
          <li key={index}>
            <span className="font-medium">{link.platform}: </span>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {link.username}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileLinks;
