//Ahora solo llamamos nuestro custom hook
import { useGlobalState } from "../context/useGlobalState.js";





function Balance() {
  const data = useGlobalState(); //No necesita el Context porque ya lo tiene
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
