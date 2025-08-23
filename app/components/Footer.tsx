'use client'
import {motion} from 'framer-motion'
import React from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

const Footer = () => {
  const[ref,isVisible]=useScrollReveal(0.1);

  return (
    <motion.footer
      className='border-t py-8'
      ref={ref}
      initial={{opacity:0}}
      animate={isVisible?{opacity:1}:{opacity:0}}
      transition={{duration:0.8}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 B M Yashwanth. All rights reserved.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer