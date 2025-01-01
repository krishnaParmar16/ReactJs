import { useState } from 'react'
import './App.css'
import './about'
import About from './about'
import './skill'
import Skill from './skill'
import './project'
import Project from './project'
import './contact'
import Contact from './contact'

function App() {

  return (
    <>
    <div className="main">
    <About></About>
    <Skill></Skill>
    <Project></Project>
    <Contact></Contact>
    </div>     
    </>
  )
}

export default App
