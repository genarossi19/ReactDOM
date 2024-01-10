import React from 'react'
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from './TodoFilters.components'


function TodoFilters({total, activeFilter, showActiveTodos, showCompletedTodos, showAllTodos, handleClearCompleted}) {
  return (
    <div>
      <FiltersContainer>
        <ItemsLeft total={total}/>
        <FilterButtonContainer>
        <FilterButton  action={()=>showAllTodos()} active={activeFilter} filter='All'/>
        <FilterButton action={()=>showActiveTodos()} active={activeFilter} filter='Active'/>  
        <FilterButton action={()=>showCompletedTodos()} active={activeFilter} filter='Completed'/>

        </FilterButtonContainer>
        <button onClick={()=>handleClearCompleted()}className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>Clear Completed</button>
      </FiltersContainer>
    </div>
  )
}

export default TodoFilters