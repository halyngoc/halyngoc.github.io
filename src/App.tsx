import React from 'react'
import styled from 'styled-components'
import { Section } from './components/Section'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import OtherSection from './components/OtherSection'
import Contacts from './components/Contacts'

const AppContainer = styled.main`
  margin: ${({ theme }) => theme.spacing.appTopMargin} 0;
`

const NameSection = styled(Section)`
  div {
    font-family: 'Corben', cursive;
    font-size: 3.5rem;
    margin-left: 0;
  }

  span {
    font-size: 1.2rem;
  }
`

export default function App() {
  return (
    <AppContainer>
      <NameSection>
        <div>Ha Ly</div>
        <span>Software Engineer</span>
      </NameSection>
      <Contacts />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <OtherSection />
    </AppContainer>
  )
}
