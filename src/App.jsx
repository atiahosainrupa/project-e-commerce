import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Cart from './pages/Card'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<ProductDetails/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/cart" element={<Cart />} />
        </Route >
      </Routes>
   </BrowserRouter>
  )
}
export default App