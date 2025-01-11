import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome/Welcome";
import BuildResume from "./components/BuildResume/BuildResume";

function App() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center relative">
      {step1 && <Welcome setStep1={setStep1} setStep2={setStep2} />}
      {step2 && <BuildResume />}
    </div>
  );
}

export default App;
