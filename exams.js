//AMANDEEP KAUR SIDHU C0742135
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created exams collections");
var mydatabase=db.db('college');
var mycol=[


{ExamId:"4403-F",time:"40 minute",ExamNo:1,Edate:"12dec2018",Tmarks:40,getmarks:34},
{ExamId:"4402-S",time:"90 minute",ExamNo:2,Edate:"15dec2018",Tmarks:20,getmarks:11},
{ExamId:"4401-S",time:"45 minute",ExamNo:1,Edate:"17dec2018",Tmarks:30,getmarks:23},
{ExamId:"4426-F",time:"60 minute",ExamNo:3,Edate:"22dec2018",Tmarks:10,getmarks:8},
{ExamId:"4427-S",time:"30 minute",ExamNo:2,Edate:"26dec2018",Tmarks:30,getmarks:7},
{ExamId:"4433-F",time:"50 minute",ExamNo:3,Edate:"28dec2018",Tmarks:20,getmarks:10}

]
mydatabase.collection("exams").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});