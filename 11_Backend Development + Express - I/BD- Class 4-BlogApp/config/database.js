const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{console.log("DB connected with server succesfully")})
    .catch((error)=>{
        console.log("ERROR- DB is not connected",error.message)
        process.exit(1);
    });
}

//exporting function dbConnect
module.exports = dbConnect;
