import React from "react";
import { FaLanguage } from "react-icons/fa";

const Language = () => {
  return (
    <div className="my-12">
      <header>
        <h1 className="font-semibold text-lg mb-5">Language</h1>
      </header>
      <div className="">
        <div className="flex items-center mr-2">
          <FaLanguage className="mr-2" />
          <p className="">English , IELTS 6.5 , Fluent</p>
        </div>
        <div className="flex items-center">
          <FaLanguage className="mr-2" />
          <p className="">Deutsche , A1 , Beginner</p>
        </div>
      </div>
    </div>
  );
};

export default Language;
