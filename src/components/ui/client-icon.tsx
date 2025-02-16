'use client';

import { Icon } from './icon';
import type { IconName } from '../icons';

interface ClientIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function ClientIcon({ name, className, size }: ClientIconProps) {
  return <Icon name={name} className={className} size={size} />;
}
