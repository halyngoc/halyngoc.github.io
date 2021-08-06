import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import githubAlt from '@iconify/icons-uil/github-alt'
import mailIcon from '@iconify/icons-uil/envelope-alt'
import linkedinAlt from '@iconify/icons-uil/linkedin-alt'
import Link from './Link'
import { useDevice } from '../util'

const List = styled.aside`
  position: absolute;
  top: calc(${({ theme }) => theme.spacing.appTopMargin} + 1rem);

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

  a:focus,
  a:hover {
    outline: none;
    box-shadow: 0 0 0 0 ${({ theme }) => theme.palette.text}7F;
  }

  a:active {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.text};
  }
`

const ListRight = styled(List)`
  right: ${({ theme }) => theme.spacing.columnWidth};
`

const ListLeft = styled(List)`
  left: calc(${({ theme }) => theme.spacing.columnWidth} - 3.5rem);
`

export default function Contacts() {
  const device = useDevice()
  const ContactList =
    device === 'mobile' || device === 'tablet' ? ListRight : ListLeft

  return (
    <ContactList>
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
