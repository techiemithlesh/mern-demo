import React from 'react';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({darkMode}) => {
  return (
    <footer className={` py-6 px-4 ${darkMode ? 'bg-black text-gray-100' : 'bg-gray-800 text-gray-300'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 <a href='https://mithleshpatel.com/' className='cursor-pointer' target='_blank'>Mithlesh Patel</a> All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.instagram.com/mithlesh_patel01/" target='_blank' rel="noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://github.com/techiemithlesh" target='_blank' rel="noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mithlesh-12/" target='_blank' rel="noreferrer" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
