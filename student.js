//AMANDEEP KAUR SIDHU C0742135
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created student collections");
var mydatabase=db.db('college');
var mycol=[


{ s_id:7543, FirstName: "Amandeep" ,LastName:"sidhu",email:"amansidhu610@gmail.com",address:"91dells crescent",ph:3653365470},
{ s_id:7566, FirstName: "Gurjit" ,LastName:"kaur",email:"gurjitgrewal@gmail.com",address:"359MillStreetSouth",ph:3653399990},
{  s_id:7589,FirstName: "Mandeep" ,LastName:"kaur",email:"mandynain@gmail.com",address:"35MainStreetSouth",ph:367643470},
{  s_id:7509,FirstName: "Navjot" ,LastName:"singh",email:"navjotsingh@gmail.com",address:"60dells",ph:367892570},
{ s_id:7545, FirstName: "Aman" ,LastName:"kaur",email:"amankaur0@gmail.com",address:"67dells crescent",ph:3653365471},
{ s_id:7546, FirstName: "Guri" ,LastName:"grewal",email:"gurigrewal@gmail.com",address:"brampton",ph:3653399991},
{  s_id:7547,FirstName: "ankush" ,LastName:"ankush",email:"ankush67@gmail.com",address:"tornoto",ph:367643478},
{  s_id:7510,FirstName: "Navi" ,LastName:"deol",email:"navjotdeol@gmail.com",address:"99 tiller trail",ph:367892000}

]
mydatabase.collection("student").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});