import React,{useState} from 'react'
import {FiMenu, FiX} from 'react-icons/fi'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const NavBarLinks = [
        {id: 1, name: 'Home', link: '#home'},
        {id: 2, name: 'About', link: '#about'},
        {id: 3, name: 'Skills', link: '#skills'},
        {id: 4, name: 'My Projects', link: '#projects'}
    ];
  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-delay='300'>
        <div className='container mx-auto flex items-center justify-between p-5'>
            {/* LOGO */}
            <a href='#home' className='text-3xl lg:text-4xl font-bold italic text-white'><span className='text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-blue-500 text-5xl'>P</span>ortfolio</a>

            {/* Mobile Menu Toggle */}
            <button className='md:hidden' onClick={() => setIsOpen(true)}>
                <FiMenu className='w-8 h-8' />
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-7'>
                {NavBarLinks.map(link => (
                    <a href={link.link} className='hover:text-gray-200 text-lg' key={link.id}>{link.name}</a>
                ))}
                <a href='#contact'>
                    <button className='inline-flex text-white border-2 py-1.5 px-5 bg-gradient rounded-full text-lg transition'>Contact</button>
                </a>
            </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' :'hidden'} md:hidden bg-gradient absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 py-16`}>
            {/* Close Button */}
            <button className='absolute top-5 right-5 text-white' onClick={() => setIsOpen(false)}>
                <FiX className='w-8 h-8'></FiX>
            </button>
            {/* Mobile Navigation */}
            {NavBarLinks.map(link => (
                <a href={link.link} className='' key={link.id}>{link.name}</a>
            ))}
            {/* contact button */}
            <a href='#contact'>
                <button className='inline-flex text-white border-2 px-6 py-2 rounded-full transition'>Contact</button>
            </a>
        </div>

    </header>
  )
}
