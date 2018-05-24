var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var TodoModel = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var UserModel = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});


var newTodo = new TodoModel({text: "Feed the cat"});
var newUser = new UserModel({email: "b@g"});
//newTodo.save().then(
//    (doc) => { console.log("Saved successfully!"); console.log(doc); },
//    (err) => { console.log(err); }
//);

