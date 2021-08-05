import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import githubAlt from '@iconify/icons-uil/github-alt'
import mailIcon from '@iconify/icons-uil/envelope-alt'
import linkedinAlt from '@iconify/icons-uil/linkedin-alt'

const ContactList = styled.aside`
  position: absolute;
  top: calc(${({ theme }) => theme.spacing.columnWidth} + 1rem);
  left: calc(${({ theme }) => theme.spacing.columnWidth} - 3.5rem);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2rem;
  }

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

export default function Contacts() {
  return (
    <ContactList>
      <ul>
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
            <Icon icon={mailIcon} />
          </a>
        </li>
      </ul>
    </ContactList>
  )
}
