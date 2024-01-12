import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/station.png"
          title="Data Visualization"
          description="Predict fault of the machines with AI Model to use it for Data Visualization and manipulation of data "

        />
        <ProjectCard
          src="/unopad.png"
          title="Modern Web3 React Project"
          description="Web3 integrated Crypto Launchpad Platform"
        />

        <ProjectCard
          src="/location.png"
          title="Geolocation Project"
          description="Location tracking project to track multiple logistic company employer routes"
        />
      </div>
    </div>
  );
};

export default Projects;