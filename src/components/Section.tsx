import styled from 'styled-components'
import { breakpoints } from '../globalStyle'

export const Section = styled.section`
  margin: ${({ theme }) => theme.spacing.sectionMargin};
  max-width: ${breakpoints.desktop}px;

  h1 {
    font-weight: normal;
    font-size: 2rem;
  }

  h2 {
    font-weight: semibold;
    font-size: 1rem;
  }
`

export const SectionItem = styled.div`
  margin-bottom: 2rem;
`
