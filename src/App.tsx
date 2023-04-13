import React from "react";
import styled from "styled-components";
import { Section } from "./components/Section";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contacts from "./components/Contacts";

const Main = styled.main`
  margin: ${({ theme }) => theme.spacing.appTopMargin} 0;
`;

const NameSection = styled(Section)`
  div {
    font-family: "Fredericka the Great";
    font-size: 3.5rem;
    margin-inline-start: 0;
  }

  p {
    font-family: "Handlee";
    font-size: 1.2rem;
    margin-inline-start: 0.2rem;
  }
`;

export default function App() {
  return (
    <Main>
      <NameSection>
        <div>Ha Ly</div>
        <p>Front-end Software Engineer</p>
        <Contacts />
      </NameSection>
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </Main>
  );
}
