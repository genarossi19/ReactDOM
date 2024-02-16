import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import MenuItem from "./components/MenuItem";
import { MdOutlineWork, MdLogout } from "react-icons/md";
import { FaCalendar, FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

import vector from "../public/vector.svg";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      id="container"
      className="min-h-screen grid grid-cols-6"
    >
      {/* span-1 + span-2 = grid-cols-6 */}
      <div id="sidebar" className=" col-span-1 p-4 border border-e-gray ">
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
          <div className="flex flex-col gap-4 ">
            <img src={vector} alt="vector" className="" />
            <div
              id="upgrade"
              className="bg-purple-100 p-4 rounded-md items-center justify-items-center flex flex-col gap-4"
            >
              <h3 className="text-center font-medium text-gray-800">
                Get upgrade
              </h3>
              <motion.button
              whileHover={{ scale: 1.08 }}
                whileTap={{
                  scale: 0.8
                }}
                className="p-4 w-full bg-purple-600 text-white rounded-md "
              >
                Learn more
              </motion.button>
            </div>
            <MenuItem icon={MdLogout} label="Logout" link="#" />
          </div>
        </div>
      </div>
      <div className="col-span-5 p-4 ">
        <h1 className="uppercase text-2xl font-bold  rounded- tracking-[4px]">
          PAGE
        </h1>
      </div>
    </motion.div>
  );
}

export default App;
