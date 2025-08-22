'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/Button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
    
      const sections = ["about", "skills", "projects", "certifications", "contact"];

      const downloadResume = () => {
        // In a real application, this would link to your actual resume file
        const resumeUrl = '/resume.pdf'; // You would replace this with your actual resume URL
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'John_Doe_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


    return (
        <motion.header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg' 
          : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 items-center justify-between">
                <motion.div className="flex items-center space-x-4" 
                    whileHover={{ scale: 1.05 }}
                >
                    <h1 className='text-lg'>B M Yashwanth</h1>
                </motion.div>
                <nav className='hidden md:flex items-center space-x-6'>
                    {
                        sections.map((section,index)=>(
                            <motion.button 
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="text-sm transition-colors hover:text-foreground/80 text-foreground/60 capitalize"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {section}
                            </motion.button>
                        ))}
                </nav>
                <div className="flex">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={downloadResume}
                        className='hidden sm:flex items-center'
                    >
                        Resume
                    </Button>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                    <Button onClick={() => scrollToSection('contact')} size="sm">
                        Get In Touch
                    </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.header>
    )
}

export default Header