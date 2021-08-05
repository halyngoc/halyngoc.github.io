import React from 'react'
import { Section } from './Section'
import { other } from '../data'

export default function OtherSection() {
  return (
    <Section>
      <h1>Other</h1>
      <h2>{other.title}</h2>
      <p>{other.description}{other.time && ` (${other.time})`}</p>
    </Section>
  )
}
