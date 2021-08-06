import React from 'react'
import { Section, SectionItem } from './Section'
import { projects } from '../data'
import linkIcon from '@iconify/icons-uil/external-link-alt'
import InlineIcon from '@iconify/react'
import styled from 'styled-components'
import Link from './Link'

const Project = styled(SectionItem)`
  h2 {
    display: inline;
    margin-right: 0.4rem;
    margin-top: 0.5rem;
  }

  svg {
    transform: translateY(0.1rem) !important;
  }
`

export default function ProjectsSection() {
  return (
    <Section>
      <h1>Projects</h1>
      {projects.map(project => (
        <Project key={project.title}>
          {project.url ? (
            <Link title="GitHub" href={project.url}>
              <h2>{project.title}</h2>
              <InlineIcon icon={linkIcon} />
            </Link>
          ) : (
            <h2>{project.title}</h2>
          )}
          {project.affiliation && <p>{project.affiliation}</p>}
          <p>{project.time}</p>
          <p>{project.description}</p>
        </Project>
      ))}
    </Section>
  )
}
