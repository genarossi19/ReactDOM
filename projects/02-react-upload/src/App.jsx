import React from 'react'
import {uploadFile} from './firebase/config'
import { useState } from "react";
import { v4 } from "uuid";

function App() {

  const [file, setFile] = useState(null)
  const handleSubmit = (e)=>{
    e.preventDefault();
    try{
     
      uploadFile(file);
    }catch(error){
      return(
      <h1>ERROR {error}</h1>
      )
    }
    
    
    
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="" id="" onChange={e=>setFile(e.target.files[0])}/>
      <button >Subir</button>
    </form>
  )
}

export default App
