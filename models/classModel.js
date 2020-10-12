let mongoose = require("mongoose");

var Schema = mongoose.Schema;

var classSchema = new Schema({
    name: String,
    idTeacher: {
        type: String,
        ref: 'user'
    }
}, {
    collection: 'class',
    timestamps: true
});

const ClassModel = mongoose.model('class', classSchema);

module.exports = ClassModel;
