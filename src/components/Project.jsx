import React from 'react'
import P1Img from '../assets/Project1.png';
import P2Img from '../assets/Project2.png';
import P3Img from '../assets/Project3.png';
import P4Img from '../assets/Project4.png';
import P5Img from '../assets/Project5.png';
import P6Img from '../assets/Project6.png';

const ProjectCard = ({image, title, description, link}) => {
    return (
        <article className='relative h-80 bg-gray-800 rounded overflow-hidden shadow-lg group'>
            <div className='relative z-10'>
                <figure className='relative'>
                    <img src={image} alt={title} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
                    <a href={link} target='_blank' className='absolute h-[202px] inset-0 flex items-center justify-center bg-purple-300 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300' >
                        <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-500'>
                            GitHub
                        </button>
                    </a>
                </figure>
                <div className='px-6 py-4 text-center'>
                    <header>
                        <h3 className='text-white font-bold text-lg'>{title}</h3>
                    </header>
                    <p className='text-gray-200 text-sm'>{description}</p>
                </div>
            </div>
        </article>
    )
}

let ProjectsList = [
        {
            image: P1Img,
            title: 'Library Manager (React + Firebase)',
            description: 'CRUD-powered library system built with React Context + Firebase, featuring real-time updates and responsive UI.',
            link: 'https://github.com/MinMonChel-hazel/Library-Management-App-Firebase'
        },
        {
            image: P2Img,
            title: 'Todo Tracker (React + localStorage)',
            description: 'A clean and intuitive Todo app, using React Hooks and localStorage to persist tasks.',
            link: 'https://github.com/MinMonChel-hazel/Todo-List'
        },
        {
            image: P3Img,
            title: 'Shopping List (Vanilla JS)',
            description: 'Simple, interactive shopping list implemented with pure JS DOM manipulation.',
            link: 'https://github.com/MinMonChel-hazel/Shopping-List'
        },
        {
            image: P4Img,
            title: 'Tailwind Sample UI (Tailwind)',
            description: 'Responsive UI template built in Vue and styled with Tailwind CSS, focusing on layout and design.',
            link: 'https://github.com/MinMonChel-hazel/Tailwind-Css-Project'
        },
        {
            image: P5Img,
            title: 'Animated Clock (CSS & JS)',
            description: 'Analog and digital clock with smooth animations using CSS and JavaScript.',
            link: 'https://github.com/MinMonChel-hazel/Clock'
        },
        {
            image: P6Img,
            title: 'Counter App (CSS & JS)',
            description: 'Lightweight React counter demonstrating useState for increment/decrement logic.',
            link: 'https://github.com/MinMonChel-hazel/Counter-Project'
        }
    ]

export default function Project() {
    
  return (
    <section id='projects' className='container mx-auto text-white pb-20'>
        <h2 className='text-center text-2xl md:text-3xl font-bold mb-6 md:mb-10' data-aos='fade-up' data-aos-delay='300'>My <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500'>Projects</span></h2>
        <div data-aos='fade-up' data-aos-delay='500' className='relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-6 px-4 gap-6 items-center justify-center md:mt-10 mt-5 text-white box-border'>
            {ProjectsList.map((project, index) => (
                <ProjectCard key={index} image={project.image} title={project.title} description={project.description} link={project.link} />
            ))}            
        </div>
    </section>
  )
}
