import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import Card from './pages/card/Card.jsx'
import Button from './pages/Button/Button.jsx'
import Student from './pages/Student/Student.jsx'

function App() {


  return (
    <>
     <Header/>
    <Student name="Student-prop" age={20} isStudent={true}></Student>
    <Student name="John" age={40} isStudent={false}></Student>
    <Student name="Mike" age={35} isStudent={true}></Student>
    <Student name = "default test"/>
    <Student />
     <Button/>
     <Card/>
     <Card/>
     <Card/>
     <Footer/>
    </>
  )
}

export default App
