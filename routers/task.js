const express = require('express');
var router = express.Router();
const TaskModel = require('../models/task');

function convertStringToDate(stringDate) {
    var arr = stringDate.split('-');
    var year = parseInt(arr[2]);
    var month = parseInt(arr[1]) - 1;
    var date = parseInt(arr[0]) + 1;
    return new Date(year, month, date);
}

router.get('/', (req, res, next) => {
    TaskModel.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res, next) => {
    TaskModel.findOne({
        _id: req.params.id
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/', (req, res, next) => {
    TaskModel.create({
        title: req.body.title,
        deadline: convertStringToDate(req.body.deadline)
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res, next) => {
    TaskModel.updateOne({
        _id: req.params.id
    } ,{
        title: req.body.newTitle,
        deadline: convertStringToDate(req.body.newDeadline)
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res, next) => {
    TaskModel.deleteOne({
        _id: req.params.id
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;