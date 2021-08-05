import React from 'react'
import { Section } from './Section'
import { skills } from '../data'

export default function SkillsSection() {
  return (
    <Section>
      <h1>Skills</h1>
      <h2>Languages</h2>
      <p>{skills.languages.join(', ')}</p>
      <h2>Other</h2>
      <p>{skills.other.join(', ')}</p>
    </Section>
  )
}
