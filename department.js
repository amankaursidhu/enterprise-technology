//AMANDEEP KAUR SIDHU C0742135
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created department collections");
var mydatabase=db.db('college');
var mycol=[


 { deptName : "csat",deptNo:123,location:"building123"},
{deptName : "cpct",deptNo:455,location:"building128"},
{ deptName: "pmlt",deptNo:567,location:"building129"},
{deptName: "bmlt",deptNo:987,location:"building554"},
 { deptName : "ccbt",deptNo:124,location:"building125"},
{deptName : "madt",deptNo:456,location:"building126"},
{ deptName: "bmat",deptNo:568,location:"building130"},
{deptName: "pmat",deptNo:988,location:"building560"}

]
mydatabase.collection("department").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});