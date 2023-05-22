import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/react.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const NavMenu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Experience",
    },
    {
      id: 4,
      name: "Projects",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];
  return (
    <div className="w-full h-20 top-0 md:fixed sticky bg-black z-10">
      <div className="px-4 md:px-0 max-w-screen-lg mx-auto h-full flex items-center justify-between gap-8">
        <Link
          to="Home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={Logo} alt="" />
          <span className="text-white text-xl">prabhat</span>
        </Link>
        <ul className="hidden md:flex items-center justify-between space-x-4 me-auto">
          {NavMenu.map(({ id, name }) => {
            return (
              <li
                key={id}
                className="text-white text-md cursor-pointer hover:scale-105 transition-all duration-100"
              >
                <Link to={name} smooth={true} duration={500}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="Contact"
          smooth={true}
          duration={500}
          className="text-white cursor-pointer font-2xl w-fit px-4 py-2 border-2 hidden md:block md:mr-2 lg:mr-0"
        >
          Let's Connect
        </Link>

        <AnimatePresence>
          {navStatus && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex items-center"
            >
              <div className="flex flex-col items-center justify-between w-full">
                {NavMenu.map(({ id, name }) => {
                  return (
                    <div
                      key={id}
                      className="text-slate-500 text-xl uppercase py-4"
                    >
                      <Link
                        to={name}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavStatus(false)}
                      >
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="text-white z-10 md:hidden"
          onClick={() => setNavStatus(!navStatus)}
        >
          {navStatus ? <AiOutlineClose size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
