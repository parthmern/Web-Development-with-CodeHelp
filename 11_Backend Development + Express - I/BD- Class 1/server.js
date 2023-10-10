const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("server started at port number 3000");
})

app.get('/',(request,response)=>{
    response.send("Hello jee, kaise ho");
})

app.post('/api/cars', (request,response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDb',{
    useNewurlParser : true,
    useUnifiedTopology : true
})
.then(()=>{console.log("connection successfull between express server with mongoDB")})
.catch(()=>{console.log("error")})

