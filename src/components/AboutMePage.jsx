import React from 'react'
import { Page } from './Page'
import { useDevice } from '../util'

export default function AboutMePage() {
  const [, isOneColumnLayout] = useDevice()

  return (
    <Page id="about me" isOneColumnLayout={isOneColumnLayout}>
      <h1>About me</h1>
    </Page>
  )
}
