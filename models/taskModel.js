let mongoose = require("mongoose");

var Schema = mongoose.Schema;

var taskSchema = new Schema({
    title: String,
    deadline: Date,
});

const TaskModel = mongoose.model('task', taskSchema);

module.exports = TaskModel;