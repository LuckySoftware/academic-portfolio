
import React from 'react';
// /components/PortfolioHero.js
const PortfolioHero = ({ name, tagline, photo }) => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="text-center p-6 max-w-4xl mx-auto">
                <img src={photo} alt="Profile" className="size-80 rounded-full mx-auto mb-8 border-4 border-blue-400 dark:border-indigo-600 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-3" />
                <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-lg">
                    {name}
                </h1>
                <p className="text-2xl md:text-3xl font-light opacity-90 tracking-wide">
                    {tagline}
                </p>
            </div>
        </section>
    );
};

// /components/PortfolioAbout.js 
const PortfolioAbout = ({ title = 'About Me', description = 'Hello there! I will talk a little about myself, I am someone who is always looking to grow, whether it is learning something new, pushing my own limits, or helping those around me. I am passionate about technology and robotics, but what matters most to me is making a positive impact on the people I care about. Rugby teaches me valuable lessons every day about teamwork, perseverance, and tackling challenges with a smile. I also love spending time with my friends and family because I truly believe the best experiences are the ones we share with those we love. I am always ready to lend a hand and contribute. The real fulfillment comes from doing things well and making the world a better place.' }) => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-12 text-blue-600 dark:text-indigo-400">
                    {title}
                </h2>
                <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto opacity-90">
                    {description}
                </p>
            </div>
        </section>
    );
};
export default PortfolioAbout;