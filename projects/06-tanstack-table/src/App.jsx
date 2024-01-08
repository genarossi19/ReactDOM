import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleTable from "./components/SimpleTable.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SimpleTable/>
    </>
  )
}

export default App
