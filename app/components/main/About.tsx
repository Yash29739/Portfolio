'use client'
import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { TypingAnimation } from '../TypeAnimation';

const About = () => {
  const [ref,isVisible]=useScrollReveal(0.1);
  const typingPhrases = [
    "Full Stack Developer 💻",
    "UI/UX Designer 🎨",
    "React Enthusiast ⚛️",
    "Cloud Architecture Expert ☁️",
    "Problem Solver 🔧",
    "Coffee Lover ☕",
    "Open Source Contributor 🌟",
    "Lifelong Learner 📚",
  ];


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // the below code is to open the drive link in a new tab
    
    // const resumeUrl = 'https://drive.google.com/file/d/1Zh1XdbR-SR90-zcL7pxmmQWzgTV4ZdFQ/view?usp=drive_link'; 
    // window.open(resumeUrl,'_blank');
    
    // to Download the resume directly
    const resumeUrl = '/B_M_Yashwanth_resume.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'B_M_Yashwanth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section id="about" className='py-20 md:py-32' ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isVisible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4" >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight "
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8,delay: 0.2, ease: "easeOut" }}
            >
              Hi, I am <span className='text-primary bg-gradient-to-r from-primary font-semibold to-primary/70 bg-clip-text'>B M Yashwanth</span>
            </motion.h1>
            <motion.h2 
                  className="text-xl md:text-2xl text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  Full Stack Developer & UI/UX Designer
            </motion.h2>
            </div>
            <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeOut",
                }}
              >
                I&apos;m a dedicated frontend web developer
                specializing in Next.js, React.js, Tailwind CSS,
                HTML, CSS, and JavaScript. I build dynamic,
                user-friendly web applicatio
              </motion.p>

              <motion.div
                className='flex flex-col sm:flex-row gap-4'
                animate={ isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                  <Button onClick={() => scrollToSection("projects")} size="lg" >
                    View My Work
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                  <Button onClick={() => downloadResume} size="lg" variant="outline">
                    Download Resume
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                  <Button onClick={() => scrollToSection("contact")} size="lg" variant="ghost">
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-border"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                width={380}
                height={380}
                  src="/photo.png"
                  alt="John Doe"
                  className="w-full object-cover"
                />
              </motion.div>

              {/* Typing Animation Box */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card border rounded-lg px-4 py-2 shadow-lg min-w-[200px] text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: "easeOut",
                }}
              >
                <TypingAnimation
                  phrases={typingPhrases}
                  className="text-sm"
                />
              </motion.div>

              {/* Floating decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About