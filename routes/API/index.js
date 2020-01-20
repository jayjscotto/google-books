const router = require('express').Router();

//import routes for the books
const bookRoutes = require('./books');

//set router to use tbe book routes
router.use('/books', bookRoutes);

module.exports = router;