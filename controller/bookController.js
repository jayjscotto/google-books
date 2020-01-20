const db = require('../models');

//controller methods:
module.exports = {
  findAll: (req, res) => {
    //find and sort by title
    db.Book.find(req.query)
      .sort({ title: -1 })
      .then(results => res.json(results))
      // send Unprocessable Entity error if error
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Book.findById({ _id: req.params.id })
    .then(results => res.json(results))
    // send Unprocessable Entity error if error
    .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
      db.Book.create(req.body)
      .then(created => res.json(created))
      // send Unprocessable Entity error if error
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
      db.Book.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(updated => res.json(updated))
      // send Unprocessable Entity error if error
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then(found => found.remove())
      .then(removed => res.json(removed))
      // send Unprocessable Entity error if error
      .catch(err => res.status(422).json(err));
  }
};
