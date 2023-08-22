import React, { useState, useEffect } from "react";
import Project from "./Project";

const Projects = ({darkMode}) => {
  const projectUrl = `${process.env.REACT_APP_BACKEND_API_URL}/api/projects`;

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all"); 

  useEffect(() => {
    try {
      fetch(projectUrl)
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
          setFilteredProjects(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [projectUrl]);

  // Unique Technology 
  const allTechnologies = [...new Set(projects.flatMap((project) => project.technologies))];
  console.log(allTechnologies);

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
      ? "border border-white hover:border-blue-700 hover:text-blue-700"
      : "border border-yellow-300 hover:border-blue-700 hover:text-blue-700"
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
          {filteredProjects.map((project) => (
            <Project key={project._id} {...project}  darkMode={darkMode}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
