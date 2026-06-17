import { useState } from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Categories } from './Categories'
import { SignUp } from './SignUp'
import { Footer } from './Footer'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <SignUp />
    <Footer />
    </>
  )
}

export default App
