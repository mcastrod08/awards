import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Navbar from '../components/Navbar'

const App = () => {
  return (
    <main className="relative min-h-screen 
      w-screen overflow-hidden">
      <Navbar/>
      <Hero />
      <About id="watch-trailer" />
    </main>
  )
}

export default App
