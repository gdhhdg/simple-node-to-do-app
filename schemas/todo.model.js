/**
 * Created by gunnerhatmaker on 5/7/18.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todo = require('../schemas/todo.model');

const TodoSchema = new Schema({
    task: String,
    finishState: String
});

module.exports = mongoose.model('todo', TodoSchema);
