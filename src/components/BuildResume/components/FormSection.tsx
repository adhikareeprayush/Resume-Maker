import React from 'react';
import { Trash2, Briefcase, GraduationCap, Code, Link, User, FileText, Award } from 'lucide-react';
import { Section } from './ui/Section';
import { Input } from './ui/Input';
import { RichTextEditor } from './ui/RichTextEditor';
import { DraggableItem } from './DraggableItem';
import type { HistoryState, FormSectionHandlers } from '../types';

interface FormSectionProps {
  state: HistoryState & {
    collapsedSections: Set<string>;
  };
  handlers: FormSectionHandlers;
  refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
  toggleSection: (sectionId: string) => void;
  addToHistory: (state: HistoryState) => void;
  getCurrentState: () => HistoryState;
  scrollToSection: (
    ref: React.RefObject<HTMLDivElement>,
    isMobile: boolean
  ) => void;
}

const FormSection: React.FC<FormSectionProps> = ({
  state,
  handlers,
  refs,
  toggleSection,
  addToHistory,
  getCurrentState,
  scrollToSection,
}) => {
  const handleHeadlineChange = (
    field: keyof typeof state.headlineData,
    value: string
  ) => {
    const newData = { ...state.headlineData, [field]: value };
    handlers.setHeadlineData(newData);
    addToHistory({ ...getCurrentState(), headlineData: newData });
    scrollToSection(refs.headline, window.innerWidth < 1024);
  };

  const handleSummaryChange = (value: string) => {
    handlers.setSummaryContent(value);
    addToHistory({ ...getCurrentState(), summaryContent: value });
    scrollToSection(refs.summary, window.innerWidth < 1024);
  };

  const handleEducationChange = (
    index: number,
    field: keyof (typeof state.educationData)[0],
    value: string
  ) => {
    const updatedEducation = [...state.educationData];
    if (field === 'details') {
      updatedEducation[index][field] = value.split('\n');
    } else {
      updatedEducation[index][field] = value;
    }
    handlers.setEducationData(updatedEducation);
    addToHistory({ ...getCurrentState(), educationData: updatedEducation });
    scrollToSection(refs.education, window.innerWidth < 1024);
  };

  const handleExperienceChange = (
    index: number,
    field: keyof (typeof state.experienceData)[0],
    value: string
  ) => {
    const updatedExperience = [...state.experienceData];
    if (field === 'details') {
      updatedExperience[index][field] = value.split('\n');
    } else {
      updatedExperience[index][field] = value;
    }
    handlers.setExperienceData(updatedExperience);
    addToHistory({ ...getCurrentState(), experienceData: updatedExperience });
    scrollToSection(refs.experience, window.innerWidth < 1024);
  };

  const handleProjectChange = (
    index: number,
    field: keyof (typeof state.projectsData)[0],
    value: string
  ) => {
    const updatedProjects = [...state.projectsData];
    if (field === 'details') {
      updatedProjects[index][field] = value.split('\n');
    } else {
      updatedProjects[index][field] = value;
    }
    handlers.setProjectsData(updatedProjects);
    addToHistory({ ...getCurrentState(), projectsData: updatedProjects });
    scrollToSection(refs.projects, window.innerWidth < 1024);
  };

  const handleSkillChange = (
    index: number,
    field: keyof (typeof state.skillsData)[0],
    value: string
  ) => {
    const updatedSkills = [...state.skillsData];
    if (field === 'profiency') {
      updatedSkills[index][field] = value.split('\n');
    } else {
      updatedSkills[index][field] = value;
    }
    handlers.setSkillsData(updatedSkills);
    addToHistory({ ...getCurrentState(), skillsData: updatedSkills });
    scrollToSection(refs.skills, window.innerWidth < 1024);
  };

  const handleProfileLinkChange = (
    index: number,
    field: keyof (typeof state.profileLinksData)[0],
    value: string
  ) => {
    const updatedLinks = [...state.profileLinksData];
    updatedLinks[index][field] = value;
    handlers.setProfileLinksData(updatedLinks);
    addToHistory({ ...getCurrentState(), profileLinksData: updatedLinks });
    scrollToSection(refs.profileLinks, window.innerWidth < 1024);
  };

  const addEducation = () => {
    const newEducation = {
      degree: '',
      institution: '',
      duration: '',
      details: [''],
    };
    const updatedEducation = [...state.educationData, newEducation];
    handlers.setEducationData(updatedEducation);
    addToHistory({ ...getCurrentState(), educationData: updatedEducation });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = state.educationData.filter((_, i) => i !== index);
    handlers.setEducationData(updatedEducation);
    addToHistory({ ...getCurrentState(), educationData: updatedEducation });
  };

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      duration: '',
      details: [''],
    };
    const updatedExperience = [...state.experienceData, newExperience];
    handlers.setExperienceData(updatedExperience);
    addToHistory({ ...getCurrentState(), experienceData: updatedExperience });
  };

  const removeExperience = (index: number) => {
    const updatedExperience = state.experienceData.filter(
      (_, i) => i !== index
    );
    handlers.setExperienceData(updatedExperience);
    addToHistory({ ...getCurrentState(), experienceData: updatedExperience });
  };

  const addProject = () => {
    const newProject = {
      name: '',
      company: '',
      duration: '',
      details: [''],
    };
    const updatedProjects = [...state.projectsData, newProject];
    handlers.setProjectsData(updatedProjects);
    addToHistory({ ...getCurrentState(), projectsData: updatedProjects });
  };

  const removeProject = (index: number) => {
    const updatedProjects = state.projectsData.filter((_, i) => i !== index);
    handlers.setProjectsData(updatedProjects);
    addToHistory({ ...getCurrentState(), projectsData: updatedProjects });
  };

  const moveItem = <T extends unknown[]>(
    items: T,
    dragIndex: number,
    hoverIndex: number
  ): T => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    return newItems as T;
  };

  return (
    <div className="form-section p-6 md:p-8 space-y-6 bg-white shadow-lg border-r border-gray-100 overflow-y-auto">
      <div className="sticky top-0 z-10 bg-white pb-4 mb-4 border-b border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          Build Your Resume
        </h2>
        <p className="text-gray-500 mt-2">Fill in the sections below to create your professional resume</p>
      </div>

      <div className="space-y-6">
        <Section
          title="Personal Information"
          icon={<User size={18} />}
          isCollapsed={state.collapsedSections.has('headline')}
          onToggle={() => toggleSection('headline')}
        >
          <div className="space-y-4 p-1">
            <Input
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>}
              label="Name"
              value={state.headlineData.name}
              onChange={(e) => handleHeadlineChange('name', e.target.value)}
            />
            <Input
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>}
              label="Role"
              value={state.headlineData.role}
              onChange={(e) => handleHeadlineChange('role', e.target.value)}
            />
            <Input
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>}
              label="Location"
              value={state.headlineData.location}
              onChange={(e) => handleHeadlineChange('location', e.target.value)}
            />
            <Input
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>}
              label="Email"
              type="email"
              value={state.headlineData.email}
              onChange={(e) => handleHeadlineChange('email', e.target.value)}
            />
            <Input
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>}
              label="Phone"
              type="tel"
              value={state.headlineData.phone}
              onChange={(e) => handleHeadlineChange('phone', e.target.value)}
            />
          </div>
        </Section>

        <Section
          title="Professional Summary"
          icon={<FileText size={18} />}
          isCollapsed={state.collapsedSections.has('summary')}
          onToggle={() => toggleSection('summary')}>
          <div className="p-1">
            <p className="text-sm text-gray-500 mb-3">Write a brief overview of your professional background and key strengths.</p>
            <RichTextEditor
              content={state.summaryContent}
              onChange={handleSummaryChange}
              placeholder="Write a brief professional summary..."
            />
          </div>
        </Section>

        <Section
          title="Professional Experience"
          icon={<Briefcase size={18} />}
          isCollapsed={state.collapsedSections.has('experience')}
          onToggle={() => toggleSection('experience')}
          onAdd={addExperience}
        >
          <div className="space-y-4 p-1">
            {state.experienceData.length === 0 ? (
              <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                <Briefcase size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">No experience added yet</p>
                <button 
                  onClick={addExperience}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  + Add Experience
                </button>
              </div>
            ) : (
              state.experienceData.map((experience, index) => (
                <DraggableItem
                  key={index}
                  id={`experience-${index}`}
                  index={index}
                  moveItem={(dragIndex, hoverIndex) => {
                    const items = moveItem(
                      state.experienceData,
                      dragIndex,
                      hoverIndex
                    );
                    handlers.setExperienceData(items);
                    addToHistory({ ...getCurrentState(), experienceData: items });
                  }}
                >
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-gray-900">
                        {experience.position || 'New Position'}
                      </h4>
                      <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {index + 1}
                      </span>
                    </div>
                    <Input
                      label="Company"
                      value={experience.company}
                      onChange={(e) =>
                        handleExperienceChange(index, 'company', e.target.value)
                      }
                    />
                    <Input
                      label="Position"
                      value={experience.position}
                      onChange={(e) =>
                        handleExperienceChange(index, 'position', e.target.value)
                      }
                    />
                    <Input
                      label="Duration"
                      value={experience.duration}
                      onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                      placeholder="e.g., Jan 2020 - Present"
                    />
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Details
                      </label>
                      <p className="text-xs text-gray-500 mb-2">Add key responsibilities and achievements (one per line)</p>
                      <RichTextEditor
                        content={experience.details.join('\n')}
                        onChange={(value) => handleExperienceChange(index, 'details', value)}
                        placeholder="• Managed a team of 5 developers&#10;• Increased revenue by 20%&#10;• Implemented new CI/CD pipeline"
                      />
                    </div>
                    <button
                      onClick={() => removeExperience(index)}
                      className="mt-4 text-red-500 flex items-center gap-1.5 hover:text-red-600 text-sm font-medium transition-colors"
                    >
                      <Trash2 size={14} />
                      Remove Experience
                    </button>
                  </div>
                </DraggableItem>
              ))
            )}
          </div>
        </Section>

        <Section
          title="Education"
          icon={<GraduationCap size={18} />}
          isCollapsed={state.collapsedSections.has('education')}
          onToggle={() => toggleSection('education')}
          onAdd={addEducation}
        >
          <div className="space-y-4 p-1">
            {state.educationData.length === 0 ? (
              <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                <GraduationCap size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">No education added yet</p>
                <button 
                  onClick={addEducation}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  + Add Education
                </button>
              </div>
            ) : (
              state.educationData.map((education, index) => (
                <DraggableItem
                  key={index}
                  id={`education-${index}`}
                  index={index}
                  moveItem={(dragIndex, hoverIndex) => {
                    const items = moveItem(
                      state.educationData,
                      dragIndex,
                      hoverIndex
                    );
                    handlers.setEducationData(items);
                    addToHistory({ ...getCurrentState(), educationData: items });
                  }}
                >
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-gray-900">
                        {education.degree || 'New Degree'}
                      </h4>
                      <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {index + 1}
                      </span>
                    </div>
                    <Input
                      label="Degree"
                      value={education.degree}
                      onChange={(e) =>
                        handleEducationChange(index, 'degree', e.target.value)
                      }
                    />
                    <Input
                      label="Institution"
                      value={education.institution}
                      onChange={(e) =>
                        handleEducationChange(index, 'institution', e.target.value)
                      }
                    />
                    <Input
                      label="Duration"
                      value={education.duration}
                      onChange={(e) => handleEducationChange(index, 'duration', e.target.value)}
                      placeholder="e.g., 2016 - 2020"
                    />
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Details
                      </label>
                      <p className="text-xs text-gray-500 mb-2">Add achievements, GPA, honors (one per line)</p>
                      <RichTextEditor
                        content={education.details.join('\n')}
                        onChange={(value) => handleEducationChange(index, 'details', value)}
                        placeholder="• GPA: 3.8/4.0&#10;• Dean's List&#10;• Relevant coursework"
                      />
                    </div>
                    <button
                      onClick={() => removeEducation(index)}
                      className="mt-4 text-red-500 flex items-center gap-1.5 hover:text-red-600 text-sm font-medium transition-colors"
                    >
                      <Trash2 size={14} />
                      Remove Education
                    </button>
                  </div>
                </DraggableItem>
              ))
            )}
          </div>
        </Section>

        <Section
          title="Skills"
          icon={<Award size={18} />}
          isCollapsed={state.collapsedSections.has('skills')}
          onToggle={() => toggleSection('skills')}
        >
          <div className="space-y-4 p-1">
            {state.skillsData.map((skill, index) => (
              <DraggableItem
                key={index}
                id={`skill-${index}`}
                index={index}
                moveItem={(dragIndex, hoverIndex) => {
                  const items = moveItem(state.skillsData, dragIndex, hoverIndex);
                  handlers.setSkillsData(items);
                  addToHistory({ ...getCurrentState(), skillsData: items });
                }}
              >
                <div className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">
                      {skill.skill || 'Skill Category'}
                    </h4>
                    <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <Input
                    label="Skill Category"
                    value={skill.skill}
                    onChange={(e) =>
                      handleSkillChange(index, 'skill', e.target.value)
                    }
                    placeholder="e.g., Programming Languages, Design Tools"
                  />
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills (one per line)
                    </label>
                    <textarea
                      className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] text-sm"
                      value={skill.profiency.join('\n')}
                      onChange={(e) =>
                        handleSkillChange(index, 'profiency', e.target.value)
                      }
                      placeholder="JavaScript&#10;TypeScript&#10;React&#10;Node.js"
                      rows={4}
                    />
                  </div>
                </div>
              </DraggableItem>
            ))}
          </div>
        </Section>

        <Section
          title="Projects"
          icon={<Code size={18} />}
          isCollapsed={state.collapsedSections.has('projects')}
          onToggle={() => toggleSection('projects')}
          onAdd={addProject}
        >
          <div className="space-y-4 p-1">
            {state.projectsData.length === 0 ? (
              <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                <Code size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">No projects added yet</p>
                <button 
                  onClick={addProject}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  + Add Project
                </button>
              </div>
            ) : (
              state.projectsData.map((project, index) => (
                <DraggableItem
                  key={index}
                  id={`project-${index}`}
                  index={index}
                  moveItem={(dragIndex, hoverIndex) => {
                    const items = moveItem(state.projectsData, dragIndex, hoverIndex);
                    handlers.setProjectsData(items);
                    addToHistory({ ...getCurrentState(), projectsData: items });
                  }}
                >
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-gray-900">
                        {project.name || 'New Project'}
                      </h4>
                      <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {index + 1}
                      </span>
                    </div>
                    <Input
                      label="Project Name"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(index, 'name', e.target.value)
                      }
                    />
                    <Input
                      label="Company/Organization"
                      value={project.company}
                      onChange={(e) =>
                        handleProjectChange(index, 'company', e.target.value)
                      }
                    />
                    <Input
                      label="Duration"
                      value={project.duration}
                      onChange={(e) => handleProjectChange(index, 'duration', e.target.value)}
                      placeholder="e.g., Jan 2022 - Mar 2022"
                    />
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Details
                      </label>
                      <p className="text-xs text-gray-500 mb-2">Add key features, technologies used, and outcomes (one per line)</p>
                      <RichTextEditor
                        content={project.details.join('\n')}
                        onChange={(value) => handleProjectChange(index, 'details', value)}
                        placeholder="• Built with React, Node.js, and MongoDB&#10;• Implemented user authentication&#10;• Increased conversion rate by 15%"
                      />
                    </div>
                    <button
                      onClick={() => removeProject(index)}
                      className="mt-4 text-red-500 flex items-center gap-1.5 hover:text-red-600 text-sm font-medium transition-colors"
                    >
                      <Trash2 size={14} />
                      Remove Project
                    </button>
                  </div>
                </DraggableItem>
              ))
            )}
          </div>
        </Section>

        <Section
          title="Profile Links"
          icon={<Link size={18} />}
          isCollapsed={state.collapsedSections.has('links')}
          onToggle={() => toggleSection('links')}
        >
          <div className="space-y-4 p-1">
            {state.profileLinksData.map((link, index) => (
              <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-gray-900">
                    {link.platform || 'Social Profile'}
                  </h4>
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                    {index + 1}
                  </span>
                </div>
                <Input
                  label="Platform"
                  value={link.platform}
                  onChange={(e) =>
                    handleProfileLinkChange(index, 'platform', e.target.value)
                  }
                  placeholder="e.g., LinkedIn, GitHub, Portfolio"
                />
                <Input
                  label="Username"
                  value={link.username}
                  onChange={(e) =>
                    handleProfileLinkChange(index, 'username', e.target.value)
                  }
                />
                <Input
                  label="URL"
                  value={link.url}
                  onChange={(e) =>
                    handleProfileLinkChange(index, 'url', e.target.value)
                  }
                  placeholder="https://"
                />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="h-20"></div> {/* Spacer for bottom fixed elements */}
    </div>
  );
};

export default FormSection;