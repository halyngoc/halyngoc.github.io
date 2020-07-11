import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../globalStyle'
import { useDevice } from '../util'
import { useSpring, useTransition, animated } from 'react-spring'
import { Link } from 'react-scroll'
import { Icon } from '@iconify/react'
import barsIcon from '@iconify/icons-uil/bars'
import multiplyIcon from '@iconify/icons-uil/multiply'
import IconButton from './IconButton'

const HorizontalNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.background};
  z-index: 1;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  ${(props) => !(props.isScrollAtTop) && css`
    box-shadow: 0 5px 10px ${theme.text}7f;
  `}

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

  button:focus, button:hover {
    outline: none;
    box-shadow:
      0 0 0 3px ${theme.background},
      0 0 0 5px ${theme.text}7F;
    ;
  }
`

const ExpandedVerticalNav = styled(animated.nav)`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${theme.text};
  color: ${theme.text2};
  z-index: 2;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 -5px 10px ${theme.text}7f;
  padding: 0.5rem 0;

  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  li {
    display: block;
    margin: 1rem 0;
  }

  button {
    background-color: ${theme.text};
    border: 0;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.text2};
  }

  svg {
    font-size: 2rem;
  }

  button:focus, button:hover {
    outline: none;
    box-shadow:
      0 0 0 3px ${theme.text},
      0 0 0 5px ${theme.text2}7f;
    ;
  }

  > button:active,
  > div > button:active {
    outline: none;
    box-shadow:
      0 0 0 3px ${theme.text},
      0 0 0 5px ${theme.text2};
    ;
  }
`

const CollapsedVerticalNav = styled(ExpandedVerticalNav)`
  display: flex;
  justify-content: space-between;
`

const Overlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${theme.text}7F;
  z-index: 1;
`

function getColorAlphaHexValue(x) {
  if (x < 0 || x > 255) return '00'
  else return Math.round(x).toString(16).padStart(2, '0')
}

export function animateButtonClick(x) {
  return {
    transform: x
      .interpolate({
        range: [0, 0.2, 1],
        output: [1, 1.1, 1],
      })
      .interpolate(x => `scale(${x})`),
    boxShadow: x
      .interpolate({ range: [0, 0.2, 1], output: [0, 127, 255] })
      .interpolate(x => `0 0 0 3px ${theme.background}, 0 0 0 5px ${theme.text}${getColorAlphaHexValue(x)}`)
  }
}

function NavItem({ itemId, label, onClick, selected, onActive }) {
  const { x } = useSpring({ from: { x: 0 }, x: selected ? 1 : 0 })

  return (
    <Link to={itemId} smooth duration={300} spy onSetActive={() => onActive(itemId)}>
      <animated.button
        onClick={() => onClick(itemId)}
        style={selected ? animateButtonClick(x) : null}
      >
        {label}
      </animated.button>
    </Link>
  )
}

function NavContent({ onItemClick, selectedItem, onSelectedChange }) {
  return (
    <ul>
      <li><NavItem onClick={onItemClick} onActive={onSelectedChange} selected={selectedItem === 'home'} itemId="home" label="Home" /></li>
      <li><NavItem onClick={onItemClick} onActive={onSelectedChange} selected={selectedItem === 'about me'} itemId="about me" label="About me" /></li>
      <li><NavItem onClick={onItemClick} onActive={onSelectedChange} selected={selectedItem === 'my work'} itemId="my work" label="My work" /></li>
      <li><NavItem onClick={onItemClick} onActive={onSelectedChange} selected={selectedItem === 'my projects'} itemId="my projects" label="My projects" /></li>
    </ul>
  )
}

function MobileNav({ onItemClick, selectedItem, onSelectedChange }) {
  const [showNavContent, setShowNavContent] = useState(false)
  const transitions = useTransition(showNavContent, null, {
    from: { transform: 'translate3d(0, 100%, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(0, 100%, 0)' },
  })

  const onMobileNavItemClick = itemId => {
    onItemClick(itemId)
    setShowNavContent(false)
  }

  return transitions.map(({ item, key, props }) =>
    item
      ? <>
        <ExpandedVerticalNav key={key} style={props} >
          <IconButton onClick={() => setShowNavContent(false)}>
            <Icon icon={multiplyIcon} />
            <span>Exit</span>
          </IconButton>
          <NavContent onItemClick={onMobileNavItemClick} selectedItem={selectedItem} onSelectedChange={onSelectedChange} />
        </ExpandedVerticalNav>
        <Overlay key={`overlay-${key}`} style={props} onClick={() => setShowNavContent(false)} />
      </>
      : <CollapsedVerticalNav key={key} style={props}>
        <IconButton onClick={() => setShowNavContent(true)}>
          <Icon icon={barsIcon} />
          <span>Menu</span>
        </IconButton>
      </CollapsedVerticalNav>
  )
}

export default function Nav(props) {
  const [, isOneColumnLayout] = useDevice()
  const [isScrollAtTop, setIsScrollAtTop] = useState(true)

  const onPageScroll = _ => {
    if (window.scrollY === 0) setIsScrollAtTop(true)
    else setIsScrollAtTop(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onPageScroll)
    return () => window.removeEventListener('scroll', onPageScroll)
  }, [])

  if (!isOneColumnLayout) return <HorizontalNav isScrollAtTop={isScrollAtTop}><NavContent {...props} /></HorizontalNav>
  else return <MobileNav isScrollAtTop={isScrollAtTop} {...props} />
}
