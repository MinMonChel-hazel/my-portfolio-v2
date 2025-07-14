import React from 'react'
import reactImg from '../assets/icon_react.png';
import tailwindImg from '../assets/tailwindcss.png';
import cssImg from '../assets/cssImg.png'
import JSImg from '../assets/JSImg.png';

export default function Skills() {

    let skillDatas = [
        {id:1, image:cssImg, title:'CSS', description:'Experienced in crafting clean, responsive layouts and visually engaging interfaces using modern CSS techniques.'},
        {id:2, image:JSImg, title:'JavaScript', description:'Skilled in core JavaScript for dynamic functionality, DOM manipulation, and building interactive user experiences.'},
        {id:3, image:tailwindImg, title:'TailwindCSS', description:'Proficient with TailwindCSS for rapidly creating custom, utility-first designs with consistent styling.'},
        {id:4, image:reactImg, title:'ReactJS', description:'Well-versed in building reusable components, managing state with hooks, and building performant SPAs using React.'}
    ]

  return (
    <div id='skills' className='container mx-auto text-center text-white pb-20'>
        <header className='md:space-y-4 space-y-2' data-aos='fade-up' data-aos-delay='300'>
            <h2 className='lg:text-3xl md:text-2xl text-2xl font-bold text-center md:mb-6 mb-3'>My Experise <br/> and <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500'>Skills</span></h2>
            <p className='text-sm md:text-base lg:text-xl text-center xl:px-40 lg:px-24 md:px-18 px-10'>As a frontend developer, I specialize in building responsive, user-friendly web applications using modern technologies and best practices. Here are the tools I work with the most:</p>
        </header>
        <section data-aos='fade-up' data-aos-delay='500' className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-6 px-4 items-center justify-center gap-4 md:mt-10 mt-5 text-white box-border'>
            {skillDatas.map(skill => (
                <div key={skill.id} className='flex flex-col xl:h-56 lg:h-64 pt-4 pb-4 gap-3 items-center justify-center p-4 border-2 border-gray-800 rounded-lg hover:bg-gradient-to-b hover:from-pink-300 hover:to-blue-600 transition'>
                    <img src={skill.image} className='w-16'/>
                    <h3 className='text-xl'>{skill.title}</h3>
                    <p className='text-gray-400'>{skill.description}</p>
                </div>
            ))}            
        </section>  
    </div>    
  )
}
