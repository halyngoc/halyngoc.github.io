import React from 'react'
import styled from 'styled-components'

const StyledIconButton = styled.button`
    display: flex;
    flex-direction: column;
    width: min-content;
    height: max-content;
    align-items: center;
    font-size: small;
    margin: 0 auto;

    > svg {
      font-size: 2rem;
    }

    > span {
      font-size: small;
    }
`

export default function IconButton({ children, ...rest }) {
  return (
    <StyledIconButton {...rest}>{children}</StyledIconButton>
  )
}
