import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ShowHide from './components/ShowHide'

import './App.css'
import Card from './components/Card'
import songs from './data/songs'

function App() {
  
    const songList= songs.map(s=>{
      return <Card  title={s.name} description={s.author} />
    })

  return (
    <>
      <div className='App'>
        <h1>Cards</h1>

        <div className='container'>
    
       {songList} {/*este child no tiene key unica */} 
        </div>
    
      
    
      </div>
    </>
  )
}

export default App
