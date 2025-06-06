import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  backgroundColor = 'bg-white',
  roundedTop = true
}) => {
  return (
    <section className={`
      py-12 md:py-20 px-4 md:px-8
      ${backgroundColor}
      ${roundedTop ? 'rounded-t-[50px] md:rounded-t-[101px]' : ''}
      ${className}
    `}>
      <div className="container max-w-screen-lg mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;   