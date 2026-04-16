export const homeContent = {
  greeting: 'Hello',
  intro: "I'm",
  name: 'John',
  description:
    'Full-Stack Dev with 8+ years of experience building scalable web & mobile apps.',
};

export const personalInfo = {
  name: 'John Niyontwali',
  age: new Date().getFullYear() - 1995,
  nationality: 'Rwandan',
  location: 'Kigali, Rwanda',
  phone: '+250 786 266 073',
  email: 'nijohn0001@gmail.com',
  openToWork: true,
  languages: 'English',
};

export const aboutData = {
  personalInfo: {
    name: {
      first: 'John',
      last: 'Niyontwali',
    },
    birthYear: 1995,
    nationality: 'Rwandan',
    openToWork: 'Yes',
    languages: 'English',
    address: 'Kigali - Rwanda',
    phone: '+250 786 266 073',
    email: 'nijohn0001@gmail.com',
    social: {
      github: {
        url: 'https://github.com/niyontwali',
        username: 'niyontwali',
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/john-niyontwali-816549111/',
        username: 'linkedin',
      },
    },
    image: 'assets/about.jpg',
  },
  skills: [
    // Programming Languages
    { icon: 'devicon-javascript-plain', name: 'JavaScript' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript' },
    { icon: 'devicon-python-plain', name: 'Python' },
    { icon: 'devicon-csharp-plain', name: 'C#' },
    { icon: 'devicon-php-plain', name: 'PHP' },
    { icon: 'devicon-html5-plain', name: 'HTML5' },
    { icon: 'devicon-css3-plain', name: 'CSS3' },

    // Frontend Frameworks & Libraries
    { icon: 'devicon-react-plain', name: 'React.js' },
    { icon: 'devicon-nextjs-plain', name: 'Next.js' },
    { icon: 'devicon-javascript-plain', name: 'Angular' },
    { icon: 'devicon-flutter-plain', name: 'Flutter' },
    { icon: 'devicon-redux-plain', name: 'Redux' },

    // Backend Frameworks
    { icon: 'devicon-nodejs-plain', name: 'Node.js' },
    { icon: 'devicon-express-original', name: 'Express.js' },
    { icon: 'devicon-nestjs-plain', name: 'Nest.js' },
    { icon: 'devicon-flask-plain', name: 'Flask' },
    { icon: 'devicon-python-plain', name: 'Django' },
    { icon: 'devicon-python-plain', name: 'FastAPI' },
    { icon: 'devicon-dotnetcore-plain', name: '.NET Core' },
    { icon: 'devicon-laravel-plain', name: 'Laravel' },

    // UI Libraries & CSS Frameworks
    { icon: 'devicon-tailwindcss-plain', name: 'Tailwind CSS' },
    { icon: 'devicon-bootstrap-plain', name: 'Bootstrap' },
    { icon: 'devicon-materialui-plain', name: 'Material UI' },
    { icon: 'devicon-sass-plain', name: 'Sass' },

    // Databases
    { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
    { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
    { icon: 'devicon-mysql-plain', name: 'MySQL' },
    { icon: 'devicon-redis-plain', name: 'Redis' },
    { icon: 'devicon-firebase-plain', name: 'Firebase' },

    // Cloud Platforms
    { icon: 'devicon-amazonwebservices-plain', name: 'AWS' },
    { icon: 'devicon-googlecloud-plain', name: 'Google Cloud' },
    { icon: 'devicon-azure-plain', name: 'Azure' },
    { icon: 'devicon-digitalocean-plain', name: 'DigitalOcean' },

    // DevOps & Tools
    { icon: 'devicon-docker-plain', name: 'Docker' },
    { icon: 'devicon-kubernetes-plain', name: 'Kubernetes' },
    { icon: 'devicon-git-plain', name: 'Git' },
    { icon: 'devicon-github-plain', name: 'GitHub Actions' },
    { icon: 'devicon-gitlab-plain', name: 'GitLab CI' },
    { icon: 'devicon-linux-plain', name: 'Linux' },
    { icon: 'devicon-nginx-plain', name: 'Nginx' },
    { icon: 'devicon-redis-plain', name: 'Terraform' },

    // Package Managers & Build Tools
    { icon: 'devicon-npm-original-wordmark', name: 'npm' },
    { icon: 'devicon-yarn-plain', name: 'Yarn' },

    // API & Backend Technologies
    { icon: 'devicon-graphql-plain', name: 'GraphQL' },

    // Testing & Quality Assurance
    { icon: 'devicon-jest-plain', name: 'Jest' },
    { icon: 'devicon-jasmine-plain', name: 'Cypress' },

    // Content Management
    { icon: 'devicon-wordpress-plain', name: 'WordPress' },

    // Additional Technologies
    { icon: 'devicon-redis-plain', name: 'RabbitMQ' },
  ],
  experience: [
    {
      title: 'Part-time SE Career Mentor',
      period: 'Feb 2025 - Present',
      company: 'Springboard',
      type: 'experience',
    },
    {
      title: 'ICT/Coding Mentor',
      period: 'July 2024 - Jan 2025',
      company: 'Alight',
      type: 'experience',
    },
    {
      title: 'Senior Full-Stack Developer',
      period: 'Jan 2023 - June 2024',
      company: 'WelTel Inc.',
      type: 'experience',
    },
    {
      title: 'Technical Team Lead & Mentor',
      period: 'Nov 2021 - Dec 2022',
      company: 'Andela',
      type: 'experience',
    },
    {
      title: 'Lead Developer',
      period: 'Jan 2020 - Oct 2021',
      company: 'Bizcotap',
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
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429620/portfolio%20pictures/project-11-1_idhp3h.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429622/portfolio%20pictures/project-11-2_cjf6yn.png',
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
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429614/portfolio%20pictures/project-10-1_xqubqk.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429620/portfolio%20pictures/project-10-2_gp0uqe.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429609/portfolio%20pictures/project-10-3_fgfhlq.png',
    ],
    project: 'Website',
    client: 'Vintra',
    duration: '2 months',
    link: 'https://www.vitra.com',
  },
  {
    title: 'E-commerce',
    type: 'image',
    src: 'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429659/portfolio%20pictures/project-1_u6etqi.png',
    alt: 'Image Project',
    project: 'Website',
    client: 'Bizcotap Ltd',
    duration: '1 month',
    link: 'https://bizcotap.com/',
  },
  {
    title: 'NFC System',
    type: 'video',
    src: 'https://www.youtube.com/embed/yD8VL4POow8',
    videoTitle: 'Bizcotap Business Card',
    project: 'NFC enabled system',
    client: 'Bizcotap Ltd',
    duration: '2 months',
    link: 'https://www.youtube.com/watch?v=yD8VL4POow8',
  },
  {
    title: 'WelTel Platform',
    type: 'video',
    src: 'https://www.youtube.com/embed/g5o5YdC1YGE',
    videoTitle: 'WelTel Platform',
    project: 'Health Platform',
    client: 'WelTel Inc',
    link: 'https://www.youtube.com/watch?v=g5o5YdC1YGE',
  },
  {
    title: 'BRC Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429646/portfolio%20pictures/project-2-1_mxvafd.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429646/portfolio%20pictures/project-2-2_moejwl.png',
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
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429656/portfolio%20pictures/project-3-1_urbrxv.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429642/portfolio%20pictures/project-3-2_baleml.png',
    ],
    project: 'Website',
    client: 'Shield Associates',
    duration: '1 months',
    link: 'https://shield-associates.com/',
  },
  {
    title: 'Acreol Web',
    type: 'gallery',
    images: [
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429647/portfolio%20pictures/project-4-1_sotfsn.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429640/portfolio%20pictures/project-4-2_faqpcw.png',
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
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429637/portfolio%20pictures/project-5-1_dqbtee.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429638/portfolio%20pictures/project-5-2_go4vgx.png',
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
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429635/portfolio%20pictures/project-6-1_lgaohj.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429630/portfolio%20pictures/project-6-2_occnfj.png',
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
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429638/portfolio%20pictures/project-7-1_bh5c4h.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429628/portfolio%20pictures/project-7-2_ljqwil.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429600/portfolio%20pictures/project-7-3_alfjsj.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429612/portfolio%20pictures/project-7-4_lfbsyz.png',
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
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429640/portfolio%20pictures/project-8-1_tgk8nk.png',
      'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429636/portfolio%20pictures/project-8-2_jjyexq.png',
    ],
    project: 'Website',
    client: 'Buehler Engineering',
    duration: '2 months',
    link: 'https://buehlerengineering.com/',
  },
  {
    title: 'Galloway Web ',
    type: 'image',
    src: 'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429654/portfolio%20pictures/project-9-1_hmlafw.png',
    project: 'Website',
    client: 'Galloway',
    duration: '2 months',
    link: 'https://gallowayus.com/',
  },
  {
    title: 'Stansile Web',
    type: 'image',
    src: 'https://res.cloudinary.com/https-njohn-netlify-app/image/upload/v1757429640/portfolio%20pictures/project-12-1_rrvt3v.png',
    project: 'Website & CMS',
    client: 'Business Pro Solutions',
    duration: '1.5 months',
    link: 'https://stansile.org/',
  },
];