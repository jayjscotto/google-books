import React from 'react';
import Button from '../../Components/Button';
import './search.css'

class Search extends React. Component {
  state = {
      search: ''
  };

  value = 'Search';

  render() {
    return (
      <div className='hero'>
        <div className='hero-text'>
          <h3 className='hero-text'>Search:</h3>
          <input className='search-input' type='text' name='search' value={this.state.value} />
          <Button value={this.value}/>
        </div>
      </div>
    );
  }
}

export default Search;
