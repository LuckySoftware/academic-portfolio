import React from 'react';
// /components/PortfolioAchievements.js
const PortfolioAchievements = ({ achievements = [] }) => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                    Activities, Achievements & Certfificates
                </h2>
                <ul className="space-y-8">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-102 transition-transform duration-300">
                            <svg className="w-8 h-8 text-blue-600 dark:text-indigo-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="text-xl text-gray-800 dark:text-gray-200">{achievement}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default PortfolioAchievements;