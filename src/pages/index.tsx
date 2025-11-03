import { lazy, Suspense } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ScrollProgress from '../components/ui/ScrollProgress';
import ThemeToggle from '../components/ui/ThemeToggle';
import FloatingActionButton from '../components/ui/FloatingActionButton';
import SEOHead from '../components/SEOHead';
import SkipToContent from '../components/SkipToContent';

// Lazy load components for better performance
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

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
    <>
      <SEOHead 
        title="Patrick Rwirangira - Software Developer & Full-Stack Engineer"
        description="Passionate full-stack developer specializing in modern web technologies. Building elegant, efficient, and user-friendly applications with React, Next.js, Node.js, and more."
        keywords="Patrick Rwirangira, software developer, full-stack engineer, web development, React, Next.js, Node.js, TypeScript, JavaScript, portfolio"
        ogUrl="https://your-portfolio-domain.com"
        canonicalUrl="https://your-portfolio-domain.com"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <SkipToContent />
        <ScrollProgress />
        <ThemeToggle />
        <FloatingActionButton />
        <Navigation />
      <main id="main-content" className="pt-16" tabIndex={-1}>
        <section id="home">
          <Hero />
        </section>
        <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <section id="about">
            <About skills={skills} />
          </section>
        </Suspense>
        <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <section id="projects">
            <Projects projects={projects} />
          </section>
        </Suspense>
        <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
        <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Portfolio;