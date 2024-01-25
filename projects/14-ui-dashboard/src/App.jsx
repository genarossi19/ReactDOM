import React from "react";
import "./App.css"; //lo dejo por si quiero implementar css puro

function App() {
  return (
    <div id="container" className="min-h-screen grid grid-cols-6 ">
      {/* span-1 + span-2 = grid-cols-6 */}
      <div id="bloque1" className="bg-blue-400 col-span-1">Blue</div>
      <div id="bloque2" className="bg-green-300 col-span-5">Green</div>
    </div>
  );
}

export default App;
