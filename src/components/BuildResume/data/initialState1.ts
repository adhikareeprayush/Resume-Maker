import type { HistoryState } from '../types';

export const initialState: HistoryState = {
  headlineData: {
    name: "Jane Doe",
    role: "FullStack Developer",
    location: "Kathmandu",
    email: "janedoe@email.com",
    phone: "+977 98XXXXXXXX",
  },
  summaryContent: "I am a web developer having expertise in frontend development and exposure to back- end development. I design and develop web applications using the latest technologies to deliver the product with quality code.",
  skillsData: [
    {
      skill: "Programming Languages",
      profiency: ["JavaScript", "HTML5", "CSS"],
    },
    {
      skill: "Frameworks",
      profiency: ["React", "Angular"],
    },
    {
      skill: "Tools & Technologies",
      profiency: ["Git", "VS Code", "Jira", "Webpack", "Bitbucket"],
    },
  ],
  educationData: [
    {
      degree: "MS in Cloud technology",
      institution: "Tribhuvan University",
      duration: "2014 - 2016",
      details: ["Score: 68%"],
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "NIST College",
      duration: "2010 - 2014",
      details: ["Score: 8.3 CGPA"],
    },
  ],
  experienceData: [
    {
      company: "Company 1",
      position: "Senior Software Developer",
      duration: "Apr 2021 - present",
      details: [
        "Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable",
        "Keep the code quality high reviewing code from other developers and suggesting improvements",
        "Interact with the designer to suggest changes and to make sure the view he has about the design is translated into actual functionality",
        "E-commerce maintenance with Fastcommerce, a Brazilian e-commerce platform",
      ],
    },
    {
      company: "Company 2",
      position: "Software Developer",
      duration: "Jun 2015 - Dec 2017",
      details: [
        "Develop web applications based on Sharepoint, Drupal 8 and Episerver",
        "Lead a team of 10 front end developers, giving support to the client's multi-cultural team",
        "Keep the Project Manager and IT Leads updated on project progress",
        "Ensure code quality and requirement compliance across the team",
      ],
    },
  ],
  projectsData: [
    {
      name: "E-commerce Platform",
      company: "Company 1",
      duration: "2021",
      details: [
        "Prevented millions in tax undercharges by identifying critical bugs",
        "Improved pricing tool leading to 20% revenue increase",
        "Implemented automated testing improving regression coverage",
      ],
    },
  ],
  profileLinksData: [
    {
      platform: "LinkedIn",
      username: "BCTNotes",
      url: "https://www.linkedin.com/in/bctnotes/",
    },
    {
      platform: "GitHub",
      username: "bctnotes",
      url: "https://github.com/bctnotes/",
    },
    {
      platform: "HackerRank",
      username: "bctnotes",
      url: "https://www.hackerrank.com/bctnotes/",
    },
  ],
};