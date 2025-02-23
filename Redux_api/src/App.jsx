import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Api from './Component/Api'
import { store } from './app/Store'



function App() {

  return (
    <>
   <Provider store={store}>
    <Api></Api>
   </Provider>
    </>
  )
}

export default App
