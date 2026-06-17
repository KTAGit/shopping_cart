import { useState } from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Categories } from './Categories'
import { SignUp } from './SignUp'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <SignUp />
    </>
  )
}

export default App
