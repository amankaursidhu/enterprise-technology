
//AMANDEEP KAUR SIDHU C0742135
//delete query for student collection
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}

var mydatabase=db.db('college');
var deleteData3 = {s_id:7509};

mydatabase.collection("student").deleteOne(deleteData3,function(err,response){
if (err)
throw err;

console.log("you delete data in ur collection");
db.close();
});


//delete query for department collection
var deleteData4 = {deptNo:567};

mydatabase.collection("department").deleteOne(deleteData4,function(err,response){
if (err)
throw err;

console.log("you delete data in ur collection");
db.close();
});
//delete query for exams collection
var deleteData5 = {Edate:"26dec2018"};


mydatabase.collection("exams").deleteMany(deleteData5,function(err,response){
if (err)
throw err;

console.log("you delete data in ur collection");
db.close();
});
});