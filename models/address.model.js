const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  code: String,
  name: String,
  key: String,
  parent_code: String,
  isLeaf: Boolean
}, {
  timestamps: true,
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
