import {
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export type Contribution = {
  prUrl: string;
  private?: boolean;
  title?: string;
  url?: string; // a.k.a redirectUrl
  status?: 'open' | 'closed' | 'merged';
};

export interface Personal {
  name: string;
  surname: string;
  location: string;
  timezone: string;
  bio: string;
  email: string;
  availability: string;
  avatar: string;
}

export interface Social {
  icon: any;
  href: string;
  label: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  startDate: string;
  description: string;
  linkedin: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  href: string;
  github: string;
  className: string;
  collaborative?: boolean;
  featured?: boolean;
}


export const PORTFOLIO_CONTENT: {
  personal: Personal;
  socials: Social[];
  skills: string[];
  experience: Experience[];
  projects: Project[];
  contributions: Contribution[];
  mediumUrl: string;
} = {
  personal: {
    name: "Hi, I'm Ajay Kumar —",
    surname: "A Full Stack web developer.",
    location: "India",
    timezone: "IST",
    bio: `I build interactive web applications using TypeScript, React, Next.js, Node.js and PostgreSQL — with a strong focus on clean UI.`,
    email: "ajayyadav9002341@gmail.com",
    availability: "Available for freelance",
    avatar: "luffy.jpg",
  },
  socials: [
    {
      icon: Github,
      href: "https://github.com/ajay-yadav143",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ajay-kumar-yadav-729b0a302",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/AjayKumar267865", label: "Twitter" },
    { icon: Mail, href: "mailto:ajayyadav9002341@gmail.com", label: "Email" },
  ],
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Prisma ORM",
    "Supabase",
    "Tailwind CSS",
    "Docker",
    "Redux",
    "Postman",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub",
  ],
  experience: [
    {
     // company: "Jspark AI",
      //companyUrl: "https://jspark.ai",
     // role: "SDE Intern",
      //period: "Nov 2025 - Present",
     // startDate: "2025-11-01",
     // description: "",
      //linkedin: "https://linkedin.com/company/jsparkai",
    },
    {
      company: "Freelance",
      companyUrl: "",
      role: "Web Application Developer",
      period: "Dec 2024 - Jun 2025",
      startDate: "2023-12-01",
      description: "• Built and deployed 3+ full-stack web applications using React.js, Node.js and MongoDB.\n• Improved API performance by 30% through optimized backend queries and database design.\n• Delivered responsive UI solutions and collaborated with clients to build scalable systems.",
      linkedin: "",
    },
  ],
  projects: [
    {
      title: "Bitverify",
      desc: "BitVerify — Enterprise AI Food Fraud Detection Platform Advanced multi-layer forensic AI system for detecting edited, AI-generated, and duplicate food complaint images with automated refund decision logic.",
      tags: ["Python"],
      color: "bg-red-500",
      href: "https://biteverify-ruaeiyave2vosvpzngndbj.streamlit.app/",
      github: "https://github.com/ajay-yadav143/Biteverify",
      className: "md:col-span-1",
    },
    {
      title: "Linkfluence",
      desc: "A full-stack platform that connects brands and influencers. It provides secure authentication, profile management, campaign workflows, applications, and AI/ML-powered predictions.",
      tags: ["Javascript"],
      color: "bg-blue-500",
      href: "https://linkfluence-rouge.vercel.app/",
      github: "https://github.com/ajay-yadav143/Linkfluence-",
      className: "md:col-span-1",
    },
    {
      title: "car-marketplace-ai",
      desc: "Car Marketplace AI is a full-stack web application built with Next.js (App Router) that implements an AI-assisted car marketplace platform.",
      tags: ["Typescript"],
      color: "bg-emerald-500",
      href: "https://github.com/ajay-yadav143/car-marketplace-ai",
      github: "https://github.com/ajay-yadav143/car-marketplace-ai",
      className: "md:col-span-1",
    },
    {
      title: "AI RAG Document Search",
      desc: "AI powered document question answering system using RAG, Sentence Transformers embeddings and Endee Vector Database.",
      tags: ["Python", "FastAPI", "React"],
      color: "bg-purple-500",
      href: "https://github.com/ajay-yadav143/Ai-rag-document-search-endee",
      github: "https://github.com/ajay-yadav143/Ai-rag-document-search-endee",
      className: "md:col-span-1",
    },
    {
      title: "Smart Route Optimizer",
      desc: "A beginner-friendly Python project that uses Graphs and Dijkstra’s Algorithm to find the shortest route between locations, with real-time traffic simulation using FastAPI.",
      tags: ["Python"],
      color: "bg-gray-500",
      href: "https://github.com/ajay-yadav143/Smart-Route-Optimizer",
      github: "https://github.com/ajay-yadav143/Smart-Route-Optimizer",
      className: "md:col-span-1",
    },
    {
      title: "Tubeflex",
      desc: "TubeFlex is a modern Netflix-inspired streaming platform UI built to replicate the core look and feel of a real-world OTT application. It showcases dynamic content browsing, responsive design, and smooth user experience similar to Netflix.",
      tags: ["JavaScript"],
      color: "bg-orange-500",
      href: "https://github.com/ajay-yadav143/Tubeflex",
      github: "https://github.com/ajay-yadav143/Tubeflex",
      className: "md:col-span-1",
    },
    {
      title: "Interview Creation Portal",
      desc: "A full-stack web application designed to simplify and streamline the interview process for organizations.",
      tags: ["Python"],
      color: "bg-indigo-400",
      href: "https://github.com/ajay-yadav143/interview-creation-portal",
      github: "https://github.com/ajay-yadav143/interview-creation-portal",
      className: "md:col-span-1",
    },
    {
      title: "My Portfolio",
      desc: "My portfolio website built with Next.js and Tailwind CSS.",
      tags: ["TypeScript", "Next.js"],
      color: "bg-teal-500",
      href: "https://my-portfolio-19un.vercel.app/",
      github: "https://github.com/ajay-yadav143/MyPortfolio",
      className: "md:col-span-1",
    }
  ],
  contributions: [
    {
      prUrl:"https://github.com/itshover/itshover/pull/58"
    },
    {
      prUrl:"https://github.com/OssiumOfficial/ossium/pull/17",
      title:"feat: Implement Smart Alerts for premium users",
      private:true,
      url:"https://www.linkedin.com/posts/paras-vermaa_buildinpublic-saas-developerexperience-activity-7413798950589259776-NDcn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD05PBwB23RB7tDRtbGEloj7PwjWHcbvFSI",
      status:"merged"
    },
    {
      prUrl:"https://github.com/OssiumOfficial/ossium/pull/3",
      title:"Feat: overhaul bounties page, navigation, and language detection",
      private:true,
      url:"https://www.linkedin.com/posts/paras-vermaa_opensource-webdevelopment-frontend-activity-7409948094131253248-mnej?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD05PBwB23RB7tDRtbGEloj7PwjWHcbvFSI",
      status:"merged"
    },
    {
      prUrl:"https://github.com/OssiumOfficial/ossium/pull/9",
      title:"feat: Improve GSoC and Issues UIs",
      private:true,
      status:"merged"
    },
    { prUrl: "https://github.com/fastapi/fastapi/pull/14565" },
    { prUrl: "https://github.com/ig-imanish/mx-icons/pull/9" },
  ],
  mediumUrl: "https://medium.com/@ajay-yadav143",
};
