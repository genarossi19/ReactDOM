// En useGlobalState.js
import { createContext, useContext } from "react";

// Creación del contexto
export const Context = createContext();

// Creación de un custom hook para optimizar el uso del contexto
export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export default useGlobalState;
