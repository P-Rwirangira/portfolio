import React, { useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiDjango, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiSqlite, SiGit, SiDocker, SiJest, SiFigma } from "react-icons/si";
import Card from './Card';
import CardContent from './CardContent';
import TabsList from './TabsList';
import TabsTrigger from './TabsTrigger';
import TabsContent from './TabsContent';
import SkillCard from './SkillCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skillCategories = {
  languages: [
    { name: "JavaScript", icon: SiJavascript, level: 90 },
    { name: "TypeScript", icon: SiTypescript, level: 85 },
    { name: "Python", icon: SiPython, level: 80 },
    { name: "SQL", icon: SiPostgresql, level: 75 },
  ],
  frontend: [
    { name: "React", icon: SiReact, level: 88 },
    { name: "Next.js", icon: SiNextdotjs, level: 85 },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, level: 85 },
    { name: "Django", icon: SiDjango, level: 80 },
    { name: "Express.js", icon: SiExpress, level: 78 },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
    { name: "MySQL", icon: SiMysql, level: 80 },
    { name: "MongoDB", icon: SiMongodb, level: 78 },
    { name: "SQLite", icon: SiSqlite, level: 75 },
  ],
  tools: [
    { name: "Git", icon: SiGit, level: 88 },
    { name: "Docker", icon: SiDocker, level: 75 },
    { name: "Jest", icon: SiJest, level: 70 },
    { name: "Figma", icon: SiFigma, level: 70 },
  ],
};

export default function About({ skills }: { skills: { name: string; level: number; }[] }) {
  const [selectedTab, setSelectedTab] = useState("languages");
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const skillsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12 transition-colors duration-300">
      <motion.section 
        ref={ref}
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
      >
        <motion.div className="max-w-4xl mx-auto text-center mb-16" variants={itemVariants}>
          <motion.h1 
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            I'm a passionate full-stack developer with a focus on creating elegant,
            efficient, and user-friendly applications. With over 2 years of experience,
            I specialize in modern web technologies and best practices.
          </motion.p>
        </motion.div>

        <motion.div className="w-full max-w-4xl mx-auto" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {Object.keys(skillCategories).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  selected={selectedTab === category}
                  onClick={setSelectedTab}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} selectedTab={selectedTab}>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={skillsGridVariants}
                initial="hidden"
                animate={selectedTab === category ? "visible" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
