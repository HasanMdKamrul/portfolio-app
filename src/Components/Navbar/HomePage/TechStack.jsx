import React from "react";
import {
  FaBootstrap,
  FaCodepen,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRegChartBar,
  FaRoute,
} from "react-icons/fa";
import django from "../../../assets/Icons/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-24.png";
import express from "../../../assets/Icons/icons8-express-js-100.png";
import firebase from "../../../assets/Icons/icons8-firebase-48.png";
import netlify from "../../../assets/Icons/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-24.png";
import postgreSQL from "../../../assets/Icons/icons8-postgresql-48.png";
import restapi from "../../../assets/Icons/icons8-rest-api-64.png";
import tailwind from "../../../assets/Icons/icons8-tailwindcss-48.png";
import postman from "../../../assets/Icons/postman.png";

const TechStack = () => {
  const comfortable = (
    <>
      <div className="flex items-center ">
        <FaNodeJs className="mr-2" />
        <p>Node Js</p>
      </div>
      <div className="flex items-center ">
        <img src={express} alt="" className="mr-2 w-4 bg-gray-200" />
        <p>Express Js</p>
      </div>
      <div className="flex items-center ">
        <img src={restapi} alt="" className="mr-2 w-4 " />
        <p>Rest Api</p>
      </div>
    </>
  );

  const techStack = (
    <>
      <div className="flex items-center ">
        <FaJs className="mr-2" />
        <p>JavaScript</p>
      </div>
      <div className="flex items-center ">
        <FaReact className="mr-2" />
        <p>React</p>
      </div>
      <div className="flex items-center ">
        <img src={firebase} alt="" className="mr-2 w-4" />
        <p>Firebase</p>
      </div>
      <div className="flex items-center ">
        <FaHtml5 className="mr-2" />
        <p>Html 5</p>
      </div>
      <div className="flex items-center ">
        <FaCss3 className="mr-2" />
        <p>CSS 3</p>
      </div>
      <div className="flex items-center ">
        <FaBootstrap className="mr-2" />
        <p>Bootstrap</p>
      </div>
      <div className="flex items-center ">
        <img src={tailwind} alt="" className="mr-2 w-4" />
        <p>Tailwind</p>
      </div>
    </>
  );

  const familiar = (
    <>
      <div className="flex items-center ">
        <FaPython className="mr-2" />
        <p>Python</p>
      </div>
      <div className="flex items-center ">
        <img src={django} alt="" className="mr-2 w-4" />
        <p>Django</p>
      </div>
      <div className="flex items-center ">
        <img src={postgreSQL} alt="" className="mr-2 w-4" />
        <p>Python</p>
      </div>
    </>
  );

  const tools = (
    <>
      <div className="flex items-center ">
        <FaGitAlt className="mr-2" />
        <p>Git</p>
      </div>
      <div className="flex items-center ">
        <FaGithub className="mr-2" />
        <p>GitHub</p>
      </div>
      <div className="flex items-center ">
        <FaFigma className="mr-2" />
        <p>Figma</p>
      </div>
      <div className="flex items-center ">
        <FaCodepen className="mr-2" />
        <p>Vs code</p>
      </div>
      <div className="flex items-center ">
        <FaRegChartBar className="mr-2" />
        <p>Re-Charts</p>
      </div>
      <div className="flex items-center ">
        <FaRoute className="mr-2" />
        <p>React-Router-Dom</p>
      </div>
      <div className="flex items-center ">
        <img src={postman} alt="" className="mr-2 w-4" />
        <p>Postman</p>
      </div>
      <div className="flex items-center ">
        <img src={netlify} alt="" className="mr-2 w-4" />
        <p>Netlify</p>
      </div>
    </>
  );

  return (
    <div className="my-12">
      <header>
        <h1 className="font-semibold text-lg mb-5">Tech Stack</h1>
      </header>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <h3 className="font-semibold  mb-5">Expertise</h3>
          {techStack}
        </div>
        <div>
          <h3 className="font-semibold  mb-5">Comfortable</h3>
          {comfortable}
        </div>
        <div>
          <h3 className="font-semibold  mb-5">Familiar</h3>
          {familiar}
        </div>
        <div>
          <h3 className="font-semibold  mb-5">Tools</h3>
          {tools}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
