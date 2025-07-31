const PortfolioAbout = ({ title = 'Sobre Mí', description = 'Aquí puedes hablar sobre tu pasión, tus motivaciones y lo que te hace único. Destaca tus intereses, tu visión a futuro y cómo tus experiencias te han moldeado. Sé auténtico y personal.' }) => { return (
<section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
    <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-blue-600 dark:text-indigo-400">
            {title}
        </h2>
        <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto opacity-90">
            {description}
        </p>
    </div>
</section>
); };