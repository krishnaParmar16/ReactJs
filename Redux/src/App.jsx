import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Counter from './Component/Counter'


function App() {

  return (
    <>
    <Provider store={store}>
      <Counter/>
      </Provider>
    </>
  )
}

export default App
