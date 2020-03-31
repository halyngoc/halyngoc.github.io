import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import '../style.css';
import logoP1 from '../assets/logo p1.svg';
import logoP2 from '../assets/logo p2.svg';
import logoP3 from '../assets/logo p3.svg';
import logoP4 from '../assets/logo p4.svg';

const logoSvgs = [logoP1, logoP2, logoP3, logoP4];
const trailConfig = { mass: 5, tension: 200, friction: 30 };
const trans = (x, y) => `translate3d(${x}px, ${y}px, 0)`;

export default function InteractableLogo() {
  const [trail, setTrail] = useTrail(4, () => ({ xy: [0, 0], config: trailConfig }));

  const gestureBind = useDrag(({ down, movement: [x, y] }) => setTrail({ xy: [down ? x : 0, down ? y: 0] }));

  return (
    <div className='logo'>
      {trail.map((props, index) => (
        <animated.div
          {...gestureBind()}
          style={{ transform: props.xy.interpolate(trans) }}
          key={index}
          className={'logoP' + (index + 1)}
        >
          <img
            src={logoSvgs[index]}
            alt={'logo p' + (index + 1)}
            draggable={false}
          />
        </animated.div>
      ))}
    </div>
  );
}
