const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("DB Connection Successful"))
    .catch(  (error) => {
        console.log("DB Connection Issues");
        console.error(error);
        process.exit(1);
    } );
};