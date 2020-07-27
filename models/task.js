const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_todo_app_nodejs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var Schema = mongoose.Schema;

var taskSchema = new Schema({
    title:  String,
    deadline: Date,
});

const TaskModel = mongoose.model('task', taskSchema);

module.exports = TaskModel;