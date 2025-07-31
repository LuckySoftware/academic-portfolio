const ResearchCard = ({ title = 'Research Title', description = 'Brief summary of the research, methodology, and key findings.', link = '#' }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-indigo-400 hover:underline text-base font-semibold">
    See more
  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path></svg>
</a>
    </div>
);

const PortfolioResearch = ({ research = [] }) => { return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                Small Researches 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {research.map((item, index) => (
                    <ResearchCard key={index} title={item.title} description={item.description} link={item.link} />
                ))}
            </div>
        </div>
    </section>
); };