import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div id="background" className="h-screen flex justify-center items-center dark:bg-neutral-900">
     <button className="bg-slate-400 px-6 py-3 rounded-lg text-white hover:bg-slate-700 transition-all duration-300 focus:ring-4 active:bg-slate-600 active:transition-none dark:bg-white dark:text-gray">
      Click me
     </button>
    </div>
  );
}

export default App;
