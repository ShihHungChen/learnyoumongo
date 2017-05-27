//console.log(process.argv);
var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err){
        db.close();
        return console.error('There was an error : ', err);
    }
    else{
        var collection = db.collection('parrots');
        collection.find({
            age : {$gt : parseInt(process.argv[2])}
        }).toArray(function(err, documents){
            if(err){
                return console.error('There was an error : ', err);
            }
            console.log(documents);
        })
    }
    db.close();
})