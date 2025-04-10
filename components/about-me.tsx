"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(58,81,153,0.2),transparent_70%)]"></div>

      <div className="container px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <div className="mx-auto h-1 w-20 bg-[#3A5199] rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image */}
              <motion.div
                className="w-full md:w-1/3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] mx-auto rounded-full overflow-hidden shadow-xl">
                  <Image
                    src="/anshii.png"
                    alt="Anshika Khandelwal"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </motion.div>

              {/* Bio Content */}
              <motion.div
                className="w-full md:w-2/3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="card-3d border border-[#3A5199]/20 shadow-xl shadow-[#3A5199]/5 bg-secondary/30 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-left">
                    <p className="text-lg leading-relaxed">
                      I'm a Master's student in Information Systems at Northeastern University with 2 years of
                      experience at Tata Consultancy Services. I'm passionate about data analytics, ETL pipelines, and
                      cloud solutions, leveraging SQL, Python, and BI tools to automate workflows and optimize
                      reporting. My goal is to transform complex data into actionable insights that drive business
                      decisions and improve operational efficiency.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
