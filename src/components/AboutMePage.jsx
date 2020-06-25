import React from 'react'
import { Page } from './Page'
import { useDevice } from '../util'
import styled from 'styled-components'
import { breakpoints } from '../globalStyle'

const AboutMeContent = styled.div`
  width: fit-content;
  max-width: ${breakpoints.tablet}px;
  margin: ${props => props.isOneColumnLayout ? '0 2rem' : '0 auto'};

  p {
    margin: 0.75rem 0;
  }

  ul {
    list-style: circle;
    padding-left: 1.2rem;
  }

  span {
    font-weight: 500;
    margin-right: 0.5rem;
  }

  li {
    margin-bottom: 0.25rem;
  }
`

export default function AboutMePage() {
  const [, isOneColumnLayout] = useDevice()

  return (
    <Page id="about me" isOneColumnLayout={isOneColumnLayout}>
      <h1>About me</h1>
      <AboutMeContent isOneColumnLayout={isOneColumnLayout}>
        <p>I'm a web developer based in Portland, OR and a CS graduate from Portland State University.</p>
        <p>I build websites and make them look good.</p>
        <p>Here are my skills:</p>
        <ul>
          <li><span>Languages:</span>HTML, CSS, JavaScript, TypeScript, Python, Haskell, Kotlin, C/C++, Java</li>
          <li><span>IDEs:</span>Visual Studio Code, Visual Studio, Android Studio</li>
          <li><span>Other:</span>React, Figma, AWS, Azure, SPFx, Git, GitHub, SharePoint Online, Confluence, JIRA, MS Flow, MS PowerApps</li>
        </ul>
      </AboutMeContent>
    </Page>
  )
}
