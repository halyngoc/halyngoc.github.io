import React from "react";
import { Section, SectionItem } from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section>
      <h1>Education</h1>
      <SectionItem key={education.title + education.school}>
        <h2>{education.title}</h2>
        <p>{education.school}</p>
        <p>{education.details}</p>
      </SectionItem>
    </Section>
  );
}
