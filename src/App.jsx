import { useState } from 'react'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Footer } from './Footer'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <Navbar />
    <div className='main-content'>
        <Outlet />
    </div>
    <Footer /> 
    </>
  )
}

export default App
