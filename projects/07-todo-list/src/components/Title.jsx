import React from 'react'
import reactLogo from  "../assets/react.svg"

function Title() {
  return (
    <div className="text-5xl font-bold tracking-wide flex flex-row p-5 justify-center items-center an">
        <h1>TODO List</h1>
        <div className='animate-pulse'><img src={reactLogo} className="w-20 h-20 m-5 animate-spin-slow  hover:shadow-blue-500 " alt="React Logo" /></div>
        
    
    </div>
  )
}

export default Title