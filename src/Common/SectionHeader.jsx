import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-8 md:mb-12 px-4">
      <h2 className="font-semibold text-3xl md:text-5xl text-[#09307D] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[#747070] font-normal text-center w-full md:w-[583px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader; 