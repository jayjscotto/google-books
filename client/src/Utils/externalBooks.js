import axios from 'axios';

// sends search term for google books API to back end router

export default {
  // Search Google Books API
  searchGoogleBooks: query => {
    return axios.get('/search-books/' + query);
  }
};

