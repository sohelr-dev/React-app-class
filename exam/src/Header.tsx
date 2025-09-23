import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="container">
     <div className="text-center">
          <Link to="home">Home</Link>
          <span> | </span>
          <Link to="about">About</Link>
          <span> | </span>
          <Link to="contact">Contact</Link>
     </div>
    </div>
    </>
  )
}

export default Header