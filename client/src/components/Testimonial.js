import React from "react";

const Testimonial = ({ name, review, image }) => {
  return (
    <div className="w-64 mx-auto text-center p-6 ">
      <div className="rounded-full w-32 h-32 mx-auto bg-gray-300 flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">{name}</p>
        <blockquote className="italic text-gray-600 mt-2">
          "{review}"
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonial;
