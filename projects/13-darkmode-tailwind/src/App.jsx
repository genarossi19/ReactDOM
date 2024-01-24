import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

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
    <div
      id="background"
      className="h-screen flex justify-center items-center dark:bg-neutral-900 transition-colors duration-500"
    >
      <button
        onClick={handleChangeTheme}
        className="bg-slate-400 px-6 py-3 rounded-lg text-white hover:bg-slate-700 transition-all duration-300 focus:ring-4 active:bg-slate-600 active:transition-none dark:bg-white dark:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {theme === "dark" ? "Cambiar a claro" : "Cambiar a oscuro"}
      </button>
    </div>
  );
}

export default App;
