import React from "react";
import userImg from '../asset/img/user.jpg';


const Testimonial = ({ name, review, image, darkMode }) => {
  const imageUrl = image || userImg;

  return (
    <div className={`w-72 mx-auto text-center p-4 shadow rounded-md ${darkMode ? 'bg-gray-200' : 'bg-white'}`}>
      <div className="rounded-full w-32 h-32 mx-auto bg-gray-300 flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <p className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-black'}`}>{name}</p>
        <blockquote className="italic text-gray-600 mt-2">
          "{review}"
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonial;
