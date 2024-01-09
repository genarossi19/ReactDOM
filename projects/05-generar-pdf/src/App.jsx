import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PdfGenerator from './components/PdfGenerator'
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const [valorName, setValorName] = useState('');
  const handleChangeName = (event) => {
    setValorName(event.target.value);
  };
  

  const [valorApellido, setValorApellido] = useState('');
  const handleChangeApellido = (event) => {
    setValorApellido(event.target.value);
  };
  const [valorCurso, setValorCurso] = useState('');
  const handleChangeCurso= (event) => {
    setValorCurso(event.target.value);
  };
 
  return (
    <>  

    <h1>PDF GENERATOR</h1>
    <input type="text" placeholder='Nombre'
        value={valorName}
        onChange={handleChangeName}/>
      
     <input type="text" placeholder='Apellido'
        value={valorApellido}
        onChange={handleChangeApellido}/>
        <input type="text" placeholder='Curso'
        value={valorCurso}
        onChange={handleChangeCurso}/>

    <PDFViewer style={{
      
      width: 800,
      height: 500 
    
  }}>
      <PdfGenerator name={valorName} apellido={valorApellido} curso={valorCurso}/>
    </PDFViewer>
    <PDFDownloadLink document={<PdfGenerator name={valorName} apellido={valorApellido} curso={valorCurso}/>} fileName='pruebagenerator.pdf'>
      {

        ({loading})=> loading ? <h3>Cargando...</h3> : <button>Descargar</button>
      }
      
    </PDFDownloadLink>
     
    </>
  )
}

export default App
