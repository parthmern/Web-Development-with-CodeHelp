//server create
const express = require("express");
const app = express();

//load config from env
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo api
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT,()=>{
    console.log(`server staretd at ${PORT}`);
})

//connect todb
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>this is home page </h1>`);
})