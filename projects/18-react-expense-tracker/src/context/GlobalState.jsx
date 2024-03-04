// En GlobalState.jsx
import PropTypes from "prop-types";
import { useReducer } from "react"; // Agrega useReducer
import AppReducer from "./AppReducer";
import { Context } from "../context/useGlobalState.js";

/**
 * GlobalProvider
 * Proveedor del contexto para la gestión del estado global de transacciones.
 *
 * @component GlobalProvider
 * @param {object} children - Elementos encapsulados por el GlobalProvider.
 * @returns {JSX.Element} - Proveedor de contexto que envuelve la aplicación y proporciona el estado global y funciones asociadas.
 */

export const GlobalProvider = ({ children }) => {
  /** ### initialState
   * @typedef {Object} initialState Estado inicial de transacciones
   * @property {Array} transactions array con las transacciones inicialmente vacio
   */

  const initialState = {
    transactions: [],
  };

  /**
   * ## useReducer
   *
   * Inicializa el estado del componente mediante el uso de un Reducer.
   *
   *
   * @param {function} AppReducer - Función reductora (Reducer) que define cómo el estado se transforma en respuesta a una acción.
   * @param {initialState} initialState - Estado inicial del componente.
   * @returns {Array} Una matriz que contiene el estado actual y la función de despacho (dispatch) para realizar cambios en el estado.
   *
   * state -> initialState
   * dispatch -> AppReducer
   */

  const [state, dispatch] = useReducer(AppReducer, initialState);

  /**
   * ## addTransaction
   *
   * Añade una transacción al estado global utilizando el despacho (dispatch) de la función reductora.
   *
   * @function
   * @name addTransaction
   * @param {object} transaction - Objeto que representa una transacción, con propiedades "description" y "amount".
   *
   * @example
   * // Uso típico en un componente de React
   * addTransaction({ description: 'Compra en línea', amount: -50 });
   */
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    /**
     *
     *
     * Devuelve un proveedor de contexto que envuelve la aplicación y proporciona el estado global y funciones asociadas.
     *
     * @returns {JSX.Element} - Proveedor de contexto que contiene el estado global de transacciones y la función `addTransaction`.
     *
     * @example
     * // Uso típico en un componente de React
     * <GlobalProvider>
     *   <App />
     * </GlobalProvider>
     */

    <Context.Provider
      value={{ transactions: state.transactions, addTransaction }}
    >
      {children}
    </Context.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
