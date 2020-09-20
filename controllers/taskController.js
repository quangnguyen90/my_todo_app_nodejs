let taskService = require('../services/taskService');

function convertStringToDate(stringDate) {
    return new Date(stringDate);
}

function getAllController(req, res) {
    taskService.getAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

function getDetailController(req, res) {
    taskService.getDetail(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

function addTaskController(req, res) {
    var title = req.body.title;
    var deadline = convertStringToDate(req.body.deadline);
    taskService.addTask(title, deadline)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

function updateTaskController(req, res) {
    var newData = {};
    if (req.body.newTitle) newData.title = req.body.newTitle;
    if (req.body.newDeadline) newData.deadline = convertStringToDate(req.body.newDeadline);

    taskService.updateTask(req.params.id, newData)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

function deleteTaskController(req, res) {
    taskService.deleteTask(req.params.id)
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = {
    getAllController,
    getDetailController,
    addTaskController,
    updateTaskController,
    deleteTaskController
}