const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log("Unable to connect to MongoDB server");
        return;
    }


    console.log("Successfully connected to MongoDB server!");

    db.collection('Todos').findOneAndUpdate(
            { _id: new ObjectID("5b065264ddde05feaba51ad3") },
            { $set: {completed: true} },
            { returnOriginal: false})
        .then((result) => {
            console.log(result);
        });
    //db.close();
});
