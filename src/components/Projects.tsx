import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingCart, MessageSquare, ListChecks, ExternalLink, Github, Search, ShoppingBag, CheckCheck, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/Card';
import Button from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs';

// Define icon mapping for projects passed via props
const getIconForProject = (title: string, category: string) => {
  if (title.includes('E-commerce') || title.includes('E-Commerce')) return ShoppingCart;
  if (title.includes('Blog') || title.includes('CMS')) return FileText;
  if (title.includes('Chat') || title.includes('AI')) return MessageSquare;
  if (title.includes('Task') || title.includes('Manager')) return ListChecks;
  if (category === 'Analytics' || title.includes('Dashboard')) return BarChart3;
  if (category === 'Productivity') return CheckCheck;
  if (category === 'Web Development') return ShoppingBag;
  return FileText; // default icon
};

const ProjectCard = ({ project }: { project: any }) => {
  const IconComponent = project.icon || getIconForProject(project.title, project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full bg-card rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border">
        {/* Header with title and category */}
        <div className="p-6 pb-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <IconComponent className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with actions */}
        <div className="p-6 pt-0 bg-muted/30">
          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button size="sm" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function Projects({ projects }: { projects: { id: number; title: string; description: string; tech: string[]; previewUrl: string; category: string; }[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Use projects prop if available, otherwise use sampleProjects
  const projectData = projects && projects.length > 0 ? 
    projects.map(project => ({
      ...project,
      icon: getIconForProject(project.title, project.category)
    })) : 
    [
      {
        "id": 1,
        "title": "Blog Master",
        "description": "A powerful, feature-rich blogging platform with an intuitive CMS.",
        "longDescription": "Built with Next.js, Node.js, and PostgreSQL, this platform enables seamless content creation, user authentication, rich text editing, and SEO optimization. It includes a comment system, tags, and dark mode support.",
        "tech": ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Jest"],
        "category": "Web App",
        "previewUrl": "/media/images.png",
        "githubUrl": "#",
        "liveUrl": "#",
        "icon": FileText
      },
      {
        "id": 2,
        "title": "E-Commerce Pro",
        "description": "A scalable e-commerce platform with advanced product and order management.",
        "longDescription": "Developed using Next.js and Django with a PostgreSQL database, this platform features multi-vendor support, role-based access, Stripe/PayPal payments, and real-time analytics for sales tracking.",
        "tech": ["Next.js", "Django", "PostgreSQL", "REST API", "Stripe", "Docker"],
        "category": "Web App",
        "previewUrl": "/media/images.png",
        "githubUrl": "#",
        "liveUrl": "#",
        "icon": ShoppingCart
      },
      {
        "id": 3,
        "title": "AI Chat Web App (Mastra AI)",
        "description": "An AI-powered chat application integrating Mastra AI for natural language processing.",
        "longDescription": "This project leverages FastAPI and WebSockets to enable real-time AI-driven conversations. Features include multi-user chat rooms, context-aware responses, and user sentiment analysis.",
        "tech": ["React", "FastAPI", "PostgreSQL", "WebSockets", "Mastra AI"],
        "category": "AI",
        "previewUrl": "/media/images.png",
        "githubUrl": "#",
        "liveUrl": "#",
        "icon": MessageSquare
      },
      {
        "id": 4,
        "title": "Task Manager API",
        "description": "A RESTful API for task management with user authentication.",
        "longDescription": "Developed with Node.js and Express.js, this API provides CRUD operations, JWT-based authentication, and a PostgreSQL database for persistent task storage. Ideal for integration with frontend apps.",
        "tech": ["Node.js", "Express.js", "PostgreSQL", "JWT", "Swagger"],
        "category": "Backend",
        "previewUrl": "/media/images.png",
        "githubUrl": "#",
        "liveUrl": "#",
        "icon": ListChecks
      }
    ];

  const filteredProjects = projectData.filter((project: any) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["all", ...new Set(projectData.map((p: any) => p.category))];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-8">
            A collection of my recent work in AI, web development, and software engineering.
          </p>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full mb-8 grid-cols-2 sm:grid-cols-4 gap-2">
              {categories.map((category: string) => (
                <TabsTrigger 
                  key={category} 
                  className="capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}