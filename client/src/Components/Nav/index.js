import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <nav className='homeNav'>
      <h3 className='title'>
        Google Books<span className="cyan">.</span>
      </h3>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/saved'>Saved</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
