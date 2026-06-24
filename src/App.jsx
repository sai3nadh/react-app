import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import Card from './pages/card/Card.jsx'
function App() {


  return (
    <>
     <Header/>
     <Card/>
     <Card/>
     <Card/>
     <Footer/>
    </>
  )
}

export default App
