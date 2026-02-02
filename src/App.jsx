import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Habits from './components/Habits'
import Expertise from './components/Expertise'
import Contact from './components/Contact'

import './App.css'
import './Navbar.css'
import './Hero.css'
import './About.css'
import './Habits.css'
import './Expertise.css'
import './Contact.css'




 
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Habits></Habits>
    <Expertise></Expertise>
    <Contact></Contact>
    </>
  )
}

export default App
