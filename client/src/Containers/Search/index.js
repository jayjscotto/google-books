import React from 'react';
import Button from '../../Components/Button';
import './search.css'

class Search extends React.Component {
  state = {
      search: ''
  };

  value = 'Search';

  render() {
    return (
      <div className='hero'>
        <div className='search-container'>
          <h3 className='hero-text'>Find Your Book:</h3>
          <input className='search-input' type='text' name='search' value={this.state.value} />
          <Button value={this.value}/>
        </div>
        <hr/>
        <div className="add-container">
        <h3 className='hero-text'>Find Your Book:</h3>
          <input className='search-input' type='text' name='search' value={this.state.value} />
          <Button value={this.value}/>
        </div>
      </div>
    );
  }
}

export default Search;
