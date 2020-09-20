let TaskModel = require("../models/taskModel");
function getAll() {
    return TaskModel.find({});
}

function getDetail(id) {
    return TaskModel.findOne({
        _id: id
    });
}

function addTask(title, deadline) {
    return TaskModel.create({
        title,
        deadline
    });
}

function updateTask(id, newData) {
    return TaskModel.updateOne({
        _id: id
    }, newData);
}

function deleteTask(id) {
    return TaskModel.deleteOne({
        _id: id
    });
}

module.exports = {
    getAll,
    getDetail,
    addTask,
    updateTask,
    deleteTask
}