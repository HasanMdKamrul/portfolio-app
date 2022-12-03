import React from "react";
import { FaCode, FaLocationArrow, FaNodeJs, FaReact } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

const PersonalInfo = () => {
  const developerKbd = (
    <>
      <div className="space-y-2">
        <kbd className="kbd kbd-sm mr-2 bg-primary">
          <FaReact className="mr-2 " />
          <span>React Developer</span>
        </kbd>
        <kbd className="kbd kbd-sm mr-2 bg-secondary">
          <FaNodeJs className="mr-2" />
          <span>NodeJS/Express Developer</span>
        </kbd>
        <kbd className="kbd kbd-sm mr-2 bg-accent">
          <FaCode className="mr-2" />
          <span>Full-Stact Developer</span>
        </kbd>
      </div>
    </>
  );

  return (
    <div>
      <div className="space-y-2">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold ">Md Kamrul Hasan</h1>
          <MdVerifiedUser className="w-6 text-blue-500" />
        </div>
        <div className="flex items-center">
          <FaLocationArrow className="mr-2 text-blue-500" />
          <small>Rostock, Mv, Germany</small>
        </div>
        <div>
          <h3 className="text-sm  ">
            Web Developer, Front-End Developer, Back-End Developer, MERN Stack
            Developer
          </h3>
        </div>
        <div>{developerKbd}</div>
      </div>
    </div>
  );
};

export default PersonalInfo;
