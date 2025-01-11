import React, { useState } from "react";
import Education from "../Reuseable/Education";
import ProfessionalExperience from "../Reuseable/ProfessionalExperience";
import ProfileLinks from "../Reuseable/ProfileLinks";
import Projects from "../Reuseable/Projects";
import Skills from "../Reuseable/Skills";
import Summary from "../Reuseable/Summary";
import Headline from "../Reuseable/Headline";

// Define types for data structures
type EducationData = {
  degree: string;
  institution: string;
  duration: string;
  details: string[];
};

type ProfileLink = {
  platform: string;
  username: string;
  url: string;
};

type ExperienceData = {
  company: string;
  position: string;
  duration: string;
  details: string[];
};

type ProjectData = {
  name: string;
  company: string;
  duration: string;
  details: string[];
};

type SkillData = {
    skill: string;
    profiency: string[];
};
const BuildResume = () => {
    // State for managing resume data
    const [headlineData, setHeadlineData] = useState({
        name: "Prayush Adhikari",
        role: "Frontend Developer",
        location: "Belbari-1, Morang, Nepal",
        email: "adhikareeprayush@gmail.com",
        phone: "+977-9824558987",
    });

    const [summaryContent, setSummaryContent] = useState(
        "Welcome to my profile! I am a passionate developer with expertise in building reusable components and scalable applications."
    );

    const [skillsData, setSkillsData] = useState<SkillData[]>([
        { skill: "Frontend", profiency: ["React", "HTML", "CSS"] },
        { skill: "Backend", profiency: ["Node.js", "Express", "MongoDB"] },
        { skill: "DevOps", profiency: ["Docker", "Kubernetes", "Jenkins"] },
        { skill: "Others", profiency: ["Git", "Jest", "Cypress"] },
    ]);

    const [educationData, setEducationData] = useState<EducationData[]>([
        {
            degree: "Bachelor's in Computer Engineering",
            institution: "IOE Purwanchal Campus, Dharan",
            duration: "2023-2027",
            details: ["Studying the core concepts of computer programming"],
        },
        {
            degree: "High School in Science",
            institution: "XYZ High School",
            duration: "2020-2022",
            details: ["Specialized in Mathematics and Physics"],
        },
    ]);


    const [profileLinksData, setProfileLinksData] = useState<ProfileLink[]>([
        {
            platform: "LinkedIn",
            username: "adhikareeprayush",
            url: "https://www.linkedin.com/in/adhikareeprayush",
        },
        {
            platform: "GitHub",
            username: "prayushadhikari",
            url: "https://github.com/prayushadhikari",
        },
        {
            platform: "Twitter",
            username: "prayush",
            url: "https://twitter.com/prayush",
        },
    ]);

    const [experienceData, setExperienceData] = useState<ExperienceData[]>([
        {
            company: "Google",
            position: "Software Engineer",
            duration: "2019 - Present",
            details: [
                "Developed and maintained web applications using React",
                "Worked with a team of developers to build scalable applications",
                "Collaborated with designers to create user-friendly interfaces",
            ],
        },
        {
            company: "Facebook",
            position: "Frontend Developer",
            duration: "2017 - 2019",
            details: [
                "Developed user-facing features using React",
                "Optimized applications for maximum speed and scalability",
                "Collaborated with back-end developers and web designers to improve usability",
            ],
        },
    ]);

    const [projectsData, setProjectsData] = useState<ProjectData[]>([
        {
            name: "Project 1",
            company: "Company 1",
            duration: "Jan 2020 - Mar 2021",
            details: [
                "Developed and maintained web applications using React",
                "Worked with a team of developers to build scalable applications",
                "Collaborated with designers to create user-friendly interfaces",
            ],
        },
        {
            name: "Project 2",
            company: "Company 2",
            duration: "Mar 2019 - Dec 2019",
            details: [
                "Developed user-facing features using React",
                "Optimized applications for maximum speed and scalability",
                "Collaborated with back-end developers and web designers to improve usability",
            ],
        },
    ]);

    // Generic handler for input changes to reduce redundancy
    const handleInputChange = <T>(
        setter: React.Dispatch<React.SetStateAction<T>>,
        index: number | null,
        field: keyof T extends keyof any ? keyof T : never,
        value: string
    ) => {
        setter((prevData:T) => {
          if(Array.isArray(prevData)){
            const updatedData = [...prevData]
            if(index !== null) {
              if(field === 'details' || field === 'profiency'){
                updatedData[index][field] = value.split('\n') as any
              }else{
                updatedData[index][field] = value as any
              }
            }
            return updatedData;
          } else {
            return {...prevData, [field]: value }
          }
        })
    };


    // Handler to add new fields
    const addField = <T>(setter: React.Dispatch<React.SetStateAction<T>>, initialValue: T extends (infer U)[] ? U : never) => {
        setter((prev) => {
          if(Array.isArray(prev)){
            return [...prev, initialValue]
          }
          return prev;
        });
    };

    // Handler to remove fields
    const removeField = <T>(setter: React.Dispatch<React.SetStateAction<T>>, index: number) => {
        setter((prevData:T) => {
          if(Array.isArray(prevData)){
            const updatedData = [...prevData];
            updatedData.splice(index, 1);
             return updatedData
          }
            return prevData
        });
    };
    
  return (
    <div className="flex min-h-screen w-full flex-col xl:flex-row overflow-hidden">
      {/* Left Form Section */}
      <div className="flex flex-col xl:w-1/2 w-full bg-gray-100 min-h-screen p-8 text-gray-800">
        <form className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold font-sans mb-4">Edit Resume</h2>

          {/* Headline Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold font-sans mb-3">Headline</h3>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
              value={headlineData.name}
              onChange={(e) => handleInputChange(setHeadlineData, null, "name", e.target.value)}
            />
            <input
              type="text"
              id="role"
              placeholder="Role"
             className="w-full p-3 border rounded-md font-sans text-gray-700 mt-3 focus:ring focus:ring-blue-200"
              value={headlineData.role}
              onChange={(e) => handleInputChange(setHeadlineData, null, "role", e.target.value)}
            />
            <input
              type="text"
              id="location"
              placeholder="Location"
              className="w-full p-3 border rounded-md font-sans text-gray-700 mt-3 focus:ring focus:ring-blue-200"
              value={headlineData.location}
              onChange={(e) => handleInputChange(setHeadlineData, null, "location", e.target.value)}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md font-sans text-gray-700 mt-3 focus:ring focus:ring-blue-200"
              value={headlineData.email}
                onChange={(e) => handleInputChange(setHeadlineData, null, "email", e.target.value)}
            />
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              className="w-full p-3 border rounded-md font-sans text-gray-700 mt-3 focus:ring focus:ring-blue-200"
              value={headlineData.phone}
                onChange={(e) => handleInputChange(setHeadlineData, null, "phone", e.target.value)}
            />
          </div>

          {/* Summary Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold font-sans mb-3">Summary</h3>
            <textarea
              placeholder="Write a brief summary..."
              id="summary"
              className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
              rows={4}
              value={summaryContent}
                onChange={(e) => handleInputChange(setSummaryContent, null, "", e.target.value)}
            />
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold font-sans mb-3">Education</h3>
            {educationData.map((education, index) => (
              <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md">
                <input
                  type="text"
                  placeholder="Degree"
                  className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                    id={`degree-${index}`}
                  value={education.degree}
                  onChange={(e) =>
                    handleInputChange(setEducationData, index, "degree", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Institution"
                  className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                    id={`institution-${index}`}
                  value={education.institution}
                  onChange={(e) =>
                    handleInputChange(setEducationData, index, "institution", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Duration"
                  className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                    id={`duration-${index}`}
                  value={education.duration}
                  onChange={(e) =>
                    handleInputChange(setEducationData, index, "duration", e.target.value)
                  }
                />
                <textarea
                    id={`details-${index}`}
                  placeholder="Details (one per line)"
                  className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                  rows={3}
                  value={education.details.join("\n")}
                   onChange={(e) =>
                    handleInputChange(setEducationData, index, "details", e.target.value)
                  }
                />
                 <button
                  type="button"
                  className="text-red-500 hover:text-red-700 text-sm mt-2 self-start transition-colors duration-200"
                    onClick={() => removeField(setEducationData, index)}
                >
                  Remove
                </button>
              </div>
            ))}
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700 text-sm mt-2 self-start transition-colors duration-200"
                 onClick={() => addField(setEducationData, {
                   degree: "",
                   institution: "",
                   duration: "",
                   details: [""]
                 })}
              >
                  Add Education
              </button>
          </div>

            {/* Professional Experience Section */}
          <div className="mb-6">
              <h3 className="text-xl font-semibold font-sans mb-3">Professional Experience</h3>
              {experienceData.map((experience, index) => (
                  <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md">
                      <input
                          type="text"
                          placeholder="Company"
                          className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                            id={`company-${index}`}
                          value={experience.company}
                          onChange={(e) =>
                            handleInputChange(setExperienceData, index, "company", e.target.value)
                          }
                      />
                      <input
                          type="text"
                          placeholder="Position"
                          className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                            id={`position-${index}`}
                          value={experience.position}
                          onChange={(e) =>
                            handleInputChange(setExperienceData, index, "position", e.target.value)
                          }
                      />
                      <input
                          type="text"
                            id={`experience-duration-${index}`}
                          placeholder="Duration"
                         className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                          value={experience.duration}
                         onChange={(e) =>
                            handleInputChange(setExperienceData, index, "duration", e.target.value)
                          }
                      />
                      <textarea
                          placeholder="Details (one per line)"
                            id={`experience-details-${index}`}
                          className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                          rows={3}
                          value={experience.details.join("\n")}
                        onChange={(e) =>
                            handleInputChange(setExperienceData, index, "details", e.target.value)
                        }
                      />
                      <button
                          type="button"
                           className="text-red-500 hover:text-red-700 text-sm mt-2 self-start transition-colors duration-200"
                            onClick={() => removeField(setExperienceData, index)}
                      >
                          Remove
                      </button>
                  </div>
              ))}
              <button
                type="button"
                   className="text-blue-500 hover:text-blue-700 text-sm mt-2 self-start transition-colors duration-200"
                    onClick={() => addField(setExperienceData, {
                        company: "",
                        position: "",
                        duration: "",
                        details: [""]
                    })}
              >
                  Add Experience
              </button>
          </div>

          {/* Skills Inputs */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold font-sans mb-3">Skills</h3>
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md">
                <input
                  type="text"
                    id={`skill-${index}`}
                  placeholder="Skill"
                   className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                  value={skill.skill}
                  onChange={(e) =>
                    handleInputChange(setSkillsData, index, "skill", e.target.value)
                  }
                />
                <textarea
                  placeholder="Profiency (one per line)"
                  id={`profiency-${index}`}
                  className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                  rows={3}
                    value={skill.profiency.join("\n")}
                     onChange={(e) =>
                        handleInputChange(setSkillsData, index, "profiency", e.target.value)
                     }
                />
              </div>
            ))}
          </div>

            {/* Projects Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold font-sans mb-3">Projects</h3>
                {projectsData.map((project, index) => (
                    <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md">
                        <input
                            type="text"
                            placeholder="Project Name"
                              id={`project-name-${index}`}
                             className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                            value={project.name}
                            onChange={(e) =>
                               handleInputChange(setProjectsData, index, "name", e.target.value)
                            }
                        />
                        <input
                            type="text"
                            placeholder="Company"
                              id={`project-company-${index}`}
                             className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                            value={project.company}
                            onChange={(e) =>
                               handleInputChange(setProjectsData, index, "company", e.target.value)
                            }
                        />
                        <input
                            type="text"
                            placeholder="Duration"
                            id={`project-duration-${index}`}
                            className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                            value={project.duration}
                            onChange={(e) =>
                                handleInputChange(setProjectsData, index, "duration", e.target.value)
                            }
                        />
                        <textarea
                            placeholder="Details (one per line)"
                              id={`project-details-${index}`}
                           className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                            rows={3}
                            value={project.details.join("\n")}
                             onChange={(e) =>
                                handleInputChange(setProjectsData, index, "details", e.target.value)
                            }
                        />
                         <button
                            type="button"
                            className="text-red-500 hover:text-red-700 text-sm mt-2 self-start transition-colors duration-200"
                            onClick={() => removeField(setProjectsData, index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                 <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700 text-sm mt-2 self-start transition-colors duration-200"
                      onClick={() => addField(setProjectsData, {
                        name: "",
                        company: "",
                        duration: "",
                        details: [""]
                      })}
                >
                    Add Project
                </button>
            </div>

          {/* Profile Links */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold font-sans mb-3">Profile Links</h3>
            {profileLinksData.map((link, index) => (
              <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md">
                <input
                  type="text"
                  placeholder="Platform"
                    id={`platform-${index}`}
                   className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                  value={link.platform}
                  onChange={(e) =>
                     handleInputChange(setProfileLinksData, index, "platform", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Username"
                    id={`username-${index}`}
                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                  value={link.username}
                  onChange={(e) =>
                    handleInputChange(setProfileLinksData, index, "username", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="URL"
                    id={`url-${index}`}
                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200"
                  value={link.url}
                  onChange={(e) =>
                      handleInputChange(setProfileLinksData, index, "url", e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* Right Preview Section */}
      <div className="flex flex-col xl:w-1/2 w-full bg-white min-h-screen items-center justify-center p-6">
        <div className="w-[90%] bg-white border-[0.3px] border-slate-200 shadow-md rounded-md p-6 flex flex-col gap-4">
          {/* Preview Components */}
          <Headline
            name={headlineData.name}
            role={headlineData.role}
            location={headlineData.location}
            email={headlineData.email}
            phone={headlineData.phone}
          />
          <Summary title="Introduction" content={summaryContent} />
          <Education educationData={educationData} />
          <Skills skills={skillsData} />
          <ProfessionalExperience experiences={experienceData} />
          <Projects projects={projectsData} />
          <ProfileLinks profileLinks={profileLinksData} />
        </div>
      </div>
    </div>
  );
};

export default BuildResume;