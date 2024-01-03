import React from 'react'
import {uploadFile} from './firebase/config'
import { v4 } from "uuid";

function App() {
  return (
    <div>
      <input type="file" name="" id="" onChange={e=>uploadFile(e.target.files[0])}/>
    </div>
  )
}

export default App
