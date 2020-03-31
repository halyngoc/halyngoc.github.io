import React from 'react';
import '../style.css';
import InteractableLogo from './InteractableLogo';

export default function HomePage() {
  return (
    <div className='page'>
      <div className="nameTitle">
        <div className="name">Ha Ly,</div>
        <div className="jobTitle">Web developer</div>
      </div>
      <InteractableLogo />
    </div>
  )
}
