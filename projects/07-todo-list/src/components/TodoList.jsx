import React from 'react'
import TodoFilters from './TodoFilters/TodoFilters.jsx'
import Todo from './Todo.jsx'


// el children nos va a permitir utilizar el componente como contenedor de otros componentes
function TodoList({todos}) {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl '>
        {todos.map(todo => {
          return(
            <Todo key={todo.id} todo={todo}/>
          )
        })}
        <TodoFilters/>

    </div>
  )
}

export default TodoList