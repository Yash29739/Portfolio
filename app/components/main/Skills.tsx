'use client'
import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion';
import { FaAws, FaCss3Alt, FaDocker, FaFigma, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiGraphql, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si';
import { FaPython } from 'react-icons/fa6';

const Skills = () => {
  
  const [ref,isVisible]=useScrollReveal(0.1);
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
  ];
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id='skills' className='py-20 bg-muted/30 overflow-hidden' ref={ref}>
      <div className="container mx-auto px-16 sm:px-6 lg:px-8">
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className='text-3xl md:text-4xl mb-4'>Skills & Technologies</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>Here are the technologies and tools I work with to bring ideas to life.</p>
        </motion.div>

        <motion.div
          className='relative'
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Top ribbon */}
          <div className="flex overflow-hidden py-4 mb-8">
            <motion.div
              className='flex space-x-8 whitespace-nowrap'
              animate={isVisible ? {x: [0, -100 * skills.length]} : { x:0 }}
              transition={{ x:{repeat:Infinity, repeatType:"loop", duration: 30, ease:"linear"} }}
            >
              {duplicatedSkills.map((skill,index)=>(
                <motion.div
                  key={`${skill.name}-${index}`}
                  className='flex items-center space-x-3 bg-card border rounded-full px-6 py-3 shadow-sm'
                  whileHover={{scale:1.1, y: -5}}
                  transition={{type:"spring", stiffness:300}}
                >
                  <span className='text-2xl'>{skill.icon}</span>
                  <span className='text-sm'>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom ribbon (reverse direction)  */}
          <div className="flex overflow-hidden py-4">
            <motion.div
              className='flex space-x-8 whitespace-nowrap'
              animate={isVisible ? {x: [-100 * skills.length,0]} : { x:0 }}
              transition={{ x:{repeat:Infinity, repeatType:"loop", duration: 25, ease:"linear"} }}
            >
              {duplicatedSkills.reverse().map((skill,index)=>(
                <motion.div
                  key={`${skill.name}-reverse-${index}`}
                  className='flex items-center space-x-3 bg-card border rounded-full px-6 py-3 shadow-sm'
                  whileHover={{scale:1.1, y: -5}}
                  transition={{type:"spring", stiffness:300}}
                >
                  <span className='text-2xl'>{skill.icon}</span>
                  <span className='text-sm'>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>    
        </motion.div>

        {/* Categories section */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'
          initial={{opacity: 0, y: 50}}
          animate={isVisible ? {opacity: 1, y: 0 }:{ opacity: 0, y: 50 }}
          transition={{duration: 0.8, delay:0.6, ease: "easeOut"}}
        >
          {[
            { title: "Frontend", desc: "Building beautiful user interfaces", icon: "🎨" },
            { title: "Backend", desc: "Creating robust server solutions", icon: "⚙️" },
            { title: "Android", desc: "Developing and maintaining applications", icon: "🚀" }
          ].map((category,index)=>(
            <motion.div
              key={category.title}
              className="text-center p-6 rounded-lg bg-card border"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm">{category.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills