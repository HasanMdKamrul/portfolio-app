import React from "react";
import ProjectCard from "../../Shared/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Phone-Refurb",
      description:
        "This app is a full-stack(MERN). In this SPA web app you will find various categories related to the Second-Hand Mobile Phones. 3 different user ui like admin seller and buyer. All the different routes are protected both in back & front-end.",
      link: "https://phone-refurb.web.app/",
      repository: "https://github.com/HasanMdKamrul/phone-refurb",
    },
    {
      id: 2,
      name: "Photo-fix",
      description:
        "PhotoFix is a MERN app, used firebase authentication and private routing.MongoDb used as database and basic curd operation implemented, where user can make review and also give them star ratings. Many useful features like pagination is also there.",
      link: "https://photo-fix-393b3.web.app/",
      repository: "https://github.com/HasanMdKamrul/photo-fix-app",
    },
    {
      id: 3,
      name: "Mastering-Ai",
      description:
        "This application provides courses to buy. Where you can categorised the courses on the courses page. Upon clicking the courses you can see details of them and can download the features as PDF. Many technologies like react leaflet, React-to pdf used.",
      link: "https://mastering-ai-app.web.app/",
      repository: "https://github.com/HasanMdKamrul/mastering-ai-app",
    },
  ];

  return (
    <div className="my-12">
      <header>
        <h1 className="font-semibold text-lg mb-5">Projects</h1>
      </header>
      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 grid-cols-1">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
