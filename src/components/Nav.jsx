import React from 'react'
import styled from 'styled-components'
import { theme } from '../globalStyle'
import { useDevice } from '../util'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-scroll'

const HorizontalNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
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

function NavItem({ itemId, label, onClick, selectedItem }) {
  const isSelected = selectedItem === itemId
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
    <Link to={itemId} smooth duration={300}>
      <animated.button
        onClick={() => onClick(itemId)}
        style={style}
      >
        {label}
      </animated.button>
    </Link>
  )
}

function NavContent({ onItemClick, selectedItem }) {
  return (
    <ul>
      <li><NavItem onClick={onItemClick} selectedItem={selectedItem} itemId="home" label="Home" /></li>
      <li><NavItem onClick={onItemClick} selectedItem={selectedItem} itemId="my work" label="My work" /></li>
      <li><NavItem onClick={onItemClick} selectedItem={selectedItem} itemId="my projects" label="My projects" /></li>
    </ul>
  )
}

export default function Nav(props) {
  const [, isOneColumnLayout] = useDevice()

  if (!isOneColumnLayout) return <HorizontalNav><NavContent {...props} /></HorizontalNav>
  else return null
}
