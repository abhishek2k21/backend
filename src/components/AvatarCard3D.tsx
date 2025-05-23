
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvatarSphere } from './AvatarSphere';
import GlassCard from './GlassCard';
import { cn } from '@/lib/utils';

interface AvatarCard3DProps {
  title: string;
  description: string;
  character: 'children' | 'elderly' | 'homemaker';
  route: string;
  fallbackIcon: React.ReactNode;
}

const seedMap = {
  children: 'playful-student',
  elderly: 'wise-reader',
  homemaker: 'friendly-chef'
} as const;

const AvatarCard3D = ({
  title,
  description,
  character,
  route,
  fallbackIcon
}: AvatarCard3DProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const themeColors = {
    children: 'from-blue-600/30 to-indigo-600/20 hover:from-blue-600/40 hover:to-indigo-600/30',
    elderly: 'from-teal-600/30 to-blue-600/20 hover:from-teal-600/40 hover:to-blue-600/30',
    homemaker: 'from-indigo-600/30 to-purple-600/20 hover:from-indigo-600/40 hover:to-purple-600/30'
  };

  const glowColors = {
    children: 'shadow-blue-500/30',
    elderly: 'shadow-teal-500/30',
    homemaker: 'shadow-indigo-500/30'
  };

  return (
    <GlassCard
      className="w-full max-w-sm aspect-square p-8 cursor-pointer transition-all duration-500"
      glowing={isHovered}
      theme={character}
      onClick={() => navigate(route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      appear="fade"
      transitionDuration={0.5}
    >
      <div className="h-full flex flex-col items-center justify-center space-y-6">
        <div 
          className={cn(
            "w-48 h-48 rounded-full bg-gradient-to-br relative overflow-hidden transition-transform duration-300",
            themeColors[character],
            glowColors[character],
            isHovered ? 'scale-110 shadow-lg' : '',
            "backdrop-blur-sm"
          )}
        >
          <AvatarSphere 
            seed={seedMap[character]} 
            size={1.2} 
            autoRotate={isHovered} 
          />
        </div>

        <div className={cn(
          "text-center transition-all duration-300",
          isHovered ? "transform -translate-y-2" : ""
        )}>
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-sm text-white/75 max-w-[250px]">{description}</p>
        </div>
      </div>
    </GlassCard>
  );
};

export default AvatarCard3D;
