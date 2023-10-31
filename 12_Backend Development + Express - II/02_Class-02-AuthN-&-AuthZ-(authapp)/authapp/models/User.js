const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true,
        },

        email : {
            type : String,
            required : true,
            trim : true,
        },

        password : {
            type : String, 
            required : true,
            trim : true,
        },

        roles : {
            type : String,
            enum : ["Admin", "Student", "Visitor"]
        }
    }
)

module.exports = mongoose.model("user", userSchema);