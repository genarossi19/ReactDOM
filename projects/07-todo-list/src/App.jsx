import { useEffect, useState } from 'react'
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

  const [activeFilters, setActiveFilters] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (title) =>{
    const lastId = todos.length > 0 ? todos[todos.length -1].id:1;

    const newTodo ={
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList)
  }

  const handleSetCompleted = (id)=>{
    const updatedList = todos.map(todo =>{
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedList);
  }

  const handleDelete = (id)=>{
    const updatedList = todos.filter(todo => todo.id != id)
    setTodos(updatedList)
  }

  const handleClearCompleted = ()=>{
    const updatedList = todos.filter(todo => !(todo.completed))
    setTodos(updatedList)  

  }

  const showAllTodos = ()=>{

    setActiveFilters('all')
  }

  const showCompletedTodos = ()=>{
    setActiveFilters('completed')
  }

  const showActiveTodos = ()=>{
    setActiveFilters('active')
  }

  useEffect(()=>{

    if(activeFilters === 'all'){
      setFilteredTodos(todos)
    }else if(activeFilters === 'active'){
      const activeTodos = todos.filter(todo =>todo.completed === false)
      setFilteredTodos(activeTodos)
    }else if (activeFilters === 'completed'){
      const completedTodos = todos.filter(todo=>todo.completed === true)
      setFilteredTodos(completedTodos) 
    }

  }, [activeFilters, todos])

  return (
    <div className="bg-slate-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5 overflow-hidden">
      <div className="container flex flex-col max-w-xl ">
      <Title/>
      <TodoInput addTodo={addTodo}/>
      
      <TodoList todos={filteredTodos}
      handleSetCompleted={handleSetCompleted}
      handleDelete = {handleDelete}
      handleClearCompleted= {handleClearCompleted}
      showActiveTodos = {showActiveTodos}
      showAllTodos = {showAllTodos}
      showCompletedTodos = {showCompletedTodos}
      activeFilter={activeFilters}
      />
        
        
      
      </div>
    </div>
  )
}

export default App
