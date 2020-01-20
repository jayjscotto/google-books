import React from 'react';
import Hero from '../Hero';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Home</h1>
        <Hero />
      </div>
    );
  }
}

export default Home;
