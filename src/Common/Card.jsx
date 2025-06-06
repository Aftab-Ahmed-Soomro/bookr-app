import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="group p-2.5 xs:p-3 sm:p-4 lg:p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
      <div className="flex flex-col h-full">
        <img
          src={image}
          alt={title}
          className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 xs:mb-3 sm:mb-4 lg:mb-5 object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-[#747070] mb-1.5 xs:mb-2 sm:mb-2.5 lg:mb-3 line-height-[1.2] group-hover:text-[#09307D] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#747070] font-light text-[10px] xs:text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
