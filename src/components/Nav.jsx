import React from 'react'
import styled from 'styled-components'
import { theme } from '../globalStyle'
import { useDevice } from '../util'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { useHover } from 'react-use-gesture'

const HorizontalNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  li {
    display: inline;
    margin: 0 1rem;
  }

  button {
    background: none;
    border: 0;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.text};
  }

  button:focus {
    outline: none;
    box-shadow:
      0 0 0 3px ${theme.background},
      0 0 0 5px ${theme.text};
    ;
  }
`

function NavItem({ id, label, onClick, selectedItem }) {
  const isSelected = selectedItem === id
  const { x } = useSpring({ from: { x: 0 }, x: isSelected ? 1 : 0 })

  return (
    <animated.button
      onClick={() => onClick(id)}
      style={{
        transform: x
          .interpolate({
            range: [0, 0.2, 1],
            output: [1, 1.1, 1],
          })
          .interpolate(x => `scale(${x})`),
        boxShadow: x
          .interpolate({ output: [0, 1] })
          .interpolate(x => {
            if (x === 0) return 'none'
            else return `0 0 0 ${x}px ${theme.background}, 0 0 0 ${x + 3}px ${theme.text}`
          }),
      }}
    >
      {label}
    </animated.button>
  )
}

function NavContent({ onItemClick, defaultItem }) {
  const [selectedItem, setSelectedItem] = useState(defaultItem || 'home')

  const onNavItemClick = itemId => {
    setSelectedItem(itemId)
    onItemClick(itemId)
  }

  return (
    <ul>
      <li><NavItem onClick={onNavItemClick} selectedItem={selectedItem} id="home" label="Home" /></li>
      <li><NavItem onClick={onNavItemClick} selectedItem={selectedItem} id="my work" label="My work" /></li>
      <li><NavItem onClick={onNavItemClick} selectedItem={selectedItem} id="my projects" label="My projects" /></li>
    </ul>
  )
}

export default function Nav(props) {
  const [, isOneColumnLayout] = useDevice()

  if (!isOneColumnLayout) return <HorizontalNav><NavContent {...props} /></HorizontalNav>
  else return null
}
