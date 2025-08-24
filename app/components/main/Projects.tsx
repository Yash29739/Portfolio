'use client'
import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image  from 'next/image';
import { Badge } from '../ui/Badge';
import { ChevronDown, ChevronUp, ExternalLink, Github, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';

const Projects = () => {
  const [ref,isVisible]=useScrollReveal(0.1);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/img.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/img.png",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project2"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
      image: "/img.png",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project3"
    },
    {
      title: "Social Media Platform",
      description: "A modern social media application with real-time messaging, post sharing, and social networking features. Built with modern web technologies.",
      image: "/img.png",
      technologies: ["Vue.js", "Express", "Redis", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project4"
    },
    {
      title: "AI-Powered Chat Bot",
      description: "An intelligent chatbot application with natural language processing, context awareness, and integration with various APIs for enhanced user experience.",
      image: "/img.png",
      technologies: ["Python", "OpenAI", "Flask", "TensorFlow"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project5"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analytics with beautiful charts.",
      image: "/img.png",
      technologies: ["React", "Chart.js", "Web3", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project6"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities worldwide.",
      image: "/img.png",
      technologies: ["React Native", "OpenWeather API", "Redux", "Maps"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project7"
    },
    {
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform where users can discover, save, and share their favorite recipes with detailed nutritional information.",
      image: "/img.png",
      technologies: ["Angular", "Firebase", "Ionic", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project8"
    },
    {
      title: "Fitness Tracking Dashboard",
      description: "A comprehensive fitness tracking application with workout plans, progress tracking, and social features for motivation and community building.",
      image: "/img.png",
      technologies: ["React", "GraphQL", "Apollo", "Prisma"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project9"
    }
  ];

  const LOAD_INCRREMENT = 3;
  const INITIAL_COUNT = 3;
  const visibleProjects = projects.slice(0, visibleCount);
  const hashMoreProjects =  visibleCount < projects.length;
  const canShowLess = visibleCount > INITIAL_COUNT;

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" >
            {visibleProjects.map((project,index)=>(
              <motion.div
              key={`${project.title}-${index}`}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: isVisible ? (index < INITIAL_COUNT ? 0.2 + index * 0.1 : 0.1) : 0,
                ease: "easeOut",
                layout: { duration: 0.4 }
              }}
              whileHover={{ y: -10 }}
              >
                <Card className='group hover:shadow-xl transition-all duration-300 overflow-hidden h-full'>
                <div className="aspect-video overflow-hidden">
                  <motion.div
                    whileHover={{scale:1.1}}
                    transition={{duration: 0.3}}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={project.image}
                      alt={project.title}
                      className='w-fulll h-full object-cover'
                    />
                  </motion.div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                  <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + index * 0.1 + techIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  
                  <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                    </div>
                 </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 gap-4 flex-wrap">
          <AnimatePresence mode="wait">
            {hashMoreProjects && (
              <motion.div
                key="load-more"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Button
                  onClick={loadMoreProjects}
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Load More Projects</span>
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {canShowLess && (
              <motion.div
                key="show-less"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Button
                  onClick={showLessProjects}
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Show Less</span>
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronUp className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-secondary/10 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {visibleCount > INITIAL_COUNT && (
              <motion.div
                key="reset"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Button
                  onClick={resetToInitial}
                  variant="ghost"
                  size="lg"
                  className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Reset View</span>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <RotateCcw className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent/10 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects














