import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Skills from './components/Skills'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Sidenav/>
      <Main/>
      <Skills/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
