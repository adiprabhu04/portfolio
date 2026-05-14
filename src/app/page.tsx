'use client'
import ScrollBar from '@/components/ui/ScrollBar'
import Topbar from '@/components/layout/Topbar'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Tools from '@/components/sections/Tools'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Page() {
  return (
    <>
      <ScrollBar />
      <Topbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
