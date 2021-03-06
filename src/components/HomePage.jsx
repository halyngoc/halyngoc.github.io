import React from 'react'
import styled from 'styled-components'
import { theme } from '../globalStyle'
import { Icon } from '@iconify/react'
import githubAlt from '@iconify/icons-uil/github-alt'
import envelopeIcon from '@iconify/icons-uil/envelope'
import fileIcon from '@iconify/icons-uil/file'
import linkedinAlt from '@iconify/icons-uil/linkedin-alt'
import resume from '../resume.pdf'
import { useDevice } from '../util'
import { Page } from './Page'

const GreetingText = styled.div`
  margin: ${props => props.isOneColumnLayout ? '1rem 0 0 0' : '1rem 0 0 5%'};

  p, span {
    font-family: Gloria Hallelujah, cursive;
    font-size: ${props => props.isOneColumnLayout ? '2rem' : '3.5rem'};
    margin: 0;
    text-align: ${props => props.isOneColumnLayout ? 'center' : 'left'};
  }
`

const Name = styled.span`
color: ${theme.accent};
`

const Title = styled.span`
  color: ${theme.accent2};
`

const Contacts = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${props => props.isOneColumnLayout ? '2rem auto 0 auto' : '3rem 0 0 5%'};
  width: fit-content;

  li {
    margin-bottom: 1rem;
  }

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  a {
    color: ${theme.text};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
  }

  a:focus, a:hover {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.text}7F;
  }

  a:active {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.text};
  }
`

export default function HomePage() {
  const [, isOneColumnLayout] = useDevice()

  return (
    <Page id="home" isOneColumnLayout={isOneColumnLayout}>
      <GreetingText isOneColumnLayout={isOneColumnLayout}>
        <p>Hi, my name is <Name>Ha Ly</Name></p>
        <p>and I'm a <Title>web developer</Title>.</p>
      </GreetingText>
      <Contacts isOneColumnLayout={isOneColumnLayout}>
        <li>
          <a title="Github" href="https://github.com/halyngoc" target="_blank" rel="noopener noreferrer">
            <Icon icon={githubAlt} />
            github.com/halyngoc
          </a>
        </li>
        <li>
          <a title="LinkedIn" href="https://www.linkedin.com/in/halyngoc" target="_blank" rel="noopener noreferrer">
            <Icon icon={linkedinAlt} />
            linkedin.com/in/halyngoc
          </a>
        </li>
        <li>
          <a title="email" href="mailto:haly.inbox@gmail.com">
            <Icon icon={envelopeIcon} />
            haly.inbox@gmail.com
          </a>
        </li>
        <li>
          <a title="resume" href={resume} download="Ha_Ly_resume" target="_blank" rel="noopener noreferrer">
            <Icon icon={fileIcon} />
            resume (pdf, 64kb)
          </a>
        </li>
      </Contacts>
    </Page>
  )
}
