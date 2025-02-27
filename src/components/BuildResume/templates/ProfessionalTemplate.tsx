import React from 'react';
import type { HistoryState } from '../types';

interface ProfessionalTemplateProps {
  state: HistoryState;
  refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ state, refs }) => {
  return (
    <div className="flex flex-row gap-6 font-sans">
      {/* Left Column - Main Content */}
      <div className="w-[62%]">
        <div ref={refs.headline} className="mb-5">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">{state.headlineData.name}</h1>
          <h2 className="text-xl text-gray-700 mt-1 font-medium">{state.headlineData.role}</h2>
        </div>

        <div ref={refs.summary} className="mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2 section-title">
            About me
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{state.summaryContent}</p>
        </div>

        <div ref={refs.experience} className="mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-3 section-title">
            Experience
          </h3>
          {state.experienceData.map((exp, index) => (
            <div key={index} className="mb-4 group">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-black transition-colors">{exp.position}</h4>
                  <p className="text-sm text-gray-700 font-medium">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-600 font-medium bg-gray-100 px-2 py-0.5 rounded-full duration-text">{exp.duration}</span>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-gray-700">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div ref={refs.projects} className="mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-3 section-title">
            Key Projects
          </h3>
          {state.projectsData.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-700">{project.company}</p>
                </div>
                <span className="text-xs text-gray-600 font-medium bg-gray-100 px-2 py-0.5 rounded-full duration-text">{project.duration}</span>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-gray-700">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="w-[38%] bg-gray-50 p-4 rounded-lg">
        <div className="mb-5 bg-white p-3 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 section-title">Contact</h3>
          <div className="space-y-2 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-700">{state.headlineData.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-gray-700 break-all">{state.headlineData.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs text-gray-700">{state.headlineData.phone}</p>
            </div>
          </div>
        </div>

        <div ref={refs.skills} className="mb-5 bg-white p-3 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 section-title">Technical Expertise</h3>
          <div className="mt-3 space-y-3">
            {state.skillsData.map((skillGroup, index) => (
              <div key={index} className="mb-3">
                <h4 className="text-xs font-medium text-gray-900 mb-2">{skillGroup.skill}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.profiency.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={refs.education} className="mb-5 bg-white p-3 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 section-title">Education</h3>
          <div className="mt-3 space-y-3">
            {state.educationData.map((edu, index) => (
              <div key={index} className="mb-3">
                <h4 className="text-xs font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-xs text-gray-700">{edu.institution}</p>
                <p className="text-xs text-gray-600 font-medium bg-gray-100 inline-block px-2 py-0.5 rounded-full mt-1 duration-text">{edu.duration}</p>
                <ul className="mt-1.5 space-y-0.5 text-xs text-gray-700">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-500 mt-1.5"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div ref={refs.profileLinks} className="bg-white p-3 rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-2 section-title">Profile Links</h3>
          <div className="space-y-2 mt-3">
            {state.profileLinksData.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-black transition-colors"
              >
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium">{link.platform}</div>
                  <div className="text-xs text-gray-600">{link.username}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;