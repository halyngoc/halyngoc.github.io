import styled from 'styled-components'

export const Page = styled.section`
  min-height: ${props => props.isOneColumnLayout ? '40rem' : '50rem'};
  padding: 5rem 0;
  width: 100%;
`
