const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config();
//connect to db
mongoose.connect(process.env.DB_CONNECT,
()=>console.log("Connected to DB"));




//Import Routes
const authRoute = require('./routes/auth');
const formRoute = require('./routes/contactForm');

//Middleware
app.use(express.json());//to set post requests
app.use(cors());
//Route Middleware
//api/users is the prefix that is used and authRoute refers to the whole file and depends on what is search as postfix
app.use('/api/users',authRoute);
app.use('/api',formRoute);





app.listen(process.env.PORT || 3001,()=>{
    console.log("server started at PORT:3001"); 
})














//Express is used to create server and be able to use apis
//Dotenv.config is used to initiate the dotenv and process.env is used to select the variable.
