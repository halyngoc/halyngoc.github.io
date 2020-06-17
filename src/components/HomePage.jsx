import React from 'react'
import styled from 'styled-components'
import { theme } from '../globalStyle'
import Logo from './Logo'

const Page = styled.div`
  margin: 1rem 2rem;
`

const GreetingText = styled.div`
  p, span {
    font-family: Gloria Hallelujah, cursive;
    font-size: 4.5rem;
    margin: 0;
  }
`

const Name = styled.span`
  color: ${theme.accent};
`

const Title = styled.span`
  color: ${theme.accent2};
`

const Watermark = styled.div`
  position: absolute;
  left: 40vw;
  top: 40%;
  z-index: -1;
  fill: ${theme.watermark};
  transform: rotate(-10deg);
`

export default function HomePage() {
  return (
    <Page>
      <GreetingText>
        <p>Hi, my name is <Name>Ha Ly</Name></p>
        <p>and I'm a <Title>web developer</Title>.</p>
      </GreetingText>
      <Logo wrapper={Watermark} />
    </Page>
  )
}
