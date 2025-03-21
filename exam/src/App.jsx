import { useState } from 'react'

import './App.css'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import MainRoute from './Route/MAinRoute'

function App() {

  return (
    <>
    <Provider store={store}>
      <MainRoute></MainRoute>
    </Provider>
    </>
  )
}

export default App
