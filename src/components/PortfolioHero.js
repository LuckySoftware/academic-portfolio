import React from 'react';

const PortfolioHero = ({ name, tagline, photo }) => (
  <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
    <div className="text-center p-6 max-w-4xl mx-auto">
      <img
        src={photo}
        alt={name}
        className="size-80 rounded-full mx-auto mb-8 border-4 border-blue-400 dark:border-indigo-600 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-3"
      />
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-lg">
        {name}
      </h1>
      <p className="text-2xl md:text-3xl font-light opacity-90 tracking-wide">
        {tagline}
      </p>
    </div>
  </section>
);

export default PortfolioHero;
