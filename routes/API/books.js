require('dotenv').config();
const router = require('express').Router();
const controller = require('../../controller/booksController');

// Routes matching with '/api/books'
// reference controller methods to find data
router
  .route('/')
  .get(controller.findAll)
  .post(controller.create);

// Routes matching with '/api/books/:id
// reference controller methods to find data
router
  .route('/:id')
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

router.get('/search-boooks', (req, res) => {
  const query = `https://www.googleapis.com/books/v1/volumes?q=${req.body.query}&key:${process.env.API_KEY}`;

  // take search params and send data to front end in JSON from google books API
  axios
    .get(query)
    .then(response => res.json(response))
    .catch(err => res.status(418).send);
});

module.exports = router;
