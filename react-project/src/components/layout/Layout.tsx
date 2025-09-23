import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Navbar from './Navbar'
import '../../assets/css/custom.css'

function Layout() {
  return (
    <>
     {/* <div className="d-flex">
          <Sidebar/>
          <div className="flex-row-1 w-100">
          <Navbar/>
          </div>
     </div> */}
     
          <Sidebar/>
          <div className="main">
          <Navbar/>
          <div className="contanier-fluid">
               
          </div>
          </div>
     
    </>
  )
}

export default Layout