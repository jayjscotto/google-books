require('dotenv').config();
const router = require('express').Router();
const controller = require('../../controller/bookController');


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


module.exports = router;
