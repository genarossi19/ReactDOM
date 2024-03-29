import React from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import MenuItem from './components/MenuItem';
import { MdOutlineWork } from "react-icons/md";
import { FaCalendar,FaMessage } from "react-icons/fa6";


function App() {
  return (
    <div id="container" className="min-h-screen grid grid-cols-6 ">
      {/* span-1 + span-2 = grid-cols-6 */}
      <div id="sidebar" className=" col-span-1 p-8 border border-e-gray">
        {/* Logo */}
        <div className="text-center py-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu Logo</h1>
        </div>

        {/* Menú con diferentes iconos y etiquetas */}
        <nav>
          <ul >
          <li><MenuItem icon={MdSpaceDashboard} label="Dashboard" link="#" /></li>
            <li><MenuItem icon={MdOutlineWork} label="Job Board" link="#"/></li>
            <li><MenuItem icon={FaCalendar} label="Calendar" link="#" /></li>
            <li><MenuItem icon={FaMessage} label='Message' link="#"/></li>
          </ul>
        </nav>
      </div>
      <div className="col-span-5 p-4 "><h1 className='uppercase text-2xl font-bold  rounded- tracking-[4px]'>PAGE</h1></div>
    </div>
  );
}

export default App;
