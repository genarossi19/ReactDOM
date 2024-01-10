import React, { useState } from 'react'
import plus from '../assets/plus.svg'
function TodoInput({addTodo}) {
    
    const [title, setTitle] =useState('')

    const handleTodo = (e)=>{

        if(e.key.toLowerCase() === 'enter'){
            addTodo(title)
            setTitle('')
        }
    }
    return (
        <div className="mt-6 relative">
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <div>
                    {/* circulito izquierdo */}
                
                {/* <span className='border border-gray-500 border-solid p-3 rounded-full'/> */}
                <img src={plus} alt="add" className='h-5 w-5 cursor-pointer transition-all duration-300 ease-in' />
                </div>
                
                    
                
            </div>
            <input type="text"
            value={title}
                placeholder="Nueva Tarea"
                className='
                cursor-text
                focus:shadow-lg 
                            ring-0 focus:outline outline-1 outline-blue-300
                            transition-all duration-300
                            font-poppins
                            focus:shadow-blue-300 
                            pl-12 w-full py-4
                            bg-slate-800 rounded-xl 
                            ease-in-out
                            
                            ' 
                            onChange={ e=> {setTitle(e.target.value)}} 
                            onKeyDown={e=>handleTodo(e)}
              />
        </div>
    )
}

export default TodoInput