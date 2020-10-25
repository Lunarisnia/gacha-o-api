const { Schema } = require('mongoose');

module.exports = new Schema({
  title: String,
  imgUrl: String,
  description: String,
  expiry: String,
});
