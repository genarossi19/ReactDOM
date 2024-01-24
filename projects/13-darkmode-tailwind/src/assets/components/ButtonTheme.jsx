import { useEffect, useState } from "react";
import "./ButtonTheme.css";
import DarkIcon from "../icons/DarkIcon";
import LightIcon from "../icons/LightIcon";

function ButtonTheme() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="h-screen flex flex-col justify-center items-center dark:bg-neutral-900 transition-colors duration-500">
      <div
        id="background"
        
      >
        <button
          onClick={handleChangeTheme}
          className="bg-slate-400 px-6 py-3 min-w-48 min-h-36  rounded-lg text-white hover:bg-slate-700 transition-all duration-300 focus:ring-4 active:bg-slate-600 active:transition-none dark:bg-white dark:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-white flex flex-col items-center justify-center btn"
        >
          <span className="flex items-center justify-center mb-2">
            {theme === "dark" ? (
              <LightIcon className="w-20 h-20 fill-current" />
            ) : (
              <DarkIcon className="w-20 h-20 fill-current" color="white" />
            )}
          </span>
          <span>
            {theme === "dark" ? "Cambiar a claro" : "Cambiar a oscuro"}
          </span>
        </button>
      </div>
      <h1 className="p-4 m-4 text-xl font-bold dark:text-white transition-all duration-500 ">HOLA</h1>
      <p className="  p-4 m-8 text-xl font-light dark:text-white transition-all duration-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea blanditiis sint doloribus natus possimus, repellendus fugiat quae aliquid! Nobis, sunt.</p>
    </div>
  );
}

export default ButtonTheme;
