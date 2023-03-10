var db=require('./db');
const express=require('express');
const cors= require('cors')
const port=5697;
db.connect ((err)=>{
                     if(err){
                          console.log(err);}
                     else{
                          console.log("db connect");
                         }
                     });
var app= express()
app.listen(port)
app.use(express.json())
app.use(cors())
app.use(require('./route'))
    