// En GlobalState.jsx
import PropTypes from "prop-types";
import {  useReducer } from "react"; // Agrega useReducer
import AppReducer from "./AppReducer";
import { Context } from "../context/useGlobalState.js";

export const GlobalProvider = ({ children }) => {
  const initialState = {
    transactions: [],
  };

  // Corrige el orden de los argumentos en useReducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction()
{
    console.log("Add transaction")
}  return (
    <Context.Provider value={{ transactions: state.transactions, addTransaction }}>
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
