import React from "react";
import reactImg from "../assets/icon_react.png";
import tailwindImg from "../assets/tailwindcss.png";
import cssImg from "../assets/cssImg.png";
import JSImg from "../assets/JSImg.png";

export default function Skills() {
  let skillDatas = [
    {
      id: 1,
      image: cssImg,
      title: "CSS",
      description:
        "Experienced in crafting clean, responsive layouts and visually engaging interfaces using modern CSS techniques.",
    },
    {
      id: 2,
      image: JSImg,
      title: "JavaScript",
      description:
        "Skilled in core JavaScript for dynamic functionality, DOM manipulation, and building interactive user experiences.",
    },
    {
      id: 3,
      image: tailwindImg,
      title: "TailwindCSS",
      description:
        "Proficient with TailwindCSS for rapidly creating custom, utility-first designs with consistent styling.",
    },
    {
      id: 4,
      image: reactImg,
      title: "ReactJS",
      description:
        "Well-versed in building reusable components, managing state with hooks, and building performant SPAs using React.",
    },
  ];

  return (
    <div
      id="skills"
      className="container mx-auto text-center text-white lg:pb-20 pb-10 lg:pt-14 pt-12 xl:max-w-6xl lg:max-w-5xl md:max-w-2xl max-w-[400px]"
    >
      <header
        className="lg:space-y-4 space-y-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2 className="lg:text-3xl md:text-2xl text-2xl font-bold text-center mb-3 uppercase">
          My Experise <br /> and <span className="text-themeColor">Skills</span>
        </h2>
        <p className="lg:text-lg md:text-base text-[14px] text-center xl:px-40 lg:px-24 md:px-18 px-10">
          As a frontend developer, I specialize in building responsive,
          user-friendly web applications using modern technologies and best
          practices. Here are the tools I work with the most:
        </p>
      </header>
      {/* <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-6 px-4 items-center justify-center gap-4 md:mt-10 mt-5 text-white box-border"
      >
        {skillDatas.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col xl:h-56 lg:h-64 pt-4 pb-4 gap-3 items-center justify-center p-4 border-2 border-gray-800 rounded-lg hover:bg-gradient-to-b hover:from-pink-300 hover:to-blue-600 transition"
          >
            <img src={skill.image} className="w-16" />
            <h3 className="text-xl">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </section> */}

      <div
        className="lg:space-y-2 space-y-1 my-8 mx-auto xl:max-w-4xl lg:max-w-3xl md:max-w-xl max-w-[340px]"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <div className="flex items-center gap-4">
          <label
            htmlFor="htmlandcss"
            className="basis-[30%] md:basis-[20%] text-sm md:text-base lg:text-xl text-left"
          >
            HTML & CSS
          </label>
          <div className="bg-[#121B42] rounded-full h-1.5 md:h-2 lg:h-2.5 grow">
            <div className="bg-themeColor transition w-10/12 h-1.5 md:h-2 lg:h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="javascript"
            className="basis-[30%] md:basis-[20%] text-sm md:text-base lg:text-xl  text-left"
          >
            Javascript
          </label>
          <div className="bg-[#121B42] rounded-full h-1.5 md:h-2 lg:h-2.5 grow">
            <div className="bg-themeColor transition w-8/12 h-1.5 md:h-2 lg:h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="tailwind css"
            className="basis-[30%] md:basis-[20%] text-sm md:text-base lg:text-xl text-left"
          >
            Tailwind CSS
          </label>
          <div className="bg-[#121B42] rounded-full h-1.5 md:h-2 lg:h-2.5 grow">
            <div className="bg-themeColor transition w-9/12 h-1.5 md:h-2 lg:h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="react js"
            className="basis-[30%] md:basis-[20%] text-sm md:text-base lg:text-xl text-left"
          >
            React JS
          </label>
          <div className="bg-[#121B42] rounded-full h-1.5 md:h-2 lg:h-2.5 grow">
            <div className="bg-themeColor transition w-10/12 h-1.5 md:h-2 lg:h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="react js"
            className="basis-[30%] md:basis-[20%] text-sm md:text-base lg:text-xl text-left"
          >
            Redux
          </label>
          <div className="bg-[#121B42] rounded-full h-1.5 md:h-2 lg:h-2.5 grow">
            <div className="bg-themeColor transition w-7/12 h-1.5 md:h-2 lg:h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="react js"
            className="basis-[30%] md:basis-[20%] text-sm md:text-base lg:text-xl text-left"
          >
            Figma
          </label>
          <div className="bg-[#121B42] rounded-full h-1.5 md:h-2 lg:h-2.5 grow">
            <div className="bg-themeColor transition w-5/12 h-1.5 md:h-2 lg:h-2.5 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="react js"
            className="basis-[30%] md:basis-[20%] text-sm md:text-base lg:text-xl text-left"
          >
            Git
          </label>
          <div className="bg-[#121B42] rounded-full h-1.5 md:h-2 lg:h-2.5 grow">
            <div className="bg-themeColor transition w-10/12 h-1.5 md:h-2 lg:h-2.5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
