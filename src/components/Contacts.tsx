import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@iconify/react'
import githubAlt from '@iconify/icons-uil/github-alt'
import mailIcon from '@iconify/icons-uil/envelope-alt'
import linkedinAlt from '@iconify/icons-uil/linkedin-alt'
import Link from './Link'
import { useDevice } from '../util'

const ContactList = styled.aside<{ position: 'right' | 'left' }>`
  position: absolute;
  top: calc(${({ theme }) => theme.spacing.appTopMargin} + 1rem);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  svg {
    height: 2.5rem;
  }

  li {
    margin: 0 1rem 0.5rem 0;
    font-size: 2rem;
  }

  a {
    color: ${({ theme }) => theme.palette.text};
    text-decoration: none;
    border-radius: 20px;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
  }

  a:focus,
  a:focus-visible,
  a:hover,
  a:active {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.text};
  }

  a:active {
    color: ${({ theme }) => theme.palette.background};
    background-color: ${({ theme }) => theme.palette.text};
  }

  ${({ position }) =>
    position === 'right'
      ? css`
          right: ${({ theme }) => theme.spacing.columnWidth};
        `
      : css`
          left: calc(${({ theme }) => theme.spacing.columnWidth} - 3.5rem);
        `}
`

export default function Contacts() {
  const device = useDevice()
  return (
    <ContactList
      position={device === 'mobile' || device === 'tablet' ? 'right' : 'left'}
    >
      <ul>
        <li>
          <Link title="Github" href="https://github.com/halyngoc">
            <Icon icon={githubAlt} />
          </Link>
        </li>
        <li>
          <Link title="LinkedIn" href="https://www.linkedin.com/in/halyngoc">
            <Icon icon={linkedinAlt} />
          </Link>
        </li>
        <li>
          <Link title="email" href="mailto:haly.inbox@gmail.com">
            <Icon icon={mailIcon} />
          </Link>
        </li>
      </ul>
    </ContactList>
  )
}
