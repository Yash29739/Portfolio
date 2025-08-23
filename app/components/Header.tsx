'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/Button';
import { Award, Code, Download, Mail, Menu, User } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export function Header  ()  {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
    const navigationItems = [
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'projects', label: 'Projects', icon: Code },
        { id: 'certifications', label: 'Certifications', icon: Award },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    // for runnign the scrool smoothly
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    //   for the direct navigation purpose
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setisMobileMenuOpen(false);
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
                    <motion.button
                        onClick={() => scrollToSection('about')}
                        className="text-lg hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        B M Yashwanth
                    </motion.button>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navigationItems.map((item, index) => (
                        <motion.button 
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm transition-colors hover:text-foreground/80 text-foreground/60 capitalize relative group"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.label}
                            <motion.span
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                            whileHover={{ width: "100%" }}
                            />
                        </motion.button>
                    ))}
                </nav>

                <div className="flex items-center space-x-2">
                    <motion.div
                        initial={{opacity:0,x:20}}
                        animate={{opacity:1, x:0}}
                        transition={{ duration: 0.6, delay: 0.5}}
                    >
                        <ThemeSelector/>
                    </motion.div>

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
                        <Download className="w-4 h-4 mr-1"/>
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

                    {/*Mobile Menu Button*/}
                    <Sheet 
                        open={isMobileMenuOpen}
                        onOpenChange={setisMobileMenuOpen}
                    >
                        <SheetTrigger asChild>
                            <motion.div className='lg:hidden' whileHover={{scale:1.05}} whileTap={{scale:0.95}}>
                                <Button variant='outline' size='sm'>
                                    <Menu className='w-4 h-4'/>
                                </Button>
                            </motion.div>
                        </SheetTrigger>

                        <SheetContent side='right' className='w-80'>
                            <SheetHeader>
                                <SheetHeader>
                                    <SheetTitle className='text-left text-2xl font-bold'>
                                        Navigation Menu
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="mt-8 flex flex-col space-x-4">
                                    {navigationItems.map((item,index)=>{
                                        const Icon = item.icon;
                                        return (
                                          <motion.button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group w-full"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                              duration: 0.3,
                                              delay: index * 0.1,
                                            }}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                          >
                                            <motion.div
                                              className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors"
                                              whileHover={{ rotate: 5 }}
                                            >
                                              <Icon className="w-4 h-4 text-primary" />
                                            </motion.div>
                                            <span className="font-medium">
                                              {item.label}
                                            </span>
                                          </motion.button>
                                        );
                                    })}

                                    <div className="pt-6 border-t space-y-3">
                                        <motion.div 
                                            initial={{opacity: 1, y: 20}}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.6 }}
                                        >
                                            <Button onClick={downloadResume}
                                                variant="outline"
                                                className='w-full justify-start'
                                            >
                                                <Download className='w-4 h-4 mr-2'/>
                                                Download resume
                                            </Button>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.7 }}
                                        >
                                        <Button
                                            onClick={() =>
                                            scrollToSection("contact")
                                            }
                                            className="w-full justify-start"
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            Get In Touch
                                        </Button>
                                        </motion.div>
                                    </div>


                                </div>

                            </SheetHeader>
                        </SheetContent>
                        
                    </Sheet>
                </div>
            </div>
        </div>
    </motion.header>
    )
}
