var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyparser.json());

app.post('/todos', (req, res) => {
    console.log('POST /todos called');

    var todo = new Todo({text: req.body.text});

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    console.log('GET /todos called');

    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log("Server is listening");
});

module.exports = {app};
