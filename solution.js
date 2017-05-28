var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err){
        throw err;
    }
    else{
        var collection = db.collection('docs');
        var insert_data = {firstName: process.argv[2], lastName:process.argv[3]};
        collection.insert(insert_data,function(err, data){
            if(err){
                throw err;
            }
            console.log(JSON.stringify(insert_data));
        })
    }
    db.close();
})