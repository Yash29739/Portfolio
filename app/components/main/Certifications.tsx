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
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      description:
        "Validates technical expertise in designing distributed systems on AWS",
      credentialId: "AWS-SA-2024-001",
      verifyUrl: "https://aws.amazon.com/verification",
      skills: ["AWS", "Cloud Architecture", "Security", "Scalability"],
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta via Coursera",
      date: "2023",
      description:
        "Comprehensive program covering React, JavaScript, and modern web development",
      credentialId: "META-FE-2023-045",
      verifyUrl: "https://coursera.org/verify",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google via Coursera",
      date: "2023",
      description:
        "User experience design fundamentals, prototyping, and usability testing",
      credentialId: "GOOGLE-UX-2023-128",
      verifyUrl: "https://coursera.org/verify",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "2022",
      description:
        "Database design, aggregation framework, and performance optimization",
      credentialId: "MONGO-DEV-2022-892",
      verifyUrl: "https://university.mongodb.com/verify",
      skills: ["MongoDB", "NoSQL", "Database Design", "Performance"],
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-1-primary">
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
                        <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span> 
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs h-8"
                            onClick={() => window.open(cert.verifyUrl, '_blank')}
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
