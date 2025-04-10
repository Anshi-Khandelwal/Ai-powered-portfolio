"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Anshi-Khandelwal",
      label: "GitHub",
      emoji: "👩‍💻",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/anshika-khandelwal",
      label: "LinkedIn",
      emoji: "🔗",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:khandelwal.ans@northeastern.edu",
      label: "Email",
    },
  ]

  return (
    <footer className="border-t border-[#3A5199]/10 py-6 md:py-8">
      <div className="container px-6 md:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm leading-loose text-muted-foreground md:text-left"
        >
          © 2025 Anshika Khandelwal. All rights reserved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#3A5199] transition-colors group"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
            >
              <span className="flex items-center">
                {link.icon}
                {link.emoji && (
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">{link.emoji}</span>
                )}
              </span>
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
