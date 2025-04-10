"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      institution: "Northeastern University, Boston, MA",
      degree: "Master of Science in Information Systems",
      period: "Expected Graduation: May 2025",
      courses:
        "Courses: Application Engineering and Development, Web Design and User Experience, Data Management and Database Design, Designing Advanced Data Architectures for Business Intelligence, Prompt Engineering for Generative AI",
    },
    {
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, India",
      degree: "Bachelor of Technology in Electronics & Communication",
      period: "Graduated: May 2021",
      courses:
        "Related Courses: Computer Programming - I, Computer Programming - II, Object Oriented Programming and Web Programming",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" className="py-10 md:py-14 relative overflow-hidden">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <div className="mx-auto h-1 w-20 bg-[#3A5199] rounded-full"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full max-w-4xl"
          >
            {educationData.map((education, index) => (
              <motion.div key={education.institution} variants={item} className="perspective">
                <Card
                  className={`card-3d h-full border border-[#3A5199]/20 shadow-lg shadow-[#3A5199]/5 bg-secondary/30 backdrop-blur-sm hover:shadow-[#3A5199]/10`}
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-[#3A5199]/10 p-2">
                      <GraduationCap className="h-6 w-6 text-[#3A5199]" />
                    </div>
                    <div className="text-left">
                      <CardTitle className="text-lg">{education.institution}</CardTitle>
                      <p className="text-sm text-muted-foreground">{education.degree}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-[#3A5199]" />
                      <p className="text-sm">{education.period}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{education.courses}</p>
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
