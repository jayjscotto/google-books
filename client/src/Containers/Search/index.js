import React from 'react';
import Button from '../../Components/Button';
import './search.css'
import API from '../../Utils/externalBooks'

class Search extends React.Component {
  state = {
      value: ''
  };

  googleSearch = (searchTerm) => {
    API.searchGoogleBooks(searchTerm)
    .then(response => console.log(response));
    this.setState({value: ''});
  }

  handleChange = (e) => {
    return this.setState({value: e.target.value});
  }

  buttonValue = 'Search';

  render() {
    return (
      <div className='hero'>
        <div className='search-container'>
          <h3 className='hero-text'>Find Your Book:</h3>
          <input className='search-input' type='text' name='search' value={this.state.value} onChange={this.handleChange}/>
          <Button value={this.buttonValue} onClick={() => {this.googleSearch(this.state.value)}}/>
        </div>
        <hr/>
        <div className="add-container">
        <h3 className='hero-text'>Find Your Book:</h3>
    
          <Button value={this.value}/>
        </div>
      </div>
    );
  }
}

export default Search;
