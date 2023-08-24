import React, { useState, useEffect } from "react";
import Project from "./Project";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({darkMode}) => {
  const projectUrl = `${process.env.REACT_APP_BACKEND_API_URL}/api/projects`;
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all"); 
  const [isLoading, setIsLoading] = useState(true);

  const loadingProjects = [
    {
      _id: '1',
      title: 'Loading Project 1',
      description: 'Loading project description 1',
      image: 'https://portfolio-ceek.onrender.com/images/image-1692881086938-595638264.png',
      githubLink: '#',
      demoLink: '#',
      technologies: ['Loading Tech 1', 'Loading Tech 2'],
    },
    {
      _id: '2',
      title: 'Loading Project 2',
      description: 'Loading project description 1',
      image: 'https://portfolio-ceek.onrender.com/images/image-1692881086938-595638264.png',
      githubLink: '#',
      demoLink: '#',
      technologies: ['Loading Tech 1', 'Loading Tech 2'],
    },

    {
      _id: '3',
      title: 'Loading Project 3',
      description: 'Loading project description 1',
      image: 'https://portfolio-ceek.onrender.com/images/image-1692881086938-595638264.png',
      githubLink: '#',
      demoLink: '#',
      technologies: ['Loading Tech 1', 'Loading Tech 2'],
    },
  ];
  
  useEffect(() => {
    try {
      fetch(projectUrl)
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
          setFilteredProjects(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [projectUrl]);
  console.log("The Project Data is", projects);
  // Unique Technology 
  const allTechnologies = [...new Set(projects.flatMap((project) => project.technologies))];

  // Function to filter projects based on the selected filter
  const filterProjects = (filter) => {
  setCurrentFilter(filter);

  if (filter === "all") {
    setFilteredProjects(projects);
    
  } else {
    const filtered = projects.filter((project) =>
      project.technologies.some(
        (tech) => tech.toLowerCase() === filter.toLowerCase()
      )
    );
    setFilteredProjects(filtered);
  }
};


  return (
    <section className={`px-10 ${darkMode ? 'dark' : 'light'}`} id="project">
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold my-2 text-center ${darkMode? 'text-white' : 'text-black'}`}>Projects</h2>
        <p className="text-center text-base mb-2">
          <span className="font-semibold text-sm text-blue-600 hover:underline cursor-pointer">
            Explore My Creations Gallery
          </span>
        </p>

        <div className="filter_btn_container text-center my-6">
        <button
  onClick={() => filterProjects("all")}
  className={`btn mx-2 ${
    currentFilter === "all"
      ? "bg-blue-700 text-white"
      : darkMode
      ? "border text-white border-white hover:border-blue-700 hover:text-blue-700"
      : "border border-yellow-300 hover:border-blue-700 hover:text-blue-700 text-black"
  } py-1 px-2 rounded-full`}
>
  All
</button>
          {allTechnologies.map((technology) => (
            <button
              key={technology}
              onClick={() => filterProjects(technology)}
              className={`btn mx-2 ${
                currentFilter === technology
                  ? "bg-blue-700 text-white"
                  : darkMode
                  ? "border text-white border-white hover:border-blue-700 hover:text-blue-700"
                  : "border text-black border-yellow-300 hover:border-blue-700 hover:text-blue-700"
              } py-1 px-2 rounded-full`}
            >
              {technology}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap -mx-4 pt-4 pb-10">
        {isLoading ? (
  // Loading placeholder with fake data
    loadingProjects.map((project) => (
    <div className={`w-full md:w-1/2 lg:w-1/3 px-4 relative blur-effect`}
    key={project._id}>
      <div className="border border-gray-300 shadow-md rounded-lg p-6 mb-4 md:mb-0 animate-pulse">
        <img
          className="w-full mb-6"
          src={project.image}
          loading="lazy"
          alt={project.title}
        />
        <div className="flex mb-4 technology_container absolute top-2 right-5">
          {project.technologies.map((technology, index) => (
            <a
              href="#"
              key={index}
              className="technology_btn mr-2 text-sm text-center bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full"
            >
              {technology}
            </a>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-4 text-white">Loading...</h3>
        <p className="mb-4 text-white">Loading...</p>
        <div className="flex items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Code
          </a>
        </div>
      </div>
    </div>
  ))
) : (
  // Actual project cards
  filteredProjects.map((project) => (
    <Project key={project._id} {...project} darkMode={darkMode} />
  ))
)}


        </div>
      </div>
    </section>
  );
};

export default Projects;
