import React from 'react'
import { Page } from './Page'
import { theme, breakpoints } from '../globalStyle'
import styled from 'styled-components'
import { useDevice } from '../util'

const WorkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${props => props.isOneColumnLayout ? '0 2rem' : '0 auto'};
  width: fit-content;
  max-width: calc(${breakpoints.tablet}px - 3rem);
  position: relative;

  ::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: -2.5px;
    width: 5px;
    height: 100%;
    background-color: ${theme.text};
  }

  p {
    margin: 0.75rem 0;
  }

  > li {
    position: relative;
    margin: 0 0 2rem 2rem;
  }

  > li::before {
    content: ' ';
    position: absolute;
    top: -0.2rem;
    left: -3rem;
    width: 2rem;
    height: 2rem;
    border: 5px solid ${theme.accent2};
    background-color: ${theme.background};
    border-radius: 1rem;
  }

  ul {
    list-style: inside circle;
    padding: 0;
  }

  ul:last-child {
    margin-top: 0.75rem;
    list-style: none;
  }

  ul:last-child > li {
    padding: 0.25rem 0.5rem;
    margin: 0 0.25rem 0.25rem 0;
    display: inline-block;
    color: ${theme.background};
    background-color: ${theme.accent}CC;
    border-radius: 1rem;
    cursor: default;
  }

  ul:last-child > li:hover,
  ul:last-child > li:active {
    background-color: ${theme.accent};
  }
`

const workData = [
  {
    title: 'Web Developer Intern',
    place: 'Portland General Electric, Portland, OR',
    time: '9/2019 - 12/2019',
    description: 'Designed and implemented a new internal portal to reprocess errors, which connects to on-premise SQL servers and IBM DataPower SOAP endpoints.',
    descriptionDetails: [
      'Developed and tested new portal UI that improves execution speed while maintaining current functionality',
      'Designed, implemented, and tested architecture to connect from cloud portal to on-premise resources',
      'Interfaced with Database and Security teams to inalize on an optimal middleware solution',
      'Documented and presented implementation plans to ensure security in accessing sensitive databases',
    ],
    tools: ['SharePoint Online', 'SPFx', 'React', 'TypeScript', 'AWS'],
  },
  {
    title: 'SharePoint Web Developer Intern',
    place: 'Portland General Electric, Portland, OR',
    time: '6/2019 - 9/2019',
    description: 'Collaborated with a team of 7 to develop a new company intranet site using SharePoint Online and Microsoft products.',
    descriptionDetails: [
      'Developed automatic content approval and archival processes using MS Flow, which improves content management eficiency',
      'Implemented content search functionality, including keyword searching, ilters, sorting, and promoted results',
      'Presented weekly builds to business partners and team to determine project status and tasks',
      'Wrote end user manuals, admin manuals, and code documentation to aid knowledge transfer by end of project',
    ],
    tools: ['SharePoint Online', 'SPFx', 'TypeScript', 'MS Flow', 'MS PowerApps'],
  }
]

export default function MyWorkPage() {
  const [, isOneColumnLayout] = useDevice()

  return (
    <Page id="my work" isOneColumnLayout={isOneColumnLayout}>
      <h1>My work</h1>
      <WorkList isOneColumnLayout={isOneColumnLayout}>
        {workData.map((data, key) =>
          <li key={`work-data-${key}`}>
            <h2>{data.title}</h2>
            <p>{data.place}</p>
            <p>{data.time}</p>
            <p>{data.description}</p>
            <ul>
              {data.descriptionDetails.map((detailItem, detailKey) =>
                <li key={`work-data-${key}-description-${detailKey}`}>{detailItem}</li>
              )}
            </ul>
            <ul>
              {data.tools.map((tool, toolKey) =>
                <li key={`work-data-${key}-tool-${toolKey}`}>{tool}</li>
              )}
            </ul>
          </li>
        )}
      </WorkList>
    </Page>
  )
}
