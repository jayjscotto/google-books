const router = require('express').Router();
const path = require('path');
const APIroutes = require('./API');

router.use('/api', APIroutes);

// send the React application if API routes are not hit
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
}); 


module.exports = router;
