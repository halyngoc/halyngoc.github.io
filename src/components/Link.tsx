import React, { HTMLProps } from 'react'

export default function Link(props: HTMLProps<HTMLLinkElement>) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}
