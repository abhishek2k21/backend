
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string | React.ReactNode; // Fallback can be a string or a React node
  glow?: boolean;
  animated?: boolean;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40'
};

const Avatar = ({ src, alt, className, size = 'md', fallback, glow = false, animated = false }: AvatarProps) => {
  const [error, setError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  
  return (
    <div className={cn(
      'relative', 
      glow && 'avatar-glow', 
      animated && 'animate-float',
      className
    )}>
      <div className={cn(
        'rounded-full overflow-hidden shadow-xl', 
        sizeClasses[size],
        glow && 'animate-pulse-gentle'
      )}>
        {!error ? (    
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={src} 
              alt={alt} 
              className={cn(
                "w-full h-full object-contain transition-opacity duration-300",
                loaded ? "opacity-100" : "opacity-0"
              )}
              onError={() => setError(true)}
              onLoad={() => setLoaded(true)}
              style={{ 
                objectFit: 'contain',
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700/70 to-slate-900/70 backdrop-blur-sm">
            {typeof fallback === 'string' ? (
              <span className="text-4xl">{fallback}</span>
            ) : (
              fallback || '👤'
            )}
          </div>
        )}
      </div>
      {glow && (
        <div className={cn(
          "absolute inset-0 -z-10 rounded-full blur-xl opacity-50 bg-gradient-to-r",
          animated && "animate-pulse-slow"
        )}>
        </div>
      )}
    </div>
  );
};

export default Avatar;
