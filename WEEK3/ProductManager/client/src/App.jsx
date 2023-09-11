import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/addProduct'
import AllProducts from './components/allProducts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <AddProduct />
            <AllProducts />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
