"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Cloud, Code, Workflow } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Tools",
      icon: <Database className="h-6 w-6 text-[#3A5199]" />,
      skills: ["SQL", "Power BI", "Tableau", "Alteryx", "Talend", "E/R Studio"],
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6 text-[#3A5199]" />,
      skills: ["Azure Data Factory", "Snowflake", "Microsoft Azure"],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-[#3A5199]" />,
      skills: ["Python", "JavaScript", "HTML/CSS", "ReactJS"],
    },
    {
      title: "Methodologies",
      icon: <Workflow className="h-6 w-6 text-[#3A5199]" />,
      skills: ["Agile", "Scrum", "SDLC", "Testing"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(58,81,153,0.1),transparent_70%)]"></div>

      <div className="container px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <div className="mx-auto h-1 w-20 bg-[#3A5199] rounded-full"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={item} className="perspective">
                <Card className="card-3d h-full border border-[#3A5199]/20 shadow-lg shadow-[#3A5199]/5 bg-secondary/30 backdrop-blur-sm hover:shadow-[#3A5199]/10">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-muted-foreground">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
