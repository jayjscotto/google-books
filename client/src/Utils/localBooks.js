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
    //edit book object to return only what is needed to save in DB
    return axios.post('/api/books', {
      book: book
    });   
  },
  deleteBook: id => {
    return axios.delete('/api/book/:id');
  },
};
