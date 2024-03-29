import React from 'react'
import TopPieCards from '../../components/dashboard/dashboard-top/TopPieCards'
import PrimeReactTable from '../../components/dashboard/dashboard-bottom/PrimeReactTable'


const Products = () => {


  return (
    <div className='flex flex-col gap-4 w-full py-3'>
        <TopPieCards/>


        <div className='flex flex-col md:flex-row gap-4 w-full py-6'>
            <PrimeReactTable/>
        </div>

      
        
    </div>
  )
}

export default Products