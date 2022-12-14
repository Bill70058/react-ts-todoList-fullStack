const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  todo: String
}, {
  timestamps: true,
});

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;
