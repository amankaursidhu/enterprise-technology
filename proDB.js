
//Amandeep kaur sidhu c0742135

//create a database
var mongodb = require ('mongodb').MongoClient;
var url="mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
	if (err) {
	throw err;
	}
	var mydatabase=db.db('college');
	
	console.log("Database is created! ");
	db.close();	
	});
