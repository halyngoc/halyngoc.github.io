import React from 'react';
import '../style.css';
import logo from '../assets/logo.svg';

export default function HomePage() {
  return (
    <div className='page'>
      <div className="nameTitle">
        <div className="name">Ha Ly,</div>
        <div className="jobTitle">Web developer</div>
      </div>
      <div className='logo'>
        <img draggable="false" src={logo} alt="Logo" height='100%' width='100%'/>
      </div>
    </div>
  )
}
