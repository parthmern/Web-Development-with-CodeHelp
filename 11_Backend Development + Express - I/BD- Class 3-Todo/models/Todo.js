const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            maxLength : 50,
        },

        description :{
            type : String,
            required : true,
            maxLength : 50,
        },

        createdAt : {
            type : Date,
            required : true,
            default : Date.now(),
        },

        updatedAt : {
            type : Date ,
            required : true , 
            default : Date.now(),
        }

    }
);

// Create "collection" through model 
// Create a model based on the schema 
const Todo = mongoose.model("Todo", todoSchema);

// exporting todoSchema
module.exports = Todo;