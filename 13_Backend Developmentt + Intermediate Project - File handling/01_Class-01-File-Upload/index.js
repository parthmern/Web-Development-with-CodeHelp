// app create
const express = require("express");
const app = express();

// port 
require("dotenv").config();
const PORT = process.env.PORT || 3000 ;

// middle ware
app.use(express.json());
// file upload middleware - middleware for uploading files on server
const fileupload = require("express-fileupload");
app.use(fileupload());

// db se connect karna hai
const db = require("./config/database");
db.connect();

// cloudinary connecttion
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount
const Upload = require("./routes/FileUpload");
app.use("/api/upload", Upload);

// server activate listen
app.listen(PORT,()=>{
    console.log("server listennon 3000");
})