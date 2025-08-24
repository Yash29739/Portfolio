'use client'
import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';

const Projects = () => {
  const [ref,isVisible]=useScrollReveal(0.1);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU1NTgxOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU1NjQxMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project2"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
      image: "https://images.unsplash.com/photo-1634807010323-4309f645e5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1Njk4NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project3"
    },
    {
      title: "Social Media Platform",
      description: "A modern social media application with real-time messaging, post sharing, and social networking features. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcHxlbnwxfHx8fDE3NTU1ODE5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "Express", "Redis", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project4"
    },
    {
      title: "AI-Powered Chat Bot",
      description: "An intelligent chatbot application with natural language processing, context awareness, and integration with various APIs for enhanced user experience.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3R8ZW58MXx8fHwxNzU1NTgxOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "OpenAI", "Flask", "TensorFlow"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project5"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analytics with beautiful charts.",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGNoYXJ0fGVufDF8fHx8MTc1NTU4MTk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Chart.js", "Web3", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project6"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities worldwide.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwfGVufDF8fHx8MTc1NTU4MTk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "OpenWeather API", "Redux", "Maps"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project7"
    },
    {
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform where users can discover, save, and share their favorite recipes with detailed nutritional information.",
      image: "https://images.unsplash.com/photo-1556908114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNpcGUlMjBhcHB8ZW58MXx8fHwxNzU1NTgxOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Angular", "Firebase", "Ionic", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project8"
    },
    {
      title: "Fitness Tracking Dashboard",
      description: "A comprehensive fitness tracking application with workout plans, progress tracking, and social features for motivation and community building.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc1NTU4MTk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "GraphQL", "Apollo", "Prisma"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project9"
    }
  ];

  const LOAD_INCRREMENT = 3;
  const INITIAL_COUNT = 3;
  const visibleProjects = projects.slice(0, visibleCount);
  const hashMoreProjects = visibleCount > INITIAL_COUNT;

  const loadMoreProjects = () =>{
    const newCount = Math.min(visibleCount + LOAD_INCRREMENT,projects.length);
    setVisibleCount(newCount);
  }

  const showLessProjects = () => {
    const newCount = Math.max(visibleCount - LOAD_INCRREMENT, INITIAL_COUNT);
    setVisibleCount(newCount); 
  }

  const resetToInitial = () => {
    setVisibleCount(INITIAL_COUNT);
  }

  return (
    <section className='py-20' id="projects" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className='text-3xl md:text-4xl mb-4'>Featured Projects</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning opportunity.</p>
          <motion.div
            className='mt-6 text-sm text-muted-foreground'
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Showing {visibleProjects.length} of {projects.length} projects
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects