import React from 'react'
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import Adam from '../assets/Adam.pdf';
import ProfileImg from '../assets/MMCImg2.jpg'

export default function Hero() {
    return (
      <div className='flex flex-col items-center justify-center py-16' data-aos='fade-up' data-aos-delay='300'>
        <img src={ProfileImg} alt='Profile Image' className='w-48 h-48 object-cover mt-10 rounded-full' />
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white mt-6 mb-4'>
          I'm {" "}
          <span className='text-transparent bg-clip-text bg-gradient'>
             Min Mon Chel
          </span>
          , Frontend Developer
        </h1>
        <p className='text-base lg:text-lg text-center text-gray-300 mb-6'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium facere voluptatem consectetur.
        </p>
        <div className='flex items-center space-x-4 mb-6'>
          <a href='#'>
            <img src={github} alt='github' className='w-9 md:w-11 h-9 md:h-11 transition' />
          </a>
          <a href='#'>
            <img src={linkedin} alt='l' className='w-9 md:w-11 h-9 md:h-11 transition' />
          </a>
          <a href='#'>
            <img src={facebook} alt='Facebook' className='w-9 md:w-11 h-9 md:h-11 transition' />
          </a>
          <a href='#'>
            <img src={instagram} alt='Instagram' className='w-9 md:w-11 h-9 md:h-11 transition' />
          </a>
        </div>
        <a href={Adam} download>
          <button className='inline-flex text-white border-2 py-2 px-6 bg-gradient transition rounded-full text-base lg:text-lg'>Download Resume</button>
        </a>
      </div>
    )
}
