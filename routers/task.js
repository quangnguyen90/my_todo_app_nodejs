const express = require('express');
var taskController = require('../controllers/taskController');
var router = express.Router();

router.get('/', taskController.getAllController);

router.get('/:id', taskController.getDetailController);

router.post('/', taskController.addTaskController);

router.put('/:id', taskController.updateTaskController);

router.delete('/:id', taskController.deleteTaskController);

module.exports = router;