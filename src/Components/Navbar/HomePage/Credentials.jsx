import React from "react";
import { FaUniversity } from "react-icons/fa";
import iut from "../../../assets/Image/IUT_logo_v_1.png";
import image from "../../../assets/Image/rostock.jpeg";

const Credentials = () => {
  const credentials = (
    <>
      <div>
        <div className="avatar mb-5 ">
          <div className="w-12 mr-5 rounded-full">
            <img src={image} alt="" />
          </div>
          <a href="https://www.uni-rostock.de/" className=" flex items-center">
            <FaUniversity className="ml-2 mr-2" />
            MSc. in Electrical Engineering Universität Rostock
          </a>
        </div>
        <div className="avatar">
          <div className="w-12 mr-5 rounded-full">
            <img src={iut} alt="" />
          </div>
          <a
            href="https://www.iutoic-dhaka.edu/"
            className=" flex items-center"
          >
            <FaUniversity className="ml-2 mr-2" />
            BSc. in Electrical Engineering Islamic University of Technology(IUT)
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div className="my-12">
      <header>
        <h1 className="font-semibold text-lg mb-5">Credentials</h1>
      </header>
      <div>{credentials}</div>
    </div>
  );
};

export default Credentials;
