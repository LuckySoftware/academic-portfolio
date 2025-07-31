import React from 'react';
// /components/PortfolioEducation.js
const EducationCard = ({ degree = 'Degree', institution = 'Institution', dates = 'Dates', details = 'GPA/Relevant coursework.' }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{degree}</h3>
        <p className="text-blue-600 dark:text-indigo-400 font-semibold mb-1">{institution}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{dates}</p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{details}</p>
    </div>
); const PortfolioEducation = ({ education = [] }) => {
    return (
        <section className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {education.map((edu, index) => (
                        <EducationCard key={index} degree={edu.degree} institution={edu.institution} dates={edu.dates} details={edu.details} />))}
                </div>
            </div>
        </section>
    );
};
export default PortfolioEducation;