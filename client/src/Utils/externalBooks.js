import axios from 'axios';

// sends search term for google books API to back end router

export default {
  // Get all books
  searchGoogleBooks: query => {
    return axiox.get('/search-books/', {
      query: query
    });
  }
};

