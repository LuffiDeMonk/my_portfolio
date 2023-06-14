import React from "react";
import RecipeApp from "../assets/recipe_app.jpg";
import NewsApp from "../assets/news_app.jpg";
import MovieApp from "../assets/movie_app.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    projectImage: RecipeApp,
    projectUrl: "https://profound-chaja-20cc07.netlify.app/",
    projectTitle: "Recipe App",
  },
  {
    id: 2,
    projectImage: NewsApp,
    projectUrl: "https://github.com/LuffiDeMonk/news-app/tree/master",
    projectTitle: "News App",
  },
  {
    id: 3,
    projectImage: MovieApp,
    projectUrl: "https://playful-selkie-ca7f7e.netlify.app/",
    projectTitle: "Movie App",
  },
];

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
          {projects.map(({ id, projectImage, projectUrl, projectTitle }) => {
            return (
              <a
                href={projectUrl}
                key={id}
                className="w-full h-full cursor-pointer hover:scale-105 duration-300 flex flex-col items-center justify-center gap-4 rounded-md overflow-hidden"
              >
                <img
                  src={projectImage}
                  alt=""
                  className="rounded-b-md object-cover"
                />
                <p className="text-md font-semibold text-white">
                  {projectTitle}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
