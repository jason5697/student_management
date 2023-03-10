var db= require('mysql');
var connection= db.createConnection({ host:"localhost",password:"561997",user:"root",database:"students"});
module.exports=connection;
