import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Loginsignup from './Pages/Loginsignup'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'
import men from '../src/Components/Assets/banner_mens.png'
import women from '../src/Components/Assets/banner_women.png'
import kid from '../src/Components/Assets/banner_kids.png'
import Cart from './Pages/Cart'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women} category='women'/>} />
          <Route path='/kid' element={<ShopCategory banner={kid} category='kid'/>}/>
          <Route path='/login' element={<Loginsignup/>} />
          <Route path='/products' element={<Product/>}>
            <Route path='/products/:id' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
