import styled from 'styled-components'

export const Section = styled.section`
  padding: 0 0 2rem 0;
  margin: ${({ theme }) => theme.spacing.sectionMargin};

  h1 {
    font-weight: normal;
    font-size: 2rem;
  }

  h2 {
    font-weight: semibold;
    font-size: 1rem;
  }
`
