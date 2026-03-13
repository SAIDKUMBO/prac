const {mongoose} = require('../db');
const {Schema} = require("mongoose");

const taskSchema = new Schema({
    name: String,
    status: {type: String, enum: ["in_progress", "completed", "todo"], default: "todo"},
    owner: String
},{timestamps: true});

const task = mongoose.model('task', taskSchema)

module.exports = task;