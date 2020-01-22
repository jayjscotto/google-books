import React from 'react';
import Hero from '../Hero';
import BookCard from '../../Components/BookCard';
import Results from '../../Containers/Results';
import localAPI from '../../Utils/localBooks';

class Saved extends React.Component {
  state = {
    savedBooks: []
  };

  //componentWillMount or componentDidMount
  //search DB , set the state of savedBooks
  //iterate over the state array and print the books
  //conditonally render the BookCard for that book
  // OR
  // loading gif

  componentDidMount() {
    localAPI.getAllBooks();
  }
  //// TODO
  // ITERATE over book object in DB
  // use correct object properties for each book
  render() {
    return (
      <div className='home'>
        <Hero />
        {this.state.savedBooks.length !== 0 ? (
          <Results>
            {this.state.savedBooks.map((book, index) => {
              return (
                <BookCard
                  key={index}
                  alt={`book-${index}`}
                  title={book.title}
                  author={book.authors}
                  image={book.imageLinks.smallThumbnail}
                  description={book.description}
                  link={book.canonicalVolumeLink}
                  buttonValue='Delete This Book!'
                />
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

export default Saved;
