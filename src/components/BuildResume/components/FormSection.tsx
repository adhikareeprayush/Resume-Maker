import React from 'react';
import { Trash2 } from 'lucide-react';
import { Section } from './ui/Section';
import { Input } from './ui/Input';
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
  scrollToSection: (ref: React.RefObject<HTMLDivElement>, isMobile: boolean) => void;
}

const FormSection: React.FC<FormSectionProps> = ({
  state,
  handlers,
  refs,
  toggleSection,
  addToHistory,
  getCurrentState,
  scrollToSection
}) => {
  const handleHeadlineChange = (field: keyof typeof state.headlineData, value: string) => {
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

  const handleEducationChange = (index: number, field: keyof typeof state.educationData[0], value: string) => {
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

  const handleExperienceChange = (index: number, field: keyof typeof state.experienceData[0], value: string) => {
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

  const handleProjectChange = (index: number, field: keyof typeof state.projectsData[0], value: string) => {
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

  const handleSkillChange = (index: number, field: keyof typeof state.skillsData[0], value: string) => {
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

  const handleProfileLinkChange = (index: number, field: keyof typeof state.profileLinksData[0], value: string) => {
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
    const updatedExperience = state.experienceData.filter((_, i) => i !== index);
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

  const moveItem = <T extends unknown[]>(items: T, dragIndex: number, hoverIndex: number): T => {
    const dragItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    return newItems as T;
  };

  return (
    <div className="form-section p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Build Your Resume
      </h2>

      <Section
        title="Personal Information"
        isCollapsed={state.collapsedSections.has('headline')}
        onToggle={() => toggleSection('headline')}
      >
        <div className="space-y-4">
          <Input
            label="Name"
            value={state.headlineData.name}
            onChange={(e) => handleHeadlineChange('name', e.target.value)}
          />
          <Input
            label="Role"
            value={state.headlineData.role}
            onChange={(e) => handleHeadlineChange('role', e.target.value)}
          />
          <Input
            label="Location"
            value={state.headlineData.location}
            onChange={(e) => handleHeadlineChange('location', e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={state.headlineData.email}
            onChange={(e) => handleHeadlineChange('email', e.target.value)}
          />
          <Input
            label="Phone"
            type="tel"
            value={state.headlineData.phone}
            onChange={(e) => handleHeadlineChange('phone', e.target.value)}
          />
        </div>
      </Section>

      <Section
        title="Professional Summary"
        isCollapsed={state.collapsedSections.has('summary')}
        onToggle={() => toggleSection('summary')}
      >
        <textarea
          className="w-full p-3 border rounded-lg resize-none h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={state.summaryContent}
          onChange={(e) => handleSummaryChange(e.target.value)}
          placeholder="Write a brief professional summary..."
        />
      </Section>

      <Section
        title="Education"
        isCollapsed={state.collapsedSections.has('education')}
        onToggle={() => toggleSection('education')}
        onAdd={addEducation}
      >
        {state.educationData.map((education, index) => (
          <DraggableItem
            key={index}
            id={`education-${index}`}
            index={index}
            moveItem={(dragIndex, hoverIndex) => {
              const items = moveItem(state.educationData, dragIndex, hoverIndex);
              handlers.setEducationData(items);
              addToHistory({ ...getCurrentState(), educationData: items });
            }}
          >
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <Input
                label="Degree"
                value={education.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              />
              <Input
                label="Institution"
                value={education.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
              />
              <Input
                label="Duration"
                value={education.duration}
                onChange={(e) => handleEducationChange(index, 'duration', e.target.value)}
              />
              <textarea
                className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={education.details.join('\n')}
                onChange={(e) => handleEducationChange(index, 'details', e.target.value)}
                placeholder="Details (one per line)"
                rows={3}
              />
              <button
                onClick={() => removeEducation(index)}
                className="text-red-500 mt-2 flex items-center gap-1 hover:text-red-600"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          </DraggableItem>
        ))}
      </Section>

      <Section
        title="Professional Experience"
        isCollapsed={state.collapsedSections.has('experience')}
        onToggle={() => toggleSection('experience')}
        onAdd={addExperience}
      >
        {state.experienceData.map((experience, index) => (
          <DraggableItem
            key={index}
            id={`experience-${index}`}
            index={index}
            moveItem={(dragIndex, hoverIndex) => {
              const items = moveItem(state.experienceData, dragIndex, hoverIndex);
              handlers.setExperienceData(items);
              addToHistory({ ...getCurrentState(), experienceData: items });
            }}
          >
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <Input
                label="Company"
                value={experience.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              />
              <Input
                label="Position"
                value={experience.position}
                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
              />
              <Input
                label="Duration"
                value={experience.duration}
                onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
              />
              <textarea
                className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={experience.details.join('\n')}
                onChange={(e) => handleExperienceChange(index, 'details', e.target.value)}
                placeholder="Details (one per line)"
                rows={3}
              />
              <button
                onClick={() => removeExperience(index)}
                className="text-red-500 mt-2 flex items-center gap-1 hover:text-red-600"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          </DraggableItem>
        ))}
      </Section>

      <Section
        title="Skills"
        isCollapsed={state.collapsedSections.has('skills')}
        onToggle={() => toggleSection('skills')}
      >
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
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <Input
                label="Skill Category"
                value={skill.skill}
                onChange={(e) => handleSkillChange(index, 'skill', e.target.value)}
              />
              <textarea
                className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={skill.profiency.join('\n')}
                onChange={(e) => handleSkillChange(index, 'profiency', e.target.value)}
                placeholder="Skills (one per line)"
                rows={3}
              />
            </div>
          </DraggableItem>
        ))}
      </Section>

      <Section
        title="Projects"
        isCollapsed={state.collapsedSections.has('projects')}
        onToggle={() => toggleSection('projects')}
        onAdd={addProject}
      >
        {state.projectsData.map((project, index) => (
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
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <Input
                label="Project Name"
                value={project.name}
                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
              />
              <Input
                label="Company/Organization"
                value={project.company}
                onChange={(e) => handleProjectChange(index, 'company', e.target.value)}
              />
              <Input
                label="Duration"
                value={project.duration}
                onChange={(e) => handleProjectChange(index, 'duration', e.target.value)}
              />
              <textarea
                className="w-full p-3 border rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={project.details.join('\n')}
                onChange={(e) => handleProjectChange(index, 'details', e.target.value)}
                placeholder="Details (one per line)"
                rows={3}
              />
              <button
                onClick={() => removeProject(index)}
                className="text-red-500 mt-2 flex items-center gap-1 hover:text-red-600"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          </DraggableItem>
        ))}
      </Section>

      <Section
        title="Profile Links"
        isCollapsed={state.collapsedSections.has('links')}
        onToggle={() => toggleSection('links')}
      >
        {state.profileLinksData.map((link, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg mb-4">
            <Input
              label="Platform"
              value={link.platform}
              onChange={(e) => handleProfileLinkChange(index, 'platform', e.target.value)}
            />
            <Input
              label="Username"
              value={link.username}
              onChange={(e) => handleProfileLinkChange(index, 'username', e.target.value)}
            />
            <Input
              label="URL"
              value={link.url}
              onChange={(e) => handleProfileLinkChange(index, 'url', e.target.value)}
            />
          </div>
        ))}
      </Section>
    </div>
  );
};

export default FormSection;