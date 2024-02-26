import React, { useEffect } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import MenuItem from "./components/MenuItem";
import { MdOutlineWork, MdLogout,MdOutlineMenu } from "react-icons/md";
import { FaCalendar, FaMessage } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";

import "../src/index.css";

import vector from "./assets/vector.svg";

function App() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    // Event listener para manejar el scroll al principio al recargar la página
    window.addEventListener("beforeunload", handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("beforeunload", handleScroll);
    };
  }, []); // Se ejecuta solo en el montaje inicial

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      id="container"
      className=" min-h-screen grid grid-col-1 lg:grid-cols-6"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[5px] bg-purple-500 transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      {/* span-1 + span-2 = grid-cols-6 */}
      {/* Sidebar */}
      <div id="sidebar" className=" fixed lg:static top-0 -left-full w-full h-full overflow-y-scroll  col-span-1 p-4  border-r ">
        {/* Logo */}
        <div className="text-center py-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu Logo</h1>
        </div>
        <div className="flex flex-col justify-between h-screen">
          {/* Menú con diferentes iconos y etiquetas */}
          <nav>
            <ul>
              <li>
                <MenuItem icon={MdSpaceDashboard} label="Dashboard" link="#" />
              </li>
              <li>
                <MenuItem icon={MdOutlineWork} label="Job Board" link="#" />
              </li>
              <li>
                <MenuItem icon={FaCalendar} label="Calendar" link="#" />
              </li>
              <li>
                <MenuItem icon={FaMessage} label="Message" link="#" />
              </li>
            </ul>
          </nav>
          {/* Image & logout */}
          <div className="flex flex-col gap-8 ">
            <img src={vector} alt="vector" className="" />
            <div
              id="upgrade"
              className="bg-purple-100 p-4 rounded-md items-center justify-items-center flex flex-col gap-4"
            >
              <h3 className="text-center font-medium text-gray-800">
                Get upgrade
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{
                  scale: 0.8,
                }}
                className="p-4 w-full bg-purple-600 text-white rounded-md "
              >
                Learn more
              </motion.button>
            </div>
            
          </div>
          <MenuItem icon={MdLogout} label="Logout" link="#" />
        </div>
      </div>
      {/* Btn Menu Mobile */}
      <button id="menuButton" className="block lg:hidden absolute bottom-4 right-4 bg-purple-600 p-3 rounded-full text-white text-2xl">
      <MdOutlineMenu/>
      </button>
      {/* Content */}
      <div className="col-span-5 p-4 ">
        <h1 className="uppercase text-2xl font-bold  rounded- tracking-[4px]">
          PAGE
        </h1>
      </div>
    </motion.div>
  );
}

export default App;
