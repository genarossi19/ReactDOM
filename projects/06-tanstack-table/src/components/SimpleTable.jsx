import React, { useState } from 'react'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel,getSortedRowModel, getFilteredRowModel} from "@tanstack/react-table";
import data from "../data/MOCK_DATA.json";

function SimpleTable() {
    const [filtering, setFiltering]= useState("")
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


    // dos params: # un objeto con: arreglo de los datos a mostrar y arreglo columns para los encabezados
    //              # retorna un objeto que se guarda en table con toda la info
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state:{
        globalFilter:filtering,
    }, onGlobalFilterChange:setFiltering,
    })
    return (
        <div>
            <input type='text' value={filtering} onChange={e=> setFiltering(e.target.value)}/>
            <table>
                <thead>
                    {
                        //al ejecutar theadergroups la funcion devuelve multiples arreglos
                        table.getHeaderGroups().map(headergroup => (
                            //retorno tr para colocar una fila (row) dentro del thead
                            <tr key={headergroup.id}>
                                {
                                    headergroup.headers.map(header => (
                                        <th key={header.id}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map((row)=> (
                            <tr key={row.id}>
                                {/* dentro de cada tr genero td */}
                                {
                                    row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {/* cada td tendra el dato */}
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    {
                        table.getFooterGroups().map(footerGroups=>(
                            <tr key={footerGroups.id}>
                                    {
                                        footerGroups.headers.map(footer=>(
                                            <th key={footer.id}>
                                                {
                                                    flexRender(
                                                        footer.column.columnDef.footer,
                                                        footer.getContext()
                                                    )
                                                }
                                            </th>
                                        ))
                                    }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
            <button onClick={()=>table.setPageIndex(0)}>
                Inicio
            </button>
            <button onClick={()=>table.previousPage()}>
                Anterior
            </button>
            <button onClick={ ()=>table.nextPage()}>
                Siguiente
            </button>
            <button onClick={()=>table.setPageIndex(table.getPageCount()-1)}>
                Final
            </button>

        </div>
    )
}

export default SimpleTable