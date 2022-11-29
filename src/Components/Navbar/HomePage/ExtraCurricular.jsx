import React from "react";
import { FaPlay } from "react-icons/fa";

const ExtraCurricular = () => {
  return (
    <div className="my-12">
      <header>
        <h1 className="font-semibold text-lg mb-5">
          EXTRA CURRICULAR ACTIVITIES
        </h1>
      </header>
      <div className="flex items-center">
        <FaPlay className="mr-2" />
        <p>
          Worked as a team lead in Esonance | Robotics track, timing and
          calibrate team.
        </p>
      </div>
    </div>
  );
};

export default ExtraCurricular;
