const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
},
{
  timestamps: true
});

module.exports = mongoose.model("Customer", CustomerSchema);
