import { useState } from "react";
import useGlobalState from "../context/useGlobalState";
function TransactionForm() {
  //capturamos valores definiendo estados

  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    //para no reinicie el navegador
    e.preventDefault();
    addTransaction({id:1,description, amount})
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
