import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';
import Modal from './ui/Modal';
import { Badge } from './ui/Badge';
import LazyImage from './ui/LazyImage';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  previewUrl: string;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  features?: string[];
  timeline?: string;
  teamSize?: number;
  challenges?: string[];
  learnings?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <LazyImage
            src={project.previewUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="primary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.features && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Challenges & Solutions
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      • {challenge}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Actions */}
            <div className="space-y-3">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </motion.a>
              )}
            </div>

            {/* Project Details */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Project Details
              </h4>
              
              {project.timeline && (
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>{project.timeline}</span>
                </div>
              )}

              {project.teamSize && (
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize} team member{project.teamSize > 1 ? 's' : ''}</span>
                </div>
              )}

              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Code className="w-4 h-4" />
                <span>{project.category}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        {project.images && project.images.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative h-32 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <LazyImage
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;