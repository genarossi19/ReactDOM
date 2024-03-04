/**
 * TransactionForm
 * 
 * Componente funcional que representa un formulario para ingresar nuevas transacciones.
 * Utiliza el contexto global para acceder a la función `addTransaction` que agrega transacciones al estado global.
 * 
 * @component
 * @example
 * // Uso típico en un componente de React
 * <TransactionForm />
 */
import { useState } from "react";
import useGlobalState from "../context/useGlobalState";

function TransactionForm() {
  // Captura de valores definiendo estados
  const { addTransaction } = useGlobalState();

  /**
   * @typedef {Object} State
   * @property {string} description - Descripción de la transacción.
   * @property {number} amount - Monto de la transacción.
   */

  /** 
   * @type {State} 
   * @description Estado local del componente para la descripción y el monto de la transacción.
   */
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  /**
   * ## onSubmit
   * 
   * Maneja el envío del formulario, evitando que se reinicie el navegador.
   * Llama a la función `addTransaction` del contexto global para agregar una nueva transacción.
   * Muestra en la consola la descripción y el monto de la transacción.
   * 
   * @function
   * @param {Event} e - Evento de envío del formulario.
   * @returns {void}
   * 
   * 
   */
  const onSubmit = (e) => {
    // Evita que se reinicie el navegador al enviar el formulario
    e.preventDefault();

    // Agrega una nueva transacción utilizando la función del contexto global
    addTransaction({ id: 1, description, amount });

    // Muestra en la consola la descripción y el monto de la transacción
    console.log(description, amount);
  };


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripción"
          className="text-gray-800"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00 o -00.00"
          className="text-gray-800"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
