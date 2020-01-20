import React from 'react';
import Hero from '../Hero';
import Search from '../../Containers/Search';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Hero />
        <Search />
      </div>
    );
  }
}

export default Home;
