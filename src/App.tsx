import React from 'react'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'

export default function App() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  )
}
