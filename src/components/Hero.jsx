import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import ProfileImg from "../assets/MMCImg2.jpg";
import Hazel from "../assets/MinMonChel_Resume.pdf";

const roles = ["Min Mon Chel", "Frontend Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      data-aos="fade-left"
      data-aos-delay="300"
      className="relative overflow-hidden flex flex-col items-center mt-2 md:mt-0 mb-4 lg:mb-0"
    >
      <div className="lg:block hidden lg:h-[350px] xl:h-[450px] xl:w-[480px] lg:w-[380px] absolute bg-themeColor transform rotate-45 z-0 xl:right-12 right-0 top-36 rounded-3xl"></div>

      <section className="container mx-auto min-h-screen flex md:flex-row flex-col items-center justify-center px-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-14">
          {/* Left Image Column */}
          <div className="text-white xl:max-w-[620px] lg:max-w-[540px] space-y-2 text-center md:text-left mt-2">
            <h3 className="xl:text-[30px] lg:text-[28px] text-[20px] uppercase text-white">
              Transform Your Ideas into Simple, Clean & Functional Web
              Interfaces with
            </h3>

            <h1 className="text-3xl md:text-[28px] lg:text-4xl uppercase text-themeColor font-bold drop-shadow-xl lg:h-16 md:h-10 h-20 flex items-center justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="block typed-text-shadow"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <div className="lg:space-y-6 space-y-3">
              <p className="lg:text-base md:text-[15px] text-[13px] text-gray-300">
                Skilled in React, Tailwind CSS, JavaScript and currently
                learning Redux, TypeScript and Next.js. Let’s build fast,
                responsive, and beautiful websites together. I ensure seamless
                functionality, scalability, and a smooth user experience.
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/MinMonChel-hazel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img src={github} alt="GitHub" className="w-10 h-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/minmonchel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
                </a>
              </div>

              <a
                href={Hazel}
                className="cta-button lg:text-lg text-[14px] rounded-xl"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Text Column */}
        <div className="relative xl:mt-14 mt-8">
          <div
            className="xl:w-72 lg:w-64 w-60 xl:h-72 lg:h-64 h-60 rounded-full left-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-60 h-60 rounded-full object-cover border-8 border-white shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
