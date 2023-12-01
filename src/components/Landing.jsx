import React from "react";
import { motion } from "framer-motion";
import Rocket from "../assets/rocket.png";
import resume from "/Prabhat_CV.pdf";

const imageVariants = {
  visible: {
    y: [0, 5, -5],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};

const Landing = () => {
  return (
    <div className="h-screen w-full bg-black" name="Home">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2 h-full text-white">
        <div className="text-center md:text-start px-4">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">I'm a</h1>
          <span className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Front End Developer
          </span>
          <p className="text-white max-w-md py-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            molestiae? Nam repudiandae, rerum vitae sequi labore harum vero sint
            eius numquam, ut voluptates doloremque velit temporibus dolores cum
            officia ex!
          </p>
          <a
            download="resume"
            href={resume}
            className=" w-fit px-6 py-3 bg-gradient-to-l from-cyan-500 to-blue-500 text-white rounded-md"
          >
            Download CV
          </a>
        </div>
        <div className="flex items-center h-1/2 lg:h-auto">
          <motion.img
            variants={imageVariants}
            animate="visible"
            src={Rocket}
            alt=""
            className=" object-cover h-[80%] md:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
