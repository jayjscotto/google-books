import axios from 'axios';

// sends request to back end router

export default {
  // Get all books
  getAllBooks: () => {
    return axios.get('/api/books');
  },
  // Get all books
  getBook: id => {
    return axios.get('/api/books/:id');
  },
  saveBook: id => {
    return axios.post('/api/save-book/');
  },
  updateBook: id => {
    return axios.put('/api/book/:id');
  },
  deleteBook: id => {
    return axios.delete('/api/book/:id');
  },
  searchGoogleBooks: query => {
    return axios.get('/api/search-books/', {
      query: query
    });
  }
};
