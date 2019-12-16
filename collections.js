//AMANDEEP KAUR SIDHU C0742135
var mongodb=require('mongodb').MongoClient;
var url="mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";
mongodb.connect(url,{useUnifiedTopology:true},function(err,db){
	if (err)
	throw err;
	 var mydatabase = db.db('college');
	  mydatabase.createCollection("student",function(err,respond){
      if (err)
       throw err;
        console.log('student collection created');
        db.close();
  });
});

var mongodb=require('mongodb').MongoClient;
var url="mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";
mongodb.connect(url,{useUnifiedTopology:true},function(err,db){
	if (err)
	throw err;
	 var mydatabase = db.db('college');
	
	  mydatabase.createCollection("department",function(err,respond){
      if (err)
       throw err;
        console.log('department collection created');
        db.close();
  });
});

var mongodb=require('mongodb').MongoClient;
var url="mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";
mongodb.connect(url,{useUnifiedTopology:true},function(err,db){
	if (err)
	throw err;
	 var mydatabase = db.db('college');
	
	  mydatabase.createCollection("exams",function(err,respond){
      if (err)
       throw err;
        console.log('exams collection created');
        db.close();
  });
});