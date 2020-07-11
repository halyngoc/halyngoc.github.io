import React, { useEffect, useCallback } from 'react'
import { Page } from './Page'
import styled from 'styled-components'
import { theme } from '../globalStyle'
import { useDevice } from '../util'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import githubAlt from '@iconify/icons-uil/github-alt'
import linkIcon from '@iconify/icons-uil/link'
import paletteIcon from '@iconify/icons-uil/palette'
import { portfolioScreenshots, kanabiScreenshots, recipediaScreenshots } from '../projectScreenshots'

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  width: 100%;
  align-items: center;
  
  * {
    text-align: center;
  }

  h2 {
    color: white;
    font-size: 1.3rem;
  }

  > li {
    margin: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px ${theme.text}7F;
    padding: 1rem;
    background-color: ${theme.text};
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    align-items: center;
    padding: 0.25rem 0.5rem 0 0.5rem;
    border-radius: 20px;
    font-size: 2rem;
  }

  a:focus, a:hover {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff7f;
  }

  a:active {
    outline: none;
    box-shadow: 0 0 0 2px white;
  }
`

const ProjectScreenshotsSlideshowWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  position: relative;
  margin: ${props => props.isOneColumnLayout ? '0 auto' : '0'};

  img {
    border-radius: 1rem;
    box-shadow: 0 0 5px ${theme.text}7F;
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: 50 % top;
  }
`

const ProjectTags = styled.li`
  cursor: default;

  > span {
    border: 2px solid white;
    border-radius: 1.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.1rem;
  }

  > span:hover {
    background-color: white;
    color: ${theme.text};
  }
`

const projectsData = [
  {
    name: 'Portfolio',
    time: '6/2020',
    description: 'My personal website and portfolio.',
    url: 'https://halyngoc.github.io/',
    githubUrl: 'https://github.com/halyngoc/halyngoc.github.io',
    figmaUrl: 'https://www.figma.com/file/ZJE9jYg6XTdCxCOxOnSzZl/Personal-website',
    screenshots: portfolioScreenshots,
    tags: ['React', 'react-spring', 'styled-components'],
  },
  {
    name: 'Recipedia',
    time: '4/2020 - 6/2020',
    description: 'Recipes search and dashboard.',
    url: 'https://halyngoc.github.io/recipedia',
    githubUrl: 'https://github.com/halyngoc/recipedia',
    figmaUrl: 'https://www.figma.com/file/NZNcO8FD5ogdTPdXzLkkQ9/Recipedia',
    screenshots: recipediaScreenshots,
    tags: ['React', 'styled-components', 'nivo'],
  },
  {
    name: 'Kanabi UI',
    time: '1/2020 - 6/2020',
    description: 'Portal for City of Portland\'s Cannabis database.',
    url: 'https://kanabi-gui.herokuapp.com',
    githubUrl: 'https://github.com/FireAnts-PSU-Capstone-team/cannabis-db-ui',
    figmaUrl: 'https://www.figma.com/file/Pxern1X0ZM7XLh1E9NjKGL/Cannabis-database-interface',
    screenshots: kanabiScreenshots,
    tags: ['React', 'Material UI'],
  },
]

function ProjectScreenshotsSlideshow({ screenshots }) {
  const [index, setIndex] = useState(0)
  const [, isOneColumnLayout] = useDevice()

  const getNextScreenshotIndex = useCallback(current => current === screenshots.length - 1 ? 0 : current + 1, [screenshots.length])

  useEffect(() => {
    let transitionInterval = setInterval(() => setIndex(getNextScreenshotIndex(index)), 3000)
    return () => clearInterval(transitionInterval)
  }, [getNextScreenshotIndex, index])

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <ProjectScreenshotsSlideshowWrapper isOneColumnLayout={isOneColumnLayout}>
      {transitions.map(({ item, props, key }) => {
        return <animated.img key={`screenshot - ${key} `} src={screenshots[item]} alt={screenshots[item]} draggable={false} style={props} />
      })}
    </ProjectScreenshotsSlideshowWrapper>
  )
}

export default function MyProjectsPage() {
  const [, isOneColumnLayout] = useDevice()

  return (
    <Page id="my projects" isOneColumnLayout={isOneColumnLayout}>
      <h1>My projects</h1>
      <ProjectList isOneColumnLayout={isOneColumnLayout}>
        {projectsData.map((data, key) =>
          <li key={`project-data-${key} `}>
            {data.screenshots.length > 0 && <>
              <ProjectScreenshotsSlideshow screenshots={data.screenshots} />
              <div>
                <h2>{data.name}</h2>
                <ProjectTags>
                  {data.tags.map((tag, tagKey) => <span key={`project-data-${key}-tag-${tagKey}`}>{tag}</span>)}
                </ProjectTags>
                <p>{data.description}</p>
                <a title="Live site" href={data.url} target="_blank" rel="noopener noreferrer">
                  <Icon icon={linkIcon} />
                </a>
                <a title="Github repository" href={data.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Icon icon={githubAlt} />
                </a>
                <a title="Figma prototype" href={data.figmaUrl} target="_blank" rel="noopener noreferrer">
                  <Icon icon={paletteIcon} />
                </a>
              </div>
            </>}
          </li>
        )}
      </ProjectList>
    </Page>
  )
}
