/**
 * Balance
 * 
 * Componente que muestra el balance de las transacciones utilizando el estado global.
 * 
 * @component
 * @returns {JSX.Element} - Elemento de React que representa el componente Balance.
 * 
 * @example
 * // Uso típico en un componente de React
 * import Balance from './Balance';
 * //...
 * <Balance />
 */
import { useGlobalState } from "../context/useGlobalState.js";

function Balance() {
  /**
   * useGlobalState
   * 
   * Custom hook que utiliza el contexto global para acceder al estado global de transacciones.
   * 
   * @function
   * @name useGlobalState
   * @returns {object} - Objeto que contiene información sobre las transacciones.
   */
  const data = useGlobalState(); // No necesita el Context porque ya lo tiene
  
  return (
    <div>
      <h1>Balance</h1>
      <div>
        {/* Convierte el objeto de datos a texto para mostrarlo en el componente */}
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default Balance;
