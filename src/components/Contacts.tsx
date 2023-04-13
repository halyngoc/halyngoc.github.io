import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import githubAlt from "@iconify/icons-uil/github-alt";
import mailIcon from "@iconify/icons-uil/envelope-alt";
import linkedinAlt from "@iconify/icons-uil/linkedin-alt";
import Link from "./Link";

const ContactList = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;
  margin: 0 -0.3rem;
`;

const ContactListItem = styled.li`
  margin-inline-end: 0.5rem;
  font-size: 2rem;
  width: fit-content;

  svg {
    height: 2.5rem;
  }
`;

export default function Contacts() {
  return (
    <ContactList>
      <ContactListItem>
        <Link
          isIconOnly
          label="LinkedIn"
          url="https://www.linkedin.com/in/halyngoc"
        >
          <Icon icon={linkedinAlt} width="1.5rem" />
        </Link>
      </ContactListItem>
      <ContactListItem>
        <Link isIconOnly label="Github" url="https://github.com/halyngoc">
          <Icon icon={githubAlt} width="1.6rem" />
        </Link>
      </ContactListItem>
      <ContactListItem>
        <Link isIconOnly label="Email" url="mailto:haly.inbox@gmail.com">
          <Icon icon={mailIcon} width="1.6rem" />
        </Link>
      </ContactListItem>
    </ContactList>
  );
}
