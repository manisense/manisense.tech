'use client';

import { TechIcons, type TechIconName } from '../tech-icons';
import { cn } from '@/lib/utils';

interface TechIconProps {
  name: TechIconName;
  className?: string;
  size?: number;
  color?: string;
}

export function TechIcon({ name, size = 24, color, className }: TechIconProps) {
  const tech = TechIcons[name];
  if (!tech) return null;

  const Icon = tech.icon;
  
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Icon size={size} color={color || tech.color} />
    </div>
  );
}
