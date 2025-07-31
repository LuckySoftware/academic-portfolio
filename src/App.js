import React, { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import PortfolioHero from './components/PortfolioHero.js';
import PortfolioAbout from './components/PortfolioAbout.js';
import PortfolioSkills from './components/PortfolioSkills.js';
import PortfolioProjectCard from './components/PortfolioProjectCard.js';
import PortfolioProjects from './components/PortfolioProjects.js';
import PortfolioResearch from './components/PortfolioResearch.js';
import PortfolioAchievements from './components/PortfolioAchievements.js';
import PortfolioExperience from './components/PortfolioExperience.js';
import PortfolioVolunteering from './components/PortfolioVolunteering.js';

const App = () => {
    const skillsData = [
        { name: 'JavaScript', percentage: 90, color: 'bg-yellow-500' },
        { name: 'React', percentage: 85, color: 'bg-blue-500' },
        { name: 'Python', percentage: 80, color: 'bg-green-500' },
        { name: 'Node.js', percentage: 75, color: 'bg-purple-500' },
        { name: 'SQL', percentage: 70, color: 'bg-red-500' },
        { name: 'TailwindCSS', percentage: 95, color: 'bg-teal-500' },
    ];

    const projectsData = [
        { title: 'Project One', description: 'Description for project one.', imageUrl: 'https://via.placeholder.com/400x250', projectLink: '#', githubLink: '#' },
        { title: 'Project Two', description: 'Description for project two.', imageUrl: 'https://via.placeholder.com/400x250', projectLink: '#', githubLink: '#' },
        { title: 'Project Three', description: 'Description for project three.', imageUrl: 'https://via.placeholder.com/400x250', projectLink: '#', githubLink: '#' },
    ];

    const researchData = [
        { title: 'Research A', description: 'Summary of research A.', link: '#' },
        { title: 'Research B', description: 'Summary of research B.', link: '#' },
    ];

    const achievementsData = [
        'Achievement 1',
        'Achievement 2',
        'Achievement 3',
    ];

    const experiencesData = [
        { title: 'Software Engineer', company: 'Tech Corp', dates: 'Jan 2020 - Present', description: 'Developed and maintained web applications.' },
        { title: 'Intern', company: 'Startup Inc.', dates: 'Summer 2019', description: 'Assisted in front-end development.' },
    ];

    const volunteeringData = [
        { organization: 'Community Outreach', role: 'Volunteer', dates: '2021', description: 'Organized local events.' },
    ];

    return (
        <StrictMode>
            <PortfolioHero name="Your Name" tagline="Your Tagline" photo="./public/assets/images/profile.jpg" />
            <PortfolioAbout />
            <PortfolioSkills skills={skillsData} />
            <PortfolioProjects projects={projectsData} />
            <PortfolioResearch research={researchData} />
            <PortfolioAchievements achievements={achievementsData} />
            <PortfolioExperience experiences={experiencesData} />
            <PortfolioVolunteering experiences={volunteeringData} />
        </StrictMode>
    );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);