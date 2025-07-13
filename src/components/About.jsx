import React from 'react'
import AboutMeImg from '../assets/AboutMeImg.jpg';

export default function About() {
  return (
    <div id='about' className='text-white container mx-auto mt-10 xl:px-50 lg:px-20 px-10 pb-20' data-aos='fade-right' data-aos-delay='300'>
      <div>
        <h2 className='text-center text-2xl md:text-3xl font-bold mb-6 md:mb-10'>About Me</h2>
        <div className='flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-14 items-center'>
            <img src={AboutMeImg} alt='About Me Image' className='w-[200px] h-[250px] rounded-lg object-cover' />
            <div>
                <p className='text-base lg:text-xl text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo asperiores ut ipsum accusamus doloribus esse tenetur qui nesciunt, provident porro, cum cupiditate. Suscipit porro mollitia nostrum eveniet veniam eius laboriosam.</p>
                <div className='space-y-2 my-4'>
                    <div className='flex items-center gap-4'>
                        <label htmlFor='htmlandcss' className='basis-[30%] md:basis-[20%] text-base lg:text-xl'>HTML & CSS</label>
                        <div className='bg-gray-800 rounded-full h-2 lg:h-2.5 grow'>
                            <div className='bg-gradient transition w-10/12 h-2 lg:h-2.5 rounded-full'></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <label htmlFor='javascript' className='basis-[30%] md:basis-[20%] text-base lg:text-xl'>Javascript</label>
                        <div className='bg-gray-800 rounded-full h-2 lg:h-2.5 grow'>
                            <div className='bg-gradient transition w-8/12 h-2 lg:h-2.5 rounded-full'></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <label htmlFor='tailwind css' className='basis-[30%] md:basis-[20%] text-base lg:text-xl'>Tailwind CSS</label>
                        <div className='bg-gray-800 rounded-full h-2 lg:h-2.5 grow'>
                            <div className='bg-gradient transition w-9/12 h-2 lg:h-2.5 rounded-full'></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <label htmlFor='react js' className='basis-[30%] md:basis-[20%] text-base lg:text-xl'>React JS</label>
                        <div className='bg-gray-800 rounded-full h-2 lg:h-2.5 grow'>
                            <div className='bg-gradient transition w-10/12 h-2 lg:h-2.5 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
