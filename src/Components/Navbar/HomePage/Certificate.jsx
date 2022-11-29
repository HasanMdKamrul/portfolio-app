import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certificate = () => {
  return (
    <div className="my-12">
      <header>
        <h1 className="font-semibold text-lg mb-5">Certificates</h1>
      </header>
      <div className="flex items-center">
        <FaCertificate className="mr-2" />
        <a href="https://www.coursera.org/account/accomplishments/certificate/3NKYAHXC7PR8">
          Python Classes and Inheritance
        </a>
      </div>
    </div>
  );
};

export default Certificate;
