import React from 'react';
import Button from '../../Components/Button';
import BookCard from '../../Components/BookCard';
import Results from '../../Containers/Results';
import './search.css';
import API from '../../Utils/externalBooks';

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
      .then(() => this.printBooks());
    return this.setState({ value: '' });
  };

  // componentDidUpdate = () => {
  //   this.printBooks();
  // };

  printBooks = () => {
    if (this.state.searchedBooks.length !== 0) {
      this.state.searchedBooks.map(book => {
        return (
          <BookCard
            key={book.industryIdentifiers.identifier}
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.imageLinks.smallThumbnail}
            link={book.canonicalVolumeLink}
          />
        );
      });
    } else {
      return <h2>Search for a book!</h2>;
    }
  };

  handleChange = e => {
    return this.setState({ value: e.target.value });
  };

  buttonValue = 'Search';

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
              value={this.buttonValue}
              onClick={() => {
                this.googleSearch(this.state.value);
              }}
            />
          </div>
        </div>
        <div className='results card'>
          {this.state.searchedBooks.length !== 0 ? (
            <Results>
              {this.state.searchedBooks.map(book => {
                return (
                  <BookCard key={book.industryIdentifiers[0].identifier}>
                    <div className="bookImage"><img src={book.imageLinks.smallThumbnail} alt="book-image"/></div>
                    <div className='title'>{book.title}</div>
                    <div className='authors'>{book.authors}</div>
                    <div className='description'>{book.description}</div>
                    <a href={book.canonicalVolumeLink}>Check out the book!</a>
                  </BookCard>
                );
              })}
            </Results>
          ) : (
            <h2 className="no-search">Search for a book!</h2>
          )}
        </div>
      </div>
    );
  }
}

export default Search;

// <BookCard
// key={}
// title={book.title}
// authors={book.authors}
// description={book.description}
// image={book.imageLinks.smallThumbnail}
// link=
// />
