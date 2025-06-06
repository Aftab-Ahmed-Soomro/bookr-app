import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 object-contain"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-[#747070] mb-2 sm:mb-3 lg:mb-4 line-height-[1.2]">
        {title}
      </h3>
      <p className="text-[#747070] font-light text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
