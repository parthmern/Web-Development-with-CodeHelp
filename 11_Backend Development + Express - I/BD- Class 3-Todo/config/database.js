const mongoose = require("mongoose");

// environment k andar define kiya hoga wo sab load ho jayega "process" obj k andar
// so iske baad hum log "process.env.<variableName>" use kar sakte hai
require('dotenv').config();


const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{console.log("DB connected with server succesfully")})
    .catch((error)=>{
        console.log("ERROR- DB is not connected",error.message)
        //exit the application and indicate that it exited with an error + terminate your Node.js application programmatically when a specific error condition occurs
        process.exit(1);
    });
}

//exporting function dbConnect
module.exports = dbConnect;