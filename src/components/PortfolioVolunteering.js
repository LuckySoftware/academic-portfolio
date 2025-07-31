import React from 'react';
// /components/PortfolioVolunteering.js
const VolunteeringCard = ({ organization = 'Organization', role = 'Role', dates = 'Dates', description = 'Key responsibilities and impact.' }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{organization}</h3>
        <p className="text-blue-600 dark:text-indigo-400 font-semibold mb-1">{role}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{dates}</p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{description}</p>
    </div>
); const PortfolioVolunteering = ({ volunteering = [] }) => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                    Volunteering
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {volunteering.map((vol, index) => (
                        <VolunteeringCard key={index} organization={vol.organization} role={vol.role} dates={vol.dates} description={vol.description} />))}
                </div>
            </div>
        </section>
    );
};
export default PortfolioVolunteering;