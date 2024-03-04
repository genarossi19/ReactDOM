/**
 * Módulo useGlobalState
 *
 * Este módulo exporta un contexto y un custom hook para optimizar el uso del contexto en componentes de React.
 *
 * @module useGlobalState
 */

import { createContext, useContext } from "react";

/**
 * ## Context
 *
 * Un contexto de React creado utilizando la función `createContext`.
 *
 * @type {React.Context}
 * @constant
 */
export const Context = createContext();

/**
 * ## useGlobalState
 *
 * Un custom hook que utiliza el contexto creado para acceder al estado global.
 *
 * @function
 * @name useGlobalState
 * @returns {object} - El valor del contexto, que generalmente contiene el estado global y funciones asociadas.
 *
 * @example
 * // Uso típico en un componente de React
 * const { transactions, addTransaction } = useGlobalState();
 */
export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export default useGlobalState;
