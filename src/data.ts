type Skills = {
  languages: string[]
  other: string[]
}

type Experience = {
  title: string
  place: string
  time: string
  description?: string
  tools: string[]
}

type Project = {
  title: string
  affiliation?: string
  time: string
  description: string
  url?: string
  figmaUrl?: string
}

type Other = {
  title: string
  description: string
  time?: string
}


export const skills: Skills = {
  languages: ['Go', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'C/C++'],
  other: ['Git', 'GitHub', 'React', 'Figma', 'SPFx', 'AWS', 'GCP', 'Visual Studio Code'],
}

export const experience: Experience[] = [
  {
    title: 'Junior Software Developer',
    place: '6 Degrees Health, Hillsboro, OR',
    time: '8/2020 - present',
    tools: ['Go', 'TypeScript', 'Javascript', 'React', 'PostgreSQL', 'MongoDB', 'GCP'],
  },
  {
    title: 'Web Developer Intern',
    place: 'Portland General Electric, Portland, OR',
    time: '9/2019 - 12/2019',
    description: 'Designed and implemented a new internal portal to reprocess errors, which connects to on-premise SQL servers and IBM DataPower SOAP endpoints',
    tools: ['SharePoint Online', 'SPFx', 'React', 'TypeScript', 'AWS'],
  },
  {
    title: 'SharePoint Web Developer Intern',
    place: 'Portland General Electric, Portland, OR',
    time: '6/2019 - 9/2019',
    description: 'Collaborated with a team of 7 to develop a new company intranet site using SharePoint Online and Microsoft products',
    tools: ['SharePoint Online', 'SPFx', 'TypeScript', 'MS Flow', 'MS PowerApps'],
  },
]

export const projects: Project[] = [
  {
    title: 'Recipedia',
    time: '4/2020 - 6/2020',
    description: 'Web app for recipes search and dashboard',
    url: 'https://github.com/halyngoc/recipedia',
  },
  {
    title: 'Kanabi UI',
    affiliation: 'City of Portland (PSU capstone project)',
    time: '1/2020 - 6/2020',
    description: 'Front-end web UI for the City of Portland’s Cannabis database',
    url: 'https://github.com/FireAnts-PSU-Capstone-team/cannabis-db-ui',
  },
]

export const other: Other = {
  title: 'Student groups',
  description: 'Member of PSU Viking Robotics Society',
  time: '4/2018 - 3/2020',
}
