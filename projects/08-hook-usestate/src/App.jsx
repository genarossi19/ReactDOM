import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  const [user, setUser] = useState({
    name: 'Genaro',
    age: 20
  })
  return (
    <div className="h-screen flex  justify-center  items-center ">
      <Card />
    </div>
  );
}

export default App;
