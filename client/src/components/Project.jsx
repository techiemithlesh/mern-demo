import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Project = ({ title, description, image, githubLink, demoLink, technologies }) => {
  const BACKEND_SERVER_URL = process.env.REACT_APP_BACKEND_API_URL;
  const imagePath = `${BACKEND_SERVER_URL}/images/${image}`;
  console.log(technologies);
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 relative">
      <div className="border border-gray-300 shadow-md rounded-lg p-6 mb-4 md:mb-0">
        <img className="w-full mb-6" src={imagePath} loading="lazy" alt={title} />
        <div className="flex mb-4 technology_container absolute top-2 right-5">
          {technologies.map((technology, index) => (
            <a href="#" key={index} className="technology_btn mr-2 text-sm text-center bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full">
              {technology} </a>
            
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center ">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
