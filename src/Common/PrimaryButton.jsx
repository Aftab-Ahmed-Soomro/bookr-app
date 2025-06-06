import React from 'react';

const PrimaryButton = ({ text, className = '', onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full sm:w-auto bg-[#09307D] text-white px-3 sm:px-6 py-2 rounded-[40px] flex items-center justify-center ${className}`}
    >
      <p className="font-medium text-sm sm:text-base line-height-[93%]">
        {text}
      </p>
      <div className="rounded-full p-0.5 sm:p-1">
        <img
          src="/Assets/imgs/arrow.png"
          alt="arrow"
          className="w-[20px] sm:w-[28px] h-[21px] sm:h-[29px] rotate-[51.01deg]"
        />
      </div>
    </button>
  );
};

export default PrimaryButton; 