"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

export default function Hobbies() {
  const hobbies = [
    {
      title: "Love Traveling",
      emoji: "✈️",
      image: "/hobby-traveling.png",
      alt: "Travel destination",
    },
    {
      title: "Love Eating",
      emoji: "🍽️",
      image: "/hobby-eating.png",
      alt: "Delicious food",
    },
    {
      title: "Love Dancing",
      emoji: "💃",
      image: "/hobby-dancing.png",
      alt: "Dancing",
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
    <section id="hobbies" className="py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(58,81,153,0.15),transparent_70%)]"></div>

      <div className="container px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Hobbies</h2>
            <div className="mx-auto h-1 w-20 bg-[#3A5199] rounded-full"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            {hobbies.map((hobby) => (
              <motion.div key={hobby.title} variants={item} whileHover={{ scale: 1.05 }} className="perspective">
                <Card className="overflow-hidden border border-[#3A5199]/20 shadow-lg hover:shadow-xl shadow-[#3A5199]/5 hover:shadow-[#3A5199]/20 bg-secondary/30 backdrop-blur-sm transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={hobby.image || "/placeholder.svg"}
                      alt={hobby.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                      <span className="text-2xl">{hobby.emoji}</span>
                      {hobby.title}
                    </h3>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-center">
                    <div className="w-1/3 h-1 bg-[#3A5199]/40 rounded-full"></div>
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
