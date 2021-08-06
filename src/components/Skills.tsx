import React from 'react'
import { Section, SectionItem } from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section>
      <h1>Skills</h1>
      <SectionItem>
        <h2>Languages</h2>
        <p>{skills.languages.join(', ')}</p>
      </SectionItem>
      <SectionItem>
        <h2>Other</h2>
        <p>{skills.other.join(', ')}</p>
      </SectionItem>
    </Section>
  )
}
