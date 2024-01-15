/* eslint-disable react/prop-types */
import { useState } from "react";
import Avatar from "./Users/Avatar";
import User from "./Users/User";
function UserItem({ avatar, name, age }) {
  // este use state solo elimina el nombre al hacer click en el UseItem. No tiene una funcion con sentido es solo para probar el uso del useState
  const [named, setNamed] = useState(name);
  const handlePrueba = () => {
    setNamed("");
  };
  return (
    <div
      onClick={() => handlePrueba()}
      id="list-item"
      className="flex items-center pt-2 pb-2  rounded-xl pl-3 mb-1 hover:bg-gray-100 transition-all duration-200 ease-in-out hover:cursor-pointer"
    >
      <Avatar avatar={avatar} />
      {/* paso named en lugar de name no solo para que funcione el useState si no para aclarar que no se altera el valor de name, el useState altera el valor de named que inicialmente es name, pero no alteramos la raiz (name) de la informacion, que seria una mala practica */}
      <User name={named} age={age} />
    </div>
  );
}

export default UserItem;
