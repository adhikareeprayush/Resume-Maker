import { useState, useRef } from "react";
import Education from "../Reuseable/Education";
import ProfessionalExperience from "../Reuseable/ProfessionalExperience";
import ProfileLinks from "../Reuseable/ProfileLinks";
import Projects from "../Reuseable/Projects";
import Skills from "../Reuseable/Skills";
import Summary from "../Reuseable/Summary";
import Headline from "../Reuseable/Headline";
import html2pdf from 'html2pdf.js'; // Import html2pdf


// Define the type for education data
type EducationData = {
    degree: string;
    institution: string;
    duration: string;
    details: string[];
};

const BuildResume = () => {
    // State to manage resume data
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

    const [skillsDate, setSkillsData] = useState([
        { skill: "Frontend", profiency: ["React", "HTML", "CSS"] },
        { skill: "Backend", profiency: ["Node.js", "Express", "MongoDB"] },
        { skill: "DevOps", profiency: ["Docker", "Kubernetes", "Jenkins"] },
        { skill: "Others", profiency: ["Git", "Jest", "Cypress"] },
    ]);

    // Explicitly type educationData
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

    type ProfileLink = {
        platform: string;
        username: string;
        url: string;
    };

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

   // Refs for each section in the preview
    const headlineRef = useRef<HTMLDivElement>(null);
    const summaryRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const profileLinksRef = useRef<HTMLDivElement>(null);


    // Handlers for updating data
    const handleHeadlineChange = (field: string, value: string) => {
        setHeadlineData({ ...headlineData, [field]: value });
        scrollToSection(headlineRef);
    };

    const handleSummaryChange = (value: string) => {
        setSummaryContent(value);
        scrollToSection(summaryRef);

    };

    const handleEducationChange = (
        index: number,
        field: keyof EducationData,
        value: string | string[]
    ) => {
        const updatedEducation = [...educationData];

        if (field === "details") {
            updatedEducation[index][field] = (value as string).split("\n");
        } else {
            updatedEducation[index][field] = value as string;
        }

        setEducationData(updatedEducation);
        scrollToSection(educationRef);
    };

    const handleSkillChange = (
        index: number,
        field: keyof (typeof skillsDate)[0],
        value: string | string[]
    ) => {
        const updatedSkills = [...skillsDate];

        if (field === "profiency") {
            updatedSkills[index][field] = (value as string).split("\n");
        } else {
            updatedSkills[index][field] = value as string;
        }

        setSkillsData(updatedSkills);
        scrollToSection(skillsRef);

    };

    const handleProfileLinkChange = (
        index: number,
        field: keyof ProfileLink,
        value: string
    ) => {
        const updatedLinks = [...profileLinksData];
        updatedLinks[index][field] = value;
        setProfileLinksData(updatedLinks);
        scrollToSection(profileLinksRef);
    };

    const [experienceData, setExperienceData] = useState([
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

    const [projectsData, setProjectsData] = useState([
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

    const addEducationField = () => {
        setEducationData([
            ...educationData,
            { degree: "", institution: "", duration: "", details: [""] },
        ]);
    };

    const handleProfessionalExperienceChange = (
        index: number,
        field: keyof (typeof experienceData)[0],
        value: string | string[]
    ) => {
        const updatedExperience = [...experienceData];

        if (field === "details") {
            updatedExperience[index][field] = (value as string).split("\n");
        } else {
            updatedExperience[index][field] = value as string;
        }

        setExperienceData(updatedExperience);
         scrollToSection(experienceRef);
    };

    const handleProjectChange = (
        index: number,
        field: keyof (typeof projectsData)[0],
        value: string | string[]
    ) => {
        const updatedProjects = [...projectsData];

        if (field === "details") {
            updatedProjects[index][field] = (value as string).split("\n");
        } else {
            updatedProjects[index][field] = value as string;
        }
        setProjectsData(updatedProjects);
         scrollToSection(projectsRef);
    };

    const removeEducationField = (index: number) => {
        const updatedEducation = [...educationData];
        updatedEducation.splice(index, 1);
        setEducationData(updatedEducation);
    };


    const addProfessionalExperienceField = () => {
        setExperienceData([
            ...experienceData,
            { company: "", position: "", duration: "", details: [""] },
        ]);
    };

    const removeProfessionalExperienceField = (index: number) => {
        const updatedExperience = [...experienceData];
        updatedExperience.splice(index, 1);
        setExperienceData(updatedExperience);
    };

    const addProjectField = () => {
        setProjectsData([
            ...projectsData,
            { name: "", company: "", duration: "", details: [""] },
        ]);
    };

    const removeProjectField = (index: number) => {
        const updatedProjects = [...projectsData];
        updatedProjects.splice(index, 1);
        setProjectsData(updatedProjects);
    };

    // Function to scroll to a given section
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if(ref.current){
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Add temporary highlight effect
            ref.current.classList.add('bg-blue-100','transition-colors', 'duration-500');
             setTimeout(() => {
                ref.current?.classList.remove('bg-blue-100');
            }, 500);
        }
    }


    const downloadResume = async () => {
        const resumeElement = document.getElementById("resume-preview");
        if (!resumeElement) {
            console.error("Resume preview element not found.");
            return;
        }
      
      const opt = {
        margin:       [5, 0, 0, 0],
        filename:    'resume.pdf',
        image:        { type: 'jpeg', quality: 8 },
        html2canvas:  { scale: 5, dpi: 1000, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
    html2pdf()
        .set(opt)
        .from(resumeElement)
        .save();
    };



    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-hidden">
            {/* Left Form Section */}
            <div className="lg:w-1/3 w-full bg-gray-100 min-h-screen p-4 md:p-8 text-gray-800 overflow-y-auto">
            <form className="flex flex-col gap-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-sans mb-4">Edit Resume</h2>
                    {/* Headline Section */}
                    <div className="mb-4 bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold font-sans mb-3 text-gray-700">Headline</h3>
                        <div className="flex flex-col space-y-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                            value={headlineData.name}
                            onChange={(e) => handleHeadlineChange("name", e.target.value)}
                        />
                            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                        <input
                            type="text"
                            placeholder="Your Role"
                            className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                            value={headlineData.role}
                            onChange={(e) => handleHeadlineChange("role", e.target.value)}
                        />
                         <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                        <input
                            type="text"
                            placeholder="Your Location"
                            className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                            value={headlineData.location}
                            onChange={(e) => handleHeadlineChange("location", e.target.value)}
                        />
                          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                            value={headlineData.email}
                            onChange={(e) => handleHeadlineChange("email", e.target.value)}
                        />
                           <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                        <input
                            type="tel"
                            placeholder="Your Phone"
                            className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                            value={headlineData.phone}
                            onChange={(e) => handleHeadlineChange("phone", e.target.value)}
                        />
                        </div>
                    </div>

                    {/* Summary Section */}
                   <div className="mb-4 bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold font-sans mb-3 text-gray-700">Summary</h3>
                        <textarea
                            placeholder="Write a brief summary..."
                            className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                            rows={4}
                            value={summaryContent}
                            onChange={(e) => handleSummaryChange(e.target.value)}
                        />
                   </div>

                    {/* Education Section */}
                   <div className="mb-4 bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold font-sans mb-3 text-gray-700">Education</h3>
                        {educationData.map((education, index) => (
                            <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md bg-gray-50 transition-all duration-300 ease-in-out">
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Degree</label>
                                <input
                                    type="text"
                                    placeholder="Degree"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={education.degree}
                                    onChange={(e) =>
                                        handleEducationChange(index, "degree", e.target.value)
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Institution</label>
                                <input
                                    type="text"
                                    placeholder="Institution"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={education.institution}
                                    onChange={(e) =>
                                        handleEducationChange(index, "institution", e.target.value)
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                                <input
                                    type="text"
                                    placeholder="Duration"
                                     className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={education.duration}
                                    onChange={(e) =>
                                        handleEducationChange(index, "duration", e.target.value)
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Details</label>
                                <textarea
                                    placeholder="Details (one per line)"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    rows={3}
                                    value={education.details.join("\n")}
                                    onChange={(e) =>
                                        handleEducationChange(index, "details", e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700 text-sm mt-2 self-start transition-all duration-200 ease-in-out  bg-gray-100 px-3 py-1 rounded-md"
                                    onClick={() => removeEducationField(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="text-blue-500 hover:text-blue-700 text-sm mt-2 self-start transition-all duration-200 ease-in-out bg-gray-100 px-3 py-1 rounded-md"
                            onClick={addEducationField}
                        >
                            Add Education
                        </button>
                    </div>

                    {/* Professional Experience Section */}
                   <div className="mb-4 bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold font-sans mb-3 text-gray-700">Professional Experience</h3>
                        {experienceData.map((experience, index) => (
                            <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md bg-gray-50 transition-all duration-300 ease-in-out">
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={experience.company}
                                    onChange={(e) =>
                                        handleProfessionalExperienceChange(
                                            index,
                                            "company",
                                            e.target.value
                                        )
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Position</label>
                                <input
                                    type="text"
                                    placeholder="Position"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={experience.position}
                                    onChange={(e) =>
                                        handleProfessionalExperienceChange(
                                            index,
                                            "position",
                                            e.target.value
                                        )
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                                <input
                                    type="text"
                                    placeholder="Duration"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={experience.duration}
                                    onChange={(e) =>
                                        handleProfessionalExperienceChange(
                                            index,
                                            "duration",
                                            e.target.value
                                        )
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Details</label>
                                <textarea
                                    placeholder="Details (one per line)"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    rows={3}
                                    value={experience.details.join("\n")}
                                    onChange={(e) =>
                                        handleProfessionalExperienceChange(
                                            index,
                                            "details",
                                            e.target.value
                                        )
                                    }
                                />
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700 text-sm mt-2 self-start transition-all duration-200 ease-in-out bg-gray-100 px-3 py-1 rounded-md"
                                    onClick={() => removeProfessionalExperienceField(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="text-blue-500 hover:text-blue-700 text-sm mt-2 self-start transition-all duration-200 ease-in-out bg-gray-100 px-3 py-1 rounded-md"
                            onClick={addProfessionalExperienceField}
                        >
                            Add Experience
                        </button>
                    </div>

                    {/* Skills Inputs */}
                    <div className="mb-4 bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold font-sans mb-3 text-gray-700">Skills</h3>
                        {skillsDate.map((skill, index) => (
                            <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md bg-gray-50 transition-all duration-300 ease-in-out">
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Skill</label>
                                <input
                                    type="text"
                                    placeholder="Skill"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={skill.skill}
                                    onChange={(e) =>
                                        handleSkillChange(index, "skill", e.target.value)
                                    }
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2">Proficiency</label>
                                <textarea
                                    placeholder="Profiency (one per line)"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    rows={3}
                                    value={skill.profiency.join("\n")}
                                    onChange={(e) =>
                                        handleSkillChange(index, "profiency", e.target.value)
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    {/* Projects Section */}
                    <div className="mb-4 bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold font-sans mb-3 text-gray-700">Projects</h3>
                        {projectsData.map((project, index) => (
                            <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md bg-gray-50 transition-all duration-300 ease-in-out">
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Project Name</label>
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                     className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={project.name}
                                    onChange={(e) =>
                                        handleProjectChange(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                                <input
                                    type="text"
                                    placeholder="Company"
                                     className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={project.company}
                                    onChange={(e) =>
                                        handleProjectChange(
                                            index,
                                            "company",
                                            e.target.value
                                        )
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Duration</label>
                                <input
                                    type="text"
                                    placeholder="Duration"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={project.duration}
                                    onChange={(e) =>
                                        handleProjectChange(
                                            index,
                                            "duration",
                                            e.target.value
                                        )
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Details</label>
                                <textarea
                                    placeholder="Details (one per line)"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    rows={3}
                                    value={project.details.join("\n")}
                                    onChange={(e) =>
                                        handleProjectChange(
                                            index,
                                            "details",
                                            e.target.value
                                        )
                                    }
                                />
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700 text-sm mt-2 self-start transition-all duration-200 ease-in-out bg-gray-100 px-3 py-1 rounded-md"
                                    onClick={() => removeProjectField(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                             className="text-blue-500 hover:text-blue-700 text-sm mt-2 self-start transition-all duration-200 ease-in-out bg-gray-100 px-3 py-1 rounded-md"
                            onClick={addProjectField}
                        >
                            Add Project
                        </button>
                    </div>

                    {/* Profile Links */}
                    <div className="mb-4 bg-white p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold font-sans mb-3 text-gray-700">Profile Links</h3>
                        {profileLinksData.map((link, index) => (
                            <div key={index} className="flex flex-col gap-3 mb-5 p-4 border rounded-md bg-gray-50 transition-all duration-300 ease-in-out">
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Platform</label>
                                <input
                                    type="text"
                                    placeholder="Platform"
                                     className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={link.platform}
                                    onChange={(e) =>
                                        handleProfileLinkChange(index, "platform", e.target.value)
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={link.username}
                                    onChange={(e) =>
                                        handleProfileLinkChange(index, "username", e.target.value)
                                    }
                                />
                                  <label className="block text-gray-700 text-sm font-bold mb-2">URL</label>
                                <input
                                    type="text"
                                    placeholder="URL"
                                     className="w-full p-3 border rounded-md font-sans text-gray-700 focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    value={link.url}
                                    onChange={(e) =>
                                        handleProfileLinkChange(index, "url", e.target.value)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </form>
            </div>

            {/* Right Preview Section */}
            <div className="lg:w-2/3 w-full bg-white p-4 md:p-6 lg:fixed lg:top-0 lg:right-0 lg:h-screen overflow-y-auto">
                <div className="flex justify-end mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={downloadResume}
                    >
                        Download as PDF
                    </button>
                </div>
                <div id="resume-preview" className="w-full max-w-[210mm] mx-auto bg-white border-[0.3px] border-slate-200 shadow-md rounded-md p-4 md:p-6 flex flex-col gap-4 a4-size">
                    {/* Preview Components */}
                    <div ref={headlineRef}>
                       <Headline
                            name={headlineData.name}
                            role={headlineData.role}
                            location={headlineData.location}
                            email={headlineData.email}
                            phone={headlineData.phone}
                        />
                    </div>
                     <div ref={summaryRef}>
                         <Summary title="Introduction" content={summaryContent} />
                     </div>
                    <div ref={educationRef}>
                        <Education educationData={educationData} />
                    </div>
                   <div ref={skillsRef}>
                         <Skills skills={skillsDate} />
                   </div>
                    <div ref={experienceRef}>
                        <ProfessionalExperience experiences={experienceData} />
                    </div>
                    <div ref={projectsRef}>
                         <Projects projects={projectsData} />
                    </div>
                    <div ref={profileLinksRef}>
                       <ProfileLinks profileLinks={profileLinksData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildResume;