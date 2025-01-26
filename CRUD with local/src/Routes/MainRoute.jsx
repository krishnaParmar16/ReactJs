import React from 'react'
import { Routes, Route} from "react-router";
import Form from '../pages/Form';
import Product from '../pages/Product';
import Home from '../pages/Home';

export default function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Form' element={<Form></Form>}></Route>
            <Route path='/Product' element={<Product></Product>}></Route>
        </Routes>
    </div>
  )
}
