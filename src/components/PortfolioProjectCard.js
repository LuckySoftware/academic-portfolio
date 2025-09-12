import React from 'react';
// /components/PortfolioProjectCard.js
const PortfolioProjectCard = ({ title = 'Project Title', description = 'A brief description of the project.', imageUrl = '/placeholder-project.jpg', projectLink = '#', githubLink = '#' }) => {
    return (
        // Contenedor principal con flex-col para alinear contenido verticalmente
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-102 border border-gray-200 dark:border-gray-700 flex flex-col h-full">
            {/* Imagen con altura fija */}
            <img src={imageUrl} alt={title} className="w-full h-56 object-cover object-center transform hover:scale-105 transition-transform duration-500" />
            {/* Contenedor de contenido con flex-col y flex-grow para ocupar el espacio disponible */}
            <div className="p-8 flex flex-col flex-grow">
                {/* Contenido principal */}
                <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg text-justify">{description}</p>
                </div>
                {/* Botones siempre al final */}
                <div className="flex space-x-4 mt-auto">
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-base font-semibold shadow-md hover:shadow-lg">
                        Project
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path></svg>
                    </a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 text-base font-semibold shadow-md hover:shadow-lg">
                        GitHub
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.865-.013-1.7c-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.651.64.7 1.028 1.592 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482C21.137 20.281 24 16.523 24 12.017 24 6.484 19.522 2 12 2Z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default PortfolioProjectCard;