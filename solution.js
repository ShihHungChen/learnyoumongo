var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err){ 
        throw err;
    }
    var collection = db.collection('prices');
    collection.aggregate([
        {$match:{size:process.argv[2]}},
        {$group :{ _id:'average',average:{$avg : '$price'}}} //use '$' to specified property, if not use it will create new property
        ]).toArray(function(err, results){
            if(err) throw err;
            console.log(Number(results[0].average).toFixed(2));
        })
    db.close();
})