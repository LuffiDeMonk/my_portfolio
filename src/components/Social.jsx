import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const socialIcons = [
  {
    id: 1,
    name: "Facebook",
    icon: <AiOutlineFacebook size={30} />,
    href: "https://m.facebook.com/prabhat.thapa.961",
    background: "bg-[#4267b2] rounded-tl-md",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <AiOutlineInstagram size={30} />,
    href: "/",
    background: "bg-[#833ab4]",
  },
  {
    id: 3,
    name: "Github",
    icon: <AiOutlineGithub size={30} />,
    href: "https://github.com/LuffiDeMonk",
    background: "bg-[#171515]",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <AiOutlineLinkedin size={30} />,
    href: "/",
    background: "bg-[#0e76a8] rounded-bl-md",
  },
];
let length = socialIcons.length;
console.log(length);

const Social = () => {
  return (
    <div className="fixed top-[50%] right-0 translate-y-[-50%] z-20 overflow-hidden cursor-pointer hidden lg:block">
      {socialIcons.map(({ id, name, icon, href, background }, index) => {
        return (
          <div
            className={`${background} flex flex-col items-center justify-center p-2 w-full translate-x-[5.4rem] hover:translate-x-0 duration-300`}
            key={id}
          >
            <a className="flex items-center text-center w-full" href={href}>
              {icon}
              <span className="text-md ml-4 text-white font-semibold">
                {name}
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
