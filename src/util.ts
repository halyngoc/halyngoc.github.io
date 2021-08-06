import { useState, useEffect } from 'react'
import { breakpoints } from './globalStyle'

type Device = 'mobile' | 'tablet' | 'laptop' | 'desktop'

function useWindowWidth(): number {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const onWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
  })

  return width
}

export function useDevice(): Device {
  const windowWidth = useWindowWidth()

  if (windowWidth < breakpoints.mobile) return 'mobile'
  else if (windowWidth < breakpoints.tablet) return 'tablet'
  else if (windowWidth < breakpoints.laptop) return 'laptop'
  else return 'desktop'
}
