import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../Components' 

function Layout() {
  return (
    <div className=''>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
