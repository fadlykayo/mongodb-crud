const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
},
{
  timestamps: true
});

module.exports = mongoose.model("Book", BookSchema);
