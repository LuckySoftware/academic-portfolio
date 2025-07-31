const SkillBar = ({ name = 'Skill', percentage = 75, color = 'bg-blue-500' }) => (
    <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{name}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
            <div className={`${color} h-3 rounded-full transition-all duration-1000 ease-out transform scale-x-100 origin-left`} style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const PortfolioSkills = ({ skills = [] }) => { return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out">
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-5xl font-bold text-center mb-16 text-blue-600 dark:text-indigo-400">
                Programming Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {skills.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} percentage={skill.percentage} color={skill.color} />
                ))}
            </div>
        </div>
    </section>
); };