import React, { useState, useEffect, StrictMode } from 'react';
import PortfolioHero from './PortfolioHero.js';
import PortfolioAbout from './PortfolioAbout.js';
import PortfolioSkills from './PortfolioSkills.js';
import PortfolioProjects from './PortfolioProjects.js';
import PortfolioResearch from './PortfolioResearch.js';
import PortfolioAchievements from './PortfolioAchievements.js';
import PortfolioExperience from './PortfolioExperience.js';
import PortfolioVolunteering from './PortfolioVolunteering.js';
import PortfolioEducation from './PortfolioEducation.js';
import PortfolioSports from './PortfolioSports.js';
import PortfolioHobbies from './PortfolioHobbies.js';
import PortfolioFooter from './PortfolioFooter.js';

const portfolioData = {
  hero: {
    name: 'Luciano Moreira',
    tagline: 'Tool developer | Web Developer | Data Analyst | Rugby Player | IT Technician | Robotics & A.I. Enthusiast',
    photo: '/assets/images/profile-pic.jpeg',
  },
  about: {
    title: 'About Me',
    description: 'Hello there! I will talk a little about myself, I am someone who is always looking to grow, whether it is learning something new, pushing my own limits, or helping those around me. I am passionate about technology and robotics, but what matters most to me is making a positive impact on the people I care about. Rugby teaches me valuable lessons every day about teamwork, perseverance, and tackling challenges with a smile. I also love spending time with my friends and family because I truly believe the best experiences are the ones we share with those we love. I am always ready to lend a hand and contribute. The real fulfillment comes from doing things well and making the world a better place.',
  },
  skills: [
    { name: 'Java', logo: '/assets/images/java.png' },
    { name: 'Python', logo: '/assets/images/python.png' },
    { name: 'PHP', logo: '/assets/images/php.png' },
    { name: 'JavaScript', logo: '/assets/images/js.png' },
    { name: 'Bash Script', logo: '/assets/images/bash.png' },
    { name: 'CSS', logo: '/assets/images/css.png' },
    { name: 'HTML', logo: '/assets/images/html.png' },
    { name: 'MySQL', logo: '/assets/images/mysql.png' },
    { name: 'Linux Server', logo: '/assets/images/linux.png' },
    { name: 'PostgreSQL', logo: '/assets/images/postgresql.png' },
    { name: 'Node', logo: '/assets/images/node.png' },
    { name: 'React', logo: '/assets/images/react.png' },
    { name: 'Postman', logo: '/assets/images/postman.png' },
    { name: 'Docker', logo: '/assets/images/docker.png' },
    { name: 'Git', logo: '/assets/images/git.png' }
  ],
  projects: [
    {
      title: 'Wind Power Data Analytics System',
      description: 'Designed and implemented a wind energy data analytics system that collects and processes turbine performance metrics into a centralized database. The platform enhances operational efficiency, enables predictive maintenance through data driven insights, and supports more sustainable energy management.', 
      imageUrl: '/assets/images/project-1.jpeg',
      projectLink: 'https://github.com/LuckySoftware/data-analyzer',
      githubLink: 'https://github.com/LuckySoftware/data-analyzer',
    },
    {
      title: 'Directory Sentry System',
      description: 'Sentry is a smart, lightweight tool that keeps constant watch over your directories. It detects new files, or the lack of them and instantly notifies you by email. Designed for simplicity and reliability, Sentry makes it easy to stay informed, ensuring you never miss an important update in your workflow.',
      imageUrl: '/assets/images/project-5.jpeg',
      projectLink: 'https://github.com/LuckySoftware/DirSentry',
      githubLink: 'https://github.com/LuckySoftware/DirSentry',
    },
    {
      title: 'Education USA Fair Navigation Designer',
      description: 'Designed an intuitive wayfinding system for the EducationUSA University Fair, guiding attendees through 10+ international university stands. Enhanced visitor experience with clear visual mapping and optimized booth accessibility, improving engagement and navigation efficiency.',
      imageUrl: '/assets/images/project-4.jpeg',
      projectLink: 'https://educationusafair.netlify.app/',
      githubLink: 'https://github.com/LuckySoftware/edusa-fair-map',
    },
    {
      title: 'Receipt Vault',
      description: 'I developed a custom payroll management system for my father, automating salary receipts using React and SQL. The solution streamlined recording and keeping, reduced errors, and improved efficiency in employee payment processing.',
      imageUrl: '/assets/images/project-3.jpeg',
      projectLink: 'https://github.com/LuckySoftware/receiptVault',
      githubLink: 'https://github.com/LuckySoftware/receiptVault',
    },
  ],
  research: [
    {
      title: 'Economic Evolution of Rural Uruguay (1851-1885)',
      description: 'This report analyzes the economic evolution of rural Uruguay between 1851 and 1885, focusing on how political conflicts, foreign intervention, and European immigration affected the agricultural and livestock production and the social structure of the country. Through a detailed theoretical framework, a diagnosis of the main problems, and strategic proposals, it aims to understand the causes of the economic and social crisis of the era, as well as to propose solutions to strengthen the State, promote rural education, and attract investments that enable sustainable and balanced development.',
      link: 'https://docs.google.com/document/d/17A9taOfyDpeSyDcaX-dr4-aKzHzR4_QBsxBJYbPUSww/edit?usp=sharing',
    },
    {
      title: 'Ethics & A.I. Regulations',
      description: '(Being developed) This research explores the ethical implications of artificial intelligence and the need for regulations to ensure responsible AI development and deployment. It examines current frameworks, identifies gaps, and proposes a comprehensive approach to address ethical concerns in AI technologies.',
      link: 'https://docs.google.com/document/d/1ZXttE4zEL7saefFcjA8fstan8NcNGrumvEFWyzzhVo8/edit?usp=sharing',
    },
  ],
  achievements: [
    'Supervisory Control and Data Acquisition (SCADA) Course | 2025',
    'Selected Student for a Quantum Computer Course at Uruguayan Faculty | 2025',
    'National Programming and Robotics Olimpyads | 2024',
    'Applied 3D Printing Techniques for Enviromental Sustainability Course | 2024',
    'Male Modeling for Nix | 2024',
    'IBM Cognitive Class Data Science Certificate | 2023',
    'IBM Cognitive Class Python For Data Science Certificate | 2023',
    'Model United Nation Delegate Certificate | 2022',
  ],
  experiences: [
    {
      title: 'Internship as a Data Analyst',
      company: 'Ventus Global',
      dates: 'Aug 2025 - Present',
      description: 'Work as a Data Analyst and Tool Developer, creating automation scripts and intelligent solutions to optimize processes. Manage SCADA systems and analyze plant data to support operational efficiency and informed decision-making.',
    },
    {
      title: 'Waiter & Bartender',
      company: 'FP Catering',
      dates: 'Nov 2024 - Jul 2025',
      description: 'Provide customer service and handle orders in a fast-paced environment. Work weekends while managing studies.',
    },
    {
      title: 'Freelance Software Developer',
      company: 'Lucky Software',
      dates: 'Mar 2023 - Aug 2024',
      description: 'Design and build custom websites for small businesses from scratch, focusing on functionality and clean aesthetics. Handle client consultations, UI/UX design, and full-stack development to deliver tailored digital solutions.',
    },
  ],
  volunteering: [
    {
      organization: 'Impacto Arcoiris by DESEM',
      role: 'Volunteer',
      dates: 'Aug 2023 - Nov 2023',
      description: 'DESEM is a non-profit organization that launched Impacto Arcoiris, a program designed to detect domestic violence against children. We diagnosed these activities while being trained by psychologists and lawyers to ensure ethical practices.',
    },
    {
      organization: 'Phone Usage Workshop',
      role: 'Workshop Coordinator & Instructor',
      dates: 'Jun 2024 - Aug 2024',
      description: 'I organized and led a workshop at Hogar Israelita, a nursing home, where my team and I taught seniors (aged 70 and above) how to use smartphones and connect with their families through calls.',
    },
    {
      organization: '2024 EducationUSA University Fair',
      role: 'Volunteer & Student',
      dates: 'Sep 2024',
      description: 'Took part in the staff team of the 2024 Fair of USA Universities to encourage more people on studying abroad.',
    },
    {
      organization: '2025 EducationUSA University Fair',
      role: 'External Volunteer & Web developer',
      dates: 'Sep 2025',
      description: "In 2025, although EducationUSA did not recruit CCC senior students for the USA Universities Fair, I voluntarily contributed by developing a web page for the event as a way to give back for all the support I received from EducationUSA."
    }
  ],
  education: [
    {
      degree: 'Secondary Education with a Focus on Information Technology',
      institution: 'Superior Institute "Brazo Oriental"',
      dates: '2024 - 2025',
      details: 'GPA: 3.9/4.0 | Relevant Coursework: Advanced Programming, Database Systems, Web Development, Robotics and 3D printing, Calculus & A.I',
    },    
    {
      degree: 'Secondary Education with a Focus on Information Technology',
      institution: 'Superior Institute of Technology',
      dates: '2023',
      details: 'GPA: 4.0/4.0 | Relevant Coursework: Programming, Network Administration, Electrical Technology & Logic for Computer Science.',
    },
  ],
  sports: [
    {
      name: 'Rugby',
      achievements: [
        'Active Division II Player for CTM Rugby Club',
        '"Valentin Martinez" Championship 2024',
        '"Valentin Martinez" Championship 2023',
      ],
    },
    {
      name: 'Volleyball',
      achievements: [
        '"Hebraica Macabi" Social Volleyball Player',
        'Participated in national tournaments and community events',
        'Beach Volleyball enthusiast',
      ],
    },
  ],
  languages: [
    '🇺🇾 Spanish (Native)',
    '🇺🇸 English (C1 - Advanced)',
    '🇧🇷 Portuguese (B2 - Intermediate)',
    '🇩🇪 German (A2 - Basic)'
  ],
  hobbies: [
    '📸 Taking photos with random ginger people and posting them on Instagram: @pov_ginger',
    '🧉 Drinking mate',
    '🧠 Learning about something new every day',
    '🏋️‍♂️ Going to the GYM',
    '🎶 Listening to country music',
    '🌅 Taking sunset photos',
    '🥾 Hiking and exploring nature',
  ],
  footer: {
    githubLink: 'https://github.com/LuckySoftware',
    linkedinLink: 'https://www.linkedin.com/in/luciano-moreira-dev/',
  },
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setIsDarkMode(true);
    else if (saved === 'false') setIsDarkMode(false);
    else setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((v) => !v);

  return (
    <div className="font-sans antialiased">
      <PortfolioHero {...portfolioData.hero} />
      <PortfolioAbout {...portfolioData.about} />
      <PortfolioSkills skills={portfolioData.skills} />
      <PortfolioProjects projects={portfolioData.projects} />
      <PortfolioResearch research={portfolioData.research} />
      <PortfolioAchievements achievements={portfolioData.achievements} />
      <PortfolioExperience experiences={portfolioData.experiences} />
      <PortfolioVolunteering volunteering={portfolioData.volunteering} />
      <PortfolioEducation education={portfolioData.education} />
      <PortfolioSports sports={portfolioData.sports} />
      <PortfolioHobbies languages={portfolioData.languages} hobbies={portfolioData.hobbies} />
      <PortfolioFooter
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        githubLink={portfolioData.footer.githubLink}
        linkedinLink={portfolioData.footer.linkedinLink}
      />
    </div>
  );
};
export default App;
