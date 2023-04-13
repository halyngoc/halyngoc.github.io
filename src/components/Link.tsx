import React, { PropsWithChildren } from "react";
import linkIcon from "@iconify/icons-uil/external-link-alt";
import InlineIcon from "@iconify/react";
import styled from "styled-components";

const IconLink = styled.a`
  color: ${({ theme }) => theme.palette.text};
  text-decoration: none;
  border-radius: 20px;
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;

  :focus-visible,
  :hover {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.text};
  }

  :active {
    color: ${({ theme }) => theme.palette.background};
    background-color: ${({ theme }) => theme.palette.text};
  }
`;

type Props = {
  isIconOnly?: boolean;
  url: string;
  label: string;
};

export default function Link({
  isIconOnly,
  url,
  label,
  children,
}: PropsWithChildren<Props>) {
  if (isIconOnly) {
    return (
      <IconLink href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </IconLink>
    );
  }
  return (
    <a
      aria-label={isIconOnly ? label : undefined}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <InlineIcon icon={linkIcon} />
    </a>
  );
}
