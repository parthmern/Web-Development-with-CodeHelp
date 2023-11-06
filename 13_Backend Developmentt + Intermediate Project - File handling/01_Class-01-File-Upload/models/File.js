const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
    {
        name : {
            type: String , 
            required : true ,
        },
        
        imgUrl : {
            type : String ,
        },

        tags : {
            type : String ,
        },

        email : {
            type : String ,
        }
    }
)

const File = mongoose.model("File", fileSchema);
module.exports = File; 