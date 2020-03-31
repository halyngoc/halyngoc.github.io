import React from 'react';
import { useTrail, animated } from 'react-spring';
import '../style.css';
import logoP1 from '../assets/logo p1.svg';
import logoP2 from '../assets/logo p2.svg';
import logoP3 from '../assets/logo p3.svg';
import logoP4 from '../assets/logo p4.svg';

export default function InteractableLogo() {
  return (
    <div className='logo'>
      <img className='logoP1' draggable="false" src={logoP1} alt="Logo" width='100%' />
      <img className='logoP2' draggable="false" src={logoP2} alt="Logo" width='100%' />
      <img className='logoP3' draggable="false" src={logoP3} alt="Logo" width='100%' />
      <img className='logoP4' draggable="false" src={logoP4} alt="Logo" width='100%' />
    </div>
  )
}
