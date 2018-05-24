var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var TodoModel = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new TodoModel({text: "Cook dinner"});
newTodo.save().then(
    (doc) => { console.log("Saved successfully!"); console.log(doc); },
    (err) => { console.log(err); }
);

