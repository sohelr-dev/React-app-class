import React from 'react'
import Home from './Home'
import About from './About'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    
    {/* <About/> */}
    </>
  )
}

export default App
