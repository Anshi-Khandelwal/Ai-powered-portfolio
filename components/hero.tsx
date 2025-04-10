"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(58,81,153,0.15),transparent_50%)]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3A5199]/10 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3A5199]/5 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left md:max-w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-gradient">Anshika Khandelwal</span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">Aspiring Data Analyst</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-[700px] text-lg text-muted-foreground md:text-xl h-[60px] flex items-center justify-center md:justify-start"
            >
              <TypeAnimation
                sequence={[
                  "Transforming data into insight through creativity and cloud solutions.",
                  1000, // Pause for 1 second
                  "Building powerful data pipelines and visualization dashboards.",
                  1000,
                  "Turning complex datasets into actionable business intelligence.",
                  1000,
                  "Crafting data-driven stories that drive decision making.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                cursor={true}
                className="text-center md:text-left inline-block"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-3 min-[400px]:flex-row"
            >
              <Button
                size="lg"
                className="bg-[#3A5199] hover:bg-[#3A5199]/90 px-8 rounded-full shadow-lg shadow-[#3A5199]/20 hover:shadow-[#3A5199]/40 transition-all duration-300 hover:translate-y-[-3px]"
                onClick={scrollToProjects}
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="perspective hidden md:block"
          >
            <div className="relative w-[280px] h-[350px] lg:w-[320px] lg:h-[400px] overflow-hidden gradient-border card-3d rounded-2xl">
              <Image src="/profile-photo.png" alt="Anshika Khandelwal" fill className="object-cover" priority />
            </div>
          </motion.div>

          {/* Mobile Profile Photo (smaller and centered) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="perspective md:hidden mt-4"
          >
            <div className="relative w-[200px] h-[250px] overflow-hidden gradient-border card-3d rounded-2xl mx-auto">
              <Image src="/profile-photo.png" alt="Anshika Khandelwal" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
