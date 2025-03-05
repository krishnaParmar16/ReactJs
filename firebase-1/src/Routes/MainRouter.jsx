import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from '../firebase/SignUp'
import SignIn from '../firebase/SignIn'
import Dashboard from '../firebase/Dashboard'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SignUp></SignUp>}></Route>
            <Route path='/signin' element={<SignIn></SignIn>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter