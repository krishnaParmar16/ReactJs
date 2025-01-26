import React from 'react'
import { Routes, Route} from "react-router";
import Form from '../pages/Form';
import Product from '../pages/Product';
import Home from '../pages/Home';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
import EditForm from '../pages/EditForm';

export default function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Form' element={<Form></Form>}></Route>
            <Route path='/Product' element={<Product></Product>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            <Route path='/Product/Edit/:id' element={<EditForm></EditForm>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div>
  )
}
