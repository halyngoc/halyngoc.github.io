import React from 'react';
import '../style.css';

export default function TopNav(props) {
  return (
    <div className='TopNav'>
      <ul>
        <li onClick={() => props.onTopNavItemClick('Home')}>Home</li>
        <li onClick={() => props.onTopNavItemClick('Projects')}>Projects</li>
        <li onClick={() => props.onTopNavItemClick('Contact')}>Contact</li>
      </ul>
    </div>
  )
}
