"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Collision Analytics: Real-Time Accident Insights",
      description:
        "Processed 5M+ motor collision records using Python & Alteryx, ensuring high data accuracy for live and historical analytics across multiple cities.",
      image: "/images/collision-analytics.png",
      techStack: ["Python", "Alteryx", "Azure Data Factory", "Talend", "Snowflake", "Power BI"],
      details: [
        "Designed and optimized a star schema with 10+ tables in ER/Studio",
        "Enhanced Snowflake performance using Parquet, reducing storage by 60%",
        "Built 5+ Power BI dashboards for real-time accident trend analysis",
      ],
    },
    {
      title: "Food Inspections: A Data Analyst's Journey",
      description:
        "Directed a team in analyzing food inspections in Chicago and Dallas, processing over 1 million records with differing schemas using Alteryx, Talend, and Snowflake.",
      image: "/images/food-inspection.png",
      techStack: ["Alteryx", "Talend", "Snowflake", "Power BI", "Tableau", "E/R Studio"],
      details: [
        "Engineered a dimensional data model with E/R Studio",
        "Integrated 500,000+ records into fact and dimension tables",
        "Developed dashboards in Power BI and Tableau, enhancing reporting by 30%",
      ],
    },
    {
      title: "Integrated Investment Management Database System",
      description:
        "Supervised the development of an investment database system, improving trading processes & boosting decision-making efficiency by 30%.",
      image: "/images/investment-dashboard.png",
      techStack: ["SQL", "GUI Development", "Power BI", "Database Design"],
      details: [
        "Constructed a GUI connected to a SQL database for seamless CRUD operations",
        "Incorporated Power BI dashboards, enhancing data visualization by 20%",
        "Improved trading processes & boosted decision-making efficiency by 30%",
      ],
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
    <section id="projects" className="py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(58,81,153,0.2),transparent_70%)]"></div>

      <div className="container px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <div className="mx-auto h-1 w-20 bg-[#3A5199] rounded-full"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={item} className="perspective">
                <Card
                  className="card-3d h-full overflow-hidden border border-[#3A5199]/20 shadow-lg shadow-[#3A5199]/5 bg-secondary/30 backdrop-blur-sm hover:shadow-[#3A5199]/10"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "all 0.5s ease",
                  }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{project.description}</CardDescription>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#3A5199]/10 text-[#3A5199] hover:bg-[#3A5199]/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
