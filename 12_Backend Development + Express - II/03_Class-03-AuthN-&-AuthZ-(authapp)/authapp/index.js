const express = require("express");
const app = express();

app.use(express.json());

// cookie parser - 
const cookieParser = require("cookie-parser");
app.use(cookieParser);

require("./config/database").connect();

// routes - import and mount
const user = require("./routes/user");
app.use("/api", user);

require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server is started on ${PORT}`);
})

