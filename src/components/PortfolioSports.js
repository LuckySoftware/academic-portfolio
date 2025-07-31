import React from 'react';
// /components/PortfolioSports.js
const SportCard = ({ name = 'Sport', achievements = [] }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{name}</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-lg">
            {achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
            ))}
        </ul>
    </div>
); const PortfolioSports = ({ sports = [] }) => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                    Sports
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {sports.map((sport, index) => (
                        <SportCard key={index} name={sport.name} achievements={sport.achievements} />))}
                </div>
            </div>
        </section>
    );
};
export default PortfolioSports;