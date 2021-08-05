import React from 'react'
import styled from 'styled-components'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import OtherSection from './components/OtherSection'
import Contacts from './components/Contacts'

const NameSection = styled.section`
  padding: 0 0 2rem 0;
  margin: ${({ theme }) => theme.spacing.sectionMargin};
  margin-top: ${({ theme }) => theme.spacing.columnWidth};

  > div {
    font-family: 'Corben', cursive;
    font-size: 3.5rem;
    margin-left: 0;
  }

  > span {
    font-size: 1.2rem;
  }
`

export default function App() {
  return (
    <main>
      <NameSection>
        <div>Ha Ly</div>
        <span>Software Engineer</span>
      </NameSection>
      <Contacts />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <OtherSection />
    </main>
  )
}
