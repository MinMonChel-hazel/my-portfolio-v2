import React from "react";
import P1Img from "../assets/Project1.png";
import P2Img from "../assets/Project2.png";
import P3Img from "../assets/Project3.png";
import P4Img from "../assets/Project4.jpg";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative bg-[#121B42] rounded-xl overflow-hidden border border-themeColor shadow-soft xl:h-[365px] lg:h-[380px] md:h-[305px]">
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-[#121B42] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="font-medium text-white py-1.5 px-3.5 rounded-3xl shadow bg-[#121B42] border-2 border-themeColor">
              GitHub
            </button>
          </a>
        </figure>
        <div className="xl:px-5 px-3 py-1 text-center">
          <header>
            <h3 className="text-white font-semibold text-[14px] lg:text-[16px]">
              {title}
            </h3>
          </header>
          <p className="text-gray-400 text-[13px]">{description}</p>
        </div>
      </div>
    </article>
  );
};

let ProjectsList = [
  {
    image: P1Img,
    title: "Movie Explorer (React + TMDB API)",
    description:
      "A responsive movie browsing app built with React and TMDB API. Features include searching, filtering, and category-based browsing (Now Playing, Popular, Top Rated, Upcoming).",
    link: "https://github.com/MinMonChel-hazel/react-movie-app",
  },
  {
    image: P2Img,
    title: "Tasty Recipes (React + API)",
    description:
      "A recipe discovery app created with React and a public Recipes API. Users can search dishes, view ingredients, and explore cooking instructions with a modern responsive design.",
    link: "https://github.com/MinMonChel-hazel/tasty-react-recipes",
  },
  {
    image: P3Img,
    title: "Library Manager (React + Firebase)",
    description:
      "CRUD-powered library system built with React Context + Firebase, featuring real-time updates and responsive UI.",
    link: "https://github.com/MinMonChel-hazel/Library-Management-App-Firebase",
  },
  {
    image: P4Img,
    title: "React Quiz App",
    description:
      "An interactive quiz application developed with React. Supports multiple-choice questions, instant feedback, and score tracking with a clean, engaging UI.",
    link: "https://github.com/MinMonChel-hazel/Library-Management-App-Firebase",
  },
  //   {
  //     image: P5Img,
  //     title: "Animated Clock (CSS & JS)",
  //     description:
  //       "Analog and digital clock with smooth animations using CSS and JavaScript.",
  //     link: "https://github.com/MinMonChel-hazel/Clock",
  //   },
  //   {
  //     image: P6Img,
  //     title: "Counter App (CSS & JS)",
  //     description:
  //       "Simple counter app built using pure HTML, CSS, and JavaScript without any frameworks.",
  //     link: "https://github.com/MinMonChel-hazel/Counter-Project",
  //   },
];

export default function Project() {
  return (
    <section id="projects" className="bg-[#121B42] lg:pt-14 pt-10 px-8 lg:px-0">
      <div className="container mx-auto text-white pb-20">
        <div className="mb-6 md:mb-10" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-center text-2xl lg:text-3xl shadow-2xl font-bold mb-3 uppercase">
            My <span className="text-themeColor">Projects</span>
          </h2>
          <p className="lg:text-lg md:text-base text-[14px] text-center xl:px-40 lg:px-24 md:px-18 px-6">
            Browse through my recent projects to see how I combine design and
            development to create seamless, intuitive web solutions using React,
            Tailwind CSS and modern frontend tools.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-6 px-4 xl:gap-10 lg:gap-4 gap-6 items-center justify-center md:mt-10 mt-5 text-white box-border"
        >
          {ProjectsList.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
