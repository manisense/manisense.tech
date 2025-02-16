'use client';

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiGraphql, 
  SiAmazon, 
  SiDocker,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiFirebase,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiRedis,
  SiRabbitmq,
  SiGithubactions,
  SiAnsible,
  SiTerraform,
  SiPandas,
  SiNumpy,
  SiKubernetes,
  SiScikitlearn,
  SiJest,
  SiRedux,
} from '@icons-pack/react-simple-icons';

export const TechIcons = {
  // Web Development
  react: { icon: SiReact, color: '#61DAFB' },
  nextjs: { icon: SiNextdotjs, color: '#000000' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
  nodejs: { icon: SiNodedotjs, color: '#339933' },
  graphql: { icon: SiGraphql, color: '#E10098' },
  aws: { icon: SiAmazon, color: '#FF9900' },
  docker: { icon: SiDocker, color: '#2496ED' },

  // Mobile Development
  flutter: { icon: SiFlutter, color: '#02569B' },
  kotlin: { icon: SiKotlin, color: '#7F52FF' },
  swift: { icon: SiSwift, color: '#F05138' },
  firebase: { icon: SiFirebase, color: '#FFCA28' },

  // AI & ML
  python: { icon: SiPython, color: '#3776AB' },
  tensorflow: { icon: SiTensorflow, color: '#FF6F00' },
  pytorch: { icon: SiPytorch, color: '#EE4C2C' },

  // Automation
  redis: { icon: SiRedis, color: '#DC382D' },
  rabbitmq: { icon: SiRabbitmq, color: '#FF6600' },
  githubactions: { icon: SiGithubactions, color: '#2088FF' },

  // DevOps & Infrastructure
  ansible: { icon: SiAnsible, color: '#EE0000' },
  terraform: { icon: SiTerraform, color: '#7B42BC' },
  kubernetes: { icon: SiKubernetes, color: '#326CE5' },

  // Data Science & ML
  pandas: { icon: SiPandas, color: '#150458' },
  numpy: { icon: SiNumpy, color: '#013243' },
  scikitlearn: { icon: SiScikitlearn, color: '#F7931E' },

  // Testing & State Management
  jest: { icon: SiJest, color: '#C21325' },
  redux: { icon: SiRedux, color: '#764ABC' },
} as const;

export type TechIconName = keyof typeof TechIcons;
