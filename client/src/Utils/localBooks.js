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
  saveBook: book => {
    return axios.post('/api/save-book/', {
      book: book
    });
  },
  deleteBook: id => {
    return axios.delete('/api/book/:id');
  },
};
