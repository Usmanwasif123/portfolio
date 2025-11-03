import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const App = () => {
  return (
    <main className="w-full md:max-w-7xl xl:max-w-[1600px] 2xl:max-w-[2000px] mx-auto px-4 overflow-visible">
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Clients/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App