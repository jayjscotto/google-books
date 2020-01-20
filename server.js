const express = require('express');
const favicon = require('express-favicon');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const app = express();
const routes = require('./routes');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google-books",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

app.use(routes);

app.use(favicon(__dirname + '/build/favicon.ico'));
app.listen(port, () => {
  console.log(`Sever listening on ${port}`);
});

