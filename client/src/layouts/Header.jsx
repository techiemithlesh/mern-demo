import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Layout.css';
import { FiSun, FiMoon } from 'react-icons/fi';
import Resume from '../asset/pdf/resume.pdf';


const Header = ({darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white  z-50 ${
        darkMode ? 'dark shadow-lg' : 'shadow-md'
      }`}
    >
      <nav className="container px-4 md:px-8 flex justify-between items-center py-4">
        <div
          className={`text-lg font-bold cursor-pointer ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Mithlesh Patel
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="block text-gray-800 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-black'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                style={{ stroke: darkMode ? 'white' : '' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                style={{ stroke: darkMode ? 'white' : '' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block md:flex space-y-4 md:space-y-0 md:space-x-4 items-center`}
        >
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('home')}
              className={`${
                darkMode
                  ? 'text-white hover:text-indigo-500 border-indigo-500'
                  : 'text-gray-800 hover:text-indigo-500 border-red-500'
              } cursor-pointer block md:inline-block ${
                activeSection === 'home' ? 'font-bold' : ''
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('services')}
              className={`${
                darkMode
                  ? 'text-white hover:text-indigo-500 border-indigo-500'
                  : 'text-gray-800 hover:text-indigo-500 border-red-500'
              } cursor-pointer block md:inline-block ${
                activeSection === 'services' ? 'font-bold' : ''
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('project')}
              className={`${
                darkMode
                  ? 'text-white hover:text-indigo-500 border-indigo-500'
                  : 'text-gray-800 hover:text-indigo-500 border-red-500'
              } cursor-pointer block md:inline-block ${
                activeSection === 'project' ? 'font-bold' : ''
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('testimonial')}
              className={`${
                darkMode
                  ? 'text-white hover:text-indigo-500 border-indigo-500'
                  : 'text-gray-800 hover:text-indigo-500 border-red-500'
              } cursor-pointer block md:inline-block ${
                activeSection === 'testimonial' ? 'font-bold' : ''
              }`}
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('contact')}
              className={`${
                darkMode
                  ? 'text-white hover:text-indigo-500 border-indigo-500'
                  : 'text-gray-800 hover:text-indigo-500 border-red-500'
              } cursor-pointer block md:inline-block ${
                activeSection === 'contact' ? 'font-bold' : ''
              }`}
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </li>
          <li>
             <a href={Resume} download><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download Resume
            </span>
          </button>
          </a>

          </li>
          <li>
          <button className='dark_mode_btn' onClick={toggleDarkMode}>
  {darkMode ? (
     <FiSun className="dark-mode-icon text-white" />
    
  ) : (
    <FiMoon className="dark-mode-icon" />
  )}
</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
