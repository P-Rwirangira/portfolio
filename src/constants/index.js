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
  phone: '+250 783 992 155',
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
    address: 'Kigali, Rwanda',
    phone: '+250 783 992 155',
    email: 'rwpatrick001@gmail.com',
    social: {
      github: {
        url: 'https://github.com/P-Rwirangira',
        username: 'P-Rwirangira',
      },
    },
    image: '/media/profile.jpeg',
  },
  skills: [
    // Languages
    { icon: 'fa-brands fa-rust', name: 'Rust' },
    { icon: 'ri-braces-fill', name: 'TypeScript' },
    { icon: 'ri-javascript-fill', name: 'JavaScript' },
    { icon: 'ri-terminal-box-fill', name: 'Python' },
    { icon: 'ri-file-code-fill', name: 'Solidity' },
    { icon: 'ri-database-2-fill', name: 'SQL' },
    { icon: 'devicon-bash-plain', name: 'Bash' },
    { icon: 'ri-html5-fill', name: 'HTML5' },
    { icon: 'ri-css3-fill', name: 'CSS3' },

    // Systems & Web3 / Blockchain
    { icon: 'ri-cpu-line', name: 'Tokio' },
    { icon: 'ri-rocket-line', name: 'Actix' },
    { icon: 'ri-shield-keyhole-line', name: 'Alloy' },
    { icon: 'ri-eth-line', name: 'REVM' },
    { icon: 'ri-broadcast-line', name: 'WebSockets' },
    { icon: 'ri-cpu-fill', name: 'EVM Simulation' },
    { icon: 'ri-eth-fill', name: 'Ethereum' },
    { icon: 'ri-base-station-fill', name: 'Base' },
    { icon: 'fa-solid fa-hard-hat', name: 'Hardhat' },
    { icon: 'ri-braces-line', name: 'ethers.js' },
    { icon: 'ri-shield-check-fill', name: 'OpenZeppelin' },
    { icon: 'ri-exchange-funds-fill', name: 'Uniswap' },
    { icon: 'ri-safe-2-fill', name: 'Aave' },
    { icon: 'ri-robot-2-fill', name: 'Flashbots' },

    // Backend & APIs
    { icon: 'ri-server-fill', name: 'Node.js' },
    { icon: 'ri-window-fill', name: 'Express.js' },
    { icon: 'ri-layout-grid-fill', name: 'NestJS' },
    { icon: 'ri-flashlight-line', name: 'FastAPI' },

    // Frontend
    { icon: 'ri-reactjs-fill', name: 'React' },
    { icon: 'ri-global-fill', name: 'Next.js' },
    { icon: 'ri-shape-2-fill', name: 'Redux' },
    { icon: 'ri-paint-brush-fill', name: 'Tailwind CSS' },

    // Databases & Cache
    { icon: 'ri-database-fill', name: 'PostgreSQL' },
    { icon: 'devicon-redis-plain', name: 'Redis' },
    { icon: 'ri-leaf-fill', name: 'MongoDB' },
    { icon: 'ri-database-line', name: 'MySQL' },

    // Testing & Reliability
    { icon: 'devicon-jest-plain', name: 'Jest' },
    { icon: 'ri-test-tube-line', name: 'Pytest' },

    // DevOps & Cloud
    { icon: 'ri-ship-fill', name: 'Docker' },
    { icon: 'devicon-linux-plain', name: 'Linux' },
    { icon: 'devicon-nginx-original', name: 'Nginx' },
    { icon: 'ri-git-branch-fill', name: 'Git' },
    { icon: 'ri-github-fill', name: 'GitHub Actions' },
    { icon: 'devicon-circleci-plain', name: 'CircleCI' },
    { icon: 'ri-refresh-line', name: 'CI/CD' },
    { icon: 'ri-send-plane-fill', name: 'Postman' },

    // Data Science & Payments
    { icon: 'ri-bar-chart-box-fill', name: 'NumPy' },
    { icon: 'ri-table-fill', name: 'Pandas' },
    { icon: 'ri-line-chart-fill', name: 'Matplotlib' },
    { icon: 'ri-pie-chart-2-fill', name: 'Seaborn' },
    { icon: 'ri-bank-card-fill', name: 'Stripe' },
    { icon: 'ri-paypal-fill', name: 'PayPal' },
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
      period: 'Sep 2025 - Apr 2026',
      company: 'Ubaka Inc.',
      type: 'experience',
    },
    {
      title: 'Software Engineer',
      period: 'Aug 2024 - Aug 2025',
      company: 'Chafetz.',
      type: 'experience',
    },
    {
      title: 'Software Engineer Alumni',
      period: 'Jan 2023 - Jul 2023',
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
    title: 'Lund Peace Foundation Inc .',
    type: 'gallery',
    images: ['assets/lunds1.png', 'assets/lunds2.png'],
    project: 'Foundation Website',
    client: 'Lund Peace Foundation Inc',
    duration: 'Ongoing',
    link: 'https://lundpeacefoundation.netlify.app',
  },
  {
    title: 'Ubaka Inc .',
    type: 'gallery',
    images: ['assets/ubaka1.png', 'assets/ubaka2.png'],
    project: 'Architecture Market place',
    client: 'Ubaka Inc',
    duration: 'Sep 2025 - Apr 2026',
    frameworks: 'TypeScript, Node.js, PostgreSQL, Docker',
    link: 'https://ubaka-ink.netlify.app/',
  },
];
