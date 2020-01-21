import React from 'react';
import Button from '../../Components/Button';
import SearchResults from '../../Containers/SearchResults';
import './search.css'
import API from '../../Utils/externalBooks'

class Search extends React.Component {
  state = {
      value: '',
      searchBooks: [],

  };

  googleSearch = (searchTerm) => {
    API.searchGoogleBooks(searchTerm)
    .then(response => {
      const books = response.data.items;
      books.map(book => {
        const searchBook = {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.infoLink
        }
        console.log(searchBook);
      })
    });
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
        <SearchResults books={this.state.searchBooks}/>
      </div>
    );
  }
}

export default Search;
