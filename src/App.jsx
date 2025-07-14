import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return ( 

    <main className='bg-gray-950 overflow-y-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
