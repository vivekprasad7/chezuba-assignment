
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/shared/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import Products from './pages/products/Products'

function App() {

  return (
    
      <div>
          <h1 className='text-3xl text-red-400'>Hello</h1>

          <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="products" element={<Products/>}/>
          </Route>
        </Routes>



      </div>
     
    
  )
}

export default App
