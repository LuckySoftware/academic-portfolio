import React from 'react';
// /components/PortfolioFooter.js
const PortfolioFooter = ({ isDarkMode = false, toggleDarkMode = () => { }, githubLink = '#', linkedinLink = '#' }) => {
    return (
        <footer className="py-12 bg-gray-950 dark:bg-black text-gray-300 dark:text-gray-500 transition-colors duration-700 ease-in-out">
            <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <p className="text-base">&copy; {new Date().getFullYear()} Luciano Moreira. All rights reserved.</p>
                </div>
                <div className="flex items-center space-x-8 mb-6 md:mb-0">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.865-.013-1.7c-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.651.64.7 1.028 1.592 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482C21.137 20.281 24 16.523 24 12.017 24 6.484 19.522 2 12 2Z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                </div>
                <button onClick={toggleDarkMode} className="px-5 py-2.5 rounded-full border border-gray-700 dark:border-gray-600 text-gray-300 dark:text-gray-500 hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center text-base font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                    {isDarkMode ? (
                        <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25a9.75 9.75 0 00-9.75 9.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75A9.75 9.75 0 0012 2.25zM12 21a8.25 8.25 0 01-8.25-8.25c0-4.55 3.7-8.25 8.25-8.25V21z"></path></svg>
                    ) : (
                        <svg className="w-6 h-6 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25a9.75 9.75 0 00-9.75 9.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75A9.75 9.75 0 0012 2.25zM12 21a8.25 8.25 0 01-8.25-8.25c0-4.55 3.7-8.25 8.25-8.25V21z"></path></svg>
                    )}
                    Modo {isDarkMode ? 'Claro' : 'Oscuro'}
                </button>
            </div>
        </footer>
    );
};
export default PortfolioFooter;