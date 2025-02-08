import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Cart'  element={<Cart/>}/>
          <Route path='/home'  element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App