import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from "./components/Title.jsx";
import  TodoInput  from "./components/TodoInput.jsx";
import TodoList from './components/TodoList.jsx';
import Todo from './components/Todo.jsx';


function App() {
  const [todos, setTodos]= useState(
    [{
      id:1,
      title: "Estudiar",
      completed: false,
  },
  {
      id:2,
      title: "Trabajar",
      completed: false,
  },
  {
      id:3,
      title: "Limpiar",
      completed: false,
  },
  {
      id:4,
      title: "Cocinar",
      completed: false,
  },]
  )

  const addTodo = (title) =>{
    const lastId = todos.length > 0 ? todos[todos.lenght -1].id :1;

    const newTodo ={
      id: lastId + 
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push[newTodo];
    setTodos(todoList)
  }

  return (
    <div className="bg-slate-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
      <Title/>
      <TodoInput addTodo={addTodo}/>
      {/* aca usamos el children  y por eso usamos cierre doble*/}
      <TodoList todos={todos}/>
        
        
      
      </div>
    </div>
  )
}

export default App
