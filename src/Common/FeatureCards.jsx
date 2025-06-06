import React from 'react';

const FeatureCards = ({ 
  title = "Easy Search & Discovery",
  description = "Find practitioners by specialty, name, or location. Browse profiles, view patient ratings, and check availability in real-time.",
  image = "/Assets/imgs/calendar.png",
  className = ""
}) => {
  return (
    <div className={`p-4 rounded-lg w-[200px] ${className}`}>
      {/* Icon Container */}
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 p-2 shadow-md">
        <img src={image} alt="Feature Icon" className="w-[40px] h-[40px]" />
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-base font-semibold text-[#09307D] mb-1">
          {title}
        </h3>
        <p className="text-xs text-[#747070] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
