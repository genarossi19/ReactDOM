import React from 'react'
import x from '../assets/x-mark.svg'
function Todo() {
  return (
    <div 
    className='flex items-center justify-between p-4 bg-slate-800 border-b border-solid  border-slate-500 font-poppins'>
       <div className='flex items-center '>
        <span className='border border-gray-500 border-solid p-3 rounded-full cursor-pointer'></span>
        <p className='pl-3 '>Todo Item</p>
       
       </div>
       <img src={x} alt="quit" className='h-5 w-5 cursor-pointer transition-all duration-300 ease-in'/>
        
        
    
    </div>
  )
}

export default Todo