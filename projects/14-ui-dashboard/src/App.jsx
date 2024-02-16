import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import MenuItem from "./components/MenuItem";
import { MdOutlineWork, MdLogout } from "react-icons/md";
import { FaCalendar, FaMessage } from "react-icons/fa6";

import vector from "../public/vector.svg";

function App() {
  return (
    <div id="container" className="min-h-screen grid grid-cols-6">
      {/* span-1 + span-2 = grid-cols-6 */}
      <div id="sidebar" className=" col-span-1 p-4 border border-e-gray ">
        {/* Logo */}
        <div className="text-center py-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu Logo</h1>
        </div>
        <div className="bg-red-200 flex flex-col justify-between min-h-[500px] max-h-screen">
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
            <MenuItem icon={MdLogout} label="Logout" link="#" />
          </div>
        </div>
      </div>
      <div className="col-span-5 p-4 ">
        <h1 className="uppercase text-2xl font-bold  rounded- tracking-[4px]">
          PAGE
        </h1>
      </div>
    </div>
  );
}

export default App;

