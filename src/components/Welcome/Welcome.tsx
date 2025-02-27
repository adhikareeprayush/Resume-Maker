import React from "react";
import { initialState } from "../BuildResume/data/initialState";
import { initialState as initialState1 } from "../BuildResume/data/initialState1";
import ModernTemplate from "../BuildResume/templates/ModernTemplate";
import ProfessionalTemplate from "../BuildResume/templates/ProfessionalTemplate";

interface WelcomeProps {
  setStep1: React.Dispatch<React.SetStateAction<boolean>>;
  setStep2: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<"modern" | "professional">>;
}

const Welcome: React.FC<WelcomeProps> = ({ setStep1, setStep2, setSelectedTemplate }) => {
  const handleTemplateSelect = (template: "modern" | "professional") => {
    setSelectedTemplate(template);
    setStep1(false);
    setStep2(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="font-sans text-6xl md:text-7xl text-center font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
              Build Your Professional
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">
              Resume in Minutes
            </span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl text-center leading-relaxed">
            Select from our professionally designed templates and create a standout resume that gets you noticed
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full mt-12">
            <div 
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-6 md:p-10 cursor-pointer hover:border-black transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1"
              onClick={() => handleTemplateSelect("modern")}
            >
              {/* A4 Paper Preview Container */}
              <div className="relative mx-auto w-full max-w-[210mm] aspect-[1/1.414] bg-white rounded-xl mb-6 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] border border-gray-200">
                {/* Template Preview */}
                <div className="absolute inset-0 p-8 overflow-hidden">
                  <div className="transform scale-[0.4] origin-top-left w-[250%] h-[250%]">
                    <ModernTemplate 
                      state={initialState}
                      refs={{}}
                    />
                  </div>
                </div>
                {/* Paper Edge Effect */}
                <div className="absolute inset-0 pointer-events-none border border-gray-200 rounded-xl shadow-inner"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-black transition-colors">Modern Template</h3>
              <p className="text-gray-600 mt-2 md:mt-4 text-lg md:text-xl leading-relaxed">Clean and minimalist design with a modern touch</p>
              <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                Select Template
              </div>
            </div>
            
            <div 
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-6 md:p-10 cursor-pointer hover:border-black transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1"
              onClick={() => handleTemplateSelect("professional")}
            >
              {/* A4 Paper Preview Container */}
              <div className="relative mx-auto w-full max-w-[210mm] aspect-[1/1.414] bg-white rounded-xl mb-6 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] border border-gray-200">
                {/* Template Preview */}
                <div className="absolute inset-0 p-8 overflow-hidden">
                  <div className="transform scale-[0.4] origin-top-left w-[250%] h-[250%]">
                    <ProfessionalTemplate 
                      state={initialState1}
                      refs={{}}
                    />
                  </div>
                </div>
                {/* Paper Edge Effect */}
                <div className="absolute inset-0 pointer-events-none border border-gray-200 rounded-xl shadow-inner"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-black transition-colors">Professional Template</h3>
              <p className="text-gray-600 mt-2 md:mt-4 text-lg md:text-xl leading-relaxed">Traditional layout with a professional appearance</p>
              <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                Select Template
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-500 text-lg mb-6 font-medium">✨ Professional templates designed for maximum impact</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-600">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>ATS-Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>PDF Export</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Customizable Sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;