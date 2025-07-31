import React from 'react';
import PortfolioProjectCard from './PortfolioProjectCard.js';
// /components/PortfolioProjects.js
const PortfolioProjects = ({ projects = [] }) => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <PortfolioProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} projectLink={project.projectLink} githubLink={project.githubLink} />))}
                </div>
            </div>
        </section>
    );
};
export default PortfolioProjects;