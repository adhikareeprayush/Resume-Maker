import React from "react";

interface WelcomeProps {
  setStep1: React.Dispatch<React.SetStateAction<boolean>>;
  setStep2: React.Dispatch<React.SetStateAction<boolean>>;
}

const Welcome: React.FC<WelcomeProps> = ({ setStep1, setStep2 }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-sans text-4xl text-gray-800 text-center font-semibold">
          Welcome to Resume builder!
        </h1>
        <p className="text-gray-800">
          Choose a template and proceed to build your resume
        </p>
        <button
          className="btn bg-black text-white py-2 px-3 w-fit mx-auto mt-2 rounded-lg"
          onClick={() => {
            setStep1(false);
            setStep2(true);
          }}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Welcome;
