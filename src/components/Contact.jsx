import React from "react";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto text-white px-12 pt-12">
      <h2
        className="text-2xl lg:text-3xl uppercase font-semibold mb:4 lg:mb-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Contact Me
      </h2>
      <div className="flex md:flex-row flex-col">
        <div
          className="space-y-2 pt-2 basis-[50%]"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <header>
            <h1 className="text-xl lg:text-2xl text-white">Min Mon Chel</h1>
            <h2 className="text-xl lg:text-2xl font-semibold mb-10 lg:mb-16">
              Fronted Developer
            </h2>
          </header>
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/MinMonChel-hazel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare
                size={32}
                className="text-white hover:text-themeColor"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/minmonchel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={32}
                className="text-white hover:text-themeColor"
              />
            </a>
            <a
              href="https://www.facebook.com/share/16z6cpkcbq/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                size={32}
                className="text-white hover:text-themeColor"
              />
            </a>
          </div>
          <div className="pt-1 text-base lg:text-lg">
            <p>
              Email -{" "}
              <a
                href="mailto:minmonchel.dev@gmail.com"
                className="hover:underline"
              >
                minmonchel.dev@gmail.com
              </a>
            </p>
          </div>
          <div className="text-lg">
            <p>
              Phone - {""}
              <span>+66 635298331</span>
            </p>
          </div>
          <div className="text-lg">
            <p>
              Line ID - {""}
              <span>
                <a
                  href="https://line.me/ti/p/6cA8cUvmMf"
                  className="hover:underline"
                >
                  chel4dev
                </a>
              </span>
            </p>
          </div>
          <div className="text-lg font-semibold pt-3">
            <span>Bangkok, Thailand</span>
          </div>
        </div>
        <div
          className="mt-10 md:mt-0 basis-[50%]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <form
            action="https://getform.io/f/bjjownvb"
            method="POST"
            className="shadow-md rounded lg:pl-20 md:pl-12 pl-0 md:pr-0 pr-6 pb-6 space-y-5 w-full"
          >
            <div className="space-y-2">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                name="name"
                required
                className="rounded w-full py-2 px-3 bg-[#121B42]  border border-gray-300 leading-tight focus:outline-none focus:transition-all focus:border-themeColor"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                required
                className="rounded w-full py-2 px-3 bg-[#121B42] border border-gray-300 leading-tight focus:outline-none focus:transition-all focus:border-themeColor"
                id="username"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="username">Message</label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                cols="20"
                className="rounded w-full py-2 px-3 bg-[#121B42]  border border-gray-300 leading-tight focus:outline-none focus:transition-all focus:border-themeColor"
                id="username"
                placeholder="Message"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-3 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-base rounded-xl border-2 border-themeColor bg-[#121B42] transition"
              >
                Send Meassage
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
