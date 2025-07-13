import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return ( 

    <main className='bg-gray-950'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  )
}

export default App
