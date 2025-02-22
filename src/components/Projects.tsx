import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Globe, Calendar, Brain, ExternalLink, Github, Search } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/Card';
import Button from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs';

const sampleProjects = [
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
    "icon": "Edit"
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
    "icon": "ShoppingCart"
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
    "icon": "MessageSquare"
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
    "icon": "CheckCircle"
  }
]

const ProjectCard = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={project.previewUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <project.icon className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="bg-secondary/50">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <p className="text-sm text-muted-foreground">
            {project.longDescription}
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function Projects({ projects }: { projects: { id: number; title: string; description: string; tech: string[]; previewUrl: string; category: string; }[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = sampleProjects.filter((project: any) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["all", ...new Set(sampleProjects.map((p: any) => p.category))];

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

          <div className="flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-4 w-full">
              {categories.map((category: string) => (
                <TabsTrigger key={category} className="capitalize" onClick={() => setSelectedCategory(category)}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
