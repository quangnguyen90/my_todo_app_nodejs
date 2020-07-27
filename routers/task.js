const express = require('express');
var router = express.Router();
const TaskModel = require('../models/task');

function convertStringToDate(stringDate) {
    return new Date(stringDate);
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
    var newData = {};
    if (req.body.newTitle) newData.title = req.body.newTitle;
    if (req.body.newDeadline) newData.deadline = convertStringToDate(req.body.newDeadline);

    TaskModel.updateOne({
        _id: req.params.id
    }, newData)
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