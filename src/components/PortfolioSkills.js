import React from 'react';
// /components/PortfolioSkills.js
const SkillLogo = ({ name = 'Skill', logo = '' }) => (
    <div className="flex items-center space-x-6 mb-8">
        <img src={logo} alt={name} className="w-16 h-16 object-contain" />
        <span className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{name}</span>
    </div>
); const PortfolioSkills = ({ skills = [] }) => {
    return (
        <section className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                    Programming Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {skills.map((skill, index) => (
                        <SkillLogo key={index} name={skill.name} logo={skill.logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default PortfolioSkills;