import React from "react";
import "./App.css"; //lo dejo por si quiero implementar css puro
import { LuLayoutDashboard } from "react-icons/lu";

function App() {
  return (
    <div id="container" className="min-h-screen grid grid-cols-6 ">
      {/* span-1 + span-2 = grid-cols-6 */}
      <div id="sidebar" className=" col-span-1 p-8">
        {/* Logo */}

        <div className="text-center py-8">
          <h1 className="uppercase font-bold tracking-[4px]">Tu Logo</h1>
        </div>

        {/* Menu */}

        <nav>
          <ul>
            <li>
              {/* Lo mejor es usar reactDOM y componente LINK para no recargar la pagina */}
              <a href="#" className="flex  items-center gap-2 bg-purple-700 p-4">
                <LuLayoutDashboard />
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" col-span-5">Principal</div>
    </div>
  );
}

export default App;
