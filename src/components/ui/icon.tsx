'use client';

import { Icons, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: IconName | string;
  size?: number;
  fallback?: IconName;
}

export function Icon({ name, size = 24, className, fallback = "monitor", ...props }: IconProps) {
  const validName = (name as IconName) in Icons ? name as IconName : fallback;
  const IconComponent = Icons[validName];
  
  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn("", className)}
      {...props}
    />
  );
}
