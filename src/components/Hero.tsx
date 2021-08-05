import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import githubAlt from '@iconify/icons-uil/github-alt'
import mailboxIcon from '@iconify/icons-uil/mailbox'
import linkedinAlt from '@iconify/icons-uil/linkedin-alt'
import { Section } from './Section'


const Name = styled.div`
  margin-top: ${({ theme }) => theme.spacing.columnWidth};

  > div {
    font-family: 'Corben', cursive;
    font-size: 3.5rem;
    margin-left: 0;
  }

  > span {
    font-size: 1.2rem;
  }
`

const Contacts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;

  svg {
    font-size: 2rem;
  }

  a {
    color: ${({ theme }) => theme.palette.text};
    text-decoration: none;
    margin-right: 1rem;
    border-radius: 20px;
  }

  a:focus, a:hover {
    outline: none;
    box-shadow: 0 0 0 0 ${({ theme }) => theme.palette.text}7F;
  }

  a:active {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.text};
  }
`

export default function Hero() {
  return (
    <Section>
      <Name>
        <div>Ha Ly</div>
        <span>Software Engineer</span>
      </Name>
      <Contacts >
        <li>
          <a title="Github" href="https://github.com/halyngoc" target="_blank" rel="noopener noreferrer">
            <Icon icon={githubAlt} />
          </a>
        </li>
        <li>
          <a title="LinkedIn" href="https://www.linkedin.com/in/halyngoc" target="_blank" rel="noopener noreferrer">
            <Icon icon={linkedinAlt} />
          </a>
        </li>
        <li>
          <a title="email" href="mailto:haly.inbox@gmail.com">
            <Icon icon={mailboxIcon} />
          </a>
        </li>
      </Contacts>
    </Section>
  )
}
