import React from 'react'
import { Section, SectionItem } from './Section'
import { educations } from '../data'

export default function Education() {
  return (
    <Section>
      <h1>Education</h1>
      {educations.map(education => (
        <SectionItem key={education.title + education.school}>
          <h2>{education.title}</h2>
          <p>{education.school}</p>
          <p>{education.place}</p>
          <p>{education.time}</p>
        </SectionItem>
      ))}
    </Section>
  )
}
