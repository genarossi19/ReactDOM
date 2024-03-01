//importamos el contexto
import { Context } from "../context/GlobalState";
//importamos el hook para usar el contexto
import { useContext } from "react";


//Con el uso del contexto podemos pasar valores entre componentes sin pasar por el componente parent de los mismos. 
//El uso del contexto sirve para la comunicacion de datos entre componentes sin pasar por props

function Balance() {
  const data = useContext(Context);
  return (
    <div>
      <h1>Balance</h1>
      <div>
        {/* convierte dato a texto */}
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default Balance;
