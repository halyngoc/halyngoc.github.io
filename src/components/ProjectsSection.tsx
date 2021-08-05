import React, { Fragment } from 'react'
import { Section } from './Section'
import { projects } from '../data'
import githubAlt from '@iconify/icons-uil/github-alt'
import figmaIcon from '@iconify/icons-ci/figma'
import Icon from '@iconify/react'

export default function ProjectsSection() {
  return (
    <Section>
      <h1>Projects</h1>
      {projects.map(project =>
        <Fragment key={project.title}>
          <h2>{project.title}</h2>
          {project.affiliation && <p>{project.affiliation}</p>}
          <p>{project.time}</p>
          <p>{project.description}</p>
          {project.url &&
            <a
              title="GitHub"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer">
              <Icon icon={githubAlt} />
            </a>}
          {project.figmaUrl &&
            <a
              title="Figma"
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer">
              <Icon icon={figmaIcon} />
            </a>}
        </Fragment >
      )}
    </Section>
  )
}
