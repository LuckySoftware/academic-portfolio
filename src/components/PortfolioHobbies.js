import React from 'react';
// /components/PortfolioHobbies.js
const PortfolioHobbies = ({ languages = [], hobbies = [] }) => {
    return (
        <section className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                    Languages & Hobbies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Languages</h3>
                        <ul className="space-y-6">
                            {languages.map((lang, index) => (
                                <li key={index} className="flex items-center space-x-4">

                                    <span className="text-xl text-gray-800 dark:text-gray-200">{lang}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Hobbies</h3>
                        <ul className="space-y-6">
                            {hobbies.map((hobby, index) => (
                                <li key={index} className="flex items-center space-x-4">
                                    <span className="text-xl text-gray-800 dark:text-gray-200">{hobby}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PortfolioHobbies;