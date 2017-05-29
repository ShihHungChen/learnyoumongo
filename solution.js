var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err){ 
        throw err;
    }
    var collection = db.collection('parrots');
    var arg_age = +process.argv[2];
    collection.count({ age : {$gt : arg_age}}, function(err ,count){
        if(err){
            throw err;
        }
        console.log(parseInt(count));
        db.close();
    })
})