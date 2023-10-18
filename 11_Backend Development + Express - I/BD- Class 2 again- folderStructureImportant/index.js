// server create
const express = require("express"); //import express
const app = express(); 

// environment k andar define kiya hoga wo sab load ho jayega "process" obj k andar
// so iske baad hum log "process.env.<variableName>" use kar sakte hai
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE to parse json request body
app.use(express.json());

// import routes for todoApi
const todoRoutes = require("./routes/todos");
// mount the todo api routes
app.use("/api", todoRoutes);

// server start
app.listen(PORT, ()=>{
    console.log("server running at 3000 port");
})

// DB connection
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>this is homePage - defalut route </h1>`);
})