"use client"

import { SiGmail } from "@icons-pack/react-simple-icons";
import { type LucideIcon, Computer, Smartphone, Brain, Cog, Globe, ChevronRight, Mail, Phone, Menu, X, ExternalLink, Github, Linkedin, Twitter, CheckCircle, ArrowRight, Download, Users, Building, Clock, Monitor, Lock, Zap, Server, Database, Cloud, Container, Code, Apple,  Flame, CircuitBoard, TestTube,  BarChart2, Table, Cpu, GitBranch, Bot, MessageSquare, Workflow } from "lucide-react";

interface IconsType {
  [key: string]: LucideIcon;
}

export const Icons: IconsType = {
  // Navigation
  menu: Menu,
  close: X,
  chevronRight: ChevronRight,
  externalLink: ExternalLink,
  
  // Services
  websites: Computer,
  mobile: Smartphone,
  ai: Brain,
  automation: Cog,
  globe: Globe,
  
  // Contact
  gmail: SiGmail,
  email: Mail,
  phone: Phone,
  
  // Social
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  
  // Features
  check: CheckCircle,
  arrow: ArrowRight,
  download: Download,
  team: Users,
  company: Building,
  clock: Clock,
  monitor: Monitor,
  security: Lock,
  performance: Zap,

  // Tech Stack
  server: Server,
  database: Database,
  cloud: Cloud,
  container: Container,
  code: Code,
  apple: Apple,
  android: Smartphone,
  flame: Flame,
  circuitry: CircuitBoard,
  test: TestTube,
  robot: Bot,
  chart: BarChart2,
  table: Table,
  gpu: Cpu,
  git: GitBranch,
  bot: Bot,
  queue: MessageSquare,
  workflow: Workflow,
} as const;

export type IconName = keyof typeof Icons;
