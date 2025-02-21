import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Crud from './Component/crud'

function App() {

  return (
    <>
      <Provider store={store}>
      <Crud></Crud>
      </Provider>
    </>
  )
}

export default App
