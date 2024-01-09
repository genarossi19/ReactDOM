import React from 'react'
import TodoFilters from './TodoFilters/TodoFilters.jsx'


// el children nos va a permitir utilizar el componente como contenedor de otros componentes
function TodoList({children}) {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl '>
        {children}
        <TodoFilters/>

    </div>
  )
}

export default TodoList