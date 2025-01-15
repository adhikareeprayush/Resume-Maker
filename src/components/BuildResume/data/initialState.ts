import type { HistoryState } from '../types';

export const initialState: HistoryState = {
  headlineData: {
    name: "John Doe",
    role: "Software Engineer",
    location: "San Francisco, CA",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
  },
  summaryContent: "Experienced software engineer with a passion for building scalable applications and solving complex problems.",
  skillsData: [
    {
      skill: "Programming Languages",
      profiency: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      skill: "Frontend",
      profiency: ["React", "Vue.js", "HTML5", "CSS3"],
    },
    {
      skill: "Backend",
      profiency: ["Node.js", "Express", "Django", "Spring Boot"],
    },
  ],
  educationData: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "2018-2020",
      details: [
        "GPA: 3.9/4.0",
        "Focus on Machine Learning and Distributed Systems",
        "Teaching Assistant for Algorithms course",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      duration: "2014-2018",
      details: [
        "GPA: 3.8/4.0",
        "Dean's List all semesters",
        "Computer Science Club President",
      ],
    },
  ],
  experienceData: [
    {
      company: "Google",
      position: "Senior Software Engineer",
      duration: "2020-Present",
      details: [
        "Led a team of 5 engineers in developing a new microservices architecture",
        "Reduced system latency by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    {
      company: "Facebook",
      position: "Software Engineer",
      duration: "2018-2020",
      details: [
        "Developed and maintained critical user-facing features",
        "Improved application performance by 25%",
        "Mentored 3 junior developers",
      ],
    },
  ],
  projectsData: [
    {
      name: "E-commerce Platform",
      company: "Personal Project",
      duration: "2021",
      details: [
        "Built a full-stack e-commerce platform using MERN stack",
        "Implemented secure payment processing with Stripe",
        "Deployed on AWS with auto-scaling configuration",
      ],
    },
    {
      name: "Task Management System",
      company: "Open Source",
      duration: "2020",
      details: [
        "Created a real-time task management system using Socket.io",
        "Implemented drag-and-drop functionality for task organization",
        "Over 1000+ stars on GitHub",
      ],
    },
  ],
  profileLinksData: [
    {
      platform: "LinkedIn",
      username: "johndoe",
      url: "https://linkedin.com/in/johndoe",
    },
    {
      platform: "GitHub",
      username: "johndoe",
      url: "https://github.com/johndoe",
    },
    {
      platform: "Portfolio",
      username: "John Doe",
      url: "https://johndoe.dev",
    },
  ],
};