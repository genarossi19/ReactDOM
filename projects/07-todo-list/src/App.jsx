import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from "./components/Title.jsx";
import  TodoInput  from "./components/TodoInput.jsx";


function App() {
  

  return (
    <div className="bg-slate-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
      <Title/>
      <TodoInput/>
      </div>
    </div>
  )
}

export default App
