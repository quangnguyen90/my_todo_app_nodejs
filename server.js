require('dotenv').config();
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var taskRouter = require('./routers/task');
var userRouter = require('./routers/user');
var connectDB = require('./config/dbConnect');
var app = express();

connectDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/public', express.static(path.join(__dirname, '/public')));

app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000);