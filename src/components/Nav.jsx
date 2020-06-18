import React from 'react'
import styled from 'styled-components'
import { theme } from '../globalStyle'
import { useDevice } from '../util'
import { useSpring, animated } from 'react-spring'

const HorizontalNav = styled.nav`
  position: fixed;
  background-color: ${theme.background};
  z-index: 1;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

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
    background-color: ${theme.background};
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

  const style = isSelected ? {
    transform: x
      .interpolate({
        range: [0, 0.2, 1],
        output: [1, 1.1, 1],
      })
      .interpolate(x => `scale(${x})`),
  } : {}

  return (
    <animated.button
      onClick={() => onClick(id)}
      style={style}
    >
      {label}
    </animated.button>
  )
}

function NavContent({ onItemClick, selectedItem }) {
  return (
    <ul>
      <li><NavItem onClick={onItemClick} selectedItem={selectedItem} id="home" label="Home" /></li>
      <li><NavItem onClick={onItemClick} selectedItem={selectedItem} id="my work" label="My work" /></li>
      <li><NavItem onClick={onItemClick} selectedItem={selectedItem} id="my projects" label="My projects" /></li>
    </ul>
  )
}

export default function Nav(props) {
  const [, isOneColumnLayout] = useDevice()

  if (!isOneColumnLayout) return <HorizontalNav><NavContent {...props} /></HorizontalNav>
  else return null
}
