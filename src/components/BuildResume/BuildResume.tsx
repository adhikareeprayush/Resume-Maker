import React, { useState, useRef} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FormSection from './components/FormSection';
import PreviewSection from './components/PreviewSection';
import HistoryControls from './components/HistoryControls';
import { useHistory } from './hooks/useHistory';
import { useScrollHighlight } from './hooks/useScrollHighlight';
import { initialState } from './data/initialState';
import { initialState as initialState1 } from './data/initialState1';
import type { HistoryState } from './types';

interface BuildResumeProps {
  template: "modern" | "professional";
}

const BuildResume: React.FC<BuildResumeProps> = ({ template }) => {
  const defaultState = template === "modern" ? initialState : initialState1;

  // State management
  const [headlineData, setHeadlineData] = useState(defaultState.headlineData);
  const [summaryContent, setSummaryContent] = useState(defaultState.summaryContent);
  const [skillsData, setSkillsData] = useState(defaultState.skillsData);
  const [educationData, setEducationData] = useState(defaultState.educationData);
  const [experienceData, setExperienceData] = useState(defaultState.experienceData);
  const [projectsData, setProjectsData] = useState(defaultState.projectsData);
  const [profileLinksData, setProfileLinksData] = useState(defaultState.profileLinksData);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  // Refs for scrolling
  const refs = {
    headline: useRef<HTMLDivElement>(null),
    summary: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    profileLinks: useRef<HTMLDivElement>(null),
  };

  // Custom hooks
  const { addToHistory, undo, redo, canUndo, canRedo } = useHistory(initialState);
  const { scrollToSection } = useScrollHighlight();

  // Handle undo/redo effects
  const handleUndo = () => {
    const previousState = undo();
    if (previousState) {
      setHeadlineData(previousState.headlineData);
      setSummaryContent(previousState.summaryContent);
      setEducationData(previousState.educationData);
      setExperienceData(previousState.experienceData);
      setProjectsData(previousState.projectsData);
      setSkillsData(previousState.skillsData);
      setProfileLinksData(previousState.profileLinksData);
    }
  };

  const handleRedo = () => {
    const nextState = redo();
    if (nextState) {
      setHeadlineData(nextState.headlineData);
      setSummaryContent(nextState.summaryContent);
      setEducationData(nextState.educationData);
      setExperienceData(nextState.experienceData);
      setProjectsData(nextState.projectsData);
      setSkillsData(nextState.skillsData);
      setProfileLinksData(nextState.profileLinksData);
    }
  };

  // Section management
  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const getCurrentState = (): HistoryState => ({
    headlineData,
    summaryContent,
    educationData,
    experienceData,
    projectsData,
    skillsData,
    profileLinksData,
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-hidden bg-gray-50">
        <HistoryControls
          canUndo={canUndo}
          canRedo={canRedo}
          onUndo={handleUndo}
          onRedo={handleRedo}
        />

        <FormSection
          state={{ ...getCurrentState(), collapsedSections }}
          handlers={{
            setHeadlineData,
            setSummaryContent,
            setEducationData,
            setExperienceData,
            setProjectsData,
            setSkillsData,
            setProfileLinksData,
          }}
          refs={refs}
          toggleSection={toggleSection}
          addToHistory={addToHistory}
          getCurrentState={getCurrentState}
          scrollToSection={scrollToSection}
        />

        <PreviewSection
          state={getCurrentState()}
          refs={refs}
          template={template}
        />
      </div>
    </DndProvider>
  );
};

export default BuildResume;