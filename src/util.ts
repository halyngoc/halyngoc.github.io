import { useState, useEffect } from 'react'
import { breakpoints } from './globalStyle'

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const onWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
  })

  return width
}

const isOneColumnLayout = device => device === 'mobile' || device === 'tablet'

export function useDevice() {
  const windowWidth = useWindowWidth()
  let device = ''

  if (windowWidth < breakpoints.mobile) device = 'mobile'
  else if (windowWidth < breakpoints.tablet) device = 'tablet'
  else if (windowWidth < breakpoints.laptop) device = 'laptop'
  else device = 'desktop'

  return [device, isOneColumnLayout(device)]
}
