const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log("Unable to connect to MongoDB server");
        return;
    }


    console.log("Successfully connected to MongoDB server!");

    db.collection('Todos').findOneAndUpdate(
    );

    //db.close();
});
