import React from 'react';
import Hero from '../Hero';
import BookCard from '../../Components/BookCard';
import Results from '../../Containers/Results';
import localAPI from '../../Utils/localBooks';

class Saved extends React.Component {
  state = {
    savedBooks: []
  };

  // when the component mounts, query the DB for all saved books
  // then update the state
  // component will rerender with saved books
  componentDidMount() {
    localAPI
      .getAllBooks()
      .then(books => this.setState({ savedBooks: books.data }));
  }

  render() {
    return (
      <div className='home'>
        <Hero />
        {/* conditionally render saved books */}
        {this.state.savedBooks.length !== 0 ? (
          <Results>
            {this.state.savedBooks.map((book, index) => {
              return (
                <BookCard
                  key={index}
                  alt={`book-${index}`}
                  title={book.title}
                  author={book.authors}
                  image={book.image}
                  description={book.description}
                  link={book.link}
                  buttonValue='Delete This Book!'
                />
              );
            })}
          </Results>
        ) : (
          <div className='results card'>
            <h1 className='no-search'>No Saved Books yet!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Saved;
