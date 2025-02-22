import React, { useState } from 'react';
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiDjango, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiSqlite, SiGit, SiDocker, SiJest, SiFigma } from "react-icons/si";
import Card from './Card';
import CardContent from './CardContent';
import TabsList from './TabsList';
import TabsTrigger from './TabsTrigger';
import TabsContent from './TabsContent';
import SkillCard from './SkillCard';

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

export default function AboutPreview() {
  const [selectedTab, setSelectedTab] = useState("languages");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <section className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">About Me</h1>
          <p className="text-xl text-gray-600">
            I'm a passionate full-stack developer with a focus on creating elegant,
            efficient, and user-friendly applications. With over 2 years of experience,
            I specialize in modern web technologies and best practices.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
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

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} selectedTab={selectedTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </section>
    </div>
  );
}
