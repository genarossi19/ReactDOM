import { useState } from "react";

import Card from "./components/Card";

function App() {

  const [users, setUsers] = useState(
    [
      {
        id:1,
        name: "Emilia Viernes",
        age: 27,
        avatar: '/images/avatar 01.jpeg'
      },
      {
        id:2,
        name: "Maria Becerro",
        age: 23,
        avatar: '/images/avatar 02.jpeg'
      },
      {
        id:3,
        name: "Mauro Monzón ",
        age: 26,
        avatar: '/images/avatar 03.jpeg'
      },
      {
        id:4,
        name: "Camilo Joaquin",
        age: 16,
        avatar: '/images/avatar 04.jpeg'
      },
      
    ]
  )

const handleClearList = ()=>{
  // seteamos los usuarios como array vacio
  setUsers([])
}

  
  
  return (
    <div className="h-screen flex  justify-center  items-center flex-row flex-wrap  bg-slate-900">

    {/* la funcion handleClearList se pasa como prop (sin ejecutarse) ya que el boton es hijo de Card */}

      <Card users={users} clearList={handleClearList} />
      
    
    </div>
  );
}

export default App;
