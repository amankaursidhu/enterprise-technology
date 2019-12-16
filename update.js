//AMANDEEP KAUR SIDHU C0742135
//student collection update
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}

var mydatabase=db.db('college');
var query4 = {FirstName: "ankush"};
var data4 = {$set: {LastName:"kumar"}};


mydatabase.collection("student").updateOne(query4,data4,function(err,response){
if (err)
throw err;

console.log("you update data in ur collection");
db.close();
});

//department collection update
var query5 = {deptNo:124};
var data5 = {$set: {location:"building365"}};


mydatabase.collection("department").updateOne(query5,data5,function(err,response){
if (err)
throw err;

console.log("you update data in ur collection");
db.close();
});

//exams collection update
var query6 = {ExamNo:3};
var data6 = {$set:{Tmarks:50}};


mydatabase.collection("exams").updateMany(query6,data6,function(err,response){
if (err)
throw err;

console.log("you update data in ur collection");
db.close();
});
});

