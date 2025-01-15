
export interface HeadlineData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  duration: string;
  details: string[];
}

export interface ExperienceData {
  company: string;
  position: string;
  duration: string;
  details: string[];
}

export interface ProjectData {
  name: string;
  company: string;
  duration: string;
  details: string[];
}

export interface SkillData {
  skill: string;
  profiency: string[];
}

export interface ProfileLink {
  platform: string;
  username: string;
  url: string;
}


export interface HistoryState {
  headlineData: HeadlineData;
  summaryContent: string;
  educationData: EducationData[];
  experienceData: ExperienceData[];
  projectsData: ProjectData[];
  skillsData: SkillData[];
  profileLinksData: ProfileLink[];
}

export interface FormSectionHandlers {
  setHeadlineData: React.Dispatch<React.SetStateAction<HeadlineData>>;
  setSummaryContent: React.Dispatch<React.SetStateAction<string>>;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData[]>>;
  setExperienceData: React.Dispatch<React.SetStateAction<ExperienceData[]>>;
  setProjectsData: React.Dispatch<React.SetStateAction<ProjectData[]>>;
  setSkillsData: React.Dispatch<React.SetStateAction<SkillData[]>>;
  setProfileLinksData: React.Dispatch<React.SetStateAction<ProfileLink[]>>;
}