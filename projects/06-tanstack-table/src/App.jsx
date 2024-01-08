import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleTable from "./components/SimpleTable.jsx";
import data from "./data/MOCK_DATA.json";

function App() {
  const columns = [
    {
        header: 'ID',
        accessorKey: 'id',
        footer: 'ID'

    },
    {
        header: 'Nombre',
        accessorKey: 'first_name',
        footer: 'Nombre'

    },
    {
        header: 'Apellido',
        accessorKey: 'last_name',
        footer: 'Apellido'

    },
    {
        header: 'email',
        accessorKey: 'email',
        footer: 'email'

    },
    {
        header: 'Genero',
        accessorKey: 'gender',
        footer: 'Genero'

    },
    {
        header: 'FechaNac',
        accessorKey: 'birthdate',
        footer: 'FechaNac'

    }
]

  return (
    <>
     <SimpleTable data={data} columns={columns}/>
    </>
  )
}

export default App
