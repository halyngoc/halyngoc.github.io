import React from 'react'
import styled from 'styled-components'
import { Section } from './components/Section'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Other from './components/Other'
import Contacts from './components/Contacts'

const Main = styled.main`
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
    <Main>
      <NameSection>
        <div>Ha Ly</div>
        <span>Software Engineer</span>
      </NameSection>
      <Contacts />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Other />
    </Main>
  )
}
