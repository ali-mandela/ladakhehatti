import React from 'react';

const Container = ({ children, bg='bg-zinc-50'}) => {    
  return (
    <section className={`px-3 md:px-8 lg:px-12 py-1 ${bg}`}>
      {children}
    </section>
  );
};

export default Container;
