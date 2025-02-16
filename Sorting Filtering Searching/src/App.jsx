import { useState } from 'react'
import './App.css'
import Searching from './Components/Searching'
import Sorting from './Components/Sorting'
import Filtering from './Components/Filtering'

function App() {

  return (
    <>
      <Searching></Searching>
      <Sorting></Sorting>
      <Filtering></Filtering>
    </>
  )
}

export default App
