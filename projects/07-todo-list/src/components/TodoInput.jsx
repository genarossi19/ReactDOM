import React from 'react'

function TodoInput() {
    return (
        <div className="mt-6 relative">
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                {/* circulito izquierdo */}
                <span className='border border-gray-500 border-solid p-3 rounded-full'/>
            </div>
            <input type="text"
                placeholder="Nueva Tarea"
                className='focus:shadow-lg 
                            ring-0 focus:outline outline-1 outline-blue-300
                            transition-all duration-300
                            font-poppins
                            focus:shadow-blue-300 
                            pl-12 w-full py-4
                            bg-slate-800 rounded-xl 
                            ease-in-out
                            ' 
              />
        </div>
    )
}

export default TodoInput