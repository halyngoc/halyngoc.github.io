import React, { Fragment } from 'react'
import { Section } from './Section'
import { educations } from '../data'

export default function EducationSection() {
  return (
    <Section>
      <h1>Education</h1>
      {educations.map(education =>
        <Fragment key={education.title + education.school}>
          <h2>{education.title}</h2>
          <p>{education.school}</p>
          <p>{education.place}</p>
          <p>{education.time}</p>
        </Fragment>
      )}
    </Section>
  )
}
