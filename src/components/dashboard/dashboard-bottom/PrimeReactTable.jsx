import React from 'react'
import { useDataContext } from '../../../context/dataContext'
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"

import { useState } from 'react'
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'

const PrimeReactTable = () => {

    const { orderItems,dataState} = useDataContext()

    const [filters, setFilters] = useState({
        global:{value: null, matchMode: FilterMatchMode.CONTAINS},
    })

    console.log("comp data state", dataState)

  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-200 flex-1 '>
                <h1 className="font-medium text-gray-700 text-center">Prime React Table</h1>

        <div>
            <InputText 
            className='border border-slate-200 p-2 m-2'
             onInput={(e) => setFilters({
                global:{value: e.target.value, matchMode: FilterMatchMode.CONTAINS},
            })}/>
        </div>
        <DataTable 
        className='pt-4'
        value={dataState?.orderItems} 
        sortMode='multiple' 
        filters={filters}
        paginator
        rows={10}
        rowsPerPageOptions={[5,10,20]}
        totalRecords={dataState?.orderItems?.length}
        >
            <Column field='OrderID' header='OrderID' sortable/>
            <Column field='Description' header='Description' sortable/>
            <Column field='StockItemID' header='StockItemID' sortable/>
            <Column field='Quantity' header='Quantity' sortable/>
            <Column field='UnitPrice' header='Price' sortable/>
        </DataTable>

    </div>
  )
}

export default PrimeReactTable