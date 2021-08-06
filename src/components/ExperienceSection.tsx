import React from 'react'
import styled, { css } from 'styled-components'
import { Section } from './Section'
import { experience } from '../data'
import { useDevice } from '../util'

const ExperienceList = styled.ul<{ withTimeline: boolean }>`
  list-style: none;
  padding: 0;
  margin-left: 1rem;
  width: fit-content;
  max-width: calc(100% - 3rem);
  position: relative;
  left: -3rem;

  p {
    margin: 0.75rem 0;
  }

  > li {
    position: relative;
    margin: 0 0 2rem 2rem;
  }

  ${({ withTimeline }) =>
    withTimeline &&
    css`
      ::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: -2.5px;
        width: 5px;
        height: 100%;
        background-color: ${({ theme }) => theme.palette.text};
      }

      > li::before {
        content: ' ';
        position: absolute;
        top: -0.2rem;
        left: -3rem;
        width: 2rem;
        height: 2rem;
        border: 5px solid ${({ theme }) => theme.palette.text};
        background-color: ${({ theme }) => theme.palette.background};
        border-radius: 1rem;
      }
    `}
`

export default function ExperienceSection() {
  const device = useDevice()
  return (
    <Section>
      <h1>Experience</h1>
      <ExperienceList withTimeline={device !== 'mobile'}>
        {experience.map(data => (
          <li key={data.title + data.place}>
            <h2>{data.title}</h2>
            <p>{data.place}</p>
            <p>{data.time}</p>
            {data.description && <p>{data.description}</p>}
            <p>
              <i>{data.tools.join(', ')}</i>
            </p>
          </li>
        ))}
      </ExperienceList>
    </Section>
  )
}
