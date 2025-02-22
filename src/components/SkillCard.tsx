import React, { useState } from 'react';
import Card from './Card';
import CardContent from './CardContent';

const SkillCard = ({ skill }: { skill: { name: string, icon: React.ComponentType<{ className?: string }>, level: number } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transform transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="p-4 hover:shadow-lg transition-all duration-300">
        <CardContent className="flex flex-col items-center space-y-4">
          <skill.icon className="w-12 h-12 text-[#1d2d43]" />
          <h3 className="font-medium">{skill.name}</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#1d2d43] h-2 rounded-full transition-all duration-800"
              style={{ width: isHovered ? `${skill.level}%` : "0%" }}
            />
          </div>
          <span className="text-sm text-gray-600">
            {isHovered ? `${skill.level}%` : "Hover to see proficiency"}
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCard;