import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Hobbies from "@/components/hobbies"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  )
}
