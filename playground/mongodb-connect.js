const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
     if(err){
         return console.log('unable to connect database');
     }
     console.log('successfully connected to database');

    //  db.collection('Todos').insertOne({
    //      text : 'something to do',
    //       completed : false
    //  },(error, result) => {
    //     if(error){
    //         return console.log("unable to inser todo",error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //  });

    db.collection('Users').insertOne({
        name : 'Shyam',
        age : 26,
        location : 'Pune'
    },(error, result) => {
       if(error){
           return console.log("unable to inser todo",error);
       }
       console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

     db.close();
});