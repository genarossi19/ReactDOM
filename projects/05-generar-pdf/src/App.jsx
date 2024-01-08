import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PdfGenerator from './components/PdfGenerator'
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  
  

  return (
    <>  
    <h1>PDF GENERATOR</h1>
    <PDFViewer style={{
      
      width: 800,
      height: 500 
    
  }}>
      <PdfGenerator />
    </PDFViewer>
    <PDFDownloadLink document={<PdfGenerator/>} fileName='pruebagenerator.pdf'>
      {

        ({loading})=> loading ? <h3>Cargando...</h3> : <button>Descargar</button>
      }
      
    </PDFDownloadLink>
     
    </>
  )
}

export default App
