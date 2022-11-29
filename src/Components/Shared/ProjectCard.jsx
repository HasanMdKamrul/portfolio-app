import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <a href={`${project.link}`}>
        <div class="max-w-xs  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
          <div class="px-4 py-2">
            <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">
              {project.name}
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </div>
      </a>
      <a href={`${project.repository}`}>
        <button className="btn mt-5 btn-outline w-full ">
          <FaGithub className="mr-2" />
          Repository
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
