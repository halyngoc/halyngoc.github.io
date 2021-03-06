import styled from 'styled-components'
import { theme } from '../globalStyle'

export const Page = styled.section`
  min-height: 100vh;
  padding: ${props => props.isOneColumnLayout ? '2rem 0' : '5rem 0'};
  width: 100%;

  :first-of-type {
    padding: 5rem 0;
  }

  h1 {
    font-family: Gloria Hallelujah, cursive;
    font-weight: normal;
    text-align: center;
    font-size: 2rem;
  }

  h2 {
    color: ${theme.accent};
    font-size: 1.1rem;
  }
`
