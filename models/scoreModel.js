let mongoose = require("mongoose");

var Schema = mongoose.Schema;

var scoreSchema = new Schema({
    idClass: {
        type: String,
        ref: 'class'
    },
    idUser: {
        type: String,
        ref: 'user'
    },
    attend: [{
        type: String,
        default: null
    }],
    number: [{
        type: Number,
        default: null
    }]
}, {
    collection: 'score',
    timestamps: true
});

const ScoreModel = mongoose.model('score', scoreSchema);

module.exports = ScoreModel;
