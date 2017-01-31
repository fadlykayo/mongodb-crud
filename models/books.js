const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  "isbn": string,
  "title": string,
  "author": string,
  "category": string,
  "stock": integer
});

module.exports = mongoose.model("Book", BookSchema);
