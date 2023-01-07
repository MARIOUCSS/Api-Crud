const express=require('express');
const mongoose = require("mongoose");
const  app=express();
require("dotenv").config();
const bodyParser=require('body-parser');
const config = require('./app/config/config');
const Product=require('./app/routes/Product')
const User=require('./app/routes/User')
mongoose.connect(process.env.MONGODB_URI)
      .then(()=>console.log("CONECTAO ATLAS"))
      .catch(()=>console.log("Error"))

app.listen(config.PORT,()=>console.log('escuchando server',config.PORT));
app.get("/",(req,res)=>{res.send('hola puto')})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/product',Product);
app.use('/user',User)
//module.exports=App;