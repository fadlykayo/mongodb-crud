const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  "name": string,
  "memberid": string,
  "address": string,
  "zipcode": string,
  "phone": string
});

module.exports = mongoose.model("Book", BookSchema);
