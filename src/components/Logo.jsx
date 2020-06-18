import React from 'react'
import { useDevice } from '../util'

function LogoSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="785.919"
      height="421.019"
      viewBox="0 0 7859.186 4210.186"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M21 4191.186l-21-21v-1464l11-1542c88-635 605-1119 1239-1160 83-6 103-4 125 10l25 17-5 3054-32 115c-94 340-277 598-558 787-188 126-425 205-659 220-97 5-104 5-125-16zm3369-1c-20-20-20-33-20-1498l16-1573c104-613 620-1079 1235-1116 100-6 107-5 128 16l21 21v1473l-15 1562c-72 444-352 818-756 1009-115 55-234 90-372 110-147 22-212 21-237-4zm2795 4c-277-42-537-175-741-378-236-237-366-526-390-870-6-87-5-95 15-115l22-22 822 4c805 3 824 3 903 24 197 53 364 131 505 237 315 238 507 591 535 986 6 88 5 97-16 123l-21 27-772-1c-601-1-792-4-862-15zm-3925-1399c-233-48-408-183-506-390-66-138-67-152-72-559-2-263 0-377 8-396 21-50 38-52 441-48 359 4 377 5 444 27 251 83 423 258 492 501 16 58 18 107 18 452 0 358-1 389-18 405-16 17-47 18-380 20-270 1-378-2-427-12z" />
    </svg>
  )
}

export default function Logo({ wrapper }) {
  const [, isOneColumnLayout] = useDevice()

  if (!wrapper) return <LogoSvg />
  else {
    const Wrapper = wrapper
    return <Wrapper isOneColumnLayout={isOneColumnLayout}><LogoSvg /></Wrapper>
  }
}
