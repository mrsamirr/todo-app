require('dotenv').config()
const mongoose = require("mongoose");

let MONGO_URL = process.env.MONGO_DB_URL;

mongoose.connect(MONGO_URL);

const todoSchema = new mongoose.Schema({
       title: String,
       description: String,
       completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}