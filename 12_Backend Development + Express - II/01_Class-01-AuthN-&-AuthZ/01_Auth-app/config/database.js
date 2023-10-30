const mongoose = require("mongoose");

require("dotenv").config();
const URL = process.env.MONGODB_URL ;
exports.connect = async() =>{
    mongoose.connect(URL)
    .then(()=>{console.log("db connected successfully")})
    .catch((error)=>{console.log("db connection failed",error)})
}