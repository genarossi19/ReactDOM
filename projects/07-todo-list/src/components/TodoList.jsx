import React from 'react'
import TodoFilters from './TodoFilters/TodoFilters.jsx'
import Todo from './Todo.jsx'


// el children nos va a permitir utilizar el componente como contenedor de otros componentes
function TodoList({todos, handleSetCompleted, handleDelete, activeFilter, handleClearCompleted, showActiveTodos, showAllTodos, showCompletedTodos}) {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl '>
        {todos.map(todo => {
          return(

            // EL handleSetCompleted podria destructurar y pasar de App a Todo directamente sin pasar por el padre TodoList
            <Todo key={todo.id} todo={todo} handleSetCompleted={handleSetCompleted} handleDelete={handleDelete}
            />
          )
        })}
        <TodoFilters  activeFilter = {activeFilter}
        total = {todos.length}

        
        handleClearCompleted= {handleClearCompleted}
      showActiveTodos = {showActiveTodos}
      showAllTodos = {showAllTodos}
      showCompletedTodos = {showCompletedTodos}/>

    </div>
  )
}

export default TodoList