// import express
const express = require("express");
// create APP or SERVER
const server = express();

// res
server.get("/", (req, res)=>{
    res.send("HELLO WORLD");
})

// server ko listen karwa rahe particular port par
// listen matalb jab server k saath communication hoga tab wo RESPONSE send kr dega
const PORT = 3000;   // packets me port bhi send hota hai
server.listen(PORT, ()=>{
    console.log("server started at 3000 port");
})