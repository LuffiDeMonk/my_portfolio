import React from "react";
import Project from "../assets/projectalt.jpg";

const Projects = () => {
  return (
    <div className="bg-black w-full pt-14" name="Projects">
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
        <h1 className="text-3xl md:text-5xl inline border-b-4 text-white">
          Projects
        </h1>
        <p className="py-6 text-white text-lg">
          These are the projects that I completed
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8">
          <div className="w-full h-full cursor-pointer hover:scale-105 duration-300 flex flex-col items-center justify-center gap-4 rounded-md overflow-hidden">
            <img src={Project} alt="" className="rounded-b-md" />
            <p className="text-md font-semibold text-white">Recipe App</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
