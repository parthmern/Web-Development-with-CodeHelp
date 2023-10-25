const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("this is Home page");
});

// middleware
app.use(express.json());


const blog = require("./routes/blog");
app.use("/api", blog);

const dbConnect = require('./config/database');
dbConnect();

app.listen(3000,()=>{
    console.log("server running at 3000 port");
})