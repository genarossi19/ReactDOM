import { createContext } from "react";
import PropTypes from "prop-types";

//creamos un contexto
// createContext() es una función proporcionada por React que se utiliza para crear un contexto en React. Los contextos en React son una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente a través de cada nivel. Esto es particularmente útil cuando ciertos datos son necesarios por muchos componentes en la aplicación.

// La función createContext() retorna un objeto con dos componentes de React:

// Provider: Este componente permite que los componentes secundarios se suscriban al contexto y reciban las actualizaciones cuando el valor del contexto cambie.

// Consumer: Este componente permite a los componentes secundarios suscribirse al contexto. La API de contexto ha sido extendida con el hook useContext que proporciona una forma más directa de consumir un contexto dentro de un componente funcional.

export const Context = createContext();

//creamos un provider que retorma un componente que viene a partir del contexto

export const GlobalProvider = ({ children }) => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
