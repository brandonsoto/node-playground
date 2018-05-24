const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log("Unable to connect to MongoDB server");
        return;
    }


    console.log("Successfully connected to MongoDB server!");

    db.collection('Todos').insertOne({
        text: "Something to do",
        completed: false
    }, (error, result) => {
        if (error) {
            console.log("Could not insert into database", error);
            return;
        }

        console.log('Successfully inserted into database');
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
