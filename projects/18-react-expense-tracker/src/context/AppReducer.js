/**
 * AppReducer
 * 
 * Reductor (Reducer) que define cómo el estado se transforma en respuesta a una acción.
 * 
 * @function
 * @name AppReducer
 * @param {object} state - Estado actual del componente que incluye las transacciones.
 * @param {object} action - Acción que se realiza sobre el estado. Debe ser un objeto que tenga una propiedad "type" indicando el tipo de acción y opcionalmente una propiedad "payload" con datos adicionales.
 * @returns {object} - Nuevo estado después de aplicar la acción. En este caso, un objeto que contiene las transacciones actualizadas.
 * 
 * @example
 * // Ejemplo de uso en un componente de React con useReducer
 * const [state, dispatch] = useReducer(AppReducer, initialState);
 * // Llamada a dispatch con la acción 'ADD_TRANSACTION'
 * dispatch({ type: 'ADD_TRANSACTION', payload: { description: 'Compra', amount: -50 } });
 */
export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        /**
 * transactions: [...state.transactions, action.payload]
 * 
 * Actualiza el estado de las transacciones al agregar una nueva transacción.
 * 
 * @property {Array} transactions - Array que representa las transacciones actuales almacenadas en el estado.
 * @param {object} action.payload - Objeto que contiene la información de la nueva transacción a ser agregada.
 * @returns {Array} - Un nuevo array que contiene las transacciones actualizadas, incluyendo la nueva transacción.
 * 
 */
transactions: [...state.transactions, action.payload],

      };
    default:
      return state;
  }
};
