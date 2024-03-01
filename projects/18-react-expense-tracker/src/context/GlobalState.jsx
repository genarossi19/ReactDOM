// En GlobalState.jsx

import PropTypes from "prop-types";
import useGlobalState from "./useGlobalState";

// Creación del proveedor
export const GlobalProvider = ({ children }) => {
  return <useGlobalState.Provider value={{ total: 100 }}>{children}</useGlobalState.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
