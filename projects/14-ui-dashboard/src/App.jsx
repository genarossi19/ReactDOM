import React from 'react';
import { BiSolidDashboard } from "react-icons/bi";
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
        <MenuItem icon={BiSolidDashboard} label="Dashboard" link="#" />
        <MenuItem icon={MdOutlineWork} label="Job Board" link="#"/>
        <MenuItem icon={FaCalendar} label="Calendar" link="#" />
        <MenuItem icon={FaMessage} label='Message' link="#"/>
        
        
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
      <div className="col-span-5 p-4 "><h1 className='uppercase text-2xl font-bold  rounded- tracking-[4px]'>PAGE</h1></div>
    </div>
  );
}

export default App;
