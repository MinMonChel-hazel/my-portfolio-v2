import React from "react";
import AboutMeImg from "../assets/AboutMe.jpg";
import { FaUserGraduate } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-[#121B42]">
      <div
        className="text-white container mx-auto pt-10 md:pb-20 pb-10 px-12"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div>
          <h2 className="text-center md:text-left text-2xl font-semibold mb-2 md:mb-3 uppercase shadow-2xl">
            About Me
          </h2>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <FaUserGraduate size={28} className="text-themeColor" />
            <div className="text-[15px] lg:text-base">
              <p className="shadow-2xl">Bachelor of Computer Science</p>
              <p className="shadow-2xl">B.C.SC</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-6 lg:gap-14 items-center mt-3">
            <img
              src={AboutMeImg}
              alt="About Me Image"
              className="xl:w-[250px] w-[280px] xl:h-[300px] h-[330px] rounded-lg object-cover"
            />
            <div className="flex flex-col xl:gap-6 gap-4 text-[16px]">
              <div className="flex flex-col xl:gap-2 gap-1 text-justify md:text-left lg:text-[15px] text-[12px]">
                <p>
                  Hello, I am Min Mon Chel, a frontend developer with a strong
                  focus on React.js and Tailwind CSS. I’m currently enhancing my
                  skills in Next.js, Redux and TypeScript. I also have
                  experience with other frontend tools and libraries that help
                  enhance the functionality and design of my projects. I also
                  enjoy working with animation libraries like Framer Motion to
                  bring life to UI components, and I’ve explored UI libraries
                  such as ShadCN and Material UI to speed up and polish my
                  designs.{" "}
                </p>
                <p>
                  As a native Burmese speaker with intermediate level in
                  English, I’m able to communicate and collaborate effectively
                  across diverse teams. I’m passionate about building clean,
                  user-friendly, and high-performance web interfaces that are
                  both beautiful and functional.{" "}
                </p>
                <p>
                  I enjoy creating responsive layouts and optimizing
                  performance, and I'm always excited to tackle new frontend
                  challenges. If you’re looking for a frontend developer who
                  values both design and code, feel free to get in touch!
                </p>
              </div>
              <div className="flex gap-3">
                <a href="https://drive.google.com/file/d/1fZd1pjIZy1903FgwQvJXz9Mb0q0TDthB/view?usp=sharing">
                  <button className="border border-themeColor text-white px-4 py-1.5 rounded-lg text-[14px] lg:text-base font-medium transition duration-300 uppercase shadow-2xl">
                    View Certificate
                  </button>
                </a>
                <a href="#contact">
                  <button className="bg-themeColor text-[#121B42] px-4 py-1.5 rounded-lg text-[14px] lg:text-base font-medium transition duration-300 uppercase shadow-2xl">
                    Hire Me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
