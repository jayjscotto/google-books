import React from 'react';
import Button from '../../Components/Button';
import BookCard from '../../Components/BookCard';
import Results from '../../Containers/Results';
import './search.css';
import API from '../../Utils/externalBooks';
import localAPI from '../../Utils/localBooks';

class Search extends React.Component {
  state = {
    value: '',
    searchedBooks: []
  };

  googleSearch = searchTerm => {
    API.searchGoogleBooks(searchTerm)
      .then(response => {
        console.log(response);
        const searchedBooks = response.data;
        this.setState({ searchedBooks });
      })
     
    return this.setState({ value: '' });
  };

  saveBook = book => {
    localAPI.saveBook(this.state.searchedBooks[book]);
  };

  handleChange = e => {
    return this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className='search'>
        <div className='hero'>
          <div className='search-container'>
            <h3 className='hero-text'>Find Your Book:</h3>
            <input
              className='search-input'
              type='text'
              name='search'
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Button
              value='Search'
              onClick={() => {
                this.googleSearch(this.state.value);
              }}
            />
          </div>
        </div>

        {this.state.searchedBooks.length !== 0 ? (
          <Results>
            {this.state.searchedBooks.map((book, index) => {
              return (
                <BookCard
                  key={index}
                  title={book.title}
                  author={book.authors}
                  image={book.imageLinks.smallThumbnail}
                  description={book.description}
                  link={book.canonicalVolumeLink}
                ></BookCard>
              );
            })}
          </Results>
        ) : (
          <div className='results card'>
            <h1 className='no-search'>Search for a book above!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
