import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import Place_order from './pages/place_order/place_order'
import Navbar from './components/navbar/navbar'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
     <Routes>
      < Route path='/' element={<Home/>} />
      < Route path='/cart' element={<Cart/>} />
      < Route path='/order' element={<Place_order/>} />
     </Routes>
    </div>
  )
}

export default App
