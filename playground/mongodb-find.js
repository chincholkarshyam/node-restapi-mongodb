const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
     if(err){
         return console.log('unable to connect database');
     }
     console.log('successfully connected to database');
     
    //  db.collection('Todos').find({completed : false}).toArray().then((doc) => {
    //      console.log("Todos");
    //      console.log(JSON.stringify(doc, undefined, 2));

    //  }, (error) => {
    //      console.log("unable to fect todos", error);
    //  });
    db.collection('Users').find({name:"Gopal"}).toArray().then((doc) => {
        console.log("Users");
        console.log(JSON.stringify(doc, undefined, 2));

    }, (error) => {
        console.log("unable to fect todos", error);
    });


     db.close();
});