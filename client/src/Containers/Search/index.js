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
            {this.state.searchedBooks.map(book => {
              return (
                <BookCard key={book.industryIdentifiers[0].identifier}>
                  <div className="title-author">
                    <div className='results-card-title'>{book.title}</div>
                    <h2 className='authors'>By: {book.authors[0]}</h2>
                  </div>
                   
                    <div className='book-info'>
                      <div className='bookImage'>
                        <img
                          src={book.imageLinks.smallThumbnail}
                          alt='book-image'
                        />
                      </div>
                      <div className='description'>{book.description}</div>
                    </div>
              
                  <div className='book-buttons'>
                    <a href={book.canonicalVolumeLink}><Button
                      value='Check Out This Book'
                    /></a>
                    <Button
                      value='Save This Book'
                      onClick={() => {
                        console.log('add in the save book function')
                      }}
                    />
                  </div>
                </BookCard>
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

// <BookCard
// key={}
// title={book.title}
// authors={book.authors}
// description={book.description}
// image={book.imageLinks.smallThumbnail}
// link=
// />
