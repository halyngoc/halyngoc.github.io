import styled from "styled-components";
import { breakpoints } from "../globalStyle";

export const Section = styled.section`
  margin: ${({ theme }) => theme.spacing.sectionMargin};
  max-width: ${breakpoints.mobile}px;
`;

export const SectionItem = styled.div`
  margin-bottom: 2rem;
`;
