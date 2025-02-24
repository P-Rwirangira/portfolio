import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Code,
  BookOpen,
  Coffee,
  Calendar,
  Briefcase
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Patrick Rwirangira</h3>
            <p className="text-muted-foreground">
              Building elegant solutions to complex problems with a focus on performance,
              scalability, and user experience.
            </p>
            <motion.div
              className="bg-primary/10 p-4 rounded-lg mt-4"
              whileHover={{ y: -2 }}
            >
              <p className="text-sm">
                Available for select projects starting {new Date(Date.now() + 4 * 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </motion.div>
          </div>

          {/* Quick links column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Code className="h-4 w-4 mr-2" />
                  <span>Open Source Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Development Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/talks" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Tech Talks & Workshops</span>
                </Link>
              </li>
              <li>
                <Link href="/stack" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>Tech Stack & Tools</span>
                </Link>
              </li>
              <li>
                <Link href="/mentoring" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Coffee className="h-4 w-4 mr-2" />
                  <span>Mentorship Opportunities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest work column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Latest Work</h3>
            <ul className="space-y-3">
              {[
                { title: "E-commerce Platform", tech: "Next.js, Nodejs, MongoDB" },
                { title: "AI Chat Bot", tech: "Typrscipt, Mastra AI" },
                { title: "Agent AI interface", tech: "React ,Tailwind" }
              ].map((project, index) => (
                <motion.li
                  key={index}
                  className="border-l-2 border-primary/20 pl-3 py-1 hover:border-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <p className="font-medium">{project.title}</p>
                  <p className="text-xs text-muted-foreground">{project.tech}</p>
                </motion.li>
              ))}
            </ul>
            <Link href="/portfolio" className="flex items-center text-primary text-sm mt-4 hover:underline">
              <span>View all projects</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Patrick Rwirangira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;