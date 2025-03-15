import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from '../FireBase/SignUp'
import SignIn from '../FireBase/SignIn'
import Daseboard from '../FireBase/Daseboard'

function MainRoute() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/dashboard' element={<Daseboard></Daseboard>}></Route>
    </Routes>
    </div>
  )
}

export default MainRoute