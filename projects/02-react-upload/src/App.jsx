import React from 'react'

function App() {
  return (
    <div>
      <input type="file" name="" id="" onChange={e=>{console.log(e.target.files[0])}}/>
    </div>
  )
}

export default App