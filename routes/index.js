const router = require('express').Router();
const path = require('path');
const APIroutes = require('./API');
const axios = require('axios');
const controller = require('../controller/bookController');

router.use('/api', APIroutes);

router.get('/search-books/:book', (req, res) => {
  const query = `https://www.googleapis.com/books/v1/volumes?q=${req.params.book}&key=${process.env.API_KEY}`;
  // take search params and send data to front end in JSON from google books API
  axios
    .get(query)
    .then(response => {
      const books = response.data.items.map(book => {return (book.id && book.volumeInfo)});
      res.json(books);
    })
    .catch(err => res.status(418).send);
});

// send the React application if API routes are not hit
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;