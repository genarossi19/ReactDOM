/**
 * Funcion sin nombre
 *
 * @param {array} state - Los datos que tenemos de momento
 * @param {function} action - Accion que queremos realizar
 */

/* {
    //ejemplo de objeto que representa action

     type:'ADD_TRANSACTION',
     payload: -200
}
*/

export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return state;
    default:
      return state;
  }
};
