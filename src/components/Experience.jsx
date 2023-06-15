import React from "react";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import jsImage from "../assets/javascript.png";
import bootstrapImage from "../assets/bootstrap.png";
import reactImage from "../assets/reactimg.png";
import reduxImage from "../assets/redux.png";
import tailwindImage from "../assets/tailwind.png";

const skills = [
  {
    id: 1,
    title: "HTML",
    image: htmlImage,
    shadow: "shadow-orange-500",
  },
  {
    id: 2,
    title: "CSS",
    image: cssImage,
    shadow: "shadow-blue-400",
  },
  {
    id: 3,
    title: "Javascript",
    image: jsImage,
    shadow: "shadow-yellow-500",
  },
  {
    id: 4,
    title: "React",
    image: reactImage,
    shadow: "shadow-blue-400",
  },
  {
    id: 5,
    title: "Redux",
    image: reduxImage,
    shadow: "shadow-purple-600",
  },
  {
    id: 6,
    title: "Bootstrap",
    image: bootstrapImage,
    shadow: "shadow-purple-400",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    image: tailwindImage,
    shadow: "shadow-sky-600",
  },
];

const cardVariants = [
  {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 30,
      },
    },
  },
];

const Experience = () => {
  return (
    <div className="bg-black text-white md:pt-0" name="Experience">
      <div className="max-w-screen-lg mx-auto h-full px-4 lg:px-0">
        <h1 className="text-3xl md:text-5xl inline border-b-4">Experience</h1>
        <p className="py-6 text-lg">
          Here are some of the technologies which I am familiar with
        </p>
        <div className="pb-8 grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ id, title, image, shadow }) => {
            return (
              <div
                className={`shadow-md ${shadow} rounded-lg flex flex-col h-full items-center justify-center w-full gap-4 md:hover:scale-105 duration-300`}
                key={id}
              >
                <img src={image} alt="" className="w-16 h-16 object-contain" />
                <p className="text-md font-semibold">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
