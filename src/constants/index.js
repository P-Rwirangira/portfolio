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
    {
      title: 'Lead Developer',
      period: 'Jan 2020 - Oct 2021',
      company: 'Andela',
      type: 'experience',
    },
    {
      title: 'Software Engineer',
      period: 'June 2018 - Dec 2019',
      company: 'FuelCapp Technologies',
      type: 'experience',
    },
    {
      title: 'IT Officer',
      period: 'Jan 2016 - May 2018',
      company: 'IER',
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
    title: 'Allbirds Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429620/portfolio%20pictures/project-11-1_idhp3h.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429622/portfolio%20pictures/project-11-2_cjf6yn.png',
    ],
    project: 'Website',
    client: 'Allbirds',
    duration: '2 months',
    link: 'https://www.allbirds.com/',
  },
  {
    title: 'Vintra Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429614/portfolio%20pictures/project-10-1_xqubqk.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429620/portfolio%20pictures/project-10-2_gp0uqe.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429609/portfolio%20pictures/project-10-3_fgfhlq.png',
    ],
    project: 'Website',
    client: 'Vintra',
    duration: '2 months',
    link: 'https://www.vitra.com',
  },
  {
    title: 'E-commerce',
    type: 'image',
    src: 'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429659/portfolio%20pictures/project-1_u6etqi.png',
    alt: 'Image Project',
    project: 'Website',
    client: 'Andela Ltd',
    duration: '1 month',
    link: 'https://Andela.com/',
  },
  {
    title: 'NFC System',
    type: 'image',
    src: 'https://placehold.co/800x600/1e1e1e/fff?text=NFC+System+App',
    alt: 'Andela Business Card',
    project: 'NFC enabled system',
    client: 'Andela Ltd',
    duration: '2 months',
    link: '#',
  },
  {
    title: 'WelTel Platform',
    type: 'image',
    src: 'https://placehold.co/800x600/1e1e1e/fff?text=WelTel+Platform',
    alt: 'WelTel Platform',
    project: 'Health Platform',
    client: 'WelTel Inc',
    link: '#',
  },
  {
    title: 'BRC Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429646/portfolio%20pictures/project-2-1_mxvafd.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429646/portfolio%20pictures/project-2-2_moejwl.png',
    ],
    project: 'BRC Website',
    client: 'PSF',
    duration: '1 months',
    link: 'https://brc.org.rw/',
  },
  {
    title: 'Shield Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429656/portfolio%20pictures/project-3-1_urbrxv.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429642/portfolio%20pictures/project-3-2_baleml.png',
    ],
    project: 'Website',
    client: 'Lunds Peace Foundation',
    duration: '1 months',
    link: 'https://shield-associates.com/',
  },
  {
    title: 'Acreol Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429647/portfolio%20pictures/project-4-1_sotfsn.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429640/portfolio%20pictures/project-4-2_faqpcw.png',
    ],
    project: 'Website',
    client: 'Acreol Website',
    duration: '1 months',
    link: 'https://acreol.org/',
  },
  {
    title: 'TechQuest ',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429637/portfolio%20pictures/project-5-1_dqbtee.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429638/portfolio%20pictures/project-5-2_go4vgx.png',
    ],
    project: 'Website',
    client: 'TechQuest Ltd',
    duration: '1 month',
    link: 'https://techquestltd.com/',
  },
  {
    title: 'E-commerce',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429635/portfolio%20pictures/project-6-1_lgaohj.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429630/portfolio%20pictures/project-6-2_occnfj.png',
    ],
    project: 'E-commerce Platform',
    client: 'DHDealz Ltd',
    duration: '2 months',
    link: 'https://dhdealz.com/',
  },
  {
    title: 'Rentplus Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429638/portfolio%20pictures/project-7-1_bh5c4h.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429628/portfolio%20pictures/project-7-2_ljqwil.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429600/portfolio%20pictures/project-7-3_alfjsj.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429612/portfolio%20pictures/project-7-4_lfbsyz.png',
    ],
    project: 'Property Management',
    client: 'Rent Plus Ltd',
    duration: '2 months',
    link: 'https://rentplus.rw',
  },
  {
    title: 'Buehler Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429640/portfolio%20pictures/project-8-1_tgk8nk.png',
      'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429636/portfolio%20pictures/project-8-2_jjyexq.png',
    ],
    project: 'Website',
    client: 'Buehler Engineering',
    duration: '2 months',
    link: 'https://buehlerengineering.com/',
  },
  {
    title: 'Galloway Web ',
    type: 'image',
    src: 'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429654/portfolio%20pictures/project-9-1_hmlafw.png',
    project: 'Website',
    client: 'Galloway',
    duration: '2 months',
    link: 'https://gallowayus.com/',
  },
  {
    title: 'Stansile Web',
    type: 'image',
    src: 'https://res.cloudinary.com/https-nPatrick-netlify-app/image/upload/v1757429640/portfolio%20pictures/project-12-1_rrvt3v.png',
    project: 'Website & CMS',
    client: 'Business Pro Solutions',
    duration: '1.5 months',
    link: 'https://stansile.org/',
  },
];