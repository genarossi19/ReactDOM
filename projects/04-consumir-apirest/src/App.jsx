import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const [data, setData] = useState(null)

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data)=>setData(data))
},[])
  

  return (
    <>
    
    </>
  )
}

export default App
