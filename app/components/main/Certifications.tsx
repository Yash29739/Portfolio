"use client";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

const Certifications = () => {
  const [ref, isVisible] = useScrollReveal(0.1);
  const certifications = [
    {
      title: "Dark Patterns Buster Hackathon 2023",
      issuer: "Department of Consumer Affairs and IIT Banaras Hindu University",
      date: "2023",
      description: "Received a Certificate of Appreciation for willful efforts and interest in the intra-college round of the Dark Patterns Buster Hackathon (DPBH-2023)",
      credentialId: "DPBH-2023/R2/2240",
      viewUrl: "https://drive.google.com/file/d/1u21Je3BYTrhOpcnW_Z24GhIEgU7a6NLk/view?usp=drive_link",
      skills: ["Hackathon", "Consumer Affairs", "UI/UX", "Ethics in Technology"],
    },
    {
      title: "AI Text Summarizer app",
      issuer: "Postman Student Programs",
      date: "2023",
      description: "Completed a project-based learning module on building an AI Text Summarizer app.",
      credentialId: "Not available",
      viewUrl: "https://drive.google.com/file/d/1C6GSnf9KPX092uucyutAMzZQ1SUMKRf4/view?usp=sharing",
      skills: ["AI", "API Development", "Postman", "Node.js"],
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2023",
      description: "Completed a course covering the fundamentals of artificial intelligence, including machine learning and deep learning concepts.",
      credentialId: "Not available",
      viewUrl: "https://drive.google.com/drive/folders/1aWkQPB3j0EAj9lWsXXsnZpUNj3CElwuD?usp=sharing",
      skills: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    },
    {
      title: "Frontend Web Development with React.JS & JavaScript",
      issuer: "DevTown",
      date: "2023",
      description: "Successfully completed a 7-day bootcamp on frontend web development.",
      credentialId: "Not available",
      viewUrl: "https://drive.google.com/drive/folders/1L27tKkCpyQ2oJinEXwEE1Mv8FFaIFSbb?usp=sharing",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Frontend Development"],
    },
  ];

  return (
    <section ref={ref} id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4 ">
            <Award className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl">Certifications</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise and
            commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert,index)=>(
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-1-pri">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                      <CardDescription className="text-primary mb-2">{cert.issuer}</CardDescription>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="ml-4"
                    >
                      <Award className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardHeader>


                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {
                        cert.skills.map((skill,skillIndex)=>(
                          <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + index * 0.1 + skillIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        </motion.div>
                        ))
                      }
                    </div>


                    <div className="pt-2 border-t">
                    
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          ID: {cert.credentialId}
                        </span>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs h-8"
                            onClick={() => window.open(cert.viewUrl, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
