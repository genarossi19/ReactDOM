import React from 'react'
import {uploadFile} from './firebase/config'
import { useState } from "react";
import './App.css'
import FileUploader from "./components/FileUploader.jsx";
import { v4 } from "uuid";

function App() {

  return(
    <div>
      <FileUploader/>
      
      
    </div>
  )
}

export default App
