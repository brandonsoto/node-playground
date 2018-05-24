const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log("Unable to connect to MongoDB server");
        return;
    }


    console.log("Successfully connected to MongoDB server!");

    db.collection('Todos').findOneAndDelete({completed: false})
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log("Unable to fetch todos", err);
        });

    //db.close();
});
