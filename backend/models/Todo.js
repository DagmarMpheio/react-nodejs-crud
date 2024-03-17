//backend/models/Todo.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  title: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", todoSchema);
