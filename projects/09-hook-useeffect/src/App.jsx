import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState({
    advice: "",
    id: 0,
  });

  // useEffect se usa para pasar una funcion que se ejecuta cada vez que una dependencia (elemento) se modifica. Recibe dos parametros, la logica o funcion y un array de dependencias. Si el array es vacio [], se ejecuta una unica vez (osea, solo en el primer renderizado). Si no hay array no para de ejecutarse. Si el array contiene dependencia, la funcion se ejecuta solo si esa dependencia se actualiza. Se suelen retornar funciones dentro del useEFfect para terminar con funciones que, cuando el useEffect no este activo, no ocupen memoria. EJ: si tengo un TimeOut dentro del useEffect, retornaria un () =>clearTimeOut()

  /* useEffect(()=>{

  },[]) */

  /*
  useEffect(async ()=>{
    const res = await axios.get('https://api.adviceslip.com/advice')
    setQuotes({advice: res.data.slip.advice, id:res.data.slip.id})

  },[])
*/

  // useEffect no es asincrono, no puede tener una funcion async en el callback, pero se puede crear una funcion dentro de esta, para eso creamos la siguiente funcion getQUotes

  const getQuotes = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setQuotes({ advice: res.data.slip.advice, id: res.data.slip.id });
  };

  useEffect( () => {getQuotes()}, []);

  return (
    <div
      className="bg-bg-100 h-screen w-screen  text-text-100 flex flex-col justify-center items-center "
      id="wrapper"
    >
      <Card quotes={quotes} getQuotes={getQuotes}/>
    </div>
  );
}

export default App;
