/* eslint-disable react/prop-types */
function Button({ clearList }) {
  return (
    <button
      className="bg-blue-900 hover:bg-blue-800 transition-all duration-500 ease-in-out min-w-96 m-2 pt-2 pb-2 rounded-md text-white"
      // aca recibimos el parametro y lo ejecutamos con el metodo onClick
      onClick={() => clearList()}
    >
      Clear List
    </button>
  );
}

export default Button;
