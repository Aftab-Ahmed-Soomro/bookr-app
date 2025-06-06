import React from 'react';

const PrimaryButton = ({ text, className = '', onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full sm:w-auto bg-[#09307D] text-white px-4 sm:px-8 py-3 rounded-[49px] flex items-center justify-center ${className}`}
    >
      <p className="font-medium text-base sm:text-[20px] line-height-[93%]">
        {text}
      </p>
      <div className="rounded-full p-1">
        <img
          src="/Assets/imgs/arrow.png"
          alt="arrow"
          className="w-[25px] sm:w-[35px] h-[26px] sm:h-[36px] rotate-[51.01deg]"
        />
      </div>
    </button>
  );
};

export default PrimaryButton; 