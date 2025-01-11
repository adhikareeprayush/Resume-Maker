import EducationCard from "../Resuseable/EducationCard";
import Summary from "../Resuseable/Summary";

const educationData = [
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
];

const BuildResume = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col w-1/2 bg-gray-800 min-h-screen">h</div>
      <div className="flex flex-col w-1/2 bg-white min-h-screen items-center justify-center">
        <div className="h-[90%] w-[80%] bg-white border-[0.3px] border-slate-200 shadow-md rounded-md p-6 flex flex-col gap-4">
          <div className="flex flex-col">
            <h4 className="text-3xl font-bold font-sans s">Prayush Adhikari</h4>
            <p className="font-sans text-xl text-black font-semibold">
              Frontend Developer
            </p>
            <div className="flex items-center gap-2">
              <a className="pr-2 border-r-[1px] border-slate-800">
                Belbari-1, Morang, Nepal
              </a>
              <a className="underline pr-2 border-r-[1px] border-slate-800">
                adhikareeprayush@gmail.com
              </a>
              <a>+977-9824558987</a>
            </div>
            <hr className="h-[3px] w-full bg-black mt-1" />
          </div>
          <Summary
            title="Introduction"
            content="Welcome to my profile! I am a passionate developer with expertise in building reusable components and scalable applications."
          />
          <div className="flex flex-col">
            <h5 className="text-xl font-medium font-sans">Education</h5>
            <div className="flex flex-col gap-2">
              {educationData.map((education, index) => (
                <EducationCard
                  key={index}
                  degree={education.degree}
                  institution={education.institution}
                  duration={education.duration}
                  details={education.details}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildResume;
