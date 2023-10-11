const mongoose = require("mongoose");

//npm i dotenv 
//to use "process.env.xxxxx"
require("dotenv").config();

// this function work as connection establish
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{console.log("db connection successfull")})
    .catch((error)=>{
        console.log("eroor in db connection");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;