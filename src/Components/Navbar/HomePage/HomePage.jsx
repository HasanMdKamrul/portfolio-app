import React from "react";
import image from "../../../assets/Image/FullSize.jpg";
import AboutMe from "./AboutMe";
import Certificate from "./Certificate";
import Credentials from "./Credentials";
import Experince from "./Experince";
import ExtraCurricular from "./ExtraCurricular";
import Language from "./Language";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import TechStack from "./TechStack";

const HomePage = () => {
  return (
    <div className="my-12">
      <div className="flex ">
        <div className="w-36 md:block hidden">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1 mx-20">
          <PersonalInfo />
          <AboutMe />
          <div className="border-b-2 border-gray-600"></div>
          <TechStack />

          <div className="border-b-2 border-gray-600"></div>
          <Projects />

          <div className="border-b-2 border-gray-600"></div>
          <Credentials />
          <div className="border-b-2 border-gray-600"></div>
          <Experince />
          <div className="border-b-2 border-gray-600"></div>
          <Language />
          <div className="border-b-2 border-gray-600"></div>
          <Certificate />
          <div className="border-b-2 border-gray-600"></div>
          <ExtraCurricular />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
