type Skills = {
  languages: string[];
  other: string[];
};

type Experience = {
  title: string;
  place: string;
  time: string;
  description?: string;
  tools: string[];
};

type Project = {
  title: string;
  affiliation?: string;
  time: string;
  description: string;
  url?: string;
};

type Education = {
  title: string;
  school: string;
  details: string;
};

export const skills: Skills = {
  languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
  other: ["React", "Figma", "Git", "GitHub", "MUI", "UX", "Accessibility"],
};

export const experience: Experience[] = [
  {
    title: "Software Engineer, UX Infrastructure",
    place: "Color Health, Burlingame, CA",
    description:
      "Worked with a cross-functional team which focuses on user experience, accessibility, localization, shared components, and overall front-end developer experience of various covid and healthcare products",
    time: "3/2022 - 2/2023",
    tools: [
      "TypeScript",
      "React",
      "MUI",
      "UX",
      "Accessibility",
      "Localization",
    ],
  },
  {
    title: "Junior Software Developer",
    place: "6 Degrees Health, Hillsboro, OR",
    description:
      "Developed and maintained a full-stack web application which processes health insurance claims",
    time: "8/2020 - 2/2022",
    tools: [
      "Go",
      "TypeScript",
      "Javascript",
      "React",
      "PostgreSQL",
      "MongoDB",
      "GCP",
    ],
  },
  {
    title: "Web Developer Intern",
    place: "Portland General Electric, Portland, OR",
    time: "9/2019 - 12/2019",
    description:
      "Worked with a team of 4 to architect and implement a new internal portal to reprocess errors, which connects to on-premise SQL servers and IBM DataPower SOAP endpoints",
    tools: ["React", "TypeScript", "SPFx", "AWS", "SharePoint Online"],
  },
  {
    title: "SharePoint Web Developer Intern",
    place: "Portland General Electric, Portland, OR",
    time: "6/2019 - 9/2019",
    description:
      "Collaborated with a team of 7 to develop a new company intranet site using SharePoint Online",
    tools: [
      "SharePoint Online",
      "SPFx",
      "TypeScript",
      "MS Flow",
      "MS PowerApps",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Caro",
    time: "3/2023 - present",
    description: "Web version of the game of caro",
  },
  {
    title: "Recipedia",
    time: "4/2020 - 6/2020",
    description: "Web app for recipes search and dashboard",
    url: "https://github.com/halyngoc/recipedia",
  },
  {
    title: "Kanabi UI",
    affiliation: "City of Portland (PSU capstone project)",
    time: "1/2020 - 6/2020",
    description:
      "Front-end web UI for the City of Portland’s Cannabis database",
    url: "https://github.com/FireAnts-PSU-Capstone-team/cannabis-db-ui",
  },
];

export const education: Education = {
  title: "BS Computer Science",
  school: "Portland State University",
  details: "Member of PSU Viking Robotics Society",
};
