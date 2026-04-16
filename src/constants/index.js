export const homeContent = {
  greeting: 'Hello',
  intro: "I'm",
  name: 'Patrick',
  description:
    'Full-Stack Dev wtih 3+ years of experience building scalable web apps and reliable systems.',
};

export const personalInfo = {
  name: 'Patrick Rwirangira',
  age: new Date().getFullYear() - 1995,
  nationality: 'Rwandan',
  location: 'Kigali, Rwanda',
  phone: '',
  email: 'rwpatrick001@gmail.com',
  openToWork: true,
  languages: 'English',
};

export const aboutData = {
  personalInfo: {
    name: {
      first: 'Patrick',
      last: 'Rwirangira',
    },
    birthYear: 1995,
    nationality: 'Rwandan',
    openToWork: 'Yes',
    languages: 'English - Kinyarwanda',
    address: 'Kigali - Rwanda',
    phone: '0783992155',
    email: 'rwpatrick001@gmail.com',
    social: {
      github: {
        url: 'https://github.com/p-rwirangira',
        username: 'Rwirangira',
      },
      // linkedin: {
      //   url: 'https://www.linkedin.com/in/rwirangira/',
      //   username: 'linkedin',
      // },
    },
    image: '/media/profile.jpeg',
  },
  skills: [
    // Languages
    { icon: 'ri-javascript-fill', name: 'JavaScript' },
    { icon: 'ri-braces-fill', name: 'TypeScript' },
    { icon: 'ri-terminal-box-fill', name: 'Python' },
    { icon: 'ri-file-code-fill', name: 'Solidity' }, 
    { icon: 'ri-html5-fill', name: 'HTML5' },
    { icon: 'ri-css3-fill', name: 'CSS3' },
    { icon: 'ri-database-2-fill', name: 'SQL' }, 

    // Backend
    { icon: 'ri-server-fill', name: 'Node.js' },
    { icon: 'ri-window-fill', name: 'Express.js' },
    { icon: 'ri-layout-grid-fill', name: 'NestJS' },

    // Frontend
    { icon: 'ri-reactjs-fill', name: 'React' },
    { icon: 'ri-shape-2-fill', name: 'Redux' },
    { icon: 'ri-paint-brush-fill', name: 'Tailwind CSS' },
    { icon: 'ri-global-fill', name: 'Next.js' },

    // Database
    { icon: 'ri-database-fill', name: 'PostgreSQL' },
    { icon: 'ri-database-line', name: 'MySQL' },
    { icon: 'ri-leaf-fill', name: 'MongoDB' },

    // Data Science
    { icon: 'ri-bar-chart-box-fill', name: 'NumPy' }, 
    { icon: 'ri-table-fill', name: 'Pandas' }, 
    { icon: 'ri-line-chart-fill', name: 'Matplotlib' }, 
    { icon: 'ri-pie-chart-2-fill', name: 'Seaborn' }, 

    // Payments
    { icon: 'ri-bank-card-fill', name: 'Stripe' }, 
    { icon: 'ri-paypal-fill', name: 'PayPal' }, 

    // DevOps & Infrastructure
    { icon: 'ri-ship-fill', name: 'Docker' },
    { icon: 'ri-git-branch-fill', name: 'Git' },
    { icon: 'ri-github-fill', name: 'CI/CD' },
    { icon: 'ri-send-plane-fill', name: 'Postman' }, 

    // Blockchain & Web3
    { icon: 'ri-links-fill', name: 'Solidity' }, 
    { icon: 'ri-hard-hat-fill', name: 'Hardhat' }, 
    { icon: 'ri-braces-line', name: 'ethers.js' }, 
    { icon: 'ri-shield-check-fill', name: 'OpenZeppelin' }, 

    // Blockchain Platforms
    { icon: 'ri-eth-fill', name: 'Ethereum' },
    { icon: 'ri-base-station-fill', name: 'Base' }, 
    // { icon: 'ri-polygon-fill', name: 'Polygon' }, 

    // DeFi Protocols
    { icon: 'ri-exchange-funds-fill', name: 'Uniswap' }, 
    { icon: 'ri-safe-2-fill', name: 'Aave' }, 
    { icon: 'ri-robot-2-fill', name: 'Flashbots' }, 
  ],
  experience: [
    {
      title: 'Software Engineer Part-Time',
      period: 'Feb 2026 - Present',
      company: 'Lunds Peace Foundation (LPF)',
      type: 'experience',
    },
    {
      title: 'Senior Full-Stack Developer',
      period: 'July 2025 - Jan 2026',
      company: 'Ubaka Inc.',
      type: 'experience',
    },
    {
      title: 'Software Engineer',
      period: 'Jan 2023 - June 2024',
      company: 'Chafetz.',
      type: 'experience',
    },
    {
      title: 'Software Engineer Alumni',
      period: 'Nov 2021 - Dec 2022',
      company: 'Andela',
      type: 'experience',
    },
  ],
};

export const blogs = [
  {
    id: 1,
    link: 'https://www.cyberark.com/resources/blog/the-rise-of-ai-agents-collaborative-intelligence',
    image:
      'https://www.cyberark.com/wp-content/uploads/2025/03/ai-agents-collaborative-intelligence1.jpg',
    alt: 'The Rise of AI Agents—Collaborative Intelligence',
    category: 'AI/ML',
    title: 'The Rise of AI Agents, Collaborative Intelligence',
    summary:
      '2025 marks a shift as AI agents move from experiments to core enterprise tools, expanding human intelligence, automating workflows and reshaping cybersecurity and decision-making at scale.',
    date: '12 March 2025',
    author: 'Noga Shachar Schleyer',
  },
  {
    id: 2,
    link: 'https://towardsdatascience.com/agentic-ai-and-the-future-of-python-project-management-tooling/',
    image:
      'https://towardsdatascience.com/wp-content/uploads/2025/09/sandy-millar-5PCeHBkMCmk-unsplash-scaled-1.jpg',
    alt: 'Agentic AI and Python Project Management',
    category: 'AI/ML',
    title: 'Agentic AI and the Future of Python Project Management Tooling',
    summary:
      'How agentic AI will transform Python tooling from basic primitives to autonomous agents handling environment management and workflows.',
    date: '09 September 2025',
    author: 'Towards Data Science',
  },
];


export const projectsData = [
  {
    title: 'Lund Peace Foundation',
    type: 'gallery',
    images: ['assets/lunds1.png', 'assets/lunds2.png'],
    project: 'Website',
    client: 'Lund Peace Foundation Inc',
    duration: 'Ongoing',
    link: 'https://lundspeacefoundation.vercel.app',
  },
  {
    title: 'Ubaka Inc',
    type: 'gallery',
    images: ['assets/ubaka1.png', 'assets/ubaka2.png'],
    project: 'Web Application',
    client: 'Ubaka Inc',
    duration: 'Done',
    link: 'https://zippy-crepe-15fe7b.netlify.app/',
  }
];
