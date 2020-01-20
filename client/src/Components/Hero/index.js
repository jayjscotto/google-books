import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h3 className='hero-text'>
          Search for books with the Google Books API
        </h3>
        <h3 className='hero-text'>
          Save them to the database and come back to find them later!
        </h3>
      </div>
    </div>
  );
};

export default Hero;
