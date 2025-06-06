import React from 'react';

const FeatureCards = ({ 
  title = "Easy Search & Discovery",
  description = "Find practitioners by specialty, name, or location. Browse profiles, view patient ratings, and check availability in real-time.",
  image = "/Assets/imgs/calendar.png",
  className = ""
}) => {
  return (
    <div className={`p-6 rounded-lg w-[250px] ${className}`}>
      {/* Icon Container */}
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 p-2 shadow-md">
        <img src={image} alt="Feature Icon" className="w-[60px] h-[50px]" />
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-[#09307D] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#747070] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
