import React from 'react';
import Hero from '../Hero';
import Results from '../../Containers/Results';
import localAPI from '../../Utils/localBooks'

class Saved extends React.Component {
    state = {
        savedBooks: localAPI.getAllBooks()
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
            {this.state.savedBooks.map((book, index)=> {
              return (
                <BookCard key={index}>
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

export default Saved;
