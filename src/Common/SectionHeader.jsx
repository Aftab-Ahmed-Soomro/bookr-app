import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-6 md:mb-8 px-3">
      <h2 className="font-semibold text-2xl md:text-3xl text-[#09307D] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-[#747070] text-sm md:text-base font-normal text-center w-full md:w-[480px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader; 