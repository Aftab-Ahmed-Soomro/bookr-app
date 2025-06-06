import React from 'react';

const Card2 = ({ 
  initials, 
  name, 
  designation, 
  testimonial, 
  initialsColor,
  textColor,
  nameColor,
  bgColor,
  designationColor,
  testimonialColor
}) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-md p-4 sm:p-5 lg:p-6 w-full border border-gray-100 hover:shadow-lg transition-shadow duration-300`}>
      {/* Header with initials and name */}
      <div className="flex items-center mb-3 sm:mb-4">
        <div className={`${initialsColor} ${textColor} rounded-full w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center text-sm sm:text-base font-semibold mr-2 sm:mr-3`}>
          {initials}
        </div>
        <div>
          <div className="flex items-center gap-1 sm:gap-2">
            <h3 className={`font-semibold ${nameColor} text-sm sm:text-base`}>
              {name}
            </h3>
            <img 
              src="/Assets/imgs/verified.png" 
              alt="verified" 
              className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]' 
            />
          </div>
          {/* para */}
          <p className={`font-light text-xs sm:text-sm lg:text-[15px] ${designationColor}`}>
            {designation}
          </p>
        </div>
      </div>

      {/* Testimonial text */}
      <blockquote className={`${testimonialColor} text-sm sm:text-[14px] lg:text-[15px] leading-relaxed`}>
        "{testimonial}"
      </blockquote>
    </div>
  );
};

export default Card2;