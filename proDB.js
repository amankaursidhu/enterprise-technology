
//Amandeep kaur sidhu c0742135

//create a database
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
	if (err) {
	throw err;
	}
	var mydatabase=db.db('college');
	
	console.log("Database is created! ");
	db.close();	
	});
