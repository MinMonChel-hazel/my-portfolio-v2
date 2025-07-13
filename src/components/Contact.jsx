import React from 'react';
import { FiMail } from 'react-icons/fi';
import {FiPhone} from 'react-icons/fi';
import {FiMapPin} from 'react-icons/fi';

export default function Contact() {
  return (
    <section id='contact' className='container mx-auto text-white xl:px-52 lg:px-36 md:pb-10 pb-4'>
        <h2 className='text-center text-2xl md:text-3xl font-bold mb-6 md:mb-10' data-aos='fade-up' data-aos-delay='300'>Contact</h2>
        <div className='flex md:flex-row flex-col justify-center'>
            <div className='space-y-2 pt-2 px-6 md:px-0' data-aos='fade-right' data-aos-delay='300'>
                <div>
                    <FiMail className='text-pink-300 w-16 h-6 inline-block' />
                    <a href='mailto:minmonchel.dev@gmail.com' className='hover:underline'>
                        minmonchel.dev@gmail.com
                    </a>
                </div>
                <div>
                    <FiPhone className='text-pink-300 w-16 h-6 inline-block' />
                    <span>+66 635298331</span>
                </div>
                <div>
                    <FiMapPin className='text-pink-300 w-16 h-6 inline-block' />
                    <span>Greenspace Apartment, Chatuchack, Bangkok</span>
                </div>
            </div>
            <div className='mt-10 md:mt-0' data-aos='fade-left' data-aos-delay='300'>
                <form action="https://getform.io/f/bjjownvb" method="POST" class="shadow-md rounded lg:pl-20 pl-12 md:pr-0 pr-6 pb-10 space-y-5">
                    <div class="space-y-2">
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text" name='name' required className="rounded w-full py-2 px-3 bg-gray-800 border border-gray-600 leading-tight focus:outline-none focus:transition-all focus:border-pink-400" id="username" placeholder="Username" />
                    </div>
                    <div class="space-y-2">
                        <label htmlFor="Email">
                            Email
                        </label>
                        <input type="email" name='email' required className="rounded w-full py-2 px-3 bg-gray-800 border border-gray-600 leading-tight focus:outline-none focus:transition-all focus:border-pink-400" id="username" placeholder="Email" />
                    </div>
                    <div class="space-y-2">
                        <label htmlFor="username">
                            Message
                        </label>
                        <textarea name='message' id='message' required rows="5" cols="20" className="rounded w-full py-2 px-3 bg-gray-800 border border-gray-600 leading-tight focus:outline-none focus:transition-all focus:border-pink-400" id="username" placeholder="Message" />
                    </div>
                    <div>
                        <button type='submit' className='px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-blue-500 transition'>Send Meassage</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
