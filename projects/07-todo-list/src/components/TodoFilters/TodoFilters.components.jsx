import React from 'react'

function FiltersContainer({children}) {
  return (
    <div className='flex flex-wrap items-center justify-between p-4 bg-slate-700 border-b border-solid border-gray-600'>

        {children}
    </div>
  )
}



function ItemsLeft({total = 0}) {
  return (
   <div><p className='text-gray-400 text-sm'>{total} items left</p></div> 
  )
}



function FilterButtonContainer({children}) {
  return (
    <div className='flex items-center space-x-2 '>{children}</div>
  )
}


function FilterButton({action, active='', filter=''}) {
    


  return ( 
    <button onClick={()=>action()}className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out
    ${active.toLowerCase()  === filter.toLowerCase()  ? 'text-blue-500' : 'text-gray-400'}`}>
        {filter}
 
    </button>
  )
}





export  {FiltersContainer, ItemsLeft,FilterButtonContainer,FilterButton}