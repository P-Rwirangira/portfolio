import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Portfolio = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with cart functionality",
      tech: ["React", "Node.js", "MongoDB"],
      previewUrl: "https://placehold.co/600x400",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates",
      tech: ["Next.js", "Firebase", "Tailwind"],
      previewUrl: "https://placehold.co/600x400",
      category: "Productivity"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics",
      tech: ["React", "D3.js", "Material UI"],
      previewUrl: "https://placehold.co/600x400",
      category: "Analytics"
    }
  ];

  // Skills data
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "UI/UX Design", level: 75 },
    { name: "DevOps", level: 70 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About skills={skills} />
        </section>
        <section id="projects">
          <Projects projects={projects} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
