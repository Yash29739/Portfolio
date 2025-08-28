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
      title: "AutiSecure",
      description:
        "AutiSecure is an autism spectrum disorder (ASD) screening and awareness app. It begins with a survey-based prediction and enhances accuracy using an AI-powered facial recognition model. The app allows users to connect with medical professionals for further guidance, while also raising awareness and promoting inclusivity through educational content.",
      image: "/Autisecure.png",
      technologies: ["Flutter", "Python", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/AutiSecure",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "An AI-powered resume analysis tool that provides instant, data-driven feedback on uploaded resumes. Built with Next.js, Puter.js, and TailwindCSS, it allows users to log in, upload resumes, and receive insights on strengths, weaknesses, and suggested improvements.",
      image: "/AI_Resume.png",
      technologies: ["Next.js", "Puter.js", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/AI-resume-analyzer",
    },
    {
      title: "Virtual Keyboard",
      description:
        "An interactive virtual piano keyboard playable with hand gestures via a webcam. The project uses MediaPipe for hand tracking, OpenCV for real-time visualization, and Pygame for generating audio playback, making it a fun blend of AI, vision, and music.",
      image: "/Virtual_keyboard.png",
      technologies: ["MediaPipe", "OpenCV", "Pygame"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/Virtual_keyboard",
    },
    {
      title: "Digital Detox",
      description:
        "A digital well-being platform that helps users monitor, track, and reduce screen time. It includes features such as surveys, suggestions powered by AI/ML, task management with to-do lists, screen time trackers, visual analytics, and a resource section with motivational content for healthier device usage.",
      image: "/Digital_Detox.png",
      technologies: ["Next.js", "TailwindCSS", "Python"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/Digital-Detox",
    },
    {
      title: "Search Automator",
      description:
        "A Python-based automation tool that uses Selenium to perform repetitive searches automatically. Initially designed for Microsoft Rewards, it helps in streamlining tasks that require multiple search queries without manual effort.",
      image: "/Search_Automator.png",
      technologies: ["Selenium", "Python"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/Search_automator_for_Microsoft_Rewards",
    },
    {
      title: "SafeHood",
      description:
        "A neighborhood safety and community communication app that provides real-time alerts, group chats, emergency SOS features, service directories, and instant notifications. SafeHood strengthens local connectivity while ensuring improved safety within communities.",
      image: "/SafeHood.png",
      technologies: ["Flutter", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/SafeHood",
    },
    {
      title: "Leave Application App",
      description:
        "A mobile app for managing leave applications within organizations. It allows employees to submit leave requests digitally, track approval status in real time, and maintain a transparent communication channel between staff and administrators.",
      image: "/Leave_Application.png",
      technologies: ["Flutter", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/leave-application-app",
    },
    {
      title: "DarkShield",
      description:
        "DarkShield is a fake price detector designed to identify deceptive pricing strategies (dark patterns) on e-commerce websites. It helps users detect inflated discounts, misleading offers, and price manipulations, ensuring more transparent and fair online shopping experiences.",
      image: "/Dark_Shield.png",
      technologies: ["Python", "React.js", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Yash29739/DarkSheild",
    },
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
                      width={300}
                      height={120}
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
                  {/* <motion.div
                    className="absolute inset-0 bg-primary/10 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  /> */}
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
                  
                  {/* Animated background effect
                  <motion.div
                    className="absolute inset-0 bg-secondary/10 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  /> */}
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
                  {/* <motion.div
                    className="absolute inset-0 bg-accent/10 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  /> */}
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














