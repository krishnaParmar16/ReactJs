import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../pages/Home'
import News from '../pages/News'
import Lips from '../pages/Lips'
import Eyes from '../pages/Eyes'
import Face from '../pages/Face'
import Nails from '../pages/Nails'
import Skin from '../pages/Skin'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import PageNotFound from '../pages/PageNotFound'


function Mainroutes() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/lips' element={<Lips></Lips>}></Route>
        <Route path='/eyes' element={<Eyes></Eyes>}></Route>
        <Route path='/face' element={<Face></Face>}></Route>
        <Route path='/nails' element={<Nails></Nails>}></Route>
        <Route path='/skin' element={<Skin></Skin>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
</div>
  )
}

export default Mainroutes